<h1 align="center">remotejs-loader</h1>
<h3 align="center">Javascript for importing remote javascript</h3>
<p align="center">
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

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