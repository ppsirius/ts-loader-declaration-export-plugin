"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeclarationExportPlugin = /*#__PURE__*/function () {
  function DeclarationExportPlugin(options) {
    var _this = this;

    _classCallCheck(this, DeclarationExportPlugin);

    _defineProperty(this, "modulePath", void 0);

    _defineProperty(this, "output", void 0);

    _defineProperty(this, "folderName", void 0);

    _defineProperty(this, "generateAssetPath", function (path) {
      // const url = path.split("/");
      return "/'".concat(_this.output);
    });

    _defineProperty(this, "filterDeclarationsAssets", function (allAssets, filteredDeclarations) {
      var filteredAssets = Object.keys(allAssets).filter(function (fileName) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = filteredDeclarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var file = _step.value;

            if (fileName.indexOf(file) !== -1) {
              return fileName;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }).map(function (fileName) {
        _this.generateAssetPath(fileName);

        return _defineProperty({}, _this.generateAssetPath(fileName), allAssets[fileName]);
      });
      return filteredAssets;
    });

    _defineProperty(this, "deleteDeclarationsAssets", function (allAssets) {
      DeclarationExportPlugin.allDeclarationsName(allAssets).forEach(function (asset) {
        delete allAssets[asset];
      });
    });

    if (!options.modulePath || !options.output || !options.folderName) {
      throw new Error("Please set correct options object, check docs");
    }

    this.modulePath = options.modulePath;
    this.output = options.output;
    this.folderName = options.folderName;
  }

  _createClass(DeclarationExportPlugin, [{
    key: "apply",
    value: function apply(compiler) {
      var _this2 = this;

      compiler.hooks.emit.tapAsync("DeclarationExportPlugin", function (compilation, callback) {
        var _console;

        var filteredDeclarations = DeclarationExportPlugin.filterDeclarationsName(DeclarationExportPlugin.allDeclarationsName(compilation.assets), _this2.folderName, _this2.folderName);

        var generatedDeclarations = _this2.filterDeclarationsAssets(compilation.assets, filteredDeclarations);

        _this2.deleteDeclarationsAssets(compilation.assets);

        compilation.assets = _objectSpread({}, compilation.assets, {}, generatedDeclarations[0]);

        (_console = console).log.apply(_console, _toConsumableArray(generatedDeclarations).concat([" decration assets "]));

        console.log(compilation.assets, " compilation.assets");
        callback();
      });
    }
  }], [{
    key: "allDeclarationsName",
    value: function allDeclarationsName(assets) {
      return Object.keys(assets).filter(function (asset) {
        if (asset.indexOf(".d.ts") !== -1) return asset;
      });
    }
  }, {
    key: "filterDeclarationsName",
    value: function filterDeclarationsName(declarations, folderName, modulePath) {
      return declarations.filter(function (declaration) {
        console.log(declaration, " declaration");
        console.log("".concat(folderName, "/").concat(modulePath));

        if (declaration.indexOf("".concat(folderName, "/").concat(modulePath)) !== -1) {
          console.log(declaration, " declaration if");
          return declaration;
        }
      });
    }
  }]);

  return DeclarationExportPlugin;
}();

var _default = DeclarationExportPlugin;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiIsIm9wdGlvbnMiLCJwYXRoIiwib3V0cHV0IiwiYWxsQXNzZXRzIiwiZmlsdGVyZWREZWNsYXJhdGlvbnMiLCJmaWx0ZXJlZEFzc2V0cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJmaWxlTmFtZSIsImZpbGUiLCJpbmRleE9mIiwibWFwIiwiZ2VuZXJhdGVBc3NldFBhdGgiLCJhbGxEZWNsYXJhdGlvbnNOYW1lIiwiZm9yRWFjaCIsImFzc2V0IiwibW9kdWxlUGF0aCIsImZvbGRlck5hbWUiLCJFcnJvciIsImNvbXBpbGVyIiwiaG9va3MiLCJlbWl0IiwidGFwQXN5bmMiLCJjb21waWxhdGlvbiIsImNhbGxiYWNrIiwiZmlsdGVyRGVjbGFyYXRpb25zTmFtZSIsImFzc2V0cyIsImdlbmVyYXRlZERlY2xhcmF0aW9ucyIsImZpbHRlckRlY2xhcmF0aW9uc0Fzc2V0cyIsImRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyIsImNvbnNvbGUiLCJsb2ciLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLHVCO0FBS0osbUNBQVlDLE9BQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwrQ0E4QlgsVUFBQ0MsSUFBRCxFQUEwQjtBQUM1QztBQUNBLHlCQUFZLEtBQUksQ0FBQ0MsTUFBakI7QUFDRCxLQWpDOEI7O0FBQUEsc0RBbUNKLFVBQ3pCQyxTQUR5QixFQUV6QkMsb0JBRnlCLEVBR1o7QUFDYixVQUFNQyxjQUF3QixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosU0FBWixFQUM5QkssTUFEOEIsQ0FDdkIsVUFBQUMsUUFBUSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2xCLCtCQUFtQkwsb0JBQW5CLDhIQUF5QztBQUFBLGdCQUE5Qk0sSUFB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UUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVkLFVBQWYsY0FBNkJELFVBQTdCOztBQUNBLFlBQUlpQixXQUFXLENBQUN2QixPQUFaLFdBQXVCTyxVQUF2QixjQUFxQ0QsVUFBckMsT0FBdUQsQ0FBQyxDQUE1RCxFQUErRDtBQUM3RGMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFdBQVosRUFBeUIsaUJBQXpCO0FBQ0EsaUJBQU9BLFdBQVA7QUFDRDtBQUNGLE9BUE0sQ0FBUDtBQVFEOzs7Ozs7ZUFpRVluQyx1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCBJT3B0aW9ucyBmcm9tIFwiLi9JT3B0aW9uc1wiO1xuXG5jbGFzcyBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiB7XG4gIG1vZHVsZVBhdGg6IHN0cmluZztcbiAgb3V0cHV0OiBzdHJpbmc7XG4gIGZvbGRlck5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5tb2R1bGVQYXRoIHx8ICFvcHRpb25zLm91dHB1dCB8fCAhb3B0aW9ucy5mb2xkZXJOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBzZXQgY29ycmVjdCBvcHRpb25zIG9iamVjdCwgY2hlY2sgZG9jc2ApO1xuICAgIH1cbiAgICB0aGlzLm1vZHVsZVBhdGggPSBvcHRpb25zLm1vZHVsZVBhdGg7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRpb25zLm91dHB1dDtcbiAgICB0aGlzLmZvbGRlck5hbWUgPSBvcHRpb25zLmZvbGRlck5hbWU7XG4gIH1cblxuICBzdGF0aWMgYWxsRGVjbGFyYXRpb25zTmFtZShhc3NldHM6IG9iamVjdCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXNzZXRzKS5maWx0ZXIoYXNzZXQgPT4ge1xuICAgICAgaWYgKGFzc2V0LmluZGV4T2YoXCIuZC50c1wiKSAhPT0gLTEpIHJldHVybiBhc3NldDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJEZWNsYXJhdGlvbnNOYW1lKFxuICAgIGRlY2xhcmF0aW9uczogc3RyaW5nW10sXG4gICAgZm9sZGVyTmFtZTogc3RyaW5nLFxuICAgIG1vZHVsZVBhdGg6IHN0cmluZ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucy5maWx0ZXIoZGVjbGFyYXRpb24gPT4ge1xuICAgICAgY29uc29sZS5sb2coZGVjbGFyYXRpb24sIFwiIGRlY2xhcmF0aW9uXCIpO1xuICAgICAgY29uc29sZS5sb2coYCR7Zm9sZGVyTmFtZX0vJHttb2R1bGVQYXRofWApO1xuICAgICAgaWYgKGRlY2xhcmF0aW9uLmluZGV4T2YoYCR7Zm9sZGVyTmFtZX0vJHttb2R1bGVQYXRofWApICE9PSAtMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkZWNsYXJhdGlvbiwgXCIgZGVjbGFyYXRpb24gaWZcIik7XG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlQXNzZXRQYXRoID0gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgLy8gY29uc3QgdXJsID0gcGF0aC5zcGxpdChcIi9cIik7XG4gICAgcmV0dXJuIGAvJyR7dGhpcy5vdXRwdXR9YDtcbiAgfTtcblxuICBmaWx0ZXJEZWNsYXJhdGlvbnNBc3NldHMgPSAoXG4gICAgYWxsQXNzZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxuICAgIGZpbHRlcmVkRGVjbGFyYXRpb25zOiBzdHJpbmdbXVxuICApOiBvYmplY3RbXSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRBc3NldHM6IG9iamVjdFtdID0gT2JqZWN0LmtleXMoYWxsQXNzZXRzKVxuICAgICAgLmZpbHRlcihmaWxlTmFtZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWx0ZXJlZERlY2xhcmF0aW9ucykge1xuICAgICAgICAgIGlmIChmaWxlTmFtZS5pbmRleE9mKGZpbGUpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQXNzZXRQYXRoKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbdGhpcy5nZW5lcmF0ZUFzc2V0UGF0aChmaWxlTmFtZSldOiBhbGxBc3NldHNbZmlsZU5hbWVdXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZEFzc2V0cztcbiAgfTtcblxuICBkZWxldGVEZWNsYXJhdGlvbnNBc3NldHMgPSAoYWxsQXNzZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCA9PiB7XG4gICAgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW4uYWxsRGVjbGFyYXRpb25zTmFtZShhbGxBc3NldHMpLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgZGVsZXRlIGFsbEFzc2V0c1thc3NldF07XG4gICAgfSk7XG4gIH07XG5cbiAgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhcbiAgICAgIFwiRGVjbGFyYXRpb25FeHBvcnRQbHVnaW5cIixcbiAgICAgIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbi5maWx0ZXJEZWNsYXJhdGlvbnNOYW1lKFxuICAgICAgICAgIERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luLmFsbERlY2xhcmF0aW9uc05hbWUoY29tcGlsYXRpb24uYXNzZXRzKSxcbiAgICAgICAgICB0aGlzLmZvbGRlck5hbWUsXG4gICAgICAgICAgdGhpcy5mb2xkZXJOYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkRGVjbGFyYXRpb25zID0gdGhpcy5maWx0ZXJEZWNsYXJhdGlvbnNBc3NldHMoXG4gICAgICAgICAgY29tcGlsYXRpb24uYXNzZXRzLFxuICAgICAgICAgIGZpbHRlcmVkRGVjbGFyYXRpb25zXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kZWxldGVEZWNsYXJhdGlvbnNBc3NldHMoY29tcGlsYXRpb24uYXNzZXRzKTtcblxuICAgICAgICBjb21waWxhdGlvbi5hc3NldHMgPSB7XG4gICAgICAgICAgLi4uY29tcGlsYXRpb24uYXNzZXRzLFxuICAgICAgICAgIC4uLmdlbmVyYXRlZERlY2xhcmF0aW9uc1swXVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyguLi5nZW5lcmF0ZWREZWNsYXJhdGlvbnMsIFwiIGRlY3JhdGlvbiBhc3NldHMgXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21waWxhdGlvbi5hc3NldHMsIFwiIGNvbXBpbGF0aW9uLmFzc2V0c1wiKTtcblxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW47XG4iXX0=