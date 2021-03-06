/* eslint-disable
	node/no-unpublished-import,
	node/no-process-env,
	node/no-deprecated-api
*/

import cleanup from "rollup-plugin-cleanup";
import { string } from 'rollup-plugin-string';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = Boolean(process.env.SAPPER_LEGACY_BUILD);

const onwarn = (warning, _onwarn) =>
	warning.code !== 'CIRCULAR_DEPENDENCY' && _onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
			}),
			resolve({
				/* disabled as this makes the build fail with
				> 'makeStyle' is not exported by ../../tools/dom/dist/browser.js, imported by ../../components/barchart/src/BarchartV.svelte
				*/
				// browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			string({
				include: "**/*.tex",
			}),
			json(),
			cleanup(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			json(),
			string({
				include: "**/*.tex",
			}),
		],
		external:
			Object.keys(pkg.dependencies)
			.filter(name => ![
				'svelte-json-tree',
			].includes(name))
			.concat(
				/* eslint-disable-next-line global-require, node/no-unsupported-features/node-builtins */
				require('module').builtinModules
				|| Object.keys(process.binding('natives'))
			),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			json(),
			cleanup(),
			string({
				include: "**/*.tex",
			}),
			!dev && terser()
		],

		onwarn,
	}
};
