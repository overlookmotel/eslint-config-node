[![NPM version](https://img.shields.io/npm/v/@overlookmotel/eslint-config-node.svg)](https://www.npmjs.com/package/@overlookmotel/eslint-config-node)
[![Build Status](https://img.shields.io/github/workflow/status/overlookmotel/eslint-config-node/Test.svg)](https://github.com/overlookmotel/eslint-config-node/actions)
[![Dependency Status](https://img.shields.io/david/overlookmotel/eslint-config-node.svg)](https://david-dm.org/overlookmotel/eslint-config-node)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/eslint-config-node.svg)](https://david-dm.org/overlookmotel/eslint-config-node)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/eslint-config-node/master.svg)](https://coveralls.io/r/overlookmotel/eslint-config-node)

# @overlookmotel's ESLint config for NodeJS

## Usage

Add dev dependencies in `package.json`:

* `@overlookmotel/eslint-config-node`
* `eslint`
* `eslint-plugin-node`

Add to `.eslintrc`: `"extends": "@overlookmotel/eslint-config-node"`

NB Does not extend the base config [@overlookmotel/eslint-config](https://www.npmjs.com/package/@overlookmotel/eslint-config) so use `"extends": "@overlookmotel/eslint-config"` too in `.eslintrc`.

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v12+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

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
