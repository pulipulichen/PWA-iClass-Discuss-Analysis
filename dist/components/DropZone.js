(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_DropZone_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);\n/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_DropZone_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_DropZone_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_DropZone_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUueWFtbD8zNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrYXp1cG9uL3Z1ZS1pMThuLWxvYWRlci9saWIvaW5kZXguanMhLi9Ecm9wWm9uZS55YW1sP3Z1ZSZ0eXBlPWN1c3RvbSZpbmRleD0wJmJsb2NrVHlwZT1pMThuJmlzc3VlclBhdGg9JTJGYXBwJTJGc3JjJTJGY29tcG9uZW50cyUyRkRyb3Bab25lJTJGRHJvcFpvbmUudnVlJmxhbmc9eWFtbFwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2F6dXBvbi92dWUtaTE4bi1sb2FkZXIvbGliL2luZGV4LmpzIS4vRHJvcFpvbmUueWFtbD92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9aTE4biZpc3N1ZXJQYXRoPSUyRmFwcCUyRnNyYyUyRmNvbXBvbmVudHMlMkZEcm9wWm9uZSUyRkRyb3Bab25lLnZ1ZSZsYW5nPXlhbWxcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n')},136:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/DropZone/DropZone.html?vue&type=template&id=8b014fa2&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      directives: [\n        {\n          name: \"show\",\n          rawName: \"v-show\",\n          value: _vm.isDragging,\n          expression: \"isDragging\"\n        }\n      ],\n      staticClass: \"DropZone\",\n      on: {\n        drop: _vm.dropHandler,\n        dragover: _vm.dragOverHandler,\n        dragleave: _vm.dragLeaveHandler,\n        mouseout: _vm.dragLeaveHandler\n      }\n    },\n    [_c(\"p\", [_vm._v(_vm._s(_vm.$t(\"Drag one or more files to here.\")))])]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./src/components/DropZone/DropZone.html?vue&type=template&id=8b014fa2&scoped=true&\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--6!./src/components/DropZone/DropZone.js?vue&type=script&lang=js&\nvar app = {\n  props: ['db'],\n  data: function data() {\n    this.$i18n.locale = this.db.localConfig.locale;\n    return {\n      isDragging: false,\n      isDragFromWindow: false,\n      stringTypes: ['text/uri-list', 'text/html']\n    };\n  },\n  watch: {\n    'db.localConfig.locale': function dbLocalConfigLocale() {\n      this.$i18n.locale = this.db.localConfig.locale;\n    }\n  },\n  computed: {},\n  mounted: function mounted() {\n    this.initEvents();\n  },\n  methods: {\n    initEvents: function initEvents() {\n      var _this = this;\n      window.addEventListener('dragstart', function () {\n        // console.log('dragstart')\n        _this.isDragFromWindow = true;\n      });\n      window.addEventListener('dragenter', function () {\n        // console.log('dragenter')\n        if (_this.isDragFromWindow === false) {\n          _this.isDragging = true;\n        }\n      });\n\n      // window.addEventListener('mouseleave', () => {\n      //   console.log('mouseleave')\n      //   this.isDragging = false\n      // })\n\n      // window.addEventListener('dragleave', () => {\n      //   console.log('dragleave')\n      //   this.isDragging = false\n      // })\n\n      window.addEventListener('dragend', function () {\n        // console.log('dragend')\n        _this.isDragFromWindow = false;\n      });\n    },\n    dropHandler: function dropHandler(event) {\n      this.db.file.importFilesByEvent(event);\n      this.isDragging = false;\n      this.isDragFromWindow = false;\n    },\n    dragOverHandler: function dragOverHandler(ev) {\n      // console.log('File(s) in drop zone');\n\n      // Prevent default behavior (Prevent file from being opened)\n      ev.preventDefault();\n    },\n    dragLeaveHandler: function dragLeaveHandler(ev) {\n      // console.log('dragLeaveHandler');\n      this.isDragging = false;\n      ev.preventDefault();\n    }\n  }\n};\n/* harmony default export */ var DropZonevue_type_script_lang_js_ = (app);\n// CONCATENATED MODULE: ./src/components/DropZone/DropZone.js?vue&type=script&lang=js&\n /* harmony default export */ var DropZone_DropZonevue_type_script_lang_js_ = (DropZonevue_type_script_lang_js_); \n// EXTERNAL MODULE: ./src/components/DropZone/DropZone.less?vue&type=style&index=0&id=8b014fa2&lang=less&scoped=true&\nvar DropZonevue_type_style_index_0_id_8b014fa2_lang_less_scoped_true_ = __webpack_require__(98);\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(15);\n\n// EXTERNAL MODULE: ./src/components/DropZone/DropZone.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fapp%2Fsrc%2Fcomponents%2FDropZone%2FDropZone.vue&lang=yaml\nvar DropZonevue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml = __webpack_require__(100);\n\n// CONCATENATED MODULE: ./src/components/DropZone/DropZone.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer[\"a\" /* default */])(\n  DropZone_DropZonevue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  \"8b014fa2\",\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof DropZonevue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml[\"default\"] === 'function') Object(DropZonevue_type_custom_index_0_blockType_i18n_issuerPath_2Fapp_2Fsrc_2Fcomponents_2FDropZone_2FDropZone_vue_lang_yaml[\"default\"])(component)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/DropZone/DropZone.vue\"\n/* harmony default export */ var DropZone = __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUuaHRtbD82YjdhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Ryb3Bab25lL0Ryb3Bab25lLmpzP2EzNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUuanM/MTIxNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS9Ecm9wWm9uZS52dWU/MzhjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmlzRHJhZ2dpbmcsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0RyYWdnaW5nXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIkRyb3Bab25lXCIsXG4gICAgICBvbjoge1xuICAgICAgICBkcm9wOiBfdm0uZHJvcEhhbmRsZXIsXG4gICAgICAgIGRyYWdvdmVyOiBfdm0uZHJhZ092ZXJIYW5kbGVyLFxuICAgICAgICBkcmFnbGVhdmU6IF92bS5kcmFnTGVhdmVIYW5kbGVyLFxuICAgICAgICBtb3VzZW91dDogX3ZtLmRyYWdMZWF2ZUhhbmRsZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiRHJhZyBvbmUgb3IgbW9yZSBmaWxlcyB0byBoZXJlLlwiKSkpXSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJsZXQgYXBwID0ge1xyXG4gIHByb3BzOiBbJ2RiJ10sXHJcbiAgZGF0YSAoKSB7ICAgIFxyXG4gICAgdGhpcy4kaTE4bi5sb2NhbGUgPSB0aGlzLmRiLmxvY2FsQ29uZmlnLmxvY2FsZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgIGlzRHJhZ0Zyb21XaW5kb3c6IGZhbHNlLFxyXG4gICAgICBzdHJpbmdUeXBlczogW1xyXG4gICAgICAgICd0ZXh0L3VyaS1saXN0JyxcclxuICAgICAgICAndGV4dC9odG1sJ1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgJ2RiLmxvY2FsQ29uZmlnLmxvY2FsZScoKSB7XHJcbiAgICAgIHRoaXMuJGkxOG4ubG9jYWxlID0gdGhpcy5kYi5sb2NhbENvbmZpZy5sb2NhbGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuaW5pdEV2ZW50cygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBpbml0RXZlbnRzICgpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZHJhZ3N0YXJ0JylcclxuICAgICAgICB0aGlzLmlzRHJhZ0Zyb21XaW5kb3cgPSB0cnVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnZW50ZXInKVxyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ0Zyb21XaW5kb3cgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ21vdXNlbGVhdmUnKVxyXG4gICAgICAvLyAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICAgIC8vIH0pXHJcblxyXG4gICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdkcmFnbGVhdmUnKVxyXG4gICAgICAvLyAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICAgIC8vIH0pXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZHJhZ2VuZCcpXHJcbiAgICAgICAgdGhpcy5pc0RyYWdGcm9tV2luZG93ID0gZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBkcm9wSGFuZGxlciAoZXZlbnQpIHtcclxuXHJcbiAgICAgIHRoaXMuZGIuZmlsZS5pbXBvcnRGaWxlc0J5RXZlbnQoZXZlbnQpXHJcbiAgICAgICAgXHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICAgIHRoaXMuaXNEcmFnRnJvbVdpbmRvdyA9IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZHJhZ092ZXJIYW5kbGVyKGV2KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdGaWxlKHMpIGluIGRyb3Agem9uZScpO1xyXG4gICAgXHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuICAgIGRyYWdMZWF2ZUhhbmRsZXIgKGV2KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnTGVhdmVIYW5kbGVyJyk7XHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHAiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYhLi9Ecm9wWm9uZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02IS4vRHJvcFpvbmUuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Ryb3Bab25lLmh0bWw/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGIwMTRmYTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRHJvcFpvbmUuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Ryb3Bab25lLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Ryb3Bab25lLmxlc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04YjAxNGZhMiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjhiMDE0ZmEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGN1c3RvbSBibG9ja3MgKi9cbmltcG9ydCBibG9jazAgZnJvbSBcIi4vRHJvcFpvbmUueWFtbD92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9aTE4biZpc3N1ZXJQYXRoPSUyRmFwcCUyRnNyYyUyRmNvbXBvbmVudHMlMkZEcm9wWm9uZSUyRkRyb3Bab25lLnZ1ZSZsYW5nPXlhbWxcIlxuaWYgKHR5cGVvZiBibG9jazAgPT09ICdmdW5jdGlvbicpIGJsb2NrMChjb21wb25lbnQpXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2FwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4YjAxNGZhMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4YjAxNGZhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4YjAxNGZhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJvcFpvbmUuaHRtbD92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YjAxNGZhMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YjAxNGZhMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUMxRUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///136\n")},60:function(module,exports,__webpack_require__){eval("var content = __webpack_require__(99);\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(9)(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS9Ecm9wWm9uZS5sZXNzPzFlY2UiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTMhLi9Ecm9wWm9uZS5sZXNzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OGIwMTRmYTImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60\n")},61:function(module,exports){eval('module.exports = function (Component) {\n  Component.options.__i18n = Component.options.__i18n || []\n  Component.options.__i18n.push(\'{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}\')\n  delete Component.options._Ctor\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS9Ecm9wWm9uZS55YW1sP2ZhYzkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIENvbXBvbmVudC5vcHRpb25zLl9faTE4biA9IENvbXBvbmVudC5vcHRpb25zLl9faTE4biB8fCBbXVxuICBDb21wb25lbnQub3B0aW9ucy5fX2kxOG4ucHVzaCgne1wiZW5cIjp7XCJURVNUX01FU1NBR0VcIjpcIlRlc3QgTWVzc2FnZVwifSxcInpoLVRXXCI6e1wiVEVTVF9NRVNTQUdFXCI6XCLmuKzoqaboqIrmga9cIn19JylcbiAgZGVsZXRlIENvbXBvbmVudC5vcHRpb25zLl9DdG9yXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///61\n')},98:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_2_node_modules_less_loader_dist_cjs_js_ref_1_3_DropZone_less_vue_type_style_index_0_id_8b014fa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);\n/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_2_node_modules_less_loader_dist_cjs_js_ref_1_3_DropZone_less_vue_type_style_index_0_id_8b014fa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_2_node_modules_less_loader_dist_cjs_js_ref_1_3_DropZone_less_vue_type_style_index_0_id_8b014fa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* unused harmony reexport * */\n /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_2_node_modules_less_loader_dist_cjs_js_ref_1_3_DropZone_less_vue_type_style_index_0_id_8b014fa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS9Ecm9wWm9uZS5sZXNzP2NlMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0zIS4vRHJvcFpvbmUubGVzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThiMDE0ZmEyJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0zIS4vRHJvcFpvbmUubGVzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThiMDE0ZmEyJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98\n")},99:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(8)(true);\n// Module\nexports.push([module.i, ".DropZone[data-v-8b014fa2]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999;background-color:hsla(0,0%,100%,.5);font-size:3rem;user-select:none;font-weight:700}.DropZone[data-v-8b014fa2],.DropZone p[data-v-8b014fa2]{display:flex;align-items:center;justify-content:center}.DropZone p[data-v-8b014fa2]{width:90%;height:90%;border:.3rem dashed #333;border-radius:1rem}", "",{"version":3,"sources":["/app/src/components/DropZone/DropZone.less?vue&type=style&index=0&id=8b014fa2&lang=less&scoped=true&","/app/src/components/DropZone/DropZone.less"],"names":[],"mappings":"AAAA,2BAOE,cAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,WAAA,CAEA,mCAAA,CAMA,cAAA,CACA,gBAAA,CACA,eCHF,CDnBA,wDAgBE,YAAA,CACA,kBAAA,CACA,sBCUF,CD5BA,6BAyBI,SAAA,CACA,UAAA,CACA,wBAAA,CACA,kBCAJ","file":"DropZone.less?vue&type=style&index=0&id=8b014fa2&lang=less&scoped=true&","sourcesContent":[".DropZone {\\n  /*\\n  border: 5px solid blue;\\n  width: 200px;\\n  height: 100px;\\n  */\\n\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 999;\\n\\n  background-color: rgba(255,255,255, 0.5);\\n  \\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  font-size: 3rem;\\n  user-select: none;\\n  font-weight: bold;\\n\\n  p {\\n    width: 90%;\\n    height: 90%;\\n    border: 0.3rem dashed #333;\\n    border-radius: 1rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n}",".DropZone {\\n  /*\\n  border: 5px solid blue;\\n  width: 200px;\\n  height: 100px;\\n  */\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 999;\\n  background-color: rgba(255, 255, 255, 0.5);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 3rem;\\n  user-select: none;\\n  font-weight: bold;\\n}\\n.DropZone p {\\n  width: 90%;\\n  height: 90%;\\n  border: 0.3rem dashed #333;\\n  border-radius: 1rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n"]}]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS9Ecm9wWm9uZS5sZXNzPzQ1NDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ecm9wWm9uZVtkYXRhLXYtOGIwMTRmYTJde3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7ei1pbmRleDo5OTk7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNSk7Zm9udC1zaXplOjNyZW07dXNlci1zZWxlY3Q6bm9uZTtmb250LXdlaWdodDo3MDB9LkRyb3Bab25lW2RhdGEtdi04YjAxNGZhMl0sLkRyb3Bab25lIHBbZGF0YS12LThiMDE0ZmEyXXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LkRyb3Bab25lIHBbZGF0YS12LThiMDE0ZmEyXXt3aWR0aDo5MCU7aGVpZ2h0OjkwJTtib3JkZXI6LjNyZW0gZGFzaGVkICMzMzM7Ym9yZGVyLXJhZGl1czoxcmVtfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9hcHAvc3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUubGVzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThiMDE0ZmEyJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIixcIi9hcHAvc3JjL2NvbXBvbmVudHMvRHJvcFpvbmUvRHJvcFpvbmUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFPRSxjQUFBLENBQ0EsS0FBQSxDQUNBLE1BQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLFdBQUEsQ0FFQSxtQ0FBQSxDQU1BLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLGVDSEYsQ0RuQkEsd0RBZ0JFLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLHNCQ1VGLENENUJBLDZCQXlCSSxTQUFBLENBQ0EsVUFBQSxDQUNBLHdCQUFBLENBQ0Esa0JDQUpcIixcImZpbGVcIjpcIkRyb3Bab25lLmxlc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04YjAxNGZhMiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Ecm9wWm9uZSB7XFxuICAvKlxcbiAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICAqL1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiA5OTk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIHAge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyOiAwLjNyZW0gZGFzaGVkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cIixcIi5Ecm9wWm9uZSB7XFxuICAvKlxcbiAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLkRyb3Bab25lIHAge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm9yZGVyOiAwLjNyZW0gZGFzaGVkICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdfV0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///99\n')}}]);