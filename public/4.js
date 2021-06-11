(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");


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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "Products",
  data: function data() {
    return {
      add: false,
      edit: false,
      search: "",
      isLoading: false,
      confirmation: false,
      update: false,
      pagination: {
        current: 1,
        total: 0
      },
      proid: "",
      categories: [],
      subcats: [],
      items: [],
      singleItem: {},
      dialog: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || "Catergory is required";
      }],
      form: {
        name: "",
        category_id: "",
        subcategory_id: "",
        images: []
      }
    };
  },
  computed: {
    headers: function headers() {
      return [{
        sortable: false,
        text: 'Product Name',
        value: "name"
      }, {
        sortable: false,
        text: 'Category',
        value: "category"
      }, {
        sortable: false,
        text: 'Sub-Category',
        value: "subcategory"
      }, {
        sortable: false,
        text: 'Actions',
        value: "actions"
      }];
    }
  },
  mounted: function mounted() {
    this.getProducts();
    this.getCategories();
  },
  methods: {
    uploadImageSuccess: function uploadImageSuccess(formData, index, fileList) {
      this.form.images = fileList;
    },
    beforeRemove: function beforeRemove(index, done, fileList) {
      var r = confirm("remove image");

      if (r == true) {
        this.form.images.splice(this.form.images.indexOf(index), 1);
        done();
      } else {}
    },
    editImage: function editImage(formData, index, fileList) {
      var _this = this;

      setTimeout(function () {
        _this.form.images = fileList;
      }, 2000);
    },
    opendialog: function opendialog() {
      this.dialog = true;
    },
    closedialog: function closedialog() {
      this.dialog = !this.dialog;
    },
    getCategories: function getCategories() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.isLoading = true;
                _context.next = 3;
                return axios.get("api/category").then(function (response) {
                  _this2.categories = response.data.data;
                  _this2.isLoading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getProducts: function getProducts() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("api/product?page=" + _this3.pagination.current).then(function (response) {
                  _this3.items = response.data.data;
                  _this3.pagination.current = response.data.meta.current_page;
                  _this3.pagination.total = response.data.meta.last_page;
                  _this3.isLoading = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onPageChange: function onPageChange() {
      this.getProducts();
    },
    deleteItem: function deleteItem(item) {
      this.confirmation = true;
      this.proid = item.id;
    },
    confirmDelete: function confirmDelete() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios["delete"]("api/product/".concat(_this4.proid)).then(function (res) {
                  _this4.confirmation = false;

                  _this4.getProducts();
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    searchItem: function searchItem() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("api/search-product?keyword=" + _this5.search).then(function (response) {
                  _this5.items = response.data.data;
                  _this5.isLoading = false;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    submitForm: function submitForm() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this6.$refs.form.validate()) {
                  _context5.next = 9;
                  break;
                }

                if (!(_this6.edit == false)) {
                  _context5.next = 7;
                  break;
                }

                console.log('jdjd');
                _context5.next = 5;
                return axios.post("api/product", _this6.form).then(function (res) {
                  _this6.$refs.form.reset();

                  _this6.dialog = false;

                  _this6.getProducts();
                });

              case 5:
                _context5.next = 9;
                break;

              case 7:
                _context5.next = 9;
                return axios.patch("api/product/".concat(_this6.proid), _this6.form).then(function (res) {
                  _this6.$refs.form.reset();

                  _this6.dialog = false;

                  _this6.getProducts();
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    editItem: function editItem(item) {
      this.dialog = true;
      this.proid = item.id;
      this.form.name = item.name;
      this.form.category_id = item.category_id;
      this.form.subcategory_id = item.subcategory_id;
      this.edit = true;
    }
  },
  watch: {
    'form.category_id': function formCategory_id(val) {
      var _this7 = this;

      axios.get("api/getsubcategory?cat_id=" + val).then(function (res) {
        _this7.subcats = res.data.data;
      });
    },
    'form.images': function formImages(val) {
      this.form.images = val;
      console.log(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0& ***!
  \*****************************************************************************************************************************************************************************************************/
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
                        "\n                    ADD Product\n                    "
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
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.categories,
                                          label: "Category",
                                          "item-text": "name",
                                          "item-value": "id",
                                          dense: "",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.form.category_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "category_id",
                                              $$v
                                            )
                                          },
                                          expression: "form.category_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "6", md: "12" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.subcats,
                                          label: "Sub Category",
                                          "item-text": "name",
                                          "item-value": "id",
                                          dense: "",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.form.subcategory_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "subcategory_id",
                                              $$v
                                            )
                                          },
                                          expression: "form.subcategory_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "6", md: "12" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            display: "flex",
                                            "justify-content": "center"
                                          },
                                          attrs: {
                                            id:
                                              "my-strictly-unique-vue-upload-multiple-image"
                                          }
                                        },
                                        [
                                          _c("vue-upload-multiple-image", {
                                            attrs: {
                                              "data-images": _vm.form.images,
                                              idUpload: "myIdUpload",
                                              editUpload: "myIdEdit",
                                              dragText:
                                                "Drag or select picture",
                                              browseText: "Browse",
                                              markIsPrimaryText: "",
                                              primaryText: ""
                                            },
                                            on: {
                                              "upload-success":
                                                _vm.uploadImageSuccess,
                                              "before-remove": _vm.beforeRemove,
                                              "edit-image": _vm.editImage
                                            }
                                          })
                                        ],
                                        1
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
                                                    return _vm.editItem(item)
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

/***/ "./resources/js/views/product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=5ecfa9c0& */ "./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/views/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=5ecfa9c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);