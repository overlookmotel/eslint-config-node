/* --------------------
 * @overlookmotel/eslint-config-node module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfigNode = require('../index');

// Init
require('./support');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(eslintConfigNode).not.toBeUndefined();
	});
});
