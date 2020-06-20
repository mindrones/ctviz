import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import {name} from '../package.json';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
.use(
	name,
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
.listen(PORT, err => {
	if (err) {
		console.log('error', err)
	}
});
