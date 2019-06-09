[![Board Status](https://brandonjpscott.visualstudio.com/f5321cb3-0db4-4e7d-8115-a4a16a1d111f/afcbd115-06ca-47e6-93df-1925f446944c/_apis/work/boardbadge/7f41deea-0441-4e33-8bad-d40920f848d3)](https://brandonjpscott.visualstudio.com/f5321cb3-0db4-4e7d-8115-a4a16a1d111f/_boards/board/t/afcbd115-06ca-47e6-93df-1925f446944c/Microsoft.RequirementCategory)
# Conflict-free Replicated Data Types JavaScript Library

[![circleci](https://img.shields.io/circleci/build/github/xcesiv/crdt.js.svg)](https://circleci.com/gh/xcesiv/crdt.js)[![npm version](https://img.shields.io/npm/v/crdt.js.svg)](https://www.npmjs.com/package/crdt.js)[![node](https://img.shields.io/node/v/crdt.js.svg)](https://www.npmjs.com/package/crdt.js)[![last commit](https://img.shields.io/github/last-commit/xcesiv/crdt.js.svg)](https://github.com/xcesiv/crdt.js)
> Module library of CRDTs written in pure JavaScript

This module provides a set of Conflict-Free Replicated Data Types for your JavaScript programs. All CRDTs in this library, except G-Counter,are currently operation-based.

## Current CRDTs

> CRDTs accessible for your use throught this module to date.

### CmRDTs

* GSet: A grow only set
* 2PSet: A two phase set that supports removing an element for ever
* GCounter: A grow only counter
* PNCounter: A counter supporting increment and decrement

### CvRDTs

* __todo__

## Usage

```javascript
const GCounter = require('crdts').GCounter
const PNCounter = require('crdts').PNCounter
const GSet = require('crdts').GSet
const TwoPSet = require('crdts').TwoPSet
const ORSet = require('crdts').ORSet
const LWWSet = require('crdts').LWWSet

// Or:
import { GSet, ORSet, LWWSet } from 'crdt.js'
```

## Contributing

If you would like to contribute to the development of this library feel free to fork this repository and submit a [Pull Request](https://github.com/xcesiv/crdt.js/pulls) against the [develop](https://github.com/xcesiv/crtd.js/tree/develop) branch. New contributors to help create a faster growing library is very much so encouraged.

## Issues

If you find an issue with the library please submit an [issue](https://github.com/xcesiv/crtd.js/issues) so it can be taken care of immediately.
