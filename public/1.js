(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},
  data: function data() {
    return {
      isLoading: false,
      valid: true,
      error: null,
      form: {
        email: "",
        password: ""
      },
      loginEmailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "E-mail must be valid";
      }],
      show1: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v && v.length >= 4 || "Min 4 characters";
        }
      }
    };
  },
  methods: {
    validate: function validate(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this.error = null;

                if (_this.$refs.loginForm.validate()) {
                  _this.isLoading = true;
                  axios.post('api/auth/login', _this.form).then(function (res) {
                    _this.$store.dispatch('saveToken', {
                      token: res.data.access_token
                    });

                    _this.isLoading = false;

                    _this.$router.push('/dashboard');
                  })["catch"](function (error) {
                    _this.isLoading = false;

                    if (error.response.status == 422) {
                      _this.error.push("Please enter valid Email or Password");
                    } else {
                      _this.error.push("error,try again");
                    }
                  });
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mt-20[data-v-6b822e44] {\r\n    margin-top: 20px;\n}\n.login-card[data-v-6b822e44] {\r\n    margin-top: 50px;\n}\n.v-application .pa-7[data-v-6b822e44] {\r\n    padding: 15px !important;\n}\n.danger[data-v-6b822e44] {\r\n    color: red;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "v-centered" },
    [
      _c("h3", { staticClass: "text-center mt-20" }, [
        _vm._v("Welcome to E-Product")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5", lg: "5" } },
            [
              _c(
                "v-card",
                {
                  staticClass:
                    "login-card d-flex align-content-center flex-wrap ",
                  attrs: { elevation: "5" }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "mb-2", staticStyle: { margin: "0 auto" } },
                    [_vm._v(" Login")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          ref: "loginForm",
                          attrs: { method: "post", "lazy-validation": "" },
                          on: { submit: _vm.validate },
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.loginEmailRules,
                                      label: "E-mail",
                                      required: "",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-text-field",
                                    {
                                      attrs: {
                                        outlined: "",
                                        "append-icon": _vm.show1
                                          ? "eye"
                                          : "eye-off",
                                        rules: [
                                          _vm.rules.required,
                                          _vm.rules.min
                                        ],
                                        type: _vm.show1 ? "text" : "password",
                                        name: "input-10-1",
                                        label: "Password",
                                        hint: "At least 4 characters",
                                        autocomplete: "off"
                                      },
                                      model: {
                                        value: _vm.form.password,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "password", $$v)
                                        },
                                        expression: "form.password"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        '\n                                    @click:append="show1 = !show1" >'
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.error
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "d-flex",
                                      attrs: { cols: "12", sm: "6", xsm: "12" }
                                    },
                                    [
                                      _c("p", { staticClass: "danger" }, [
                                        _vm._v(_vm._s(_vm.error))
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        block: "",
                                        large: "",
                                        type: "submit",
                                        disabled: !_vm.valid,
                                        color: "primary",
                                        elevation: "7",
                                        loading: _vm.isLoading
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Login\n                                "
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

/***/ "./resources/js/views/home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=6b822e44&scoped=true& */ "./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/views/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& */ "./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b822e44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=style&index=0&id=6b822e44&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_6b822e44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=6b822e44&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/home.vue?vue&type=template&id=6b822e44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6b822e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);