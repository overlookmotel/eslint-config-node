/* --------------------
 * `@overlookmotel/eslint-config-node` module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfigNode = require('@overlookmotel/eslint-config-node');

// Tests

it('Exports an object', () => { // eslint-disable-line jest/lowercase-name
	expect(eslintConfigNode).toBeObject();
});
