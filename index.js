/* --------------------
 * @overlookmotel/eslint-config-node module
 * ------------------*/

'use strict';

// Exports

module.exports = {
	plugins: [
		'node'
	],
	env: {
		node: true
	},
	parserOptions: {
		sourceType: 'script'
	},
	extends: [
		'plugin:node/recommended'
	],
	rules: {
		strict: ['error', 'global'],

		// node rules
		'node/exports-style': ['error', 'module.exports'],
		'node/prefer-global/buffer': ['error', 'always'],
		'node/prefer-global/console': ['error', 'always'],
		'node/prefer-global/process': ['error', 'always'],
		'node/prefer-global/text-decoder': ['error', 'always'],
		'node/prefer-global/text-encoder': ['error', 'always'],
		'node/prefer-global/url-search-params': ['error', 'always'],
		'node/prefer-global/url': ['error', 'always']
	}
};
