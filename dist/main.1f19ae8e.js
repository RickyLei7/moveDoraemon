// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n .skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.skin *::before, *::after {\n  box-sizing: border-box;\n}\nbody {\n  background: #ffffff;\n  min-height: 100vh;\n  position: relative;\n}\n.skin {\n  border: 3px solid #000000;\n  width: 250px;\n  height: 250px;\n  top: 25px;\n  left: 50%;\n  margin-left: -125px;\n  background: #019fe9;\n  border-radius: 50%;\n  position: relative;\n}\n.eye {\n  border: 2px solid black;\n  width: 50px;\n  height: 64px;\n  position: absolute;\n  top: 3px;\n  left: 60%;\n  margin-left: -25px;\n  background: #ffffff;\n  border-radius: 38px/50px;\n  z-index: 1;\n}\n.eye::before {\n  content: '';\n  display: block;\n  width: 19px;\n  height: 25px;\n  position: absolute;\n  left: 2px;\n  bottom: 6px;\n  background: #000000;\n  border-radius: 38px/50px;\n}\n.eye::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  left: 4px;\n  bottom: 9px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n.eye.left {\n  transform: translateX(-50px);\n}\n.face {\n  position: absolute;\n  border: 2px solid black;\n  width: 210px;\n  height: 210px;\n  border-radius: 50%;\n  background: #ffffff;\n  left: 50%;\n  margin-left: -105px;\n  bottom: 5px;\n}\n\n\n.nose {\n  border: 2px solid black;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #ff0000;\n  left: 108px;\n  top: 55px;\n}\n.nose::before {\n  content: '';\n  display: block;\n  width: 7px;\n  height: 7px;\n  position: absolute;\n  left: 4px;\n  bottom: 12px;\n  background: #ffffff;\n  border-radius: 50%;\n}\n.mouth {\n  border-left: 2px solid black;\n  position: absolute;\n  height: 115px;\n  left: 120px;\n  bottom: 50px;\n}\n.mouth::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border: 2px solid black;\n  width: 150px;\n  height: 50px;\n  border-radius: 0 0 50% 50%/0 0 100% 100%;\n  border-top-color: transparent;\n  bottom: 0;\n  left: -75px;\n}\n.mustache {\n  position: relative;\n}\n.mustacheLeft_1 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 65px;\n  left: 35px;\n  top: 100px;\n}\n.mustacheLeft_2 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 75px;\n  left: 25px;\n  top: 84px;\n  transform: rotate(15deg);\n}\n.mustacheLeft_3 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 75px;\n  left: 25px;\n  top: 123px;\n  transform: rotate(-15deg);\n}\n.mustacheRight_1 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 65px;\n  right: 35px;\n  top: 100px;\n}\n.mustacheRight_2 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 75px;\n  right: 25px;\n  top: 84px;\n  transform: rotate(-15deg);\n}\n.mustacheRight_3 {\n  border-top: 2px solid black;\n  position: absolute;\n  width: 75px;\n  Right: 25px;\n  top: 123px;\n  transform: rotate(15deg);\n}\n.neck {\n  border: 2px solid black;\n  width: 150px;\n  height: 15px;\n  position: absolute;\n  left: 50%;\n  bottom: 5px;\n  margin-left: -75px;\n  background: #ff0000;\n  border-radius: 20px;\n}\n.neck::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 150px;\n  height: 15px;\n  bottom: -17px;\n  background: #ffffff;\n}\n.bell {\n  border: 2px solid black;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -14px;\n  border-radius: 50%;\n  background: #ecc81a;\n}\n.bell::after {\n  content: '';\n  display: block;\n  border: 2px solid black;\n  width: 30px;\n  height: 5px;\n  position: absolute;\n  bottom: 11px;\n  left: 50%;\n  margin-left: -15px;\n  border-radius: 20px;\n  background: #ecc81a;\n}\n.bellHole {\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  border-radius: 50%;\n  top: 54%;\n  left: 25%;\n  background-color: #000000;\n}\n.bellHole::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-left: 2px solid black;\n  height: 8px;\n  top: 2px;\n  left: 3px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    return window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64205" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map