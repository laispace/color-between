color-between
===============================

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

get a gradient color between two colors.

## Installation


```shell
$ npm install color-between --save
```

# Usage

get a middle color between two `hsl` color, with default `0.5` gradient degree:

```js
const colorBetween = require('color-between');

colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 0%, 0%)');
// equal: colorBetween('hsl(0, 100%, 100%)', 'hsl(100, 0%, 0%)', 0.5, 'hsl');
// output: 'hsl(50, 50%, 50%)'
```

get a color between two colors with a gradient degree:

```js
const colorBetween = require('color-between');

// rgb format
colorBetween('rgb(255, 255, 255)', 'rgb(0, 0, 0)', 0.5, 'rgb');
// output: 'rgb(128, 128, 128)'

// rgba format
colorBetween('rgba(255, 255, 255, .2)', 'rgba(0, 0, 0, .8)', 0.5, 'rgb');
// output: 'rgba(128, 128, 128, 0.5)

// hex format
colorBetween('#fff', '#000', 0.5, 'hex');
// output: '#808080'

// mixed format
colorBetween('#fff', 'rgb(0, 0, 0)', 0.5, 'hsl');
output: 'hsl(0, 0%, 50%)'
```


# API

## `colorBetween(startColor, endColor, gradientDegree, outputFormat)` => `color:String`

### `startColor`:`String` and `endColor`:`String`
valid color string (eg, `hsl(0, 100%, 100%)`, `rgb(100, 100, 100)`,  `rgba(0, 0, 0, 0.5)`, `#fff`).
Also, support input of [`color`](https://www.npmjs.com/package/color) package.

### `gradientDegree`:`Number`
valid number between `0` and `1` (eg, `0.5`).

### `outputFormat`:`String`
output string format type, support these format:

 - `hsl`
 - `rgb`
 - `hex`

### `color`:`String`

return a color string with `outputFormat` format type.

# Test

```shell
npm i
npm test
```

[npm-image]: https://img.shields.io/npm/v/color-between.svg?style=flat-square
[npm-url]: https://npmjs.org/package/color-between
[travis-image]: https://img.shields.io/travis/laispace/color-between.svg?style=flat-square
[travis-url]: https://travis-ci.org/laispace/color-between
[coveralls-image]: https://img.shields.io/coveralls/laispace/color-between.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/laispace/color-between
[downloads-image]: http://img.shields.io/npm/dm/color-between.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/color-between