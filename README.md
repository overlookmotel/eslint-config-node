[![NPM version](https://img.shields.io/npm/v/@overlookmotel/eslint-config-node.svg)](https://www.npmjs.com/package/@overlookmotel/eslint-config-node)
[![Build Status](https://img.shields.io/travis/overlookmotel/eslint-config-node/master.svg)](http://travis-ci.org/overlookmotel/eslint-config-node)
[![Dependency Status](https://img.shields.io/david/overlookmotel/eslint-config-node.svg)](https://david-dm.org/overlookmotel/eslint-config-node)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/eslint-config-node.svg)](https://david-dm.org/overlookmotel/eslint-config-node)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/eslint-config-node.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/eslint-config-node/master.svg)](https://coveralls.io/r/overlookmotel/eslint-config-node)

# @overlookmotel's ESLint config for NodeJS

## Usage

Add dev dependencies in `package.json`:

* `@overlookmotel/eslint-config-node`
* `eslint`
* `eslint-plugin-node`

Add to `.eslintrc`: `"extends": "@overlookmotel/eslint-config-node"`

NB Does not extend the base config [@overlookmotel/eslint-config](https://www.npmjs.com/package/@overlookmotel/eslint-config) so use `"extends": "@overlookmotel/eslint-config"` too in `.eslintrc`.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/eslint-config-node/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/eslint-config-node/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
