// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

/* weex initialized here, please do not move this line */
var router = __webpack_require__(1);
var App = __webpack_require__(54);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(2);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _login = __webpack_require__(7);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(11);

var _register2 = _interopRequireDefault(_register);

var _forgetPassword = __webpack_require__(15);

var _forgetPassword2 = _interopRequireDefault(_forgetPassword);

var _index3 = __webpack_require__(19);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(24);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(29);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(34);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(38);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(42);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(46);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(50);

var _index18 = _interopRequireDefault(_index17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default); /* global Vue */


module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'identity',
    component: _index2.default,
    children: [{
      path: '/',
      redirect: 'login'
    }, {
      path: '/login',
      name: 'login',
      component: _login2.default
    }, {
      path: '/register',
      name: 'register',
      component: _register2.default
    }, {
      path: '/forget-password',
      name: 'forget-password',
      component: _forgetPassword2.default
    }]
  }, {
    path: '/sell',
    component: _index16.default
  }, {
    path: '/goods/:type',
    component: _index18.default
  }, {
    path: '/chat/:room',
    component: _index14.default
  }, {
    path: '/book/:id',
    component: _index12.default
  }, {
    path: '/home',
    component: _index4.default,
    children: [{
      path: '/list',
      component: _index6.default
    }, {
      path: '/message',
      component: _index8.default
    }, {
      path: '/profile',
      component: _index10.default
    }]
  }]
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

