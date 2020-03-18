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

    if (!options.modulePath || !options.output) {
      throw new Error("Please set correct options object, check docs");
    }

    this.modulePath = options.modulePath;
    this.output = options.output;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbiIsIm9wdGlvbnMiLCJhbGxBc3NldHMiLCJmaWx0ZXJlZERlY2xhcmF0aW9ucyIsImZpbHRlcmVkQXNzZXRzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImZpbGVOYW1lIiwiZmlsZSIsImluZGV4T2YiLCJtYXAiLCJvdXRwdXQiLCJhbGxEZWNsYXJhdGlvbnNOYW1lIiwiZm9yRWFjaCIsImFzc2V0IiwibW9kdWxlUGF0aCIsIkVycm9yIiwiY29tcGlsZXIiLCJob29rcyIsImVtaXQiLCJ0YXBBc3luYyIsImNvbXBpbGF0aW9uIiwiY2FsbGJhY2siLCJmaWx0ZXJEZWNsYXJhdGlvbnNOYW1lIiwiYXNzZXRzIiwiZ2VuZXJhdGVkRGVjbGFyYXRpb25zIiwiZmlsdGVyRGVjbGFyYXRpb25zQXNzZXRzIiwiZGVsZXRlRGVjbGFyYXRpb25zQXNzZXRzIiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsdUI7QUFJSixtQ0FBWUMsT0FBWixFQUErQjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHNEQXlCSixVQUN6QkMsU0FEeUIsRUFFekJDLG9CQUZ5QixFQUdaO0FBQ2IsVUFBTUMsY0FBd0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFNBQVosRUFDOUJLLE1BRDhCLENBQ3ZCLFVBQUFDLFFBQVEsRUFBSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNsQiwrQkFBbUJMLG9CQUFuQiw4SEFBeUM7QUFBQSxnQkFBOUJNLElBQThCOztBQUN2QyxnQkFBSUQsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxJQUFqQixNQUEyQixDQUFDLENBQWhDLEVBQW1DO0FBQ2pDLHFCQUFPRCxRQUFQO0FBQ0Q7QUFDRjtBQUxpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTW5CLE9BUDhCLEVBUTlCRyxHQVI4QixDQVExQixVQUFBSCxRQUFRLEVBQUk7QUFDZixtQ0FDRyxLQUFJLENBQUNJLE1BRFIsRUFDaUJWLFNBQVMsQ0FBQ00sUUFBRCxDQUQxQjtBQUdELE9BWjhCLENBQWpDO0FBY0EsYUFBT0osY0FBUDtBQUNELEtBNUM4Qjs7QUFBQSxzREE4Q0osVUFBQ0YsU0FBRCxFQUFnRDtBQUN6RUYsTUFBQUEsdUJBQXVCLENBQUNhLG1CQUF4QixDQUE0Q1gsU0FBNUMsRUFBdURZLE9BQXZELENBQStELFVBQUFDLEtBQUssRUFBSTtBQUN0RSxlQUFPYixTQUFTLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxPQUZEO0FBR0QsS0FsRDhCOztBQUM3QixRQUFJLENBQUNkLE9BQU8sQ0FBQ2UsVUFBVCxJQUF1QixDQUFDZixPQUFPLENBQUNXLE1BQXBDLEVBQTRDO0FBQzFDLFlBQU0sSUFBSUssS0FBSixpREFBTjtBQUNEOztBQUNELFNBQUtELFVBQUwsR0FBa0JmLE9BQU8sQ0FBQ2UsVUFBMUI7QUFDQSxTQUFLSixNQUFMLEdBQWNYLE9BQU8sQ0FBQ1csTUFBdEI7QUFDRDs7OzswQkE4Q0tNLFEsRUFBb0I7QUFBQTs7QUFDeEJBLE1BQUFBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxJQUFmLENBQW9CQyxRQUFwQixDQUNFLHlCQURGLEVBRUUsVUFBQ0MsV0FBRCxFQUFjQyxRQUFkLEVBQTJCO0FBQ3pCLFlBQU1wQixvQkFBb0IsR0FBR0gsdUJBQXVCLENBQUN3QixzQkFBeEIsQ0FDM0J4Qix1QkFBdUIsQ0FBQ2EsbUJBQXhCLENBQTRDUyxXQUFXLENBQUNHLE1BQXhELENBRDJCLEVBRTNCLE1BQUksQ0FBQ1QsVUFGc0IsQ0FBN0I7O0FBS0EsWUFBTVUscUJBQXFCLEdBQUcsTUFBSSxDQUFDQyx3QkFBTCxDQUM1QkwsV0FBVyxDQUFDRyxNQURnQixFQUU1QnRCLG9CQUY0QixDQUE5Qjs7QUFLQSxRQUFBLE1BQUksQ0FBQ3lCLHdCQUFMLENBQThCTixXQUFXLENBQUNHLE1BQTFDOztBQUVBSCxRQUFBQSxXQUFXLENBQUNHLE1BQVoscUJBQ0tILFdBQVcsQ0FBQ0csTUFEakIsTUFFS0MscUJBQXFCLENBQUMsQ0FBRCxDQUYxQjtBQUtBSCxRQUFBQSxRQUFRO0FBQ1QsT0FyQkg7QUF1QkQ7Ozt3Q0FwRTBCRSxNLEVBQTBCO0FBQ25ELGFBQU9wQixNQUFNLENBQUNDLElBQVAsQ0FBWW1CLE1BQVosRUFBb0JsQixNQUFwQixDQUEyQixVQUFBUSxLQUFLLEVBQUk7QUFDekMsWUFBSUEsS0FBSyxDQUFDTCxPQUFOLENBQWMsT0FBZCxNQUEyQixDQUFDLENBQWhDLEVBQW1DLE9BQU9LLEtBQVA7QUFDcEMsT0FGTSxDQUFQO0FBR0Q7OzsyQ0FHQ2MsWSxFQUNBYixVLEVBQ1U7QUFDVixhQUFPYSxZQUFZLENBQUN0QixNQUFiLENBQW9CLFVBQUF1QixXQUFXLEVBQUk7QUFDeEMsWUFBSUEsV0FBVyxDQUFDcEIsT0FBWixXQUF1Qk0sVUFBdkIsT0FBeUMsQ0FBQyxDQUE5QyxFQUFpRDtBQUMvQyxpQkFBT2MsV0FBUDtBQUNEO0FBQ0YsT0FKTSxDQUFQO0FBS0Q7Ozs7OztlQXdEWTlCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IElPcHRpb25zIGZyb20gXCIuL0lPcHRpb25zXCI7XG5cbmNsYXNzIERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luIHtcbiAgbW9kdWxlUGF0aDogc3RyaW5nO1xuICBvdXRwdXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5tb2R1bGVQYXRoIHx8ICFvcHRpb25zLm91dHB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbGVhc2Ugc2V0IGNvcnJlY3Qgb3B0aW9ucyBvYmplY3QsIGNoZWNrIGRvY3NgKTtcbiAgICB9XG4gICAgdGhpcy5tb2R1bGVQYXRoID0gb3B0aW9ucy5tb2R1bGVQYXRoO1xuICAgIHRoaXMub3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQ7XG4gIH1cblxuICBzdGF0aWMgYWxsRGVjbGFyYXRpb25zTmFtZShhc3NldHM6IG9iamVjdCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXNzZXRzKS5maWx0ZXIoYXNzZXQgPT4ge1xuICAgICAgaWYgKGFzc2V0LmluZGV4T2YoXCIuZC50c1wiKSAhPT0gLTEpIHJldHVybiBhc3NldDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJEZWNsYXJhdGlvbnNOYW1lKFxuICAgIGRlY2xhcmF0aW9uczogc3RyaW5nW10sXG4gICAgbW9kdWxlUGF0aDogc3RyaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGVjbGFyYXRpb25zLmZpbHRlcihkZWNsYXJhdGlvbiA9PiB7XG4gICAgICBpZiAoZGVjbGFyYXRpb24uaW5kZXhPZihgJHttb2R1bGVQYXRofWApICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJEZWNsYXJhdGlvbnNBc3NldHMgPSAoXG4gICAgYWxsQXNzZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxuICAgIGZpbHRlcmVkRGVjbGFyYXRpb25zOiBzdHJpbmdbXVxuICApOiBvYmplY3RbXSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRBc3NldHM6IG9iamVjdFtdID0gT2JqZWN0LmtleXMoYWxsQXNzZXRzKVxuICAgICAgLmZpbHRlcihmaWxlTmFtZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWx0ZXJlZERlY2xhcmF0aW9ucykge1xuICAgICAgICAgIGlmIChmaWxlTmFtZS5pbmRleE9mKGZpbGUpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFt0aGlzLm91dHB1dF06IGFsbEFzc2V0c1tmaWxlTmFtZV1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXNzZXRzO1xuICB9O1xuXG4gIGRlbGV0ZURlY2xhcmF0aW9uc0Fzc2V0cyA9IChhbGxBc3NldHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkID0+IHtcbiAgICBEZWNsYXJhdGlvbkV4cG9ydFBsdWdpbi5hbGxEZWNsYXJhdGlvbnNOYW1lKGFsbEFzc2V0cykuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICBkZWxldGUgYWxsQXNzZXRzW2Fzc2V0XTtcbiAgICB9KTtcbiAgfTtcblxuICBhcHBseShjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb21waWxlci5ob29rcy5lbWl0LnRhcEFzeW5jKFxuICAgICAgXCJEZWNsYXJhdGlvbkV4cG9ydFBsdWdpblwiLFxuICAgICAgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9uRXhwb3J0UGx1Z2luLmZpbHRlckRlY2xhcmF0aW9uc05hbWUoXG4gICAgICAgICAgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW4uYWxsRGVjbGFyYXRpb25zTmFtZShjb21waWxhdGlvbi5hc3NldHMpLFxuICAgICAgICAgIHRoaXMubW9kdWxlUGF0aFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZERlY2xhcmF0aW9ucyA9IHRoaXMuZmlsdGVyRGVjbGFyYXRpb25zQXNzZXRzKFxuICAgICAgICAgIGNvbXBpbGF0aW9uLmFzc2V0cyxcbiAgICAgICAgICBmaWx0ZXJlZERlY2xhcmF0aW9uc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGVsZXRlRGVjbGFyYXRpb25zQXNzZXRzKGNvbXBpbGF0aW9uLmFzc2V0cyk7XG5cbiAgICAgICAgY29tcGlsYXRpb24uYXNzZXRzID0ge1xuICAgICAgICAgIC4uLmNvbXBpbGF0aW9uLmFzc2V0cyxcbiAgICAgICAgICAuLi5nZW5lcmF0ZWREZWNsYXJhdGlvbnNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjbGFyYXRpb25FeHBvcnRQbHVnaW47XG4iXX0=