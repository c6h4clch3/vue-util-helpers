# Vue Util Helpers

A helper package provides some utility components and helper functions.

## Install

```bash
$ npm i vue-util-helpers
```

## Usage

This package provides below:

### createHOC

Type: `(generator: (HOCBase: VueConstructor, target: VueConstructor) => VueConstructor) => (target: VueConstructor) => VueConstructor`

Generator function of Props-Proxy HOC.

For type supports and inference for object-based API in TypeScript, the only argument of `createHOC()` needs to receive the smallest HOC-implemented component constructor and return extended-component of it.

#### arguments

- generator: `(HOCBase: VueConstructor, target: VueConstructor) => VueConstructor`
  - generator function that receives both of the smallest HOC-implemented component and target component, and returns VueConstructor.

#### returns

- `(target: VueConstructor) => VueConstructor`
