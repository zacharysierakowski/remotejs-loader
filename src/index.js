/**
 * Javascript for importing remote javascript
 */

// scripts - script tags loaded into the DOM
const scripts = {};

// newScript - creates and returns a new script tag
const newScript = path => {
  const script = document.createElement("script");
  script.src = path;
  script.async = true;
  return script;
};

// loadScript - creates a new script and loads it into the DOM
const loadScript = path => {
  const head = document.getElementsByTagName("head")[0];
  const script = newScript(path);

  scripts[path] = script;
  head.insertBefore(script, head.lastChild);

  return new Promise((resolve, reject) => {
    script.onload = response => resolve(response);
    script.onerror = response => reject(response);
  });
};

// loads the script into the DOM
export default (path, { forceReload } = {}) => {
  if (!path) {
    return new Promise((_, reject) => {
      reject("path not valid");
    });
  }

  if (!scripts[path]) {
    // new script, load script into the DOM
    return loadScript(path);
  } else if (forceReload) {
    // script was already loaded and force a reload
    // by removing then adding the script
    const script = scripts[path];
    script.parentNode.removeChild(script);
    return loadScript(path);
  }

  // script was already loaded, do nothing
  return new Promise(resolve => {
    resolve(`script was already loaded for path: ${path}`);
  });
};