function scrollToPosition(shouldScroll, position) {
  var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return;
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/identity/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e6ea492c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "identity": {
    "backgroundPosition": "center center",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 100,
    "height": 100,
    "backgroundSize": "cover",
    "backgroundImage": "url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg')"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["identity"]
  }, [_c('router-view', {
    staticClass: ["pos"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/identity/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-56327e81"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": 100,
    "height": 100,
    "backgroundSize": "cover",
    "backgroundImage": "url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg')"
  },
  "input-wrapper": {
    "width": "550",
    "marginLeft": "100",
    "marginRight": "100",
    "marginBottom": "30"
  },
  "input": {
    "fontSize": "30",
    "height": "80",
    "width": "550",
    "paddingLeft": "90",
    "paddingTop": "15",
    "paddingBottom": "15",
    "borderWidth": "0",
    "borderColor": "#ffffff",
    "borderRadius": "10",
    "outline": "none"
  },
  "input-img": {
    "position": "absolute",
    "top": "10",
    "left": "15",
    "width": "60",
    "height": "60"
  },
  "logo": {
    "flex": 1
  },
  "logo_picture": {
    "width": "400",
    "height": "400"
  },
  "input-login": {
    "height": "80",
    "width": "550",
    "backgroundColor": "#48c9bf",
    "borderRadius": "10",
    "marginTop": "40"
  },
  "input-login-text": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FFFFFF",
    "fontSize": "35"
  },
  "input-forget": {
    "position": "absolute",
    "left": "30",
    "fontSize": "30"
  },
  "input-register": {
    "position": "absolute",
    "right": "30",
    "fontSize": "30"
  },
  "hint": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FF0000",
    "fontSize": "35"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
// const navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

module.exports = {
  data: function data() {
    return {
      userNumber: '',
      userPassword: '',
      hint: ''
    };
  },

  methods: {
    /* 找回密码 */
    findPassword: function findPassword() {
      this.$router.push({ name: 'forget-password' });
    },


    /* 注册 */
    register: function register() {
      /* this.$router.go(-1); */
      this.$router.push({ path: '/register' });
    },

    /* 处理登录 */

    login: function login() {
      stream.fetch({
        method: 'POST',
        url: 'http://123.207.86.98:3000/api/user/login',
        type: 'json',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.userNumber,
          password: this.userPassword
        })
      }, function (ret) {
        if (!ret.ok) {
          modal.toast({
            message: '学号或密码错误',
            duration: 2.0
          });
        } else {
          modal.toast({
            message: '登录成功',
            duration: 2.0
          });
          console.log(ret);
          // this.$router.push({
          //   path: '/home',
          //   query: {
          //     username: ret.data.userNumber,
          //     password: this.userPassword,
          //     nickname: nicknameLogin,
          //     flag: '3',
          //   },
          // });
        }
      }
      // (response) => {},
      );
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo_picture"],
    attrs: {
      "resize": "contain",
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3gqkmmj30bi08egph.jpg"
    }
  }), _c('div', {
    staticClass: ["login"]
  }, [_c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入学号",
      "utofocus": "true",
      "value": "",
      "value": (_vm.userNumber)
    },
    on: {
      "input": function($event) {
        _vm.userNumber = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "value": "",
      "value": (_vm.userPassword)
    },
    on: {
      "input": function($event) {
        _vm.userPassword = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('div', {
    staticClass: ["input-login"],
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_c('text', {
    staticClass: ["input-login-text"]
  }, [_vm._v("登录")])])]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('text', {
    staticClass: ["input-forget"],
    on: {
      "click": function($event) {
        _vm.findPassword()
      }
    }
  }, [_vm._v("找回密码")]), _c('text', {
    staticClass: ["input-register"],
    on: {
      "click": function($event) {
        _vm.register()
      }
    }
  }, [_vm._v("立即注册")])])]), _c('div', {
    staticClass: ["hintwrapper"]
  }, [_c('text', {
    staticClass: ["hint"]
  }, [_vm._v(_vm._s(_vm.hint))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/identity/register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c73f028a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundPosition": "center center",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 100,
    "height": 100,
    "backgroundSize": "cover",
    "backgroundImage": "url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg')"
  },
  "input-wrapper": {
    "width": "550",
    "marginLeft": "100",
    "marginRight": "100",
    "marginBottom": "30"
  },
  "input": {
    "fontSize": "30",
    "height": "80",
    "width": "550",
    "paddingLeft": "90",
    "paddingTop": "15",
    "paddingBottom": "15",
    "borderWidth": "0",
    "borderColor": "#ffffff",
    "borderRadius": "10",
    "outline": "none"
  },
  "input-img": {
    "position": "absolute",
    "top": "10",
    "left": "15",
    "width": "60",
    "height": "60"
  },
  "logo": {
    "flex": 1
  },
  "logo_picture": {
    "width": "400",
    "height": "400"
  },
  "register-wrapper": {
    "height": "80",
    "width": "550",
    "backgroundColor": "#48c9bf",
    "borderRadius": "10",
    "marginTop": "40"
  },
  "input-login-text": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FFFFFF",
    "fontSize": "35"
  },
  "return-login": {
    "position": "absolute",
    "left": "30",
    "fontSize": "30"
  },
  "hang-out": {
    "position": "absolute",
    "right": "30",
    "fontSize": "30"
  },
  "hint": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FF0000",
    "fontSize": "35"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');

exports.default = {
  data: function data() {
    return {
      check: 0,
      userNumber: '',
      userID: '',
      userPassword: '',
      newuserPassword: '22222'
    };
  },

  methods: {
    onchangeUserNumber: function onchangeUserNumber(event) {
      this.userNumber = event.value;
    },
    onchangeUserPassword: function onchangeUserPassword(event) {
      this.userPassword = event.value;
    },
    onchangeUserID: function onchangeUserID(event) {
      this.userID = event.value;
    },
    onchangeNewUserPassword: function onchangeNewUserPassword(event) {
      this.newuserPassword = event.value;
    },

    /* 找回密码 */
    findPassword: function findPassword() {},

    /* 注册 */
    register: function register() {
      var _this = this;

      if (this.userPassword !== this.newuserPassword) {
        modal.toast({
          message: '前后密码不一致',
          duration: 2.0
        });
      } else if (this.userNumber.length !== 8) {
        modal.toast({
          message: '学号必须为8位',
          duration: 2.0
        });
      } else if (this.userPassword.length < 8 || this.userPassword.length > 16) {
        modal.toast({
          message: '密码必须为8-16位',
          duration: 2.0
        });
      } else {
        stream.fetch({
          method: 'POST',
          url: 'http://123.207.86.98:3000/api/user/register',
          type: 'json',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nickname: this.userID,
            username: this.userNumber,
            password: this.userPassword
          })
        }, function (ret) {
          if (!ret.ok) {
            modal.toast({
              message: '该用户已经注册',
              duration: 2.0
            });
            _this.check = 0;
          } else {
            modal.toast({
              message: '注册成功',
              duration: 2.0
            });
            _this.check = 1;
          }
        }
        // (response) => {},
        );
      }
    },
    returnlogin: function returnlogin() {
      this.$router.go(-1);
    },
    hangout: function hangout() {
      /* this.$router.push({name: 'home'}); */
      this.$router.push({
        path: '/home',
        query: {
          username: 0,
          password: '0',
          nickname: 'visitor',
          flag: '3'
        }
      });
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo_picture"],
    attrs: {
      "resize": "contain",
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3gqkmmj30bi08egph.jpg"
    }
  }), _c('div', {
    staticClass: ["login"]
  }, [_c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入学号(必须为8位)",
      "autofocus": "true",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserNumber
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入昵称",
      "autofocus": "true",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserID
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserPassword
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请再次输入新密码",
      "value": ""
    },
    on: {
      "change": _vm.onchangeNewUserPassword
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('div', {
    staticClass: ["register-wrapper"],
    on: {
      "click": function($event) {
        _vm.register()
      }
    }
  }, [_c('text', {
    staticClass: ["input-login-text"]
  }, [_vm._v("注册")])])]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('text', {
    staticClass: ["return-login"],
    on: {
      "click": function($event) {
        _vm.returnlogin()
      }
    }
  }, [_vm._v("返回登录")]), _c('text', {
    staticClass: ["hang-out"],
    on: {
      "click": function($event) {
        _vm.hangout()
      }
    }
  }, [_vm._v("随便逛逛")])])]), _c('div', {
    staticClass: ["hintwrapper"]
  }, [_c('text', {
    staticClass: ["hint"]
  }, [_vm._v(_vm._s(_vm.hint))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/identity/forget-password.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a210a6da"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundPosition": "center center",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 100,
    "height": 100,
    "backgroundSize": "cover",
    "backgroundImage": "url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg')"
  },
  "input-wrapper": {
    "width": "550",
    "marginLeft": "100",
    "marginRight": "100",
    "marginBottom": "30"
  },
  "input": {
    "fontSize": "30",
    "height": "80",
    "width": "550",
    "paddingLeft": "90",
    "paddingTop": "15",
    "paddingBottom": "15",
    "borderWidth": "0",
    "borderColor": "#ffffff",
    "borderRadius": "10",
    "outline": "none"
  },
  "input-img": {
    "position": "absolute",
    "top": "10",
    "left": "15",
    "width": "60",
    "height": "60"
  },
  "logo": {
    "flex": 1
  },
  "logo_picture": {
    "width": "400",
    "height": "400"
  },
  "forgetpassword": {
    "height": "80",
    "width": "550",
    "backgroundColor": "#48c9bf",
    "borderRadius": "10",
    "marginTop": "40"
  },
  "input-login-text": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FFFFFF",
    "fontSize": "35"
  },
  "return-login": {
    "position": "absolute",
    "left": "30",
    "fontSize": "30"
  },
  "hang-out": {
    "position": "absolute",
    "right": "30",
    "fontSize": "30"
  },
  "hint": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FF0000",
    "fontSize": "35"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      userNumber: '',
      UserID: '',
      userPassword: '',
      newUserPassword: ''
    };
  },

  methods: {
    onchangeUserNumber: function onchangeUserNumber(event) {
      this.userNumber = event.value;
    },
    onchangeUserPassword: function onchangeUserPassword(event) {
      this.userPassword = event.value;
    },
    onchangeUserID: function onchangeUserID(event) {
      this.userID = event.value;
    },
    onchangeNewUserPassword: function onchangeNewUserPassword(event) {
      this.newUserPassword = event.value;
    },

    /* 找回密码 */

    findPassword: function findPassword() {
      /* this.$router.go(-1); */
      /* this.$router.push('ForgetPassword'); */
    },
    forgetpassword: function forgetpassword() {
      this.$router.go(-1);
    },
    returnlogin: function returnlogin() {
      this.$router.go(-1);
    },
    hangout: function hangout() {
      this.$router.push({
        path: '/home',
        query: { username: 0, password: '0', nickname: 'visitor', flag: '3' }
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo_picture"],
    attrs: {
      "resize": "contain",
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3gqkmmj30bi08egph.jpg"
    }
  }), _c('div', {
    staticClass: ["login"]
  }, [_c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入学号",
      "autofocus": "true",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserNumber
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输身份证证后六位",
      "autofocus": "true",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserID
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码",
      "value": ""
    },
    on: {
      "change": _vm.onchangeUserPassword
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请再次输入新密码",
      "value": ""
    },
    on: {
      "change": _vm.onchangeNewUserPassword
    }
  }), _c('image', {
    staticClass: ["input-img"],
    attrs: {
      "src": "https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"
    }
  })]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('div', {
    staticClass: ["forgetpassword"],
    on: {
      "click": function($event) {
        _vm.forgetpassword()
      }
    }
  }, [_c('text', {
    staticClass: ["input-login-text"]
  }, [_vm._v("重置密码")])])]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('text', {
    staticClass: ["return-login"],
    on: {
      "click": function($event) {
        _vm.returnlogin()
      }
    }
  }, [_vm._v("返回登录")]), _c('text', {
    staticClass: ["hang-out"],
    on: {
      "click": function($event) {
        _vm.hangout()
      }
    }
  }, [_vm._v("随便逛逛")])])]), _c('div', {
    staticClass: ["hintwrapper"]
  }, [_c('text', {
    staticClass: ["hint"]
  }, [_vm._v(_vm._s(_vm.hint))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/home/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-62aaca6a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "wrapped": {
    "alignItems": "center",
    "background": "#eeeee0"
  },
  "topzone": {
    "background": "white",
    "flexDirection": "column",
    "alignItems": "center",
    "width": 100
  },
  "searchzone": {
    "marginTop": "10",
    "borderRadius": "40",
    "background": "#eeeee0",
    "justifyContent": "center",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "75",
    "width": 90
  },
  "search": {
    "borderRadius": "40",
    "outline": "none",
    "background": "rgba(255, 255, 255, 0.1)",
    "justifyContent": "center",
    "fontSize": "45",
    "height": "80",
    "width": 80
  },
  "searchicon": {
    "width": "60",
    "height": "60"
  },
  "searchfunzone": {
    "marginTop": "20",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": 90,
    "height": "70"
  },
  "searchfunfilter": {
    "flexDirection": "row",
    "justifyContent": "center",
    "width": 50,
    "height": "60",
    "borderRight": "1px solid"
  },
  "searchfunrsort": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 50,
    "height": "60"
  },
  "searchfuniconleft": {
    "height": "60",
    "width": "60"
  },
  "searchfuniconright": {
    "height": "80",
    "width": "80"
  },
  "searchfuntext": {
    "fontSize": "40",
    "color": "#00caca"
  },
  "listzone": {
    "position": "absolute",
    "top": "180",
    "width": 100
  },
  "list": {
    "position": "relative",
    "flexDirection": "column",
    "alignItems": "center",
    "width": 100
  },
  "cell": {
    "marginTop": "10",
    "marginRight": "20",
    "marginBottom": "10",
    "marginLeft": "20",
    "paddingLeft": "20",
    "background": "white",
    "flexDirection": "row",
    "alignItems": "center",
    "borderRadius": "40",
    "width": 95,
    "height": "300",
    "boxShadow": "0 15px 30px rgba(0, 0, 0, 0.2)"
  },
  "bookpicture": {
    "width": "200",
    "height": "280"
  },
  "textinfozone": {
    "marginRight": "10",
    "width": 70,
    "height": 90,
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "bookname": {
    "color": "#808080",
    "fontSize": "36",
    "fontWeight": "bold"
  },
  "describe": {
    "lines": 2,
    "color": "#808080",
    "fontSize": "36",
    "fontWeight": "bold"
  },
  "priceandseller": {
    "marginTop": "10",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "100"
  },
  "price": {
    "color": "#ff7f50",
    "fontSize": "60",
    "width": 60
  },
  "sellervia": {
    "width": "80",
    "height": "80"
  },
  "sellername": {
    "width": 19,
    "color": "#808080",
    "fontSize": "38"
  },
  "footerzone": {
    "justifyContent": "center",
    "alignItems": "center",
    "background": "white",
    "position": "fixed",
    "bottom": 0,
    "width": 100,
    "height": 9
  },
  "footer": {
    "marginTop": "10",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "position": "absolute",
    "width": 100,
    "height": 100
  },
  "footericon": {
    "height": "70",
    "width": "70"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      boxes: [{
        bookId: 1,
        bookpicture: ['https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'],
        name: '小王子',
        description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        price: 18,
        publisherId: '妮娜'
      }, {
        bookId: 2,
        bookpicture: ['https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'],
        name: '小王子',
        description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        price: 18,
        publisherId: '妮娜'
      }, {
        bookId: 3,
        bookpicture: ['https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'],
        name: '小王子',
        description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        price: 18,
        publisherId: '妮娜'
      }]
    };
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapped"]
  }, [_c('div', {
    staticClass: ["topzone"]
  }, [_c('div', {
    staticClass: ["searchzone"]
  }, [_c('input', {
    staticClass: ["search"],
    attrs: {
      "type": "text",
      "placeholder": " 搜索",
      "autofocus": true,
      "value": ""
    }
  }), _c('image', {
    staticClass: ["searchicon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-fe71f0a49c9910b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  })]), _vm._m(0)]), _c('div', {
    staticClass: ["listzone"]
  }, [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.boxes), function(item) {
    return _c('cell', {
      key: item.bookId,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('image', {
      staticClass: ["bookpicture"],
      attrs: {
        "src": item.bookpicture
      }
    }), _c('div', {
      staticClass: ["textinfozone"]
    }, [_c('text', {
      staticClass: ["bookname"]
    }, [_vm._v("书名：《" + _vm._s(item.name) + "》 ")]), _c('text', {
      staticClass: ["describe"],
      attrs: {
        "lines": "2"
      }
    }, [_vm._v("描述：" + _vm._s(item.description))]), _c('div', {
      staticClass: ["priceandseller"]
    }, [_c('text', {
      staticClass: ["price"]
    }, [_vm._v("￥ " + _vm._s(item.price))]), _c('image', {
      staticClass: ["sellervia"],
      attrs: {
        "src": "https://upload-images.jianshu.io/upload_images/1409578-ccda36498de1ec07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
      }
    }), _c('text', {
      staticClass: ["sellername"]
    }, [_vm._v(_vm._s(item.publisherId))])])])])
  }))]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["searchfunzone"]
  }, [_c('div', {
    staticClass: ["searchfunfilter"]
  }, [_c('image', {
    staticClass: ["searchfuniconleft"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-14476b94d3532fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["searchfuntext"]
  }, [_vm._v("筛选")])]), _c('div', {
    staticClass: ["searchfunrsort"]
  }, [_c('image', {
    staticClass: ["searchfuniconright"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-d79a13daa64a9508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["searchfuntext"]
  }, [_vm._v("价格排序")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footerzone"]
  }, [_c('div', {
    staticClass: ["footer"]
  }, [_c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-3c1a20f47f897e3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-a18cd9af9f80d32e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-aa3c5917b4badbf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/home/book-list/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-23c040be"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "wrapped": {
    "alignItems": "center"
  },
  "searchzone": {
    "marginTop": "10",
    "borderRadius": "40",
    "background": "#e0e0e0",
    "justifyContent": "center",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "75",
    "width": 90
  },
  "search": {
    "borderRadius": "40",
    "outline": "none",
    "background": "rgba(255, 255, 255, 0.1)",
    "justifyContent": "center",
    "fontSize": "45",
    "height": "80",
    "width": 80
  },
  "searchicon": {
    "width": "60",
    "height": "60"
  },
  "searchfunzone": {
    "marginTop": "20",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": 90,
    "height": "70"
  },
  "searchfunfilter": {
    "flexDirection": "row",
    "justifyContent": "center",
    "width": 50,
    "height": "60",
    "borderRight": "1px solid"
  },
  "searchfunrsort": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 50,
    "height": "60"
  },
  "searchfuniconleft": {
    "height": "60",
    "width": "60"
  },
  "searchfuniconright": {
    "height": "80",
    "width": "80"
  },
  "searchfuntext": {
    "fontSize": "40",
    "color": "#00caca"
  },
  "main": {
    "width": 90
  },
  "labeltitle": {
    "fontSize": "40",
    "color": "#c0c0c0",
    "borderBottom": "3px solid"
  },
  "labelzone": {
    "flexWrap": "wrap",
    "flexDirection": "row",
    "height": "250",
    "width": 100
  },
  "label": {
    "marginRight": "15",
    "marginTop": "10",
    "height": "60",
    "fontSize": "45",
    "color": "#c0c0c0",
    "border": "2px solid"
  },
  "footerzone": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "bottom": 0,
    "width": 100,
    "height": 10,
    "borderTop": "3px solid",
    "color": "#e0e0e0"
  },
  "footer": {
    "marginTop": "10",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "position": "absolute",
    "width": "600",
    "height": "120"
  },
  "footericon": {
    "height": "96",
    "width": "96"
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
window.onload=function(){
  var label = document.getElementsByClassName("label");
  label.ontouchstart = function(){
    this.style.backgroundColor="green";
  }
  label.ontouchend = function() {
    this.style.backgroundColor = "white";
  };
}
*/


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapped"]
  }, [_c('div', {
    staticClass: ["searchzone"]
  }, [_c('input', {
    staticClass: ["search"],
    attrs: {
      "type": "text",
      "placeholder": " 搜索",
      "autofocus": true,
      "value": ""
    }
  }), _c('image', {
    staticClass: ["searchicon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-fe71f0a49c9910b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  })]), _vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["searchfunzone"]
  }, [_c('div', {
    staticClass: ["searchfunfilter"]
  }, [_c('image', {
    staticClass: ["searchfuniconleft"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-14476b94d3532fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["searchfuntext"]
  }, [_vm._v("筛选")])]), _c('div', {
    staticClass: ["searchfunrsort"]
  }, [_c('image', {
    staticClass: ["searchfuniconright"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-d79a13daa64a9508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["searchfuntext"]
  }, [_vm._v("价格排序")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('text', {
    staticClass: ["labeltitle"]
  }, [_vm._v("品类：")]), _c('div', {
    staticClass: ["labelzone"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 课本 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 资料书 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 考研书 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 课外书 ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('text', {
    staticClass: ["labeltitle"]
  }, [_vm._v("地点：")]), _c('div', {
    staticClass: ["labelzone"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 东校区 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 南校区 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 北校区 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 珠海校区 ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('text', {
    staticClass: ["labeltitle"]
  }, [_vm._v("学院：")]), _c('div', {
    staticClass: ["labelzone"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 法学院 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 数据科学与计算机学院 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 传播与设计学院 ")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v(" 医学院 ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footerzone"]
  }, [_c('div', {
    staticClass: ["footer"]
  }, [_c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-3c1a20f47f897e3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-a18cd9af9f80d32e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-aa3c5917b4badbf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/home/message/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1e8851c3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "wrapped": {
    "alignItems": "center"
  },
  "messagetype": {
    "paddingTop": "20",
    "paddingBottom": "10",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": 100,
    "height": 9,
    "borderBottom": "2px gray solid"
  },
  "chatzone": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 50,
    "height": 85,
    "borderRight": "1px gray solid"
  },
  "chaticon": {
    "height": "60",
    "width": "60"
  },
  "chosedtext": {
    "fontSize": "40",
    "color": "#00CACA"
  },
  "securedzone": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 50,
    "height": 85
  },
  "securedicon": {
    "height": "70",
    "width": "70"
  },
  "unchosedtext": {
    "fontSize": "40",
    "color": "#C0C0C0"
  },
  "chatlist": {
    "width": 100,
    "height": 50
  },
  "list": {
    "flexDirection": "column",
    "width": 100
  },
  "cell": {
    "paddingTop": "20",
    "paddingBottom": "5",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "width": 100,
    "height": "150",
    "borderBottom": "1px gray solid"
  },
  "chatvirzone": {
    "width": "120",
    "height": 90
  },
  "sellervir": {
    "height": "120",
    "width": "120"
  },
  "chattextzone": {
    "flexDirection": "column",
    "justifyContent": "center",
    "width": 83,
    "height": 100
  },
  "chatnametime": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": 100
  },
  "sellernametext": {
    "fontSize": "35",
    "fontWeight": "bold"
  },
  "posttimetext": {
    "color": "#808080"
  },
  "chatdetailtext": {
    "color": "#808080",
    "fontSize": "30",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "width": 92
  },
  "footerzone": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "fixed",
    "bottom": 0,
    "width": 100,
    "height": 9,
    "borderTop": "2px gray solid"
  },
  "footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "position": "absolute",
    "width": 100,
    "height": 100
  },
  "footericon": {
    "height": "70",
    "width": "70"
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      boxes: [{
        sessionId: 1,
        senderId: 15331060,
        recieverId: 15331059,
        content: '你好，请问在吗？',
        max: '2018-06-07T07:49:39.000Z'
      }, {
        sessionId: 2,
        senderId: 15331078,
        recieverId: 15331059,
        content: '你好，请问在吗？请问《小王子》还在吗还在吗？',
        max: '2018-06-07 07:49:39'
      }]
    };
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapped"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["chatlist"]
  }, [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.boxes), function(item) {
    return _c('cell', {
      key: item.sessionId,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('image', {
      staticClass: ["sellervir"],
      attrs: {
        "src": "https://upload-images.jianshu.io/upload_images/1409578-e846c3ea7c900734.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
      }
    }), _c('div', {
      staticClass: ["chattextzone"]
    }, [_c('div', {
      staticClass: ["chatnametime"]
    }, [_c('text', {
      staticClass: ["sellernametext"]
    }, [_vm._v(_vm._s(item.senderId) + " ")]), _c('text', {
      staticClass: ["posttimetext"]
    }, [_vm._v(_vm._s(item.max))])]), _c('div', {
      staticClass: ["chatdetail"]
    }, [_c('text', {
      staticClass: ["chatdetailtext"]
    }, [_vm._v(_vm._s(item.content))])])])])
  }))]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["messagetype"]
  }, [_c('div', {
    staticClass: ["chatzone"]
  }, [_c('image', {
    staticClass: ["chaticon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-6cf9b27bb569f9fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["chosedtext"]
  }, [_vm._v(" 对话 ")])]), _c('div', {
    staticClass: ["securedzone"]
  }, [_c('image', {
    staticClass: ["securedicon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-e71f1d77aebc583d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('text', {
    staticClass: ["unchosedtext"]
  }, [_vm._v(" 通知 ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footerzone"]
  }, [_c('div', {
    staticClass: ["footer"]
  }, [_c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-ffd1470f7531581e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-f16e7e7d86bec92b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  }), _c('image', {
    staticClass: ["footericon"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/1409578-bcfdd8377f19ec24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/home/profile/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3fcdb8e5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#F6F6F6"
  },
  "avatar-container": {
    "top": "-180",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "userinfo-avatar": {
    "width": "200",
    "height": "200",
    "borderRadius": 50,
    "alignItems": "center"
  },
  "userinfo": {
    "backgroundColor": "#FFFFFF",
    "borderRadius": 5,
    "top": "150",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "text-h1": {
    "marginLeft": "30",
    "marginBottom": "10"
  },
  "text-h2": {
    "marginLeft": "30",
    "marginBottom": "30"
  },
  "text-h3": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30"
  },
  "text-h4": {
    "fontSize": "26",
    "color": "#7F7F7F"
  },
  "text-h5": {
    "marginLeft": "30",
    "marginBottom": "10",
    "marginTop": "50"
  },
  "cells": {
    "backgroundColor": "#FFFFFF",
    "borderRadius": 5,
    "marginLeft": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "head": {
    "flexDirection": "row"
  },
  "block": {
    "justifyContent": "center"
  },
  "line": {
    "width": "0.5",
    "backgroundColor": "#585858",
    "height": "140",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  },
  "item": {
    "marginBottom": "30",
    "marginTop": "30",
    "marginLeft": "30",
    "marginRight": "40",
    "alignItems": "center"
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      studentID: '111',
      nickname: '222',
      college: '数据科学与计算机学院'
    };
  },
  created: function created() {
    var _this = this;

    var USER_URL = 'http://123.207.86.98:3000/api/user/login';
    stream.fetch({
      method: 'GET',
      url: USER_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        var msg = '尚未登录';
        modal.toast({
          message: msg,
          duration: 3.0
        });
      } else {
        _this.studentID = ret.data.studentID;
        _this.nickname = ret.data.nickname;
      }
    });
  },

  methods: {
    goTo: function goTo() {
      // this.$router
      // this.$router.push({ path: '/goods' });
    },
    wantsell: function wantsell() {},
    logout: function logout() {}
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', [_c('div', {
    staticClass: ["userinfo"]
  }, [_c('text', {
    staticClass: ["text-h5"]
  }, [_vm._v("姓名： " + _vm._s(_vm.nickname))]), _c('text', {
    staticClass: ["text-h1"]
  }, [_vm._v("学号： " + _vm._s(_vm.studentID))]), _c('text', {
    staticClass: ["text-h2"]
  }, [_vm._v("学院： " + _vm._s(_vm.college))])]), _vm._m(0)]), _c('div', {
    staticClass: ["cells"],
    on: {
      "click": _vm.wantsell
    }
  }, [_c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v("我要卖书")]), _c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v(">")])]), _c('div', {
    staticClass: ["cells"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.goTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "96px",
      height: "96px"
    },
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-4ffaac6d7e7974f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  }), _c('text', {
    staticClass: ["text-h4"]
  }, [_vm._v("等待收货")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.goTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "96px",
      height: "96px"
    },
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-9b967727a94b81ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  }), _c('text', {
    staticClass: ["text-h4"]
  }, [_vm._v("已买入")])])]), _c('div', {
    staticClass: ["cells"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.goTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "96px",
      height: "96px"
    },
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-254508d4005ef76a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  }), _c('text', {
    staticClass: ["text-h4"]
  }, [_vm._v("正在出售")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.goTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "96px",
      height: "96px"
    },
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-b36db1a96ee2edae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  }), _c('text', {
    staticClass: ["text-h4"]
  }, [_vm._v("等待确认")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.goTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "96px",
      height: "96px"
    },
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-7f2b966fd2463e48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"
    }
  }), _c('text', {
    staticClass: ["text-h4"]
  }, [_vm._v("已卖出")])])]), _c('div', {
    staticClass: ["cells"],
    on: {
      "click": _vm.logout
    }
  }, [_c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v("退出当前帐号")]), _c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v(">")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["avatar-container"]
  }, [_c('image', {
    staticClass: ["userinfo-avatar"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-6b048ad0d9bd34aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700",
      "resize": "cover"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["head"]
  }, [_c('div', {
    staticClass: ["block"]
  }, [_c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v("我是买家")])]), _c('div', {
    staticClass: ["line"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["head"]
  }, [_c('div', {
    staticClass: ["block"]
  }, [_c('text', {
    staticClass: ["text-h3"]
  }, [_vm._v("我是买家")])]), _c('div', {
    staticClass: ["line"]
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/book/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10375c55"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center"
  },
  "back": {
    "display": "flex",
    "height": "50",
    "width": "700"
  },
  "second": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "550",
    "height": "66"
  },
  "userinfo": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "width": "300",
    "height": "66"
  },
  "image": {
    "width": "300",
    "height": "450"
  },
  "price": {
    "fontSize": "66",
    "color": "rgb(255,0,0)"
  },
  "icon": {
    "flex": 1,
    "width": 60,
    "height": 60
  },
  "username": {
    "flex": 1,
    "fontSize": "40",
    "color": "#6c6c6c"
  },
  "bookname": {
    "width": "600",
    "height": "60"
  },
  "description": {
    "width": "600",
    "height": "250"
  },
  "labelzone": {
    "display": "flex",
    "flexDirection": "row",
    "alignItem": "center",
    "flexWrap": "wrap",
    "width": "600"
  },
  "labels": {
    "display": "flex",
    "flexWrap": "wrap",
    "width": "120",
    "flexDirection": "row"
  },
  "label": {
    "marginTop": "10",
    "textAlign": "center",
    "marginLeft": "20",
    "border": "2px solid",
    "borderRadius": "20",
    "color": "#00caca",
    "fontSize": "35",
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "labeltext": {
    "fontSize": "35",
    "color": "#00caca"
  },
  "text": {
    "fontSize": "40",
    "color": "rgb(0,0,0)"
  },
  "buy": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "230",
    "height": "100",
    "marginTop": "50",
    "border": "2px solid",
    "borderRadius": "20",
    "color": "#00caca",
    "background": "#00caca"
  },
  "buytext": {
    "fontSize": "40",
    "color": "#e0e0e0"
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
// const navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      publisherId: '',
      lists: ['课外书', '东校区', '课外书', '东校区'],
      price: '18',
      username: 'noname',
      bookname: '小王子',
      description: '好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看...'
    };
  },

  methods: {
    goback: function goback() {},
    chat: function chat() {},
    trade: function trade() {}
  },
  created: function created() {
    var _this = this;

    stream.fetch({
      method: 'GET',
      url: 'http://123.207.86.98:3000/api/book/1',
      type: 'json',
      headers: { 'Content-Type': 'application/json' }
    }, function (ret) {
      if (!ret.ok) {
        modal.toast({
          message: 'failed',
          duration: 2.0
        });
      } else {
        _this.publisherId = ret.data.publisherId;
        _this.price = ret.data.price;
        _this.username = ret.data.author;
        _this.bookname = ret.data.name;
        _this.description = ret.data.comment;
      }
    }, function () {});
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["back"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.goback
    }
  })]), _c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "contain",
      "src": "https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg"
    }
  }), _c('div', {
    staticClass: ["second"]
  }, [_c('text', {
    staticClass: ["price"]
  }, [_vm._v("¥" + _vm._s(_vm.price))]), _c('div', {
    staticClass: ["userinfo"],
    on: {
      "click": _vm.chat
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "resize": "contain",
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527422893435&di=2e679e76e967ba39cb3d5fb9d7545eba&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D1588b7c5d739b6004dce0fbfd9503526%2F7bec54e736d12f2eb97e1a464dc2d56285356898.jpg"
    }
  }), _c('text', {
    staticClass: ["username"]
  }, [_vm._v(_vm._s(_vm.username))])])]), _c('div', {
    staticClass: ["bookname"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("书名：" + _vm._s(_vm.bookname))])]), _c('div', {
    staticClass: ["description"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("描述：" + _vm._s(_vm.description))])]), _c('div', {
    staticClass: ["labelzone"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("标签:")]), _vm._l((_vm.lists), function(label) {
    return _c('text', {
      key: label,
      staticClass: ["label"]
    }, [_vm._v(_vm._s(label))])
  })], 2), _c('div', {
    staticClass: ["buy"],
    on: {
      "click": _vm.trade
    }
  }, [_c('text', {
    staticClass: ["buytext"]
  }, [_vm._v("我要购买")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/chat/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3cd33604"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(49)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/sell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3ca3417e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "background": "#fcfcfc"
  },
  "title": {
    "flexDirection": "row",
    "display": "flex",
    "background": "#00e3e3",
    "height": "80",
    "width": 100
  },
  "back": {
    "fontSize": "50",
    "color": "#ffffff"
  },
  "titletext": {
    "marginLeft": 33,
    "fontSize": "50",
    "color": "#ffffff"
  },
  "sellzone": {
    "background": "#ffffff",
    "display": "flex",
    "marginTop": "30",
    "width": "650",
    "height": "900",
    "border": "2px solid",
    "borderRadius": "20",
    "color": "#ffffff"
  },
  "zone": {
    "marginTop": "5",
    "marginLeft": "5",
    "marginRight": "5",
    "display": "flex",
    "flexDirection": "row"
  },
  "input": {
    "width": "400",
    "borderBottom": "3px solid",
    "color": "#9d9d9d",
    "fontSize": "40"
  },
  "descriptionzone": {
    "marginTop": "5",
    "width": "650",
    "height": "350"
  },
  "descriptioninput": {
    "marginLeft": "15",
    "width": "620",
    "height": "300",
    "fontSize": "40",
    "color": "#7b7b7b"
  },
  "bookphotozone": {
    "width": "600",
    "height": "200"
  },
  "uploadicon": {
    "marginLeft": "15",
    "width": "120",
    "height": "120"
  },
  "labelzone": {
    "marginTop": "30",
    "marginLeft": "5",
    "marginRight": "5",
    "display": "flex",
    "flexDirection": "row",
    "alignItem": "center",
    "flexWrap": "wrap"
  },
  "label": {
    "marginTop": "10",
    "textAlign": "center",
    "marginLeft": "20",
    "border": "2px solid",
    "borderRadius": "20",
    "color": "#00caca",
    "fontSize": "35",
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "labeltext": {
    "fontSize": "35",
    "color": "#00caca"
  },
  "text": {
    "fontSize": "40",
    "color": "rgb(0,0,0)"
  },
  "buy": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "230",
    "height": "100",
    "marginTop": "50",
    "border": "2px solid",
    "borderRadius": "20",
    "color": "#00caca",
    "background": "#00e3e3"
  },
  "buytext": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "shadow": {
    "boxShadow": "0 15px 30px rgba(0, 0, 0, 0.2)"
  },
  "lightshadow": {
    "boxShadow": "0 10px 15px rgba(0, 0, 0, 0.2)"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
var imgok = 1;

exports.default = {
  data: function data() {
    return {
      lists: ['课外书'],
      name: '',
      des: '',
      price: '',
      label: '',
      img: '',
      author: '',
      phone: '',
      campus: '',
      id: 1
    };
  },

  methods: {
    onchangename: function onchangename(event) {
      this.name = event.value;
    },
    onchangedes: function onchangedes(event) {
      this.des = event.value;
    },
    onchangeprice: function onchangeprice(event) {
      this.price = event.value;
    },
    onchangelabel: function onchangelabel(event) {
      this.lists.push(event.value);
    },
    onFileChange: function onFileChange() {
      var form = document.getElementById('book-form');
      var fd = new FormData(form);
      stream.fetch({
        method: 'POST',
        url: 'http://123.207.86.98:3000/api/book/' + this.id + '/img',
        type: 'json',
        body: fd,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    },
    goback: function goback() {},
    upload: function upload() {},
    sell: function sell() {
      if (this.name === '') {
        modal.toast({
          message: '图书名称未填写',
          duration: 2.0
        });
      } else if (this.des === '') {
        modal.toast({
          message: '详细描述未填写',
          duration: 2.0
        });
      } else if (this.price === '') {
        modal.toast({
          message: '价格未填写',
          duration: 2.0
        });
      } else if (imgok === 0) {
        modal.toast({
          message: '图片未上传',
          duration: 2.0
        });
      } else {
        stream.fetch({
          method: 'POST',
          url: 'http://123.207.86.98:3000/api/book',
          type: 'json',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            description: this.des,
            phone: this.phone,
            campus: this.campus,
            comment: this.lists.join(' '),
            price: this.price,
            author: this.author
          })
        }, function (ret) {
          if (!ret.ok) {
            modal.toast({
              message: '发布失败',
              duration: 2.0
            });
          } else {
            modal.toast({
              message: '已成功发布图书！',
              duration: 2.0
            });
          }
        });
      }
    }
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["title", "lightshadow"]
  }, [_c('text', {
    staticClass: ["back"],
    on: {
      "click": function($event) {
        _vm.goback()
      }
    }
  }), _c('text', {
    staticClass: ["titletext"]
  }, [_vm._v("我要卖书")])]), _c('div', {
    staticClass: ["sellzone", "shadow"]
  }, [_c('div', {
    staticClass: ["zone"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(" 书目名称: ")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchangename
    }
  })]), _c('div', {
    staticClass: ["descriptionzone"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(" 书目信息描述: ")]), _c('textarea', {
    staticClass: ["descriptioninput"],
    attrs: {
      "placeholder": "可输入相关书目信息",
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchangedes
    }
  })]), _c('form', {
    staticClass: ["bookphotozone"],
    attrs: {
      "id": "book-form"
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(" 书目照片: ")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "file",
      "id": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]), _c('div', {
    staticClass: ["zone"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(" 开价: ")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchangeprice
    }
  })]), _c('div', {
    staticClass: ["labelzone"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(" 标签:")]), _vm._l((_vm.lists), function(label) {
    return _c('text', {
      key: label,
      staticClass: ["label"]
    }, [_vm._v(_vm._s(label))])
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchangelabel
    }
  })], 2)], 1), _c('div', {
    staticClass: ["buy", "lightshadow"],
    on: {
      "click": function($event) {
        _vm.sell()
      }
    }
  }, [_c('text', {
    staticClass: ["buytext"]
  }, [_vm._v("提交")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/pages/goods/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e35a1900"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#F6F6F6",
    "width": 100
  },
  "img": {
    "alignItems": "center"
  },
  "covers": {
    "height": "300",
    "width": "200",
    "marginTop": "25",
    "marginRight": "25",
    "marginBottom": "25",
    "marginLeft": "25"
  },
  "list": {
    "width": 100
  },
  "panel": {
    "height": "350",
    "backgroundColor": "#FFFFFF",
    "marginLeft": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginTop": "20",
    "flexDirection": "row"
  },
  "info": {
    "marginLeft": "20",
    "marginRight": "20",
    "marginBottom": "10",
    "marginTop": "20",
    "justifyContent": "space-between"
  },
  "op": {
    "flexDirection": "row"
  },
  "right": {
    "width": "46",
    "height": "46"
  },
  "block": {
    "backgroundColor": "#FFFFFF",
    "width": "100",
    "top": "-35",
    "marginLeft": "200",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "line": {
    "backgroundColor": "#585858",
    "height": "0.5",
    "width": "80",
    "marginLeft": "10",
    "marginRight": "10"
  },
  "buttons": {
    "width": "120",
    "height": "50",
    "fontSize": "26",
    "borderColor": "#d4d4d4",
    "borderWidth": "2",
    "borderRadius": 35,
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5"
  },
  "text-h1": {
    "color": "#ECAA96",
    "fontSize": "32",
    "marginTop": "20"
  },
  "text-h2": {
    "marginTop": "40",
    "marginLeft": "10"
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
// const modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      lists: [{
        tradeId: '1',
        buyerId: '15331059',
        sellerId: '15331060',
        bookId: '2',
        publisherId: '15331060',
        name: 'test book2',
        author: 'tinglideng',
        img: 'default.jpg',
        campus: 'sysu',
        state: 3,
        description: 'test',
        phoneNum: '13719177172',
        comment: '计算机 测试',
        price: 13.7
      }, {
        tradeId: '2',
        buyerId: '15331059',
        sellerId: '15331060',
        bookId: '2',
        publisherId: '15331060',
        name: 'test book2',
        author: 'tinglideng',
        img: 'default.jpg',
        campus: 'sysu',
        state: 3,
        description: 'test',
        phoneNum: '13719177172',
        comment: '计算机 测试',
        price: 13.7
      }]
    };
  },
  created: function created() {
    var TRADE_URL = 'http://123.207.86.98:3000/api/trade';
    stream.fetch({
      method: 'GET',
      url: TRADE_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        // console.log('error');
      } else {
          // console.log('get' + ret)
          // this.lists = ret.data;
        }
    });
  },


  methods: {}
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.lists), function(item) {
    return _c('cell', {
      key: item.tradeId,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_vm._m(0, true), _c('div', {
      staticClass: ["info"]
    }, [_c('div', [_c('text', {
      attrs: {
        "calss": "text-h2"
      }
    }, [_vm._v(_vm._s(item.name))]), _c('text', {
      staticClass: ["text-h1"]
    }, [_vm._v(_vm._s(item.price))])]), _vm._m(1, true)])])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["img"]
  }, [_c('image', {
    staticClass: ["covers"],
    attrs: {
      "src": "https://upload-images.jianshu.io/upload_images/12650180-dd05a051754ddb19.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/400"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["op"]
  }, [_c('text', {
    staticClass: ["buttons"]
  }, [_vm._v("确认收货")]), _c('text', {
    staticClass: ["buttons"]
  }, [_vm._v("取消交易")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(55)
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(57)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sugerpocket/workspace/used-book-trading-platform/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b519e44"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);