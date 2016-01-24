import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

export default {
	entry: 'scripts/index.js',
	dest: 'bundle.js',
	plugins: [
		replace({
			'process.env.NODE_ENV': '"production"'
		}),
		npm({
			main: true
		}),
		commonjs({
			include: 'node_modules/**'
		}),
		babel({
			exclude: 'node_modules/**'
		}),
	],
	format: 'iife'
};
