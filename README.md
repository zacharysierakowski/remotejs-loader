# remotejs-loader
 
Javascript for importing remote javascript

[![Build Status](https://travis-ci.org/zachary-sierakowski/remotejs-loader.svg?branch=master)](https://travis-ci.org/zachary-sierakowski/remotejs-loader) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)  [![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Installing

```
npm install remotejs-loader
```

### Basic usage
```javascript
import remotejs from "remotejs-loader";

remotejs("/path/to/remote/js.js")
  .then(() => {
    console.log("js.js is ready");
  })
  .catch(e => {
    console.error(e);
  });
```

### Using options
```javascript
import remotejs from "remotejs-loader";

remotejs("/path/to/remote/js.js", { forceReload: true })
  .then(() => {
    console.log("js.js is ready");
  })
  .catch(e => {
    console.error(e);
  });
```

### Options
- ### forceReload: boolean (default = false)
  If the script has already been loaded once, and requested to be loaded again, force the script to rerun by removing the script tag and readding it.

### Contributing

see [CONTRIBUTING.MD](./CONTRIBUTING.md)