# normify

Makes browser APIs behave in the standard way

## Purpose

Web APIs are becoming more standardised and browsers tend to follow them, by and large.  There are still exceptions where browser vendors make deliberate changes to break with well-established norms --- breaking existing code on the web.

Normify addresses this by monkey patching APIs, where necessary, to make misbehaving browsers follow the norm.  You can drop `normify` into your app with just a single line of code.

To keep the project flexible and modular, `normify` depends on packages that do the real work to fix individual APIs:

- [normify-listeners](https://github.com/maxkfranz/normify-listeners)

You can use particular `normify-*` subpackages as needed, or you can use `normify` to automatically use all of them.

Please [file an issue](https://github.com/maxkfranz/normify/issues/new) to report a browser issue that Normify does not yet handle.

## Installation

Install with npm:

```
npm install --save normify
```

## Usage

However you use the `normify` module, it is important that you call it before any of your other code so that its fixes are applied first.

### CommonJS `require()`:

```js
require('normify')();
```

### ES2015 `import`:

```js
import normify from 'normify';

normify();
```

### Browser globals:

Download `normify-bundle.js` from the `dist` directory, and include in your HTML file:

```html
<script src="normify-bundle.js"></script>
<script>normify();</script>
```

### AMD:

Use `normify.js` or `normify-bundle.js` from the `dist` directory:

```js
require( ['normify'], function( normify ){
  normify();
} );
```

### Options

The `normify( options )` function takes an options object that allowing configuring the individual packages that `normify` uses:

- `listeners`: An options object passed to [`normify-listeners`](https://github.com/maxkfranz/normify-listeners).
