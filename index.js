/* --------------------
 * `@overlookmotel/eslint-config-node` module
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
	extends: [
		'plugin:node/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
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
		'node/prefer-global/url': ['error', 'always'],

		// Fix incorrect errors for ESM syntax
		'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules', 'dynamicImport']}],

		// Disable rules already covered by `import/...` rules in `@overlookmotel/eslint-config`
		'node/no-missing-import': ['off'],
		'node/no-missing-require': ['off'],
		'node/no-unpublished-import': ['off'],
		'node/no-unpublished-require': ['off'],
		'node/no-extraneous-import': ['off'],
		'node/no-extraneous-require': ['off']
	}
};
