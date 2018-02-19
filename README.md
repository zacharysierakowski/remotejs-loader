# remotejs-loader

Javascript for importing remote javascript

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