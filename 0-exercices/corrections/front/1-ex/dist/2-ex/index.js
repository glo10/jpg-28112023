(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/axios/dist/browser/axios.cjs
  var require_axios = __commonJS({
    "node_modules/axios/dist/browser/axios.cjs"(exports, module) {
      "use strict";
      function bind(fn, thisArg) {
        return function wrap() {
          return fn.apply(thisArg, arguments);
        };
      }
      var { toString } = Object.prototype;
      var { getPrototypeOf } = Object;
      var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      var kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      var typeOfTest = (type) => (thing) => typeof thing === type;
      var { isArray } = Array;
      var isUndefined = typeOfTest("undefined");
      function isBuffer(val2) {
        return val2 !== null && !isUndefined(val2) && val2.constructor !== null && !isUndefined(val2.constructor) && isFunction(val2.constructor.isBuffer) && val2.constructor.isBuffer(val2);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val2) {
        let result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val2);
        } else {
          result = val2 && val2.buffer && isArrayBuffer(val2.buffer);
        }
        return result;
      }
      var isString = typeOfTest("string");
      var isFunction = typeOfTest("function");
      var isNumber = typeOfTest("number");
      var isObject = (thing) => thing !== null && typeof thing === "object";
      var isBoolean = (thing) => thing === true || thing === false;
      var isPlainObject = (val2) => {
        if (kindOf(val2) !== "object") {
          return false;
        }
        const prototype2 = getPrototypeOf(val2);
        return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val2) && !(Symbol.iterator in val2);
      };
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      var isStream = (val2) => isObject(val2) && isFunction(val2.pipe);
      var isFormData = (thing) => {
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
        kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      var isURLSearchParams = kindOfTest("URLSearchParams");
      var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function forEach(obj, fn, { allOwnKeys = false } = {}) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        let i;
        let l;
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            fn.call(null, obj[key], key, obj);
          }
        }
      }
      function findKey(obj, key) {
        key = key.toLowerCase();
        const keys = Object.keys(obj);
        let i = keys.length;
        let _key;
        while (i-- > 0) {
          _key = keys[i];
          if (key === _key.toLowerCase()) {
            return _key;
          }
        }
        return null;
      }
      var _global = (() => {
        if (typeof globalThis !== "undefined")
          return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      var isContextDefined = (context) => !isUndefined(context) && context !== _global;
      function merge() {
        const { caseless } = isContextDefined(this) && this || {};
        const result = {};
        const assignValue = (val2, key) => {
          const targetKey = caseless && findKey(result, key) || key;
          if (isPlainObject(result[targetKey]) && isPlainObject(val2)) {
            result[targetKey] = merge(result[targetKey], val2);
          } else if (isPlainObject(val2)) {
            result[targetKey] = merge({}, val2);
          } else if (isArray(val2)) {
            result[targetKey] = val2.slice();
          } else {
            result[targetKey] = val2;
          }
        };
        for (let i = 0, l = arguments.length; i < l; i++) {
          arguments[i] && forEach(arguments[i], assignValue);
        }
        return result;
      }
      var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val2, key) => {
          if (thisArg && isFunction(val2)) {
            a[key] = bind(val2, thisArg);
          } else {
            a[key] = val2;
          }
        }, { allOwnKeys });
        return a;
      };
      var stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      var inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null)
          return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      var endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      var toArray = (thing) => {
        if (!thing)
          return null;
        if (isArray(thing))
          return thing;
        let i = thing.length;
        if (!isNumber(i))
          return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      var forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      var matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      var isHTMLForm = kindOfTest("HTMLFormElement");
      var toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      var isRegExp = kindOfTest("RegExp");
      var reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      var freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value))
            return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      var toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
        return obj;
      };
      var noop = () => {
      };
      var toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      var ALPHA = "abcdefghijklmnopqrstuvwxyz";
      var DIGIT = "0123456789";
      var ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      function isSpecCompliantForm(thing) {
        return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
      }
      var toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      var isAsyncFn = kindOfTest("AsyncFunction");
      var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
      var utils$1 = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable
      };
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack;
        }
        this.message = message;
        this.name = "AxiosError";
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }
      utils$1.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils$1.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      var prototype$1 = AxiosError.prototype;
      var descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype$1, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype$1);
        utils$1.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      var httpAdapter = null;
      function isVisitable(thing) {
        return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
      }
      function removeBrackets(key) {
        return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
      }
      function renderKey(path, key, dots) {
        if (!path)
          return key;
        return path.concat(key).map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        }).join(dots ? "." : "");
      }
      function isFlatArray(arr) {
        return utils$1.isArray(arr) && !arr.some(isVisitable);
      }
      var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      function toFormData(obj, formData, options) {
        if (!utils$1.isObject(obj)) {
          throw new TypeError("target must be an object");
        }
        formData = formData || new FormData();
        options = utils$1.toFlatObject(options, {
          metaTokens: true,
          dots: false,
          indexes: false
        }, false, function defined(option, source) {
          return !utils$1.isUndefined(source[option]);
        });
        const metaTokens = options.metaTokens;
        const visitor = options.visitor || defaultVisitor;
        const dots = options.dots;
        const indexes = options.indexes;
        const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
        const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
        if (!utils$1.isFunction(visitor)) {
          throw new TypeError("visitor must be a function");
        }
        function convertValue(value) {
          if (value === null)
            return "";
          if (utils$1.isDate(value)) {
            return value.toISOString();
          }
          if (!useBlob && utils$1.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
          }
          if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
            return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
          }
          return value;
        }
        function defaultVisitor(value, key, path) {
          let arr = value;
          if (value && !path && typeof value === "object") {
            if (utils$1.endsWith(key, "{}")) {
              key = metaTokens ? key : key.slice(0, -2);
              value = JSON.stringify(value);
            } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
              key = removeBrackets(key);
              arr.forEach(function each(el, index) {
                !(utils$1.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                  convertValue(el)
                );
              });
              return false;
            }
          }
          if (isVisitable(value)) {
            return true;
          }
          formData.append(renderKey(path, key, dots), convertValue(value));
          return false;
        }
        const stack = [];
        const exposedHelpers = Object.assign(predicates, {
          defaultVisitor,
          convertValue,
          isVisitable
        });
        function build(value, path) {
          if (utils$1.isUndefined(value))
            return;
          if (stack.indexOf(value) !== -1) {
            throw Error("Circular reference detected in " + path.join("."));
          }
          stack.push(value);
          utils$1.forEach(value, function each(el, key) {
            const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
              formData,
              el,
              utils$1.isString(key) ? key.trim() : key,
              path,
              exposedHelpers
            );
            if (result === true) {
              build(el, path ? path.concat(key) : [key]);
            }
          });
          stack.pop();
        }
        if (!utils$1.isObject(obj)) {
          throw new TypeError("data must be an object");
        }
        build(obj);
        return formData;
      }
      function encode$1(str) {
        const charMap = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0"
        };
        return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
          return charMap[match];
        });
      }
      function AxiosURLSearchParams(params, options) {
        this._pairs = [];
        params && toFormData(params, this, options);
      }
      var prototype = AxiosURLSearchParams.prototype;
      prototype.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode$1);
        } : encode$1;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      function encode(val2) {
        return encodeURIComponent(val2).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      function buildURL(url, params, options) {
        if (!params) {
          return url;
        }
        const _encode = options && options.encode || encode;
        const serializeFn = options && options.serialize;
        let serializedParams;
        if (serializeFn) {
          serializedParams = serializeFn(params, options);
        } else {
          serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
        }
        if (serializedParams) {
          const hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      }
      var InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils$1.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      var InterceptorManager$1 = InterceptorManager;
      var transitionalDefaults = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
      var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
      var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
      var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
      var platform$1 = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams$1,
          FormData: FormData$1,
          Blob: Blob$1
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
      var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      var hasStandardBrowserEnv = ((product) => {
        return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
      })(typeof navigator !== "undefined" && navigator.product);
      var hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      var utils = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        hasBrowserEnv,
        hasStandardBrowserWebWorkerEnv,
        hasStandardBrowserEnv
      });
      var platform = {
        ...utils,
        ...platform$1
      };
      function toURLEncodedForm(data, options) {
        return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
          visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils$1.isBuffer(value)) {
              this.append(key, value.toString("base64"));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          }
        }, options));
      }
      function parsePropPath(name) {
        return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
          return match[0] === "[]" ? "" : match[1] || match[0];
        });
      }
      function arrayToObject(arr) {
        const obj = {};
        const keys = Object.keys(arr);
        let i;
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = arr[key];
        }
        return obj;
      }
      function formDataToJSON(formData) {
        function buildPath(path, value, target, index) {
          let name = path[index++];
          const isNumericKey = Number.isFinite(+name);
          const isLast = index >= path.length;
          name = !name && utils$1.isArray(target) ? target.length : name;
          if (isLast) {
            if (utils$1.hasOwnProp(target, name)) {
              target[name] = [target[name], value];
            } else {
              target[name] = value;
            }
            return !isNumericKey;
          }
          if (!target[name] || !utils$1.isObject(target[name])) {
            target[name] = [];
          }
          const result = buildPath(path, value, target[name], index);
          if (result && utils$1.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
          }
          return !isNumericKey;
        }
        if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
          const obj = {};
          utils$1.forEachEntry(formData, (name, value) => {
            buildPath(parsePropPath(name), value, obj, 0);
          });
          return obj;
        }
        return null;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils$1.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils$1.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: ["xhr", "http"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils$1.isObject(data);
          if (isObjectPayload && utils$1.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils$1.isFormData(data);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data;
            }
            return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
          }
          if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
            return data;
          }
          if (utils$1.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils$1.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional && transitional.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
        defaults.headers[method] = {};
      });
      var defaults$1 = defaults;
      var ignoreDuplicateOf = utils$1.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      var parseHeaders = (rawHeaders) => {
        const parsed = {};
        let key;
        let val2;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val2 = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val2);
            } else {
              parsed[key] = [val2];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val2 : val2;
          }
        });
        return parsed;
      };
      var $internals = Symbol("internals");
      function normalizeHeader(header) {
        return header && String(header).trim().toLowerCase();
      }
      function normalizeValue(value) {
        if (value === false || value == null) {
          return value;
        }
        return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
      }
      function parseTokens(str) {
        const tokens = /* @__PURE__ */ Object.create(null);
        const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let match;
        while (match = tokensRE.exec(str)) {
          tokens[match[1]] = match[2];
        }
        return tokens;
      }
      var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
        if (utils$1.isFunction(filter)) {
          return filter.call(this, value, header);
        }
        if (isHeaderNameFilter) {
          value = header;
        }
        if (!utils$1.isString(value))
          return;
        if (utils$1.isString(filter)) {
          return value.indexOf(filter) !== -1;
        }
        if (utils$1.isRegExp(filter)) {
          return filter.test(value);
        }
      }
      function formatHeader(header) {
        return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
      }
      function buildAccessors(obj, header) {
        const accessorName = utils$1.toCamelCase(" " + header);
        ["get", "set", "has"].forEach((methodName) => {
          Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
              return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
          });
        });
      }
      var AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils$1.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils$1.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils$1.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils$1.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils$1.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils$1.forEach(this, (value, header) => {
            const key = utils$1.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils$1.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype2 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype2, _header);
              accessors[lHeader] = true;
            }
          }
          utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils$1.freezeMethods(AxiosHeaders);
      var AxiosHeaders$1 = AxiosHeaders;
      function transformData(fns, response) {
        const config = this || defaults$1;
        const context = response || config;
        const headers = AxiosHeaders$1.from(context.headers);
        let data = context.data;
        utils$1.forEach(fns, function transform(fn) {
          data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
        });
        headers.normalize();
        return data;
      }
      function isCancel(value) {
        return !!(value && value.__CANCEL__);
      }
      function CanceledError(message, config, request) {
        AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
        this.name = "CanceledError";
      }
      utils$1.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });
      function settle(resolve, reject, response) {
        const validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
            response.config,
            response.request,
            response
          ));
        }
      }
      var cookies = platform.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure) {
            const cookie = [name + "=" + encodeURIComponent(value)];
            utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
            utils$1.isString(path) && cookie.push("path=" + path);
            utils$1.isString(domain) && cookie.push("domain=" + domain);
            secure === true && cookie.push("secure");
            document.cookie = cookie.join("; ");
          },
          read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        }
      ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {
          },
          read() {
            return null;
          },
          remove() {
          }
        }
      );
      function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      }
      function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      }
      function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      }
      var isURLSameOrigin = platform.hasStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin2(requestURL) {
            const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv() {
          return function isURLSameOrigin2() {
            return true;
          };
        }()
      );
      function parseProtocol(url) {
        const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || "";
      }
      function speedometer(samplesCount, min) {
        samplesCount = samplesCount || 10;
        const bytes = new Array(samplesCount);
        const timestamps = new Array(samplesCount);
        let head = 0;
        let tail = 0;
        let firstSampleTS;
        min = min !== void 0 ? min : 1e3;
        return function push(chunkLength) {
          const now = Date.now();
          const startedAt = timestamps[tail];
          if (!firstSampleTS) {
            firstSampleTS = now;
          }
          bytes[head] = chunkLength;
          timestamps[head] = now;
          let i = tail;
          let bytesCount = 0;
          while (i !== head) {
            bytesCount += bytes[i++];
            i = i % samplesCount;
          }
          head = (head + 1) % samplesCount;
          if (head === tail) {
            tail = (tail + 1) % samplesCount;
          }
          if (now - firstSampleTS < min) {
            return;
          }
          const passed = startedAt && now - startedAt;
          return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
        };
      }
      function progressEventReducer(listener, isDownloadStream) {
        let bytesNotified = 0;
        const _speedometer = speedometer(50, 250);
        return (e) => {
          const loaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const progressBytes = loaded - bytesNotified;
          const rate = _speedometer(progressBytes);
          const inRange = loaded <= total;
          bytesNotified = loaded;
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
            event: e
          };
          data[isDownloadStream ? "download" : "upload"] = true;
          listener(data);
        };
      }
      var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      var xhrAdapter = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          let requestData = config.data;
          const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
          let { responseType, withXSRFToken } = config;
          let onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          let contentType;
          if (utils$1.isFormData(requestData)) {
            if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
              requestHeaders.setContentType(false);
            } else if ((contentType = requestHeaders.getContentType()) !== false) {
              const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
              requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
            }
          }
          let request = new XMLHttpRequest();
          if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
          }
          const fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders$1.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          if (platform.hasStandardBrowserEnv) {
            withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
            if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(fullPath)) {
              const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
              if (xsrfValue) {
                requestHeaders.set(config.xsrfHeaderName, xsrfValue);
              }
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val2, key) {
              request.setRequestHeader(key, val2);
            });
          }
          if (!utils$1.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
          }
          if (config.cancelToken || config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData || null);
        });
      };
      var knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter
      };
      utils$1.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      var renderReason = (reason) => `- ${reason}`;
      var isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
      var adapters = {
        getAdapter: (adapters2) => {
          adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
          const { length } = adapters2;
          let nameOrAdapter;
          let adapter;
          const rejectedReasons = {};
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters2[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
              adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
              if (adapter === void 0) {
                throw new AxiosError(`Unknown adapter '${id}'`);
              }
            }
            if (adapter) {
              break;
            }
            rejectedReasons[id || "#" + i] = adapter;
          }
          if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(
              ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
            );
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError(
              `There is no suitable adapter to dispatch the request ` + s,
              "ERR_NOT_SUPPORT"
            );
          }
          return adapter;
        },
        adapters: knownAdapters
      };
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError(null, config);
        }
      }
      function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = AxiosHeaders$1.from(config.headers);
        config.data = transformData.call(
          config,
          config.transformRequest
        );
        if (["post", "put", "patch"].indexOf(config.method) !== -1) {
          config.headers.setContentType("application/x-www-form-urlencoded", false);
        }
        const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            config.transformResponse,
            response
          );
          response.headers = AxiosHeaders$1.from(response.headers);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                config.transformResponse,
                reason.response
              );
              reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
            }
          }
          return Promise.reject(reason);
        });
      }
      var headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
      function mergeConfig(config1, config2) {
        config2 = config2 || {};
        const config = {};
        function getMergedValue(target, source, caseless) {
          if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
            return utils$1.merge.call({ caseless }, target, source);
          } else if (utils$1.isPlainObject(source)) {
            return utils$1.merge({}, source);
          } else if (utils$1.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(a, b, caseless) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(a, b, caseless);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a, caseless);
          }
        }
        function valueFromConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          }
        }
        function defaultToConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a);
          }
        }
        function mergeDirectKeys(a, b, prop) {
          if (prop in config2) {
            return getMergedValue(a, b);
          } else if (prop in config1) {
            return getMergedValue(void 0, a);
          }
        }
        const mergeMap = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          withXSRFToken: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
        };
        utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
          const merge2 = mergeMap[prop] || mergeDeepProperties;
          const configValue = merge2(config1[prop], config2[prop], prop);
          utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      }
      var VERSION = "1.6.2";
      var validators$1 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators$1.transitional = function transitional(validator2, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator2 === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator2 ? validator2(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        const keys = Object.keys(options);
        let i = keys.length;
        while (i-- > 0) {
          const opt = keys[i];
          const validator2 = schema[opt];
          if (validator2) {
            const value = options[opt];
            const result = value === void 0 || validator2(value, opt, options);
            if (result !== true) {
              throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      var validator = {
        assertOptions,
        validators: validators$1
      };
      var validators = validator.validators;
      var Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager$1(),
            response: new InterceptorManager$1()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional, paramsSerializer, headers } = config;
          if (transitional !== void 0) {
            validator.assertOptions(transitional, {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
              }, true);
            }
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders = headers && utils$1.merge(
            headers.common,
            headers[config.method]
          );
          headers && utils$1.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      var Axios$1 = Axios;
      var CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners)
              return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      var CancelToken$1 = CancelToken;
      function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      }
      function isAxiosError(payload) {
        return utils$1.isObject(payload) && payload.isAxiosError === true;
      }
      var HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      var HttpStatusCode$1 = HttpStatusCode;
      function createInstance(defaultConfig) {
        const context = new Axios$1(defaultConfig);
        const instance = bind(Axios$1.prototype.request, context);
        utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
        utils$1.extend(instance, context, null, { allOwnKeys: true });
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults$1);
      axios.Axios = Axios$1;
      axios.CanceledError = CanceledError;
      axios.CancelToken = CancelToken$1;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData;
      axios.AxiosError = AxiosError;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders$1;
      axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters.getAdapter;
      axios.HttpStatusCode = HttpStatusCode$1;
      axios.default = axios;
      module.exports = axios;
    }
  });

  // node_modules/fast-xml-parser/src/util.js
  var require_util = __commonJS({
    "node_modules/fast-xml-parser/src/util.js"(exports) {
      "use strict";
      var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
      var regexName = new RegExp("^" + nameRegexp + "$");
      var getAllMatches = function(string, regex) {
        const matches = [];
        let match = regex.exec(string);
        while (match) {
          const allmatches = [];
          allmatches.startIndex = regex.lastIndex - match[0].length;
          const len = match.length;
          for (let index = 0; index < len; index++) {
            allmatches.push(match[index]);
          }
          matches.push(allmatches);
          match = regex.exec(string);
        }
        return matches;
      };
      var isName = function(string) {
        const match = regexName.exec(string);
        return !(match === null || typeof match === "undefined");
      };
      exports.isExist = function(v) {
        return typeof v !== "undefined";
      };
      exports.isEmptyObject = function(obj) {
        return Object.keys(obj).length === 0;
      };
      exports.merge = function(target, a, arrayMode) {
        if (a) {
          const keys = Object.keys(a);
          const len = keys.length;
          for (let i = 0; i < len; i++) {
            if (arrayMode === "strict") {
              target[keys[i]] = [a[keys[i]]];
            } else {
              target[keys[i]] = a[keys[i]];
            }
          }
        }
      };
      exports.getValue = function(v) {
        if (exports.isExist(v)) {
          return v;
        } else {
          return "";
        }
      };
      exports.isName = isName;
      exports.getAllMatches = getAllMatches;
      exports.nameRegexp = nameRegexp;
    }
  });

  // node_modules/fast-xml-parser/src/validator.js
  var require_validator = __commonJS({
    "node_modules/fast-xml-parser/src/validator.js"(exports) {
      "use strict";
      var util = require_util();
      var defaultOptions = {
        allowBooleanAttributes: false,
        //A tag can have attributes without any value
        unpairedTags: []
      };
      exports.validate = function(xmlData, options) {
        options = Object.assign({}, defaultOptions, options);
        const tags = [];
        let tagFound = false;
        let reachedRoot = false;
        if (xmlData[0] === "\uFEFF") {
          xmlData = xmlData.substr(1);
        }
        for (let i = 0; i < xmlData.length; i++) {
          if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
            i += 2;
            i = readPI(xmlData, i);
            if (i.err)
              return i;
          } else if (xmlData[i] === "<") {
            let tagStartPos = i;
            i++;
            if (xmlData[i] === "!") {
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else {
              let closingTag = false;
              if (xmlData[i] === "/") {
                closingTag = true;
                i++;
              }
              let tagName = "";
              for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
                tagName += xmlData[i];
              }
              tagName = tagName.trim();
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substring(0, tagName.length - 1);
                i--;
              }
              if (!validateTagName(tagName)) {
                let msg;
                if (tagName.trim().length === 0) {
                  msg = "Invalid space after '<'.";
                } else {
                  msg = "Tag '" + tagName + "' is an invalid name.";
                }
                return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
              }
              const result = readAttributeStr(xmlData, i);
              if (result === false) {
                return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
              }
              let attrStr = result.value;
              i = result.index;
              if (attrStr[attrStr.length - 1] === "/") {
                const attrStrStart = i - attrStr.length;
                attrStr = attrStr.substring(0, attrStr.length - 1);
                const isValid = validateAttributeString(attrStr, options);
                if (isValid === true) {
                  tagFound = true;
                } else {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                }
              } else if (closingTag) {
                if (!result.tagClosed) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                } else if (attrStr.trim().length > 0) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                } else {
                  const otg = tags.pop();
                  if (tagName !== otg.tagName) {
                    let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                    return getErrorObject(
                      "InvalidTag",
                      "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                      getLineNumberForPosition(xmlData, tagStartPos)
                    );
                  }
                  if (tags.length == 0) {
                    reachedRoot = true;
                  }
                }
              } else {
                const isValid = validateAttributeString(attrStr, options);
                if (isValid !== true) {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                }
                if (reachedRoot === true) {
                  return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
                } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                } else {
                  tags.push({ tagName, tagStartPos });
                }
                tagFound = true;
              }
              for (i++; i < xmlData.length; i++) {
                if (xmlData[i] === "<") {
                  if (xmlData[i + 1] === "!") {
                    i++;
                    i = readCommentAndCDATA(xmlData, i);
                    continue;
                  } else if (xmlData[i + 1] === "?") {
                    i = readPI(xmlData, ++i);
                    if (i.err)
                      return i;
                  } else {
                    break;
                  }
                } else if (xmlData[i] === "&") {
                  const afterAmp = validateAmpersand(xmlData, i);
                  if (afterAmp == -1)
                    return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                  i = afterAmp;
                } else {
                  if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                    return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                  }
                }
              }
              if (xmlData[i] === "<") {
                i--;
              }
            }
          } else {
            if (isWhiteSpace(xmlData[i])) {
              continue;
            }
            return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
          }
        }
        if (!tagFound) {
          return getErrorObject("InvalidXml", "Start tag expected.", 1);
        } else if (tags.length == 1) {
          return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
        } else if (tags.length > 0) {
          return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
        }
        return true;
      };
      function isWhiteSpace(char) {
        return char === " " || char === "	" || char === "\n" || char === "\r";
      }
      function readPI(xmlData, i) {
        const start = i;
        for (; i < xmlData.length; i++) {
          if (xmlData[i] == "?" || xmlData[i] == " ") {
            const tagname = xmlData.substr(start, i - start);
            if (i > 5 && tagname === "xml") {
              return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
            } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
              i++;
              break;
            } else {
              continue;
            }
          }
        }
        return i;
      }
      function readCommentAndCDATA(xmlData, i) {
        if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
          for (i += 3; i < xmlData.length; i++) {
            if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
              i += 2;
              break;
            }
          }
        } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
          let angleBracketsCount = 1;
          for (i += 8; i < xmlData.length; i++) {
            if (xmlData[i] === "<") {
              angleBracketsCount++;
            } else if (xmlData[i] === ">") {
              angleBracketsCount--;
              if (angleBracketsCount === 0) {
                break;
              }
            }
          }
        } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
          for (i += 8; i < xmlData.length; i++) {
            if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
              i += 2;
              break;
            }
          }
        }
        return i;
      }
      var doubleQuote = '"';
      var singleQuote = "'";
      function readAttributeStr(xmlData, i) {
        let attrStr = "";
        let startChar = "";
        let tagClosed = false;
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
            if (startChar === "") {
              startChar = xmlData[i];
            } else if (startChar !== xmlData[i]) {
            } else {
              startChar = "";
            }
          } else if (xmlData[i] === ">") {
            if (startChar === "") {
              tagClosed = true;
              break;
            }
          }
          attrStr += xmlData[i];
        }
        if (startChar !== "") {
          return false;
        }
        return {
          value: attrStr,
          index: i,
          tagClosed
        };
      }
      var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
      function validateAttributeString(attrStr, options) {
        const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
        const attrNames = {};
        for (let i = 0; i < matches.length; i++) {
          if (matches[i][1].length === 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
          } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
          } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
            return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
          }
          const attrName = matches[i][2];
          if (!validateAttrName(attrName)) {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
          }
          if (!attrNames.hasOwnProperty(attrName)) {
            attrNames[attrName] = 1;
          } else {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
          }
        }
        return true;
      }
      function validateNumberAmpersand(xmlData, i) {
        let re = /\d/;
        if (xmlData[i] === "x") {
          i++;
          re = /[\da-fA-F]/;
        }
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === ";")
            return i;
          if (!xmlData[i].match(re))
            break;
        }
        return -1;
      }
      function validateAmpersand(xmlData, i) {
        i++;
        if (xmlData[i] === ";")
          return -1;
        if (xmlData[i] === "#") {
          i++;
          return validateNumberAmpersand(xmlData, i);
        }
        let count = 0;
        for (; i < xmlData.length; i++, count++) {
          if (xmlData[i].match(/\w/) && count < 20)
            continue;
          if (xmlData[i] === ";")
            break;
          return -1;
        }
        return i;
      }
      function getErrorObject(code, message, lineNumber) {
        return {
          err: {
            code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
          }
        };
      }
      function validateAttrName(attrName) {
        return util.isName(attrName);
      }
      function validateTagName(tagname) {
        return util.isName(tagname);
      }
      function getLineNumberForPosition(xmlData, index) {
        const lines = xmlData.substring(0, index).split(/\r?\n/);
        return {
          line: lines.length,
          // column number is last line's length + 1, because column numbering starts at 1:
          col: lines[lines.length - 1].length + 1
        };
      }
      function getPositionFromMatch(match) {
        return match.startIndex + match[1].length;
      }
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
  var require_OptionsBuilder = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
      var defaultOptions = {
        preserveOrder: false,
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        removeNSPrefix: false,
        // remove NS from tag name or attribute name if true
        allowBooleanAttributes: false,
        //a tag can have attributes without any value
        //ignoreRootElement : false,
        parseTagValue: true,
        parseAttributeValue: false,
        trimValues: true,
        //Trim string values of tag and attributes
        cdataPropName: false,
        numberParseOptions: {
          hex: true,
          leadingZeros: true,
          eNotation: true
        },
        tagValueProcessor: function(tagName, val2) {
          return val2;
        },
        attributeValueProcessor: function(attrName, val2) {
          return val2;
        },
        stopNodes: [],
        //nested tags will not be parsed even for errors
        alwaysCreateTextNode: false,
        isArray: () => false,
        commentPropName: false,
        unpairedTags: [],
        processEntities: true,
        htmlEntities: false,
        ignoreDeclaration: false,
        ignorePiTags: false,
        transformTagName: false,
        transformAttributeName: false,
        updateTag: function(tagName, jPath, attrs) {
          return tagName;
        }
        // skipEmptyListItem: false
      };
      var buildOptions = function(options) {
        return Object.assign({}, defaultOptions, options);
      };
      exports.buildOptions = buildOptions;
      exports.defaultOptions = defaultOptions;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
  var require_xmlNode = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
      "use strict";
      var XmlNode = class {
        constructor(tagname) {
          this.tagname = tagname;
          this.child = [];
          this[":@"] = {};
        }
        add(key, val2) {
          if (key === "__proto__")
            key = "#__proto__";
          this.child.push({ [key]: val2 });
        }
        addChild(node) {
          if (node.tagname === "__proto__")
            node.tagname = "#__proto__";
          if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
          } else {
            this.child.push({ [node.tagname]: node.child });
          }
        }
      };
      module.exports = XmlNode;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
  var require_DocTypeReader = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
      var util = require_util();
      function readDocType(xmlData, i) {
        const entities = {};
        if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
          i = i + 9;
          let angleBracketsCount = 1;
          let hasBody = false, comment = false;
          let exp = "";
          for (; i < xmlData.length; i++) {
            if (xmlData[i] === "<" && !comment) {
              if (hasBody && isEntity(xmlData, i)) {
                i += 7;
                [entityName, val, i] = readEntityExp(xmlData, i + 1);
                if (val.indexOf("&") === -1)
                  entities[validateEntityName(entityName)] = {
                    regx: RegExp(`&${entityName};`, "g"),
                    val
                  };
              } else if (hasBody && isElement(xmlData, i))
                i += 8;
              else if (hasBody && isAttlist(xmlData, i))
                i += 8;
              else if (hasBody && isNotation(xmlData, i))
                i += 9;
              else if (isComment)
                comment = true;
              else
                throw new Error("Invalid DOCTYPE");
              angleBracketsCount++;
              exp = "";
            } else if (xmlData[i] === ">") {
              if (comment) {
                if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                  comment = false;
                  angleBracketsCount--;
                }
              } else {
                angleBracketsCount--;
              }
              if (angleBracketsCount === 0) {
                break;
              }
            } else if (xmlData[i] === "[") {
              hasBody = true;
            } else {
              exp += xmlData[i];
            }
          }
          if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
          }
        } else {
          throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return { entities, i };
      }
      function readEntityExp(xmlData, i) {
        let entityName2 = "";
        for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
          entityName2 += xmlData[i];
        }
        entityName2 = entityName2.trim();
        if (entityName2.indexOf(" ") !== -1)
          throw new Error("External entites are not supported");
        const startChar = xmlData[i++];
        let val2 = "";
        for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
          val2 += xmlData[i];
        }
        return [entityName2, val2, i];
      }
      function isComment(xmlData, i) {
        if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-")
          return true;
        return false;
      }
      function isEntity(xmlData, i) {
        if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y")
          return true;
        return false;
      }
      function isElement(xmlData, i) {
        if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T")
          return true;
        return false;
      }
      function isAttlist(xmlData, i) {
        if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T")
          return true;
        return false;
      }
      function isNotation(xmlData, i) {
        if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N")
          return true;
        return false;
      }
      function validateEntityName(name) {
        if (util.isName(name))
          return name;
        else
          throw new Error(`Invalid entity name ${name}`);
      }
      module.exports = readDocType;
    }
  });

  // node_modules/strnum/strnum.js
  var require_strnum = __commonJS({
    "node_modules/strnum/strnum.js"(exports, module) {
      var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
      var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
      if (!Number.parseInt && window.parseInt) {
        Number.parseInt = window.parseInt;
      }
      if (!Number.parseFloat && window.parseFloat) {
        Number.parseFloat = window.parseFloat;
      }
      var consider = {
        hex: true,
        leadingZeros: true,
        decimalPoint: ".",
        eNotation: true
        //skipLike: /regex/
      };
      function toNumber(str, options = {}) {
        options = Object.assign({}, consider, options);
        if (!str || typeof str !== "string")
          return str;
        let trimmedStr = str.trim();
        if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
          return str;
        else if (options.hex && hexRegex.test(trimmedStr)) {
          return Number.parseInt(trimmedStr, 16);
        } else {
          const match = numRegex.exec(trimmedStr);
          if (match) {
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]);
            const eNotation = match[4] || match[6];
            if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
              return str;
            else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
              return str;
            else {
              const num = Number(trimmedStr);
              const numStr = "" + num;
              if (numStr.search(/[eE]/) !== -1) {
                if (options.eNotation)
                  return num;
                else
                  return str;
              } else if (eNotation) {
                if (options.eNotation)
                  return num;
                else
                  return str;
              } else if (trimmedStr.indexOf(".") !== -1) {
                if (numStr === "0" && numTrimmedByZeros === "")
                  return num;
                else if (numStr === numTrimmedByZeros)
                  return num;
                else if (sign && numStr === "-" + numTrimmedByZeros)
                  return num;
                else
                  return str;
              }
              if (leadingZeros) {
                if (numTrimmedByZeros === numStr)
                  return num;
                else if (sign + numTrimmedByZeros === numStr)
                  return num;
                else
                  return str;
              }
              if (trimmedStr === numStr)
                return num;
              else if (trimmedStr === sign + numStr)
                return num;
              return str;
            }
          } else {
            return str;
          }
        }
      }
      function trimZeros(numStr) {
        if (numStr && numStr.indexOf(".") !== -1) {
          numStr = numStr.replace(/0+$/, "");
          if (numStr === ".")
            numStr = "0";
          else if (numStr[0] === ".")
            numStr = "0" + numStr;
          else if (numStr[numStr.length - 1] === ".")
            numStr = numStr.substr(0, numStr.length - 1);
          return numStr;
        }
        return numStr;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
  var require_OrderedObjParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
      "use strict";
      var util = require_util();
      var xmlNode = require_xmlNode();
      var readDocType = require_DocTypeReader();
      var toNumber = require_strnum();
      var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
      var OrderedObjParser = class {
        constructor(options) {
          this.options = options;
          this.currentNode = null;
          this.tagsNodeStack = [];
          this.docTypeEntities = {};
          this.lastEntities = {
            "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
            "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
            "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
            "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
          };
          this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
          this.htmlEntities = {
            "space": { regex: /&(nbsp|#160);/g, val: " " },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
            "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
            "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
            "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
            "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
            "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
            "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
          };
          this.addExternalEntities = addExternalEntities;
          this.parseXml = parseXml;
          this.parseTextData = parseTextData;
          this.resolveNameSpace = resolveNameSpace;
          this.buildAttributesMap = buildAttributesMap;
          this.isItStopNode = isItStopNode;
          this.replaceEntitiesValue = replaceEntitiesValue;
          this.readStopNodeData = readStopNodeData;
          this.saveTextToParentTag = saveTextToParentTag;
          this.addChild = addChild;
        }
      };
      function addExternalEntities(externalEntities) {
        const entKeys = Object.keys(externalEntities);
        for (let i = 0; i < entKeys.length; i++) {
          const ent = entKeys[i];
          this.lastEntities[ent] = {
            regex: new RegExp("&" + ent + ";", "g"),
            val: externalEntities[ent]
          };
        }
      }
      function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
        if (val2 !== void 0) {
          if (this.options.trimValues && !dontTrim) {
            val2 = val2.trim();
          }
          if (val2.length > 0) {
            if (!escapeEntities)
              val2 = this.replaceEntitiesValue(val2);
            const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
            if (newval === null || newval === void 0) {
              return val2;
            } else if (typeof newval !== typeof val2 || newval !== val2) {
              return newval;
            } else if (this.options.trimValues) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              const trimmedVal = val2.trim();
              if (trimmedVal === val2) {
                return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
              } else {
                return val2;
              }
            }
          }
        }
      }
      function resolveNameSpace(tagname) {
        if (this.options.removeNSPrefix) {
          const tags = tagname.split(":");
          const prefix = tagname.charAt(0) === "/" ? "/" : "";
          if (tags[0] === "xmlns") {
            return "";
          }
          if (tags.length === 2) {
            tagname = prefix + tags[1];
          }
        }
        return tagname;
      }
      var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function buildAttributesMap(attrStr, jPath, tagName) {
        if (!this.options.ignoreAttributes && typeof attrStr === "string") {
          const matches = util.getAllMatches(attrStr, attrsRegx);
          const len = matches.length;
          const attrs = {};
          for (let i = 0; i < len; i++) {
            const attrName = this.resolveNameSpace(matches[i][1]);
            let oldVal = matches[i][4];
            let aName = this.options.attributeNamePrefix + attrName;
            if (attrName.length) {
              if (this.options.transformAttributeName) {
                aName = this.options.transformAttributeName(aName);
              }
              if (aName === "__proto__")
                aName = "#__proto__";
              if (oldVal !== void 0) {
                if (this.options.trimValues) {
                  oldVal = oldVal.trim();
                }
                oldVal = this.replaceEntitiesValue(oldVal);
                const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                if (newVal === null || newVal === void 0) {
                  attrs[aName] = oldVal;
                } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                  attrs[aName] = newVal;
                } else {
                  attrs[aName] = parseValue(
                    oldVal,
                    this.options.parseAttributeValue,
                    this.options.numberParseOptions
                  );
                }
              } else if (this.options.allowBooleanAttributes) {
                attrs[aName] = true;
              }
            }
          }
          if (!Object.keys(attrs).length) {
            return;
          }
          if (this.options.attributesGroupName) {
            const attrCollection = {};
            attrCollection[this.options.attributesGroupName] = attrs;
            return attrCollection;
          }
          return attrs;
        }
      }
      var parseXml = function(xmlData) {
        xmlData = xmlData.replace(/\r\n?/g, "\n");
        const xmlObj = new xmlNode("!xml");
        let currentNode = xmlObj;
        let textData = "";
        let jPath = "";
        for (let i = 0; i < xmlData.length; i++) {
          const ch = xmlData[i];
          if (ch === "<") {
            if (xmlData[i + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
              let tagName = xmlData.substring(i + 2, closeIndex).trim();
              if (this.options.removeNSPrefix) {
                const colonIndex = tagName.indexOf(":");
                if (colonIndex !== -1) {
                  tagName = tagName.substr(colonIndex + 1);
                }
              }
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode) {
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
              }
              const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
              if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
              }
              let propIndex = 0;
              if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                this.tagsNodeStack.pop();
              } else {
                propIndex = jPath.lastIndexOf(".");
              }
              jPath = jPath.substring(0, propIndex);
              currentNode = this.tagsNodeStack.pop();
              textData = "";
              i = closeIndex;
            } else if (xmlData[i + 1] === "?") {
              let tagData = readTagExp(xmlData, i, false, "?>");
              if (!tagData)
                throw new Error("Pi Tag is not closed.");
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
              } else {
                const childNode = new xmlNode(tagData.tagName);
                childNode.add(this.options.textNodeName, "");
                if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                }
                this.addChild(currentNode, childNode, jPath);
              }
              i = tagData.closeIndex + 1;
            } else if (xmlData.substr(i + 1, 3) === "!--") {
              const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
              if (this.options.commentPropName) {
                const comment = xmlData.substring(i + 4, endIndex - 2);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
              }
              i = endIndex;
            } else if (xmlData.substr(i + 1, 2) === "!D") {
              const result = readDocType(xmlData, i);
              this.docTypeEntities = result.entities;
              i = result.i;
            } else if (xmlData.substr(i + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
              const tagExp = xmlData.substring(i + 9, closeIndex);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.cdataPropName) {
                currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
              } else {
                let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
                if (val2 == void 0)
                  val2 = "";
                currentNode.add(this.options.textNodeName, val2);
              }
              i = closeIndex + 2;
            } else {
              let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
              let tagName = result.tagName;
              const rawTagName = result.rawTagName;
              let tagExp = result.tagExp;
              let attrExpPresent = result.attrExpPresent;
              let closeIndex = result.closeIndex;
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode && textData) {
                if (currentNode.tagname !== "!xml") {
                  textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                }
              }
              const lastTag = currentNode;
              if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                currentNode = this.tagsNodeStack.pop();
                jPath = jPath.substring(0, jPath.lastIndexOf("."));
              }
              if (tagName !== xmlObj.tagname) {
                jPath += jPath ? "." + tagName : tagName;
              }
              if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                let tagContent = "";
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  i = result.closeIndex;
                } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                  i = result.closeIndex;
                } else {
                  const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                  if (!result2)
                    throw new Error(`Unexpected end of ${rawTagName}`);
                  i = result2.i;
                  tagContent = result2.tagContent;
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                if (tagContent) {
                  tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                }
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
                childNode.add(this.options.textNodeName, tagContent);
                this.addChild(currentNode, childNode, jPath);
              } else {
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  if (tagName[tagName.length - 1] === "/") {
                    tagName = tagName.substr(0, tagName.length - 1);
                    jPath = jPath.substr(0, jPath.length - 1);
                    tagExp = tagName;
                  } else {
                    tagExp = tagExp.substr(0, tagExp.length - 1);
                  }
                  if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                  }
                  const childNode = new xmlNode(tagName);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  jPath = jPath.substr(0, jPath.lastIndexOf("."));
                } else {
                  const childNode = new xmlNode(tagName);
                  this.tagsNodeStack.push(currentNode);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  currentNode = childNode;
                }
                textData = "";
                i = closeIndex;
              }
            }
          } else {
            textData += xmlData[i];
          }
        }
        return xmlObj.child;
      };
      function addChild(currentNode, childNode, jPath) {
        const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
        if (result === false) {
        } else if (typeof result === "string") {
          childNode.tagname = result;
          currentNode.addChild(childNode);
        } else {
          currentNode.addChild(childNode);
        }
      }
      var replaceEntitiesValue = function(val2) {
        if (this.options.processEntities) {
          for (let entityName2 in this.docTypeEntities) {
            const entity = this.docTypeEntities[entityName2];
            val2 = val2.replace(entity.regx, entity.val);
          }
          for (let entityName2 in this.lastEntities) {
            const entity = this.lastEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
          if (this.options.htmlEntities) {
            for (let entityName2 in this.htmlEntities) {
              const entity = this.htmlEntities[entityName2];
              val2 = val2.replace(entity.regex, entity.val);
            }
          }
          val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
        }
        return val2;
      };
      function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
        if (textData) {
          if (isLeafNode === void 0)
            isLeafNode = Object.keys(currentNode.child).length === 0;
          textData = this.parseTextData(
            textData,
            currentNode.tagname,
            jPath,
            false,
            currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
            isLeafNode
          );
          if (textData !== void 0 && textData !== "")
            currentNode.add(this.options.textNodeName, textData);
          textData = "";
        }
        return textData;
      }
      function isItStopNode(stopNodes, jPath, currentTagName) {
        const allNodesExp = "*." + currentTagName;
        for (const stopNodePath in stopNodes) {
          const stopNodeExp = stopNodes[stopNodePath];
          if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
            return true;
        }
        return false;
      }
      function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
        let attrBoundary;
        let tagExp = "";
        for (let index = i; index < xmlData.length; index++) {
          let ch = xmlData[index];
          if (attrBoundary) {
            if (ch === attrBoundary)
              attrBoundary = "";
          } else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
          } else if (ch === closingChar[0]) {
            if (closingChar[1]) {
              if (xmlData[index + 1] === closingChar[1]) {
                return {
                  data: tagExp,
                  index
                };
              }
            } else {
              return {
                data: tagExp,
                index
              };
            }
          } else if (ch === "	") {
            ch = " ";
          }
          tagExp += ch;
        }
      }
      function findClosingIndex(xmlData, str, i, errMsg) {
        const closingIndex = xmlData.indexOf(str, i);
        if (closingIndex === -1) {
          throw new Error(errMsg);
        } else {
          return closingIndex + str.length - 1;
        }
      }
      function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
        const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
        if (!result)
          return;
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.search(/\s/);
        let tagName = tagExp;
        let attrExpPresent = true;
        if (separatorIndex !== -1) {
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
          tagExp = tagExp.substr(separatorIndex + 1);
        }
        const rawTagName = tagName;
        if (removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
          }
        }
        return {
          tagName,
          tagExp,
          closeIndex,
          attrExpPresent,
          rawTagName
        };
      }
      function readStopNodeData(xmlData, tagName, i) {
        const startIndex = i;
        let openTagCount = 1;
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
              let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
              if (closeTagName === tagName) {
                openTagCount--;
                if (openTagCount === 0) {
                  return {
                    tagContent: xmlData.substring(startIndex, i),
                    i: closeIndex
                  };
                }
              }
              i = closeIndex;
            } else if (xmlData[i + 1] === "?") {
              const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
              i = closeIndex;
            } else if (xmlData.substr(i + 1, 3) === "!--") {
              const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
              i = closeIndex;
            } else if (xmlData.substr(i + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
              i = closeIndex;
            } else {
              const tagData = readTagExp(xmlData, i, ">");
              if (tagData) {
                const openTagName = tagData && tagData.tagName;
                if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                  openTagCount++;
                }
                i = tagData.closeIndex;
              }
            }
          }
        }
      }
      function parseValue(val2, shouldParse, options) {
        if (shouldParse && typeof val2 === "string") {
          const newval = val2.trim();
          if (newval === "true")
            return true;
          else if (newval === "false")
            return false;
          else
            return toNumber(val2, options);
        } else {
          if (util.isExist(val2)) {
            return val2;
          } else {
            return "";
          }
        }
      }
      module.exports = OrderedObjParser;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/node2json.js
  var require_node2json = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
      "use strict";
      function prettify(node, options) {
        return compress(node, options);
      }
      function compress(arr, options, jPath) {
        let text;
        const compressedObj = {};
        for (let i = 0; i < arr.length; i++) {
          const tagObj = arr[i];
          const property = propName(tagObj);
          let newJpath = "";
          if (jPath === void 0)
            newJpath = property;
          else
            newJpath = jPath + "." + property;
          if (property === options.textNodeName) {
            if (text === void 0)
              text = tagObj[property];
            else
              text += "" + tagObj[property];
          } else if (property === void 0) {
            continue;
          } else if (tagObj[property]) {
            let val2 = compress(tagObj[property], options, newJpath);
            const isLeaf = isLeafTag(val2, options);
            if (tagObj[":@"]) {
              assignAttributes(val2, tagObj[":@"], newJpath, options);
            } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
              val2 = val2[options.textNodeName];
            } else if (Object.keys(val2).length === 0) {
              if (options.alwaysCreateTextNode)
                val2[options.textNodeName] = "";
              else
                val2 = "";
            }
            if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
              if (!Array.isArray(compressedObj[property])) {
                compressedObj[property] = [compressedObj[property]];
              }
              compressedObj[property].push(val2);
            } else {
              if (options.isArray(property, newJpath, isLeaf)) {
                compressedObj[property] = [val2];
              } else {
                compressedObj[property] = val2;
              }
            }
          }
        }
        if (typeof text === "string") {
          if (text.length > 0)
            compressedObj[options.textNodeName] = text;
        } else if (text !== void 0)
          compressedObj[options.textNodeName] = text;
        return compressedObj;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (key !== ":@")
            return key;
        }
      }
      function assignAttributes(obj, attrMap, jpath, options) {
        if (attrMap) {
          const keys = Object.keys(attrMap);
          const len = keys.length;
          for (let i = 0; i < len; i++) {
            const atrrName = keys[i];
            if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
              obj[atrrName] = [attrMap[atrrName]];
            } else {
              obj[atrrName] = attrMap[atrrName];
            }
          }
        }
      }
      function isLeafTag(obj, options) {
        const { textNodeName } = options;
        const propCount = Object.keys(obj).length;
        if (propCount === 0) {
          return true;
        }
        if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
          return true;
        }
        return false;
      }
      exports.prettify = prettify;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
  var require_XMLParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
      var { buildOptions } = require_OptionsBuilder();
      var OrderedObjParser = require_OrderedObjParser();
      var { prettify } = require_node2json();
      var validator = require_validator();
      var XMLParser = class {
        constructor(options) {
          this.externalEntities = {};
          this.options = buildOptions(options);
        }
        /**
         * Parse XML dats to JS object 
         * @param {string|Buffer} xmlData 
         * @param {boolean|Object} validationOption 
         */
        parse(xmlData, validationOption) {
          if (typeof xmlData === "string") {
          } else if (xmlData.toString) {
            xmlData = xmlData.toString();
          } else {
            throw new Error("XML data is accepted in String or Bytes[] form.");
          }
          if (validationOption) {
            if (validationOption === true)
              validationOption = {};
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
          }
          const orderedObjParser = new OrderedObjParser(this.options);
          orderedObjParser.addExternalEntities(this.externalEntities);
          const orderedResult = orderedObjParser.parseXml(xmlData);
          if (this.options.preserveOrder || orderedResult === void 0)
            return orderedResult;
          else
            return prettify(orderedResult, this.options);
        }
        /**
         * Add Entity which is not by default supported by this library
         * @param {string} key 
         * @param {string} value 
         */
        addEntity(key, value) {
          if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
          } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
          } else {
            this.externalEntities[key] = value;
          }
        }
      };
      module.exports = XMLParser;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
  var require_orderedJs2Xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
      var EOL = "\n";
      function toXml(jArray, options) {
        let indentation = "";
        if (options.format && options.indentBy.length > 0) {
          indentation = EOL;
        }
        return arrToStr(jArray, options, "", indentation);
      }
      function arrToStr(arr, options, jPath, indentation) {
        let xmlStr = "";
        let isPreviousElementTag = false;
        for (let i = 0; i < arr.length; i++) {
          const tagObj = arr[i];
          const tagName = propName(tagObj);
          if (tagName === void 0)
            continue;
          let newJPath = "";
          if (jPath.length === 0)
            newJPath = tagName;
          else
            newJPath = `${jPath}.${tagName}`;
          if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
              tagText = options.tagValueProcessor(tagName, tagText);
              tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
          } else if (tagName[0] === "?") {
            const attStr2 = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
            isPreviousElementTag = true;
            continue;
          }
          let newIdentation = indentation;
          if (newIdentation !== "") {
            newIdentation += options.indentBy;
          }
          const attStr = attr_to_str(tagObj[":@"], options);
          const tagStart = indentation + `<${tagName}${attStr}`;
          const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
          if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode)
              xmlStr += tagStart + ">";
            else
              xmlStr += tagStart + "/>";
          } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
          } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
          } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
              xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
              xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
          }
          isPreviousElementTag = true;
        }
        return xmlStr;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!obj.hasOwnProperty(key))
            continue;
          if (key !== ":@")
            return key;
        }
      }
      function attr_to_str(attrMap, options) {
        let attrStr = "";
        if (attrMap && !options.ignoreAttributes) {
          for (let attr in attrMap) {
            if (!attrMap.hasOwnProperty(attr))
              continue;
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
          }
        }
        return attrStr;
      }
      function isStopNode(jPath, options) {
        jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
        let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
        for (let index in options.stopNodes) {
          if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
            return true;
        }
        return false;
      }
      function replaceEntitiesValue(textValue, options) {
        if (textValue && textValue.length > 0 && options.processEntities) {
          for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      }
      module.exports = toXml;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
  var require_json2xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
      "use strict";
      var buildFromOrderedJs = require_orderedJs2Xml();
      var defaultOptions = {
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        cdataPropName: false,
        format: false,
        indentBy: "  ",
        suppressEmptyNode: false,
        suppressUnpairedNode: true,
        suppressBooleanAttributes: true,
        tagValueProcessor: function(key, a) {
          return a;
        },
        attributeValueProcessor: function(attrName, a) {
          return a;
        },
        preserveOrder: false,
        commentPropName: false,
        unpairedTags: [],
        entities: [
          { regex: new RegExp("&", "g"), val: "&amp;" },
          //it must be on top
          { regex: new RegExp(">", "g"), val: "&gt;" },
          { regex: new RegExp("<", "g"), val: "&lt;" },
          { regex: new RegExp("'", "g"), val: "&apos;" },
          { regex: new RegExp('"', "g"), val: "&quot;" }
        ],
        processEntities: true,
        stopNodes: [],
        // transformTagName: false,
        // transformAttributeName: false,
        oneListGroup: false
      };
      function Builder(options) {
        this.options = Object.assign({}, defaultOptions, options);
        if (this.options.ignoreAttributes || this.options.attributesGroupName) {
          this.isAttribute = function() {
            return false;
          };
        } else {
          this.attrPrefixLen = this.options.attributeNamePrefix.length;
          this.isAttribute = isAttribute;
        }
        this.processTextOrObjNode = processTextOrObjNode;
        if (this.options.format) {
          this.indentate = indentate;
          this.tagEndChar = ">\n";
          this.newLine = "\n";
        } else {
          this.indentate = function() {
            return "";
          };
          this.tagEndChar = ">";
          this.newLine = "";
        }
      }
      Builder.prototype.build = function(jObj) {
        if (this.options.preserveOrder) {
          return buildFromOrderedJs(jObj, this.options);
        } else {
          if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
            jObj = {
              [this.options.arrayNodeName]: jObj
            };
          }
          return this.j2x(jObj, 0).val;
        }
      };
      Builder.prototype.j2x = function(jObj, level) {
        let attrStr = "";
        let val2 = "";
        for (let key in jObj) {
          if (!Object.prototype.hasOwnProperty.call(jObj, key))
            continue;
          if (typeof jObj[key] === "undefined") {
            if (this.isAttribute(key)) {
              val2 += "";
            }
          } else if (jObj[key] === null) {
            if (this.isAttribute(key)) {
              val2 += "";
            } else if (key[0] === "?") {
              val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
            } else {
              val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            }
          } else if (jObj[key] instanceof Date) {
            val2 += this.buildTextValNode(jObj[key], key, "", level);
          } else if (typeof jObj[key] !== "object") {
            const attr = this.isAttribute(key);
            if (attr) {
              attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
            } else {
              if (key === this.options.textNodeName) {
                let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                val2 += this.replaceEntitiesValue(newval);
              } else {
                val2 += this.buildTextValNode(jObj[key], key, "", level);
              }
            }
          } else if (Array.isArray(jObj[key])) {
            const arrLen = jObj[key].length;
            let listTagVal = "";
            for (let j = 0; j < arrLen; j++) {
              const item = jObj[key][j];
              if (typeof item === "undefined") {
              } else if (item === null) {
                if (key[0] === "?")
                  val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                else
                  val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
              } else if (typeof item === "object") {
                if (this.options.oneListGroup) {
                  listTagVal += this.j2x(item, level + 1).val;
                } else {
                  listTagVal += this.processTextOrObjNode(item, key, level);
                }
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
            if (this.options.oneListGroup) {
              listTagVal = this.buildObjectNode(listTagVal, key, "", level);
            }
            val2 += listTagVal;
          } else {
            if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
              const Ks = Object.keys(jObj[key]);
              const L = Ks.length;
              for (let j = 0; j < L; j++) {
                attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
              }
            } else {
              val2 += this.processTextOrObjNode(jObj[key], key, level);
            }
          }
        }
        return { attrStr, val: val2 };
      };
      Builder.prototype.buildAttrPairStr = function(attrName, val2) {
        val2 = this.options.attributeValueProcessor(attrName, "" + val2);
        val2 = this.replaceEntitiesValue(val2);
        if (this.options.suppressBooleanAttributes && val2 === "true") {
          return " " + attrName;
        } else
          return " " + attrName + '="' + val2 + '"';
      };
      function processTextOrObjNode(object, key, level) {
        const result = this.j2x(object, level + 1);
        if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
          return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
        } else {
          return this.buildObjectNode(result.val, key, result.attrStr, level);
        }
      }
      Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
        if (val2 === "") {
          if (key[0] === "?")
            return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
          else {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          }
        } else {
          let tagEndExp = "</" + key + this.tagEndChar;
          let piClosingChar = "";
          if (key[0] === "?") {
            piClosingChar = "?";
            tagEndExp = "";
          }
          if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
          } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
            return this.indentate(level) + `<!--${val2}-->` + this.newLine;
          } else {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
          }
        }
      };
      Builder.prototype.closeTag = function(key) {
        let closeTag = "";
        if (this.options.unpairedTags.indexOf(key) !== -1) {
          if (!this.options.suppressUnpairedNode)
            closeTag = "/";
        } else if (this.options.suppressEmptyNode) {
          closeTag = "/";
        } else {
          closeTag = `></${key}`;
        }
        return closeTag;
      };
      Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
        if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
          return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else if (key[0] === "?") {
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        } else {
          let textValue = this.options.tagValueProcessor(key, val2);
          textValue = this.replaceEntitiesValue(textValue);
          if (textValue === "") {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          } else {
            return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
          }
        }
      };
      Builder.prototype.replaceEntitiesValue = function(textValue) {
        if (textValue && textValue.length > 0 && this.options.processEntities) {
          for (let i = 0; i < this.options.entities.length; i++) {
            const entity = this.options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      };
      function indentate(level) {
        return this.options.indentBy.repeat(level);
      }
      function isAttribute(name) {
        if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
          return name.substr(this.attrPrefixLen);
        } else {
          return false;
        }
      }
      module.exports = Builder;
    }
  });

  // node_modules/fast-xml-parser/src/fxp.js
  var require_fxp = __commonJS({
    "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
      "use strict";
      var validator = require_validator();
      var XMLParser = require_XMLParser();
      var XMLBuilder = require_json2xml();
      module.exports = {
        XMLParser,
        XMLValidator: validator,
        XMLBuilder
      };
    }
  });

  // node_modules/rss-to-json/dist/index.js
  var require_dist = __commonJS({
    "node_modules/rss-to-json/dist/index.js"(exports) {
      (() => {
        "use strict";
        var e = { 306: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", { value: true });
          const a2 = r2(861), i2 = r2(167);
          t2.default = async (e3, t3) => {
            var r3, n2;
            if (!/(^http(s?):\/\/[^\s$.?#].[^\s]*)/i.test(e3))
              return null;
            const { data: s } = await (0, i2.default)(e3, t3), u = new a2.XMLParser({ attributeNamePrefix: "", textNodeName: "$text", ignoreAttributes: false }).parse(s);
            let o = u.rss && u.rss.channel ? u.rss.channel : u.feed;
            Array.isArray(o) && (o = o[0]);
            const d = { title: null !== (r3 = o.title) && void 0 !== r3 ? r3 : "", description: null !== (n2 = o.description) && void 0 !== n2 ? n2 : "", link: o.link && o.link.href ? o.link.href : o.link, image: o.image ? o.image.url : o["itunes:image"] ? o["itunes:image"].href : "", category: o.category || [], items: [] };
            let l = o.item || o.entry || [];
            l && !Array.isArray(l) && (l = [l]);
            for (let e4 = 0; e4 < l.length; e4++) {
              const t4 = l[e4], r4 = {}, a3 = { id: t4.guid && t4.guid.$text ? t4.guid.$text : t4.id, title: t4.title && t4.title.$text ? t4.title.$text : t4.title, description: t4.summary && t4.summary.$text ? t4.summary.$text : t4.description, link: t4.link && t4.link.href ? t4.link.href : t4.link, author: t4.author && t4.author.name ? t4.author.name : t4["dc:creator"], published: t4.created ? Date.parse(t4.created) : t4.pubDate ? Date.parse(t4.pubDate) : Date.now(), created: t4.updated ? Date.parse(t4.updated) : t4.pubDate ? Date.parse(t4.pubDate) : t4.created ? Date.parse(t4.created) : Date.now(), category: t4.category || [], content: t4.content && t4.content.$text ? t4.content.$text : t4["content:encoded"], enclosures: t4.enclosure ? Array.isArray(t4.enclosure) ? t4.enclosure : [t4.enclosure] : [] };
              ["content:encoded", "podcast:transcript", "itunes:summary", "itunes:author", "itunes:explicit", "itunes:duration", "itunes:season", "itunes:episode", "itunes:episodeType", "itunes:image"].forEach((e5) => {
                t4[e5] && (a3[e5.replace(":", "_")] = t4[e5]);
              }), t4["media:thumbnail"] && (Object.assign(r4, { thumbnail: t4["media:thumbnail"] }), a3.enclosures.push(t4["media:thumbnail"])), t4["media:content"] && (Object.assign(r4, { thumbnail: t4["media:content"] }), a3.enclosures.push(t4["media:content"])), t4["media:group"] && (t4["media:group"]["media:title"] && (a3.title = t4["media:group"]["media:title"]), t4["media:group"]["media:description"] && (a3.description = t4["media:group"]["media:description"]), t4["media:group"]["media:thumbnail"] && a3.enclosures.push(t4["media:group"]["media:thumbnail"].url)), Object.assign(a3, { media: r4 }), d.items.push(a3);
            }
            return d;
          };
        }, 167: (e2) => {
          e2.exports = require_axios();
        }, 861: (e2) => {
          e2.exports = require_fxp();
        } }, t = {};
        function r(a2) {
          var i2 = t[a2];
          if (void 0 !== i2)
            return i2.exports;
          var n2 = t[a2] = { exports: {} };
          return e[a2](n2, n2.exports, r), n2.exports;
        }
        var a = {};
        (() => {
          var e2 = a;
          Object.defineProperty(e2, "__esModule", { value: true }), e2.Parse = e2.parse = void 0;
          const t2 = r(306);
          e2.parse = t2.default;
          const i2 = t2.default;
          e2.Parse = i2, e2.default = t2.default;
        })();
        var i = exports;
        for (var n in a)
          i[n] = a[n];
        a.__esModule && Object.defineProperty(i, "__esModule", { value: true });
      })();
    }
  });

  // 2-ex/data-fetch.js
  var import_rss_to_json = __toESM(require_dist());
  var DataFetch = class _DataFetch {
    static PROXY = "http://127.0.0.1:7000";
    async html(src) {
      return fetch(src).then((res) => res.text());
    }
    async json(src) {
      const res = await fetch(src);
      return await res.json();
    }
    async xml(src) {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      };
      const onProxy = (0, import_rss_to_json.parse)(`${_DataFetch.PROXY}/${src}`, headers);
      const offProxy = (0, import_rss_to_json.parse)(src, headers);
      return Promise.any([onProxy, offProxy]).then((res) => res);
    }
  };

  // 2-ex/city-weather.js
  var CityWeather = class _CityWeather extends HTMLElement {
    // Propriété de classe, ne dépend pas des instances
    static TEMPERATURE_FORMAT = /\d{1,2}(\.\d{1,2}\s+)?/;
    /**
     * 
     * @param {object} city contient les propriétés latitute et long d'une ville 
     * @param {DataFetch} dataFetch classe qui gère les appels vers des contenus local ou externe 
     */
    constructor(city, dataFetch) {
      super();
      this.city = city;
      this.dataFetch = dataFetch;
    }
    connectedCallback() {
      this.get().then(() => {
        this.render();
      });
    }
    /**
     * Affiche la météo à partir de la propriété city
     */
    render() {
      let result = this.city.name;
      const rgxTemp = new RegExp(_CityWeather.TEMPERATURE_FORMAT);
      if (rgxTemp.test(this.city.temperature)) {
        result = `${result} ${this.city.temperature} \xB0 C`;
      }
      this.innerHTML = `<p>${result}</p>`;
    }
    /**
     * Ici un exemple avec l'utilisation d'async et await pour attendre le résultat de la météo
     * Modifier notre propriété city et le retourner quoi qu'il arrive succès (try) ou error (catch) grâce à finally
     * @returns object
     */
    async get() {
      try {
        const data = await this.dataFetch.json(`https://api.open-meteo.com/v1/forecast?latitude=${this.city.latitude}&longitude=${this.city.longitude}&current_weather=true`);
        this.city.temperature = data.current_weather.temperature;
      } catch (error) {
        this.city.temperature = "Impossible d'obtenir la temp\xE9rature de la ville";
      } finally {
        return this.city;
      }
    }
  };
  customElements.define("city-weather", CityWeather);
  var city_weather_default = CityWeather;

  // 2-ex/modal-article.js
  var ModalArticle = class extends HTMLElement {
    constructor(content = null) {
      super();
      this.innerHTML = content;
    }
    connectedCallback() {
      this.close();
    }
    /**
     * Fermer la modale = la cacher en modifiant la propriété display
     */
    close() {
      const btns = document.querySelectorAll(".close, .btn-close");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
          document.querySelector(".modal").style.display = "none";
        });
      }
    }
  };
  customElements.define("modal-article", ModalArticle);
  var modal_article_default = ModalArticle;

  // 2-ex/current-news.js
  var CurrentNews = class _CurrentNews extends HTMLElement {
    /**
     * C'est spécifique ici à mon architecture parce que je traite chaque exercice de manière indépendante au niveau du JS
     * par contre pour le CSS et HTML j'utilise les sources de l'exercice 1 (dossier 1-ex/src)
     */
    static ARTICLE_TPL = "_partials/article.html";
    static MODAL_TPL = "_partials/modal.html";
    /**
     * Constructor
     * @param Object dataFetch
     * @param {Object} feed flux d'information
     * @param {Array} items les articles de ce flux
     * @returns void
     */
    constructor(dataFetch = null, feed = {}, items = []) {
      super();
      this.dataFetch = dataFetch;
      this.feed = feed;
      this.items = items;
      this.innerHTML = `
    <h2>Chargement actualit\xE9 depuis ${this.feed.url}</h2>
    <div class="loader"></div>
    `;
    }
    /**
     * Rien ici, toute la responsabilité ici est volontairement délégué au client (index.js)
     * Je pouvais tout gérer et traiter comme on a vu précedemment ici c'est uniquement de montrer une autre approche
     * qui a ses avantages et incovénients par rapport à l'approche précédente
     */
    connectedCallback() {
      console.info("connected news Element in DOM");
    }
    /**
     * J'aurais pu faire plus simple, j'ai ajouté et chainé plusieurs then
     * pour vous montrer qu'on peut presque le faire à l'infini
     * @returns void
     */
    async render() {
      console.info("render method start with promise all", this.feed);
      const fetchTplArticle = this.dataFetch.html(_CurrentNews.ARTICLE_TPL);
      const fetchItems = this.dataFetch.xml(this.feed.url);
      return Promise.all([fetchTplArticle, fetchItems]).then((responses) => {
        const artTpl = responses[0];
        const feed = responses[1];
        const items = feed.items;
        this.innerHTML = `<h2>${feed.title}</h2>`;
        this.feed.title = feed.title;
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          this.items = [...this.items, item];
          this.innerHTML += this.replaceWith(artTpl, item);
        }
        return artTpl;
      }).then((template) => {
        this.openModal();
        return template;
      }).then((template) => {
        return {
          // une promesse qui retourne un objet qu'on pourra recup dans then comme pour les cas préc.
          feed: this.feed,
          items: this.items,
          template
          // clé et valeur s'ils ont le même nom, on peut juste mettre le nom au lieu de faire template: template
        };
      }).catch((error) => {
        console.error("error ", error);
        this.innerHTML = `<p>Aucun article n'a pu \xEAtre r\xE9cup\xE9r\xE9 depuis ${this.feed.url}!</p>`;
      });
    }
    /**
     * Une solution parmi tant d'autres pour faire du templating dynamique
     * Dans le template, on remplace les motifs (pattern) par les valeurs
     * @param {string} template du HTML en texte
     * @param {string} data les artciles sous forme d'objet littéral
     * @returns string
     */
    replaceWith(template, data) {
      return template.replace(/{{title}}/g, data.title).replace(/{{thumbnail.url}}/g, data.media.thumbnail.url).replace(/{{published}}/g, this.getFrDate(data.published)).replace(/{{author}}/g, data.author ?? "NC").replace(/{{link}}/g, data.link).replace(/{{description}}/g, data.description);
    }
    /**
     * Formater pour avoir la date en format française
     * @param {Number} timestamp
     * @returns string
     */
    getFrDate(timestamp) {
      return new Date(timestamp).toLocaleDateString("fr");
    }
    /**
     * Récupère tous les articles depuis le flux RSS
     * @returns Promise<Array>
     */
    async getAll() {
      return this.dataFetch.xml(this.feed.url);
    }
    /**
     * Retourner un article parmi la liste des articles d'un flux
     * @param {string} url
     * @returns Array
     */
    findOne(url) {
      return this.items.find((item) => item.link === url);
    }
    /**
     * Lancer une modale
     * @returns void
     */
    async openModal() {
      const btns = document.querySelectorAll(".open-modal");
      const tpl = await this.dataFetch.html(_CurrentNews.MODAL_TPL);
      for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener("click", () => {
          const data = this.findOne(btn.dataset.link);
          const modalWithData = this.replaceWith(tpl, data);
          const modalEl = document.querySelector("modal-article");
          const modalArticle = new modal_article_default(modalWithData);
          if (modalEl) {
            modalEl.replaceWith(modalArticle);
          } else {
            document.body.querySelector("main").append(modalArticle);
          }
          document.querySelector(".modal").style.display = "block";
        });
      }
    }
  };
  customElements.define("current-news", CurrentNews);
  var current_news_default = CurrentNews;

  // 2-ex/index.js
  window.onload = () => {
    const w = new city_weather_default({
      country: "France",
      name: "Paris",
      latitude: 48.8534,
      longitude: 2.3488
    }, new DataFetch());
    document.querySelector("header").prepend(w);
    const feeds = [
      { url: "https://www.france24.com/fr/rss" },
      { url: "https://www.lemonde.fr/rss/plus-lus.xml" }
    ];
    feeds.forEach((f) => {
      const feed = new current_news_default(new DataFetch(), f);
      document.querySelector("main").append(feed);
      setTimeout(async () => {
        feed.render();
      }, 3e3);
    });
  };
})();
