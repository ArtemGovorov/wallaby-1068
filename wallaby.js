
module.exports = function (wallaby) {

  var path = require('path');
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'app/base/assets');

  return {
    debug: true,

    files: [
      'app/**/*.ts?(x)',
      'app/**/*.css',
      'app/**/*.svg',
      "!app/**/*spec.ts?(x)"
    ],

    tests: [
      'app/**/*spec.ts?(x)'
    ],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',// jscs:ignore
        jsx: 'react'
      })
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
    },

    workers: {
      //initial: 1,
      regular: 1
    },

    setup: function () {
      var jsdom = require('jsdom');
      global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
      global.window = document.defaultView;
      global.navigator = global.window.navigator;
      global.HTMLElement = global.window.HTMLElement;
      global.HTMLAnchorElement = global.window.HTMLAnchorElement;
      // global.CustomEvent = global.window.CustomEvent;
      // get window props for stuff like getComputedStyle etc.
      let window = document.defaultView;
      for (let key in window) {
        if (!window.hasOwnProperty(key)) continue
        if (key in global) continue
        global[key] = window[key]
      }
      require.extensions[".css"] = () => { };
      require.extensions[".svg"] = () => { };
    }
  };
};