/**
 * remotejs.js
 * loads remote javascript scripts and modules
 */

// scripts - script tags loaded into the DOM
const scripts = {};

// newScript - creates and returns a new script tag
const newScript = src => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  return script;
};

// loadScript - creates a new script and loads it into the DOM
const loadScript = src => {
  const head = document.getElementsByTagName("head")[0];
  const script = newScript(src);

  scripts[src] = script;
  head.insertBefore(script, head.lastChild);

  return new Promise((resolve, reject) => {
    script.onload = response => resolve(response);
    script.onerror = response => reject(response);
  });
};

// loads the script into the DOM
export default (path, { urlArgs, rootPath, forceReload }) => {
  if (!path) {
    return new Promise((_, reject) => {
      reject("path not valid");
    });
  }

  let src = path;

  // prepend rootPath
  if (rootPath && !/^https?:\/\//.test(src)) {
    src = `${rootPath}${src}`;
  }

  // append any urlArgs
  if (urlArgs) {
    src = `${src}${src.indexOf("?") === -1 ? "?" : "&"}${urlArgs}`;
  }

  if (!scripts[src]) {
    // new script, load script into the DOM
    return loadScript(src);
  } else if (forceReload) {
    // script was already loaded and force a reload
    // by removing then adding the script
    const script = scripts[src];
    script.parentNode.removeChild(script);
    return loadScript(src);
  }

  // script was already loaded, do nothing
  return new Promise(resolve => {
    resolve(`script was already loaded for path: ${path}`);
  });
};
