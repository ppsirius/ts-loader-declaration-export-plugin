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
        return _defineProperty({}, _this.output, allAssets[fileName]);
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

        var filteredDeclarations = DeclarationExportPlugin.filterDeclarationsName(DeclarationExportPlugin.allDeclarationsName(compilation.assets), _this2.modulePath);

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
    value: function filterDeclarationsName(declarations, modulePath) {
      return declarations.filter(function (declaration) {
        console.log(declaration, " declaration");

        if (declaration.indexOf("".concat(modulePath)) !== -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiIsIm9wdGlvbnMiLCJhbGxBc3NldHMiLCJmaWx0ZXJlZERlY2xhcmF0aW9ucyIsImZpbHRlcmVkQXNzZXRzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImZpbGVOYW1lIiwiZmlsZSIsImluZGV4T2YiLCJtYXAiLCJvdXRwdXQiLCJhbGxEZWNsYXJhdGlvbnNOYW1lIiwiZm9yRWFjaCIsImFzc2V0IiwibW9kdWxlUGF0aCIsImZvbGRlck5hbWUiLCJFcnJvciIsImNvbXBpbGVyIiwiaG9va3MiLCJlbWl0IiwidGFwQXN5bmMiLCJjb21waWxhdGlvbiIsImNhbGxiYWNrIiwiZmlsdGVyRGVjbGFyYXRpb25zTmFtZSIsImFzc2V0cyIsImdlbmVyYXRlZERlY2xhcmF0aW9ucyIsImZpbHRlckRlY2xhcmF0aW9uc0Fzc2V0cyIsImRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyIsImNvbnNvbGUiLCJsb2ciLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLHVCO0FBS0osbUNBQVlDLE9BQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzREE0QkosVUFDekJDLFNBRHlCLEVBRXpCQyxvQkFGeUIsRUFHWjtBQUNiLFVBQU1DLGNBQXdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFaLEVBQzlCSyxNQUQ4QixDQUN2QixVQUFBQyxRQUFRLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbEIsK0JBQW1CTCxvQkFBbkIsOEhBQXlDO0FBQUEsZ0JBQTlCTSxJQUE4Qjs7QUFDdkMsZ0JBQUlELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkQsSUFBakIsTUFBMkIsQ0FBQyxDQUFoQyxFQUFtQztBQUNqQyxxQkFBT0QsUUFBUDtBQUNEO0FBQ0Y7QUFMaUI7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Q29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IElPcHRpb25zIGZyb20gXCIuL0lPcHRpb25zXCI7XG5cbmNsYXNzIERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luIHtcbiAgbW9kdWxlUGF0aDogc3RyaW5nO1xuICBvdXRwdXQ6IHN0cmluZztcbiAgZm9sZGVyTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLm1vZHVsZVBhdGggfHwgIW9wdGlvbnMub3V0cHV0IHx8ICFvcHRpb25zLmZvbGRlck5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGxlYXNlIHNldCBjb3JyZWN0IG9wdGlvbnMgb2JqZWN0LCBjaGVjayBkb2NzYCk7XG4gICAgfVxuICAgIHRoaXMubW9kdWxlUGF0aCA9IG9wdGlvbnMubW9kdWxlUGF0aDtcbiAgICB0aGlzLm91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xuICAgIHRoaXMuZm9sZGVyTmFtZSA9IG9wdGlvbnMuZm9sZGVyTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBhbGxEZWNsYXJhdGlvbnNOYW1lKGFzc2V0czogb2JqZWN0KTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhc3NldHMpLmZpbHRlcihhc3NldCA9PiB7XG4gICAgICBpZiAoYXNzZXQuaW5kZXhPZihcIi5kLnRzXCIpICE9PSAtMSkgcmV0dXJuIGFzc2V0O1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckRlY2xhcmF0aW9uc05hbWUoXG4gICAgZGVjbGFyYXRpb25zOiBzdHJpbmdbXSxcbiAgICBtb2R1bGVQYXRoOiBzdHJpbmdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBkZWNsYXJhdGlvbnMuZmlsdGVyKGRlY2xhcmF0aW9uID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRlY2xhcmF0aW9uLCBcIiBkZWNsYXJhdGlvblwiKTtcbiAgICAgIGlmIChkZWNsYXJhdGlvbi5pbmRleE9mKGAke21vZHVsZVBhdGh9YCkgIT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2xhcmF0aW9uLCBcIiBkZWNsYXJhdGlvbiBpZlwiKTtcbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyRGVjbGFyYXRpb25zQXNzZXRzID0gKFxuICAgIGFsbEFzc2V0czogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSxcbiAgICBmaWx0ZXJlZERlY2xhcmF0aW9uczogc3RyaW5nW11cbiAgKTogb2JqZWN0W10gPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQXNzZXRzOiBvYmplY3RbXSA9IE9iamVjdC5rZXlzKGFsbEFzc2V0cylcbiAgICAgIC5maWx0ZXIoZmlsZU5hbWUgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsdGVyZWREZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZihmaWxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAubWFwKGZpbGVOYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbdGhpcy5vdXRwdXRdOiBhbGxBc3NldHNbZmlsZU5hbWVdXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZEFzc2V0cztcbiAgfTtcblxuICBkZWxldGVEZWNsYXJhdGlvbnNBc3NldHMgPSAoYWxsQXNzZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCA9PiB7XG4gICAgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW4uYWxsRGVjbGFyYXRpb25zTmFtZShhbGxBc3NldHMpLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgZGVsZXRlIGFsbEFzc2V0c1thc3NldF07XG4gICAgfSk7XG4gIH07XG5cbiAgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhcbiAgICAgIFwiRGVjbGFyYXRpb25FeHBvcnRQbHVnaW5cIixcbiAgICAgIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbi5maWx0ZXJEZWNsYXJhdGlvbnNOYW1lKFxuICAgICAgICAgIERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luLmFsbERlY2xhcmF0aW9uc05hbWUoY29tcGlsYXRpb24uYXNzZXRzKSxcbiAgICAgICAgICB0aGlzLm1vZHVsZVBhdGhcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBnZW5lcmF0ZWREZWNsYXJhdGlvbnMgPSB0aGlzLmZpbHRlckRlY2xhcmF0aW9uc0Fzc2V0cyhcbiAgICAgICAgICBjb21waWxhdGlvbi5hc3NldHMsXG4gICAgICAgICAgZmlsdGVyZWREZWNsYXJhdGlvbnNcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyhjb21waWxhdGlvbi5hc3NldHMpO1xuXG4gICAgICAgIGNvbXBpbGF0aW9uLmFzc2V0cyA9IHtcbiAgICAgICAgICAuLi5jb21waWxhdGlvbi5hc3NldHMsXG4gICAgICAgICAgLi4uZ2VuZXJhdGVkRGVjbGFyYXRpb25zWzBdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmdlbmVyYXRlZERlY2xhcmF0aW9ucywgXCIgZGVjcmF0aW9uIGFzc2V0cyBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBpbGF0aW9uLmFzc2V0cywgXCIgY29tcGlsYXRpb24uYXNzZXRzXCIpO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbjtcbiJdfQ==