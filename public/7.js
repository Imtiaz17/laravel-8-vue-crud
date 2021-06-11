(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Category",
  data: function data() {
    return {
      add: false,
      edit: false,
      search: "",
      pagination: {
        current: 1,
        total: 0
      },
      isLoading: false,
      confirmation: false,
      update: false,
      catid: "",
      categories: [],
      items: [],
      singleItem: {},
      dialog: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || "catname_is_required";
      }],
      form: {
        name: ""
      }
    };
  },
  computed: {
    headers: function headers() {
      return [{
        sortable: false,
        text: 'Name',
        value: "name"
      }, {
        sortable: false,
        text: 'Actions',
        value: "actions"
      }];
    }
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    opendialog: function opendialog() {
      this.dialog = true;
    },
    closedialog: function closedialog() {
      this.dialog = !this.dialog;
    },
    getCategories: function getCategories() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.next = 3;
                return axios.get("api/category?page=" + _this.pagination.current).then(function (response) {
                  _this.items = response.data.data;
                  _this.pagination.current = response.data.meta.current_page;
                  _this.pagination.total = response.data.meta.last_page;
                  _this.isLoading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onPageChange: function onPageChange() {
      this.getCategories();
    },
    deleteCategory: function deleteCategory(item) {
      this.confirmation = true;
      this.catid = item.id;
    },
    searchItem: function searchItem() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("api/search-category?keyword=" + _this2.search).then(function (response) {
                  _this2.items = response.data.data;
                  _this2.isLoading = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    confirmDelete: function confirmDelete() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios["delete"]("api/category/".concat(_this3.catid)).then(function (res) {
                  _this3.confirmation = false;

                  _this3.getCategories();
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submitForm: function submitForm() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.$refs.form.validate()) {
                  _context4.next = 8;
                  break;
                }

                if (!(_this4.edit == false)) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 4;
                return axios.post("api/category", _this4.form).then(function (res) {
                  _this4.$refs.form.reset();

                  _this4.dialog = false;

                  _this4.getCategories();
                });

              case 4:
                _context4.next = 8;
                break;

              case 6:
                _context4.next = 8;
                return axios.patch("api/category/".concat(_this4.catid), _this4.form).then(function (res) {
                  _this4.$refs.form.reset();

                  _this4.dialog = false;

                  _this4.getCategories();
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    editCategory: function editCategory(item) {
      this.dialog = true;
      this.catid = item.id;
      this.form.name = item.name;
      this.edit = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-sm": "" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "600px" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    ADD CATEGORY\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { "aria-label": "Close" },
                          on: { click: _vm.closedialog }
                        },
                        [_vm._v(" mdi-close ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              attrs: { "lazy-validation": "" },
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "6", md: "12" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          label: "Name",
                                          required: "",
                                          rules: _vm.nameRules
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.closedialog }
                        },
                        [
                          _vm._v(
                            "\n                        Close\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.submitForm }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "300" },
              model: {
                value: _vm.confirmation,
                callback: function($$v) {
                  _vm.confirmation = $$v
                },
                expression: "confirmation"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    Are you sure?\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { "aria-label": "Close" },
                          on: {
                            click: function($event) {
                              _vm.confirmation = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        mdi-close\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pb-6 pt-12 text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-3",
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.confirmation = false
                            }
                          }
                        },
                        [_vm._v(" No ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.confirmDelete()
                            }
                          }
                        },
                        [_vm._v(" Yes ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "float-right",
                  attrs: { tile: "", dark: "", color: "indigo" },
                  on: { click: _vm.opendialog }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v(" mdi-plus ")]),
                  _vm._v("\n                ADD\n            ")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "12" } },
            [
              _vm.isLoading
                ? _c(
                    "v-card",
                    [
                      _c("v-skeleton-loader", {
                        staticClass: "mx-auto",
                        attrs: { type: "table" }
                      })
                    ],
                    1
                  )
                : _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    LIST\n                    "
                          ),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              solo: "",
                              dense: "",
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            on: { "click:append": _vm.searchItem },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-data-table", {
                            attrs: { headers: _vm.headers, items: _vm.items },
                            scopedSlots: _vm._u([
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "open-on-hover": "",
                                          top: "",
                                          "offset-y": ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            dark: "",
                                                            small: ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [
                                                          _vm._v(
                                                            " mdi-dots-horizontal "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          { attrs: { small: "" } },
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: { link: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editCategory(
                                                      item
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(" mdi-pencil ")
                                                    ]),
                                                    _vm._v(
                                                      "Edit\n                                        "
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: { link: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deleteCategory(
                                                      item
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(" mdi-delete ")
                                                    ]),
                                                    _vm._v(
                                                      " Delete\n                                        "
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("v-pagination", {
                            attrs: { length: _vm.pagination.total },
                            on: { input: _vm.onPageChange },
                            model: {
                              value: _vm.pagination.current,
                              callback: function($$v) {
                                _vm.$set(_vm.pagination, "current", $$v)
                              },
                              expression: "pagination.current"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/category.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/category.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=5ab4bdfd& */ "./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/views/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/category.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/category.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd&":
/*!************************************************************************!*\
  !*** ./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=5ab4bdfd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/category.vue?vue&type=template&id=5ab4bdfd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_5ab4bdfd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);