# Changelog

## 3.0.1

Bug fixes:

* Parser use `ecmaVersion` 2021

## 3.0.0

Breaking changes:

* Disable rules already covered by `eslint-plugin-import`

Features:

* Drop support for Node v10

Bug fixes:

* Fix incorrect errors for ESM syntax
* Remove `parserOptions.sourceType`

No code:

* Linting fixes

Dev:

* Use NPM v7 for development
* Use Github Actions for CI
* Update dev dependencies

Docs:

* Remove Greenkeeper badge
* Update license year
* Remove license indentation

## 2.1.2

Docs:

* Add missing changelog entry [fix]

## 2.1.1

Tests:

* Run tests in dev mode

## 2.1.0

Features:

* Drop support for Node v13

Tests:

* Import module by name [refactor]

Dev:

* Replace `.npmignore` with `files` list in `package.json`
* Update dev dependencies
* CI run tests on Node v14
* `.editorconfig` config
* Simplify lint scripts
* Simplify Jest config
* Remove `sudo` key from Travis CI config

## 2.0.0

Breaking changes:

* Drop support for Node v8

Refactor:

* Import file extensions

Dependencies:

* Update ESLint peer dependencies

No code:

* Header code comments

Dev:

* Run tests on CI on Node v13
* Update dev dependencies
* Tab width 2 in `.editorconfig`
* ESLint ignore coverage dir
* Remove `npm-debug.log` from `.gitignore`

Docs:

* Versioning policy
* Update license year

## 1.0.1

Empty release to bump version

## 1.0.0

Initial release
