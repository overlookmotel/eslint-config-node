/* --------------------
 * @overlookmotel/eslint-config-node module
 * Jest config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'**/*.js',
		'!.**',
		'!**/.**',
		'!**/node_modules/**',
		'!test/**',
		'!jest.config.js'
	],
	setupFilesAfterEnv: ['jest-extended']
};
