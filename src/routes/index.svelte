<script>
	import {latexParser} from 'latex-utensils';
	import JSONTree from 'svelte-json-tree';

	import yoneda_proof_tex from 'app/tex/yoneda_proof.tex';

	let text = yoneda_proof_tex;

	$: ast = latexParser.parse(text);
	$: console.log(ast);
</script>

<svelte:head>
	<title>ctviz</title>
</svelte:head>

<section>
	<div class="input">
		<textarea bind:value={text} />
	</div>
	<div class="output">
		<JSONTree value={ast} />
	</div>
</section>

<style>
	section {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 40% 60%;
		grid-template-rows: 100%;
	}

	.input, .output {
		padding: 1rem;
	}
	textarea {
		height: 100%;
		width: 100%;
		background-color: rgb(250, 250, 250);
	}
</style>
