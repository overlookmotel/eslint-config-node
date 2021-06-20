/* --------------------
 * `@overlookmotel/eslint-config-node` module
 * ESLint tests config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^@overlookmotel/eslint-config-node$']}],
		'node/no-missing-require': ['error', {allowModules: ['@overlookmotel/eslint-config-node']}]
	}
};
