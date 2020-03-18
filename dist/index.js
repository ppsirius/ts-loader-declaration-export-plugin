"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
        var filteredDeclarations = DeclarationExportPlugin.filterDeclarationsName(DeclarationExportPlugin.allDeclarationsName(compilation.assets), _this2.modulePath);

        var generatedDeclarations = _this2.filterDeclarationsAssets(compilation.assets, filteredDeclarations);

        _this2.deleteDeclarationsAssets(compilation.assets);

        compilation.assets = _objectSpread({}, compilation.assets, {}, generatedDeclarations[0]);
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
        if (declaration.indexOf("".concat(modulePath)) !== -1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiIsIm9wdGlvbnMiLCJhbGxBc3NldHMiLCJmaWx0ZXJlZERlY2xhcmF0aW9ucyIsImZpbHRlcmVkQXNzZXRzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImZpbGVOYW1lIiwiZmlsZSIsImluZGV4T2YiLCJtYXAiLCJvdXRwdXQiLCJhbGxEZWNsYXJhdGlvbnNOYW1lIiwiZm9yRWFjaCIsImFzc2V0IiwibW9kdWxlUGF0aCIsImZvbGRlck5hbWUiLCJFcnJvciIsImNvbXBpbGVyIiwiaG9va3MiLCJlbWl0IiwidGFwQXN5bmMiLCJjb21waWxhdGlvbiIsImNhbGxiYWNrIiwiZmlsdGVyRGVjbGFyYXRpb25zTmFtZSIsImFzc2V0cyIsImdlbmVyYXRlZERlY2xhcmF0aW9ucyIsImZpbHRlckRlY2xhcmF0aW9uc0Fzc2V0cyIsImRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLHVCO0FBS0osbUNBQVlDLE9BQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzREEwQkosVUFDekJDLFNBRHlCLEVBRXpCQyxvQkFGeUIsRUFHWjtBQUNiLFVBQU1DLGNBQXdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFaLEVBQzlCSyxNQUQ4QixDQUN2QixVQUFBQyxRQUFRLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbEIsK0JBQW1CTCxvQkFBbkIsOEhBQXlDO0FBQUEsZ0JBQTlCTSxJQUE4Qjs7QUFDdkMsZ0JBQUlELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkQsSUFBakIsTUFBMkIsQ0FBQyxDQUFoQyxFQUFtQztBQUNqQyxxQkFBT0QsUUFBUDtBQUNEO0FBQ0Y7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1uQixPQVA4QixFQVE5QkcsR0FSOEIsQ0FRMUIsVUFBQUgsUUFBUSxFQUFJO0FBQ2YsbUNBQ0csS0FBSSxDQUFDSSxNQURSLEVBQ2lCVixTQUFTLENBQUNNLFFBQUQsQ0FEMUI7QUFHRCxPQVo4QixDQUFqQztBQWNBLGFBQU9KLGNBQVA7QUFDRCxLQTdDOEI7O0FBQUEsc0RBK0NKLFVBQUNGLFNBQUQsRUFBZ0Q7QUFDekVGLE1BQUFBLHVCQUF1QixDQUFDYSxtQkFBeEIsQ0FBNENYLFNBQTVDLEVBQXVEWSxPQUF2RCxDQUErRCxVQUFBQyxLQUFLLEVBQUk7QUFDdEUsZUFBT2IsU0FBUyxDQUFDYSxLQUFELENBQWhCO0FBQ0QsT0FGRDtBQUdELEtBbkQ4Qjs7QUFDN0IsUUFBSSxDQUFDZCxPQUFPLENBQUNlLFVBQVQsSUFBdUIsQ0FBQ2YsT0FBTyxDQUFDVyxNQUFoQyxJQUEwQyxDQUFDWCxPQUFPLENBQUNnQixVQUF2RCxFQUFtRTtBQUNqRSxZQUFNLElBQUlDLEtBQUosaURBQU47QUFDRDs7QUFDRCxTQUFLRixVQUFMLEdBQWtCZixPQUFPLENBQUNlLFVBQTFCO0FBQ0EsU0FBS0osTUFBTCxHQUFjWCxPQUFPLENBQUNXLE1BQXRCO0FBQ0EsU0FBS0ssVUFBTCxHQUFrQmhCLE9BQU8sQ0FBQ2dCLFVBQTFCO0FBQ0Q7Ozs7MEJBOENLRSxRLEVBQW9CO0FBQUE7O0FBQ3hCQSxNQUFBQSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsSUFBZixDQUFvQkMsUUFBcEIsQ0FDRSx5QkFERixFQUVFLFVBQUNDLFdBQUQsRUFBY0MsUUFBZCxFQUEyQjtBQUN6QixZQUFNckIsb0JBQW9CLEdBQUdILHVCQUF1QixDQUFDeUIsc0JBQXhCLENBQzNCekIsdUJBQXVCLENBQUNhLG1CQUF4QixDQUE0Q1UsV0FBVyxDQUFDRyxNQUF4RCxDQUQyQixFQUUzQixNQUFJLENBQUNWLFVBRnNCLENBQTdCOztBQUtBLFlBQU1XLHFCQUFxQixHQUFHLE1BQUksQ0FBQ0Msd0JBQUwsQ0FDNUJMLFdBQVcsQ0FBQ0csTUFEZ0IsRUFFNUJ2QixvQkFGNEIsQ0FBOUI7O0FBS0EsUUFBQSxNQUFJLENBQUMwQix3QkFBTCxDQUE4Qk4sV0FBVyxDQUFDRyxNQUExQzs7QUFFQUgsUUFBQUEsV0FBVyxDQUFDRyxNQUFaLHFCQUNLSCxXQUFXLENBQUNHLE1BRGpCLE1BRUtDLHFCQUFxQixDQUFDLENBQUQsQ0FGMUI7QUFLQUgsUUFBQUEsUUFBUTtBQUNULE9BckJIO0FBdUJEOzs7d0NBcEUwQkUsTSxFQUEwQjtBQUNuRCxhQUFPckIsTUFBTSxDQUFDQyxJQUFQLENBQVlvQixNQUFaLEVBQW9CbkIsTUFBcEIsQ0FBMkIsVUFBQVEsS0FBSyxFQUFJO0FBQ3pDLFlBQUlBLEtBQUssQ0FBQ0wsT0FBTixDQUFjLE9BQWQsTUFBMkIsQ0FBQyxDQUFoQyxFQUFtQyxPQUFPSyxLQUFQO0FBQ3BDLE9BRk0sQ0FBUDtBQUdEOzs7MkNBR0NlLFksRUFDQWQsVSxFQUNVO0FBQ1YsYUFBT2MsWUFBWSxDQUFDdkIsTUFBYixDQUFvQixVQUFBd0IsV0FBVyxFQUFJO0FBQ3hDLFlBQUlBLFdBQVcsQ0FBQ3JCLE9BQVosV0FBdUJNLFVBQXZCLE9BQXlDLENBQUMsQ0FBOUMsRUFBaUQ7QUFDL0MsaUJBQU9lLFdBQVA7QUFDRDtBQUNGLE9BSk0sQ0FBUDtBQUtEOzs7Ozs7ZUF3RFkvQix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCBJT3B0aW9ucyBmcm9tIFwiLi9JT3B0aW9uc1wiO1xuXG5jbGFzcyBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiB7XG4gIG1vZHVsZVBhdGg6IHN0cmluZztcbiAgb3V0cHV0OiBzdHJpbmc7XG4gIGZvbGRlck5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5tb2R1bGVQYXRoIHx8ICFvcHRpb25zLm91dHB1dCB8fCAhb3B0aW9ucy5mb2xkZXJOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBzZXQgY29ycmVjdCBvcHRpb25zIG9iamVjdCwgY2hlY2sgZG9jc2ApO1xuICAgIH1cbiAgICB0aGlzLm1vZHVsZVBhdGggPSBvcHRpb25zLm1vZHVsZVBhdGg7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRpb25zLm91dHB1dDtcbiAgICB0aGlzLmZvbGRlck5hbWUgPSBvcHRpb25zLmZvbGRlck5hbWU7XG4gIH1cblxuICBzdGF0aWMgYWxsRGVjbGFyYXRpb25zTmFtZShhc3NldHM6IG9iamVjdCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXNzZXRzKS5maWx0ZXIoYXNzZXQgPT4ge1xuICAgICAgaWYgKGFzc2V0LmluZGV4T2YoXCIuZC50c1wiKSAhPT0gLTEpIHJldHVybiBhc3NldDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJEZWNsYXJhdGlvbnNOYW1lKFxuICAgIGRlY2xhcmF0aW9uczogc3RyaW5nW10sXG4gICAgbW9kdWxlUGF0aDogc3RyaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGVjbGFyYXRpb25zLmZpbHRlcihkZWNsYXJhdGlvbiA9PiB7XG4gICAgICBpZiAoZGVjbGFyYXRpb24uaW5kZXhPZihgJHttb2R1bGVQYXRofWApICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJEZWNsYXJhdGlvbnNBc3NldHMgPSAoXG4gICAgYWxsQXNzZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxuICAgIGZpbHRlcmVkRGVjbGFyYXRpb25zOiBzdHJpbmdbXVxuICApOiBvYmplY3RbXSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRBc3NldHM6IG9iamVjdFtdID0gT2JqZWN0LmtleXMoYWxsQXNzZXRzKVxuICAgICAgLmZpbHRlcihmaWxlTmFtZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWx0ZXJlZERlY2xhcmF0aW9ucykge1xuICAgICAgICAgIGlmIChmaWxlTmFtZS5pbmRleE9mKGZpbGUpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFt0aGlzLm91dHB1dF06IGFsbEFzc2V0c1tmaWxlTmFtZV1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXNzZXRzO1xuICB9O1xuXG4gIGRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyA9IChhbGxBc3NldHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkID0+IHtcbiAgICBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbi5hbGxEZWNsYXJhdGlvbnNOYW1lKGFsbEFzc2V0cykuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICBkZWxldGUgYWxsQXNzZXRzW2Fzc2V0XTtcbiAgICB9KTtcbiAgfTtcblxuICBhcHBseShjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb21waWxlci5ob29rcy5lbWl0LnRhcEFzeW5jKFxuICAgICAgXCJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpblwiLFxuICAgICAgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luLmZpbHRlckRlY2xhcmF0aW9uc05hbWUoXG4gICAgICAgICAgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW4uYWxsRGVjbGFyYXRpb25zTmFtZShjb21waWxhdGlvbi5hc3NldHMpLFxuICAgICAgICAgIHRoaXMubW9kdWxlUGF0aFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZERlY2xhcmF0aW9ucyA9IHRoaXMuZmlsdGVyRGVjbGFyYXRpb25zQXNzZXRzKFxuICAgICAgICAgIGNvbXBpbGF0aW9uLmFzc2V0cyxcbiAgICAgICAgICBmaWx0ZXJlZERlY2xhcmF0aW9uc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGVsZXRlRGVjbGFyYXRpb25zQXNzZXRzKGNvbXBpbGF0aW9uLmFzc2V0cyk7XG5cbiAgICAgICAgY29tcGlsYXRpb24uYXNzZXRzID0ge1xuICAgICAgICAgIC4uLmNvbXBpbGF0aW9uLmFzc2V0cyxcbiAgICAgICAgICAuLi5nZW5lcmF0ZWREZWNsYXJhdGlvbnNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW47XG4iXX0=