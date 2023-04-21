

<div align="center">  
  <h1>awaitnostr</h1>
</div>

<div align="center">  
<i>awaitnostr</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostrapps/awaitnostr/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/awaitnostr)](https://npmjs.com/package/awaitnostr)
[![npm](https://img.shields.io/npm/dw/awaitnostr.svg)](https://npmjs.com/package/awaitnostr)
[![Github Stars](https://img.shields.io/github/stars/nostrapps/awaitnostr.svg)](https://github.com/nostrapps/awaitnostr/)


## Introduction

`awaitnostr` is a utility function that allows you to wait for `window.nostr` to be defined before using `window.nostr` functions. This can be useful when using the Nostr browser extension API in your web app, as `window.nostr` may not be defined immediately upon page load.

## Usage

To use `awaitnostr`, simply import the `awaitNostr()` function from the package:

```JavaScript
import awaitNostr from 'awaitnostr';
```

Then call the `awaitNostr()` function before using any `window.nostr` functions:


```JavaScript
async function myFunction() {
  await awaitNostr();
  const publicKey = await window.nostr.getPublicKey();
  // Do something with publicKey
}
```

## Demo

You can view the demo by clicking [here](./test.html).

## License

- MIT
