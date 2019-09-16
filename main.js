(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"materialize-container\">\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <h1>About</h1>\n      <h3>Materialize Angular is a library to create websites in an easy way.</h3>\n    </div>\n  </div>\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <h2>Goals</h2>\n      <img class=\"materialize-img-fluid\" src=\"assets/images/goals.jpg\" />\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-4\">\n      <h3>Create</h3>\n      <p>\n          Create a website in less time that you could spend using other similar libraries. Change easily design and components without headache.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-4\">\n      <h3>Unify</h3>\n      <p>\n          You will unify different devices, platforms and input methods using Materialize Angular library.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-4\">\n      <h3>Customize</h3>\n      <p>\n          Change designs in less time using different variables for each component. You will save time with new or updating designs.\n      </p>\n    </div>\n  </div>\n  <div class=\"materialize-row materialize-row-gap\">\n    <div class=\"materialize-col-12\">\n      <h2>Principles</h2>\n      <h3>Open Source</h3>\n      <p>\n          Always collaborating with Open Source community and happy to get help from the community.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-6\">\n      <img class=\"materialize-img-fluid materialize-m-b-xs\" src=\"assets/images/typo.jpg\" />\n      <h3>Inspiration</h3>\n      <p>\n          Materialize Angular library is inspired by different libraries with a lot of experience years behind.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-6\">\n      <img class=\"materialize-img-fluid materialize-m-b-xs\" src=\"assets/images/motion.jpg\" />\n      <h3>Agnostic Angular version</h3>\n      <p>\n        There is no version link between the Materialize Angular library and Angular core. Will be easy upgrade from different Angular versions.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-6\">\n      <img class=\"materialize-img-fluid materialize-m-b-xs\" src=\"assets/images/flexible.jpg\" />\n      <h3>Flexible frontend</h3>\n      <p>\n        With Materialize Angular will be easy change designs making the library flexible for possible future changes.\n      </p>\n    </div>\n    <div class=\"materialize-col-12 materialize-col-sm-6\">\n        <img class=\"materialize-img-fluid materialize-m-b-xs\" src=\"assets/images/cross.jpg\" />\n      <h3>Cross-platform</h3>\n      <p>\n        Compatible with different platforms and devices using shared components.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html")
        })
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _forms_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/button-toggle/button-toggle.component */ "./src/app/forms/button-toggle/button-toggle.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/checkbox/checkbox.component */ "./src/app/forms/checkbox/checkbox.component.ts");
/* harmony import */ var _forms_checkbox_list_checkbox_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/checkbox-list/checkbox-list.component */ "./src/app/forms/checkbox-list/checkbox-list.component.ts");
/* harmony import */ var _components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/collapsible/collapsible.component */ "./src/app/components/collapsible/collapsible.component.ts");
/* harmony import */ var _layout_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/drawer/drawer.component */ "./src/app/layout/drawer/drawer.component.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var _forms_form_prefix_form_prefix_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/form-prefix/form-prefix.component */ "./src/app/forms/form-prefix/form-prefix.component.ts");
/* harmony import */ var _forms_form_suffix_form_suffix_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/form-suffix/form-suffix.component */ "./src/app/forms/form-suffix/form-suffix.component.ts");
/* harmony import */ var _components_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/glossary/glossary.component */ "./src/app/components/glossary/glossary.component.ts");
/* harmony import */ var _components_html_visualizer_html_visualizer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/html-visualizer/html-visualizer.component */ "./src/app/components/html-visualizer/html-visualizer.component.ts");
/* harmony import */ var _css_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./css/icon/icon.component */ "./src/app/css/icon/icon.component.ts");
/* harmony import */ var _forms_input_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/input/input.component */ "./src/app/forms/input/input.component.ts");
/* harmony import */ var _forms_label_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/label/label.component */ "./src/app/forms/label/label.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/components/list-item/list-item.component.ts");
/* harmony import */ var _forms_message_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forms/message/message.component */ "./src/app/forms/message/message.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_radio_radio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forms/radio/radio.component */ "./src/app/forms/radio/radio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _css_ripple_ripple_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./css/ripple/ripple.component */ "./src/app/css/ripple/ripple.component.ts");
/* harmony import */ var _components_scroll_spy_scroll_spy_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/scroll-spy/scroll-spy.component */ "./src/app/components/scroll-spy/scroll-spy.component.ts");
/* harmony import */ var _forms_select_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forms/select/select.component */ "./src/app/forms/select/select.component.ts");
/* harmony import */ var _forms_slider_slider_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forms/slider/slider.component */ "./src/app/forms/slider/slider.component.ts");
/* harmony import */ var _forms_switch_switch_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./forms/switch/switch.component */ "./src/app/forms/switch/switch.component.ts");
/* harmony import */ var _layout_tab_tab_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./layout/tab/tab.component */ "./src/app/layout/tab/tab.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms/textarea/textarea.component */ "./src/app/forms/textarea/textarea.component.ts");
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./css/css.component */ "./src/app/css/css.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _themes_theme_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./themes/theme.component */ "./src/app/themes/theme.component.ts");
/* harmony import */ var _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./forms/date-picker/date-picker.component */ "./src/app/forms/date-picker/date-picker.component.ts");
/* harmony import */ var _css_card_card_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./css/card/card.component */ "./src/app/css/card/card.component.ts");
/* harmony import */ var _css_divider_divider_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./css/divider/divider.component */ "./src/app/css/divider/divider.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/base-layout/base-layout.component.ts");














































var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_38__["HomePageComponent"]
    },
    {
        path: 'guide',
        component: _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_45__["BaseLayoutComponent"],
        children: [
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutPageComponent"]
            },
            {
                path: 'get-started',
                component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_44__["GettingStartedPageComponent"]
            },
            {
                path: 'components',
                component: _components_components_component__WEBPACK_IMPORTED_MODULE_34__["ComponentsPageComponent"],
                children: [
                    {
                        component: _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__["AccordionPageComponent"],
                        path: 'accordion'
                    },
                    {
                        component: _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonPageComponent"],
                        path: 'button'
                    },
                    {
                        component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarPageComponent"],
                        path: 'calendar'
                    },
                    {
                        component: _components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__["CollapsiblePageComponent"],
                        path: 'collapsible'
                    },
                    {
                        component: _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropdownPageComponent"],
                        path: 'dropdown'
                    },
                    {
                        component: _components_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_12__["GlossaryPageComponent"],
                        path: 'glossary'
                    },
                    {
                        component: _components_html_visualizer_html_visualizer_component__WEBPACK_IMPORTED_MODULE_13__["HTMLVisualizerPageComponent"],
                        path: 'html-visualizer'
                    },
                    {
                        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListPageComponent"],
                        path: 'list'
                    },
                    {
                        component: _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__["ListItemPageComponent"],
                        path: 'list-item'
                    },
                    {
                        component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalPageComponent"],
                        path: 'modal'
                    },
                    {
                        component: _components_scroll_spy_scroll_spy_component__WEBPACK_IMPORTED_MODULE_26__["ScrollSpyPageComponent"],
                        path: 'scroll-spy'
                    },
                    {
                        component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_31__["TablePageComponent"],
                        path: 'table'
                    },
                    {
                        component: _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_33__["TooltipPageComponent"],
                        path: 'tooltip'
                    }
                ]
            },
            {
                path: 'forms',
                component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_35__["FormsPageComponent"],
                children: [
                    {
                        component: _forms_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ButtonTogglePageComponent"],
                        path: 'button-toggle'
                    },
                    {
                        component: _forms_checkbox_list_checkbox_list_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxListPageComponent"],
                        path: 'checkbox-list'
                    },
                    {
                        component: _forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxPageComponent"],
                        path: 'checkbox'
                    },
                    {
                        component: _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_40__["DatePickerPageComponent"],
                        path: 'date-picker'
                    },
                    {
                        component: _forms_form_prefix_form_prefix_component__WEBPACK_IMPORTED_MODULE_10__["FormPrefixPageComponent"],
                        path: 'form-prefix'
                    },
                    {
                        component: _forms_form_suffix_form_suffix_component__WEBPACK_IMPORTED_MODULE_11__["FormSuffixPageComponent"],
                        path: 'form-suffix'
                    },
                    {
                        component: _forms_input_input_component__WEBPACK_IMPORTED_MODULE_15__["InputPageComponent"],
                        path: 'input'
                    },
                    {
                        component: _forms_label_label_component__WEBPACK_IMPORTED_MODULE_16__["LabelPageComponent"],
                        path: 'label'
                    },
                    {
                        component: _forms_message_message_component__WEBPACK_IMPORTED_MODULE_19__["MessagePageComponent"],
                        path: 'message'
                    },
                    {
                        component: _forms_radio_radio_component__WEBPACK_IMPORTED_MODULE_23__["RadioPageComponent"],
                        path: 'radio'
                    },
                    {
                        component: _forms_select_select_component__WEBPACK_IMPORTED_MODULE_27__["SelectPageComponent"],
                        path: 'select'
                    },
                    {
                        component: _forms_slider_slider_component__WEBPACK_IMPORTED_MODULE_28__["SliderPageComponent"],
                        path: 'slider'
                    },
                    {
                        component: _forms_switch_switch_component__WEBPACK_IMPORTED_MODULE_29__["SwitchPageComponent"],
                        path: 'switch'
                    },
                    {
                        component: _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_32__["TextAreaPageComponent"],
                        path: 'textarea'
                    }
                ]
            },
            {
                path: 'layout',
                component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_36__["LayoutPageComponent"],
                children: [
                    {
                        component: _layout_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_8__["DrawerPageComponent"],
                        path: 'drawer'
                    },
                    {
                        component: _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarPageComponent"],
                        path: 'navbar'
                    },
                    {
                        component: _layout_tab_tab_component__WEBPACK_IMPORTED_MODULE_30__["TabPageComponent"],
                        path: 'tab'
                    }
                ]
            },
            {
                path: 'css',
                component: _css_css_component__WEBPACK_IMPORTED_MODULE_37__["CSSPageComponent"],
                children: [
                    {
                        component: _css_card_card_component__WEBPACK_IMPORTED_MODULE_41__["CardPageComponent"],
                        path: 'card'
                    },
                    {
                        component: _css_divider_divider_component__WEBPACK_IMPORTED_MODULE_42__["DividerPageComponent"],
                        path: 'divider'
                    },
                    {
                        component: _css_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconPageComponent"],
                        path: 'icon'
                    },
                    {
                        component: _css_ripple_ripple_component__WEBPACK_IMPORTED_MODULE_25__["RipplePageComponent"],
                        path: 'ripple'
                    }
                ]
            },
            {
                path: 'theme',
                component: _themes_theme_component__WEBPACK_IMPORTED_MODULE_39__["ThemePageComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_22__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"].forRoot(appRoutes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep body {\n  background: #F8F8F8; }\n\n::ng-deep h1 {\n  font-size: 32px;\n  font-weight: 300;\n  margin-bottom: 20px; }\n\n::ng-deep h2 {\n  font-size: 24px;\n  font-weight: 300;\n  margin-bottom: 16px; }\n\n::ng-deep h3 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 16px; }\n\n::ng-deep h4 {\n  font-size: 18px;\n  font-weight: 400;\n  margin-bottom: 16px; }\n\n::ng-deep h4.primary {\n    color: #00C996; }\n\n::ng-deep h4.secondary {\n    color: #D6006C; }\n\n::ng-deep h4.terciary {\n    color: #FFC500; }\n\n::ng-deep p {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 32px; }\n\n::ng-deep .margin-bottom-lg {\n  margin-bottom: 24px; }\n\n::ng-deep .margin-bottom-md {\n  margin-bottom: 16px; }\n\n::ng-deep .margin-bottom-sm {\n  margin-bottom: 6px; }\n\n::ng-deep .no-margin {\n  margin: 0; }\n\n::ng-deep .text-indent {\n  padding-left: 20px; }\n\n@media only screen and (max-width: 768px) {\n    ::ng-deep .text-indent {\n      padding-left: 0; } }\n\n::ng-deep .text-accent {\n  background: #008FFF;\n  border-radius: 4px;\n  color: #FFFFFF;\n  display: inline-block;\n  padding: 0 6px; }\n\n::ng-deep .text-accent.secondary {\n    background: #5707EB; }\n\n::ng-deep .text-accent.terciary {\n    background: #ffe600;\n    color: #000000;\n    display: block;\n    margin: 0 auto;\n    padding: 6px 12px;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    border-radius: 4px; }\n\n::ng-deep .example-container {\n  padding: 12px 0; }\n\n::ng-deep .example-container h3 {\n    font-weight: 300;\n    margin-bottom: 8px; }\n\n::ng-deep .up-next-container {\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n::ng-deep .up-next-container .up-next-item {\n    display: flex;\n    flex: 1;\n    padding: 0 12px; }\n\n::ng-deep .up-next-container .up-next-item .card {\n      align-items: center;\n      cursor: pointer;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      overflow: hidden;\n      position: relative; }\n\n::ng-deep .up-next-container .up-next-item .card::before {\n        background: #008FFF;\n        content: '';\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px; }\n\n::ng-deep .up-next-container .up-next-item .card p {\n        font-size: 20px;\n        flex: 1;\n        margin: 0 12px; }\n\n::ng-deep .up-next-container .up-next-item .card .materialize-icon {\n        align-items: center;\n        display: flex;\n        flex-direction: row;\n        font-size: 28px;\n        justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlcG8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUIsRUFBQTs7QUFGdkI7RUFNSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQVJ2QjtFQVlJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBZHZCO0VBa0JJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBcEJ2QjtFQXdCSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQTFCdkI7SUE2Qk0sY0FBYyxFQUFBOztBQTdCcEI7SUFpQ00sY0FBYyxFQUFBOztBQWpDcEI7SUFxQ00sY0FBYyxFQUFBOztBQXJDcEI7RUEwQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBN0N2QjtFQWlESSxtQkFBbUIsRUFBQTs7QUFqRHZCO0VBcURJLG1CQUFtQixFQUFBOztBQXJEdkI7RUF5REksa0JBQWtCLEVBQUE7O0FBekR0QjtFQTZESSxTQUFTLEVBQUE7O0FBN0RiO0VBaUVJLGtCQUFrQixFQUFBOztBQUVsQjtJQW5FSjtNQW9FTSxlQUFlLEVBQUEsRUFFbEI7O0FBdEVIO0VBeUVJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBN0VsQjtJQWdGTSxtQkFBbUIsRUFBQTs7QUFoRnpCO0lBb0ZNLG1CQUE0QjtJQUM1QixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7O0FBMUZ4QjtFQStGSSxlQUFlLEVBQUE7O0FBL0ZuQjtJQWtHTSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBbkd4QjtFQXdHSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQTFHdkI7SUE2R00sYUFBYTtJQUNiLE9BQU87SUFDUCxlQUFlLEVBQUE7O0FBL0dyQjtNQWtIUSxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTs7QUF4SDFCO1FBMkhVLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLE9BQU87UUFDUCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFVBQVUsRUFBQTs7QUFqSXBCO1FBcUlVLGVBQWU7UUFDZixPQUFPO1FBQ1AsY0FBYyxFQUFBOztBQXZJeEI7UUEySVUsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgJi5wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjMDBDOTk2O1xuICAgIH1cblxuICAgICYuc2Vjb25kYXJ5IHtcbiAgICAgIGNvbG9yOiAjRDYwMDZDO1xuICAgIH1cblxuICAgICYudGVyY2lhcnkge1xuICAgICAgY29sb3I6ICNGRkM1MDA7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxuXG4gIC5tYXJnaW4tYm90dG9tLWxnIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLm1hcmdpbi1ib3R0b20tbWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgICBcbiAgLm1hcmdpbi1ib3R0b20tc20ge1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuXG4gIC5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC50ZXh0LWluZGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWFjY2VudCB7XG4gICAgYmFja2dyb3VuZDogIzAwOEZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuXG4gICAgJi5zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogIzU3MDdFQjtcbiAgICB9XG5cbiAgICAmLnRlcmNpYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIzMCwgMCk7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG5cbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC51cC1uZXh0LWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAudXAtbmV4dC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMCAxMnB4O1xuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDhGRkY7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0ZXJpYWxpemUtaWNvbiB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _forms_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/button-toggle/button-toggle.component */ "./src/app/forms/button-toggle/button-toggle.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/checkbox/checkbox.component */ "./src/app/forms/checkbox/checkbox.component.ts");
/* harmony import */ var _forms_checkbox_list_checkbox_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/checkbox-list/checkbox-list.component */ "./src/app/forms/checkbox-list/checkbox-list.component.ts");
/* harmony import */ var _components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/collapsible/collapsible.component */ "./src/app/components/collapsible/collapsible.component.ts");
/* harmony import */ var _layout_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/drawer/drawer.component */ "./src/app/layout/drawer/drawer.component.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var _forms_form_prefix_form_prefix_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/form-prefix/form-prefix.component */ "./src/app/forms/form-prefix/form-prefix.component.ts");
/* harmony import */ var _forms_form_suffix_form_suffix_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/form-suffix/form-suffix.component */ "./src/app/forms/form-suffix/form-suffix.component.ts");
/* harmony import */ var _components_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/glossary/glossary.component */ "./src/app/components/glossary/glossary.component.ts");
/* harmony import */ var _components_html_visualizer_html_visualizer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/html-visualizer/html-visualizer.component */ "./src/app/components/html-visualizer/html-visualizer.component.ts");
/* harmony import */ var _css_icon_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./css/icon/icon.component */ "./src/app/css/icon/icon.component.ts");
/* harmony import */ var _forms_input_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/input/input.component */ "./src/app/forms/input/input.component.ts");
/* harmony import */ var _forms_label_label_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forms/label/label.component */ "./src/app/forms/label/label.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/components/list-item/list-item.component.ts");
/* harmony import */ var _forms_message_message_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forms/message/message.component */ "./src/app/forms/message/message.component.ts");
/* harmony import */ var materialize_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! materialize-angular */ "./node_modules/materialize-angular/fesm5/materialize-angular.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_radio_radio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forms/radio/radio.component */ "./src/app/forms/radio/radio.component.ts");
/* harmony import */ var _css_ripple_ripple_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./css/ripple/ripple.component */ "./src/app/css/ripple/ripple.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_scroll_spy_scroll_spy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/scroll-spy/scroll-spy.component */ "./src/app/components/scroll-spy/scroll-spy.component.ts");
/* harmony import */ var _forms_select_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forms/select/select.component */ "./src/app/forms/select/select.component.ts");
/* harmony import */ var _forms_slider_slider_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms/slider/slider.component */ "./src/app/forms/slider/slider.component.ts");
/* harmony import */ var _forms_switch_switch_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forms/switch/switch.component */ "./src/app/forms/switch/switch.component.ts");
/* harmony import */ var _layout_tab_tab_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layout/tab/tab.component */ "./src/app/layout/tab/tab.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./forms/textarea/textarea.component */ "./src/app/forms/textarea/textarea.component.ts");
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/base-layout/base-layout.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./css/css.component */ "./src/app/css/css.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _themes_theme_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./themes/theme.component */ "./src/app/themes/theme.component.ts");
/* harmony import */ var _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./forms/date-picker/date-picker.component */ "./src/app/forms/date-picker/date-picker.component.ts");
/* harmony import */ var _css_card_card_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./css/card/card.component */ "./src/app/css/card/card.component.ts");
/* harmony import */ var _css_divider_divider_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./css/divider/divider.component */ "./src/app/css/divider/divider.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started.component.ts");


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_26__["NgModule"])({
            declarations: [
                _about_about_component__WEBPACK_IMPORTED_MODULE_48__["AboutPageComponent"],
                _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__["AccordionPageComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_38__["BaseLayoutComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonPageComponent"],
                _forms_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ButtonTogglePageComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarPageComponent"],
                _css_card_card_component__WEBPACK_IMPORTED_MODULE_46__["CardPageComponent"],
                _forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxPageComponent"],
                _forms_checkbox_list_checkbox_list_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxListPageComponent"],
                _components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_10__["CollapsiblePageComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_39__["ComponentsPageComponent"],
                _css_css_component__WEBPACK_IMPORTED_MODULE_40__["CSSPageComponent"],
                _forms_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_45__["DatePickerPageComponent"],
                _css_divider_divider_component__WEBPACK_IMPORTED_MODULE_47__["DividerPageComponent"],
                _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["DropdownPageComponent"],
                _layout_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__["DrawerPageComponent"],
                _forms_form_prefix_form_prefix_component__WEBPACK_IMPORTED_MODULE_13__["FormPrefixPageComponent"],
                _forms_form_suffix_form_suffix_component__WEBPACK_IMPORTED_MODULE_14__["FormSuffixPageComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_41__["FormsPageComponent"],
                _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_49__["GettingStartedPageComponent"],
                _components_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["GlossaryPageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_42__["HomePageComponent"],
                _components_html_visualizer_html_visualizer_component__WEBPACK_IMPORTED_MODULE_16__["HTMLVisualizerPageComponent"],
                _css_icon_icon_component__WEBPACK_IMPORTED_MODULE_17__["IconPageComponent"],
                _forms_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputPageComponent"],
                _forms_label_label_component__WEBPACK_IMPORTED_MODULE_19__["LabelPageComponent"],
                _forms_message_message_component__WEBPACK_IMPORTED_MODULE_22__["MessagePageComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_43__["LayoutPageComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_20__["ListPageComponent"],
                _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_21__["ListItemPageComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalPageComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarPageComponent"],
                _forms_radio_radio_component__WEBPACK_IMPORTED_MODULE_27__["RadioPageComponent"],
                _css_ripple_ripple_component__WEBPACK_IMPORTED_MODULE_28__["RipplePageComponent"],
                _components_scroll_spy_scroll_spy_component__WEBPACK_IMPORTED_MODULE_30__["ScrollSpyPageComponent"],
                _forms_select_select_component__WEBPACK_IMPORTED_MODULE_31__["SelectPageComponent"],
                _forms_slider_slider_component__WEBPACK_IMPORTED_MODULE_32__["SliderPageComponent"],
                _forms_switch_switch_component__WEBPACK_IMPORTED_MODULE_33__["SwitchPageComponent"],
                _layout_tab_tab_component__WEBPACK_IMPORTED_MODULE_34__["TabPageComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_35__["TablePageComponent"],
                _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_36__["TextAreaPageComponent"],
                _themes_theme_component__WEBPACK_IMPORTED_MODULE_44__["ThemePageComponent"],
                _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_37__["TooltipPageComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeAccordionModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeButtonModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeButtonToggleGroupModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeCardModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeCheckboxModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeCollapsibleModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeCommonModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeDrawerModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeGlossaryModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeHTMLVisualizerModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeIconModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeInputModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeLabelModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeFormMessageModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeModalModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeNavbarModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeRadioGroupModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeScrollSpyModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeSelectModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeTabGroupModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeTextAreaModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeSliderModule"],
                materialize_angular__WEBPACK_IMPORTED_MODULE_23__["MaterializeSwitchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-layout/base-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<materialize-navbar className=\"navbar-guide\">\n  <materialize-icon className=\"navbar-icon-menu\" (onClick)=\"drawer.open()\">menu</materialize-icon>\n  <div class=\"navbar-logo-container\">\n    <img src=\"assets/images/logo-white.svg\" />\n    <p>Materialize Angular</p>\n  </div>\n</materialize-navbar>\n\n<materialize-drawer type=\"over\" className=\"collapsible-guide\" #drawer>\n  <materialize-drawer-content>\n    <ng-container *ngFor=\"let item of drawerItems\">\n      <div *ngIf=\"!item.children\" class=\"drawer-link\" [routerLink]=\"item.link\" routerLinkActive=\"active\" materializeRipple (click)=\"drawer.close()\">\n        {{ item.text }}\n      </div>\n\n      <materialize-collapsible *ngIf=\"item.children\" className=\"collapsible-guide\" [isOpen]=\"isActive(item.link)\">\n        <materialize-collapsible-title>{{ item.text }}</materialize-collapsible-title>\n  \n        <materialize-collapsible-content>\n          <div class=\"drawer-link\" [routerLink]=\"item.link + child.link\" routerLinkActive=\"active\" *ngFor=\"let child of item.children\" materializeRipple (click)=\"drawer.close()\">\n            {{ child.text }}\n          </div>\n        </materialize-collapsible-content>\n  \n      </materialize-collapsible>\n    </ng-container>\n  </materialize-drawer-content>\n\n  <materialize-drawer-container>\n    <div class=\"header-spacer\"></div>\n    <router-outlet></router-outlet>\n  </materialize-drawer-container>\n</materialize-drawer>\n\n  "

/***/ }),

/***/ "./src/app/base-layout/base-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.ts ***!
  \******************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translations_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../translations/en */ "./src/translations/en.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(router) {
        this.router = router;
        this.translations = _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer;
        this.drawerItems = [{
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.home.title,
                link: '/home'
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.about.title,
                link: '/guide/about'
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.getStarted.title,
                link: '/guide/get-started'
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.title,
                link: '/guide/components',
                children: [{
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.accordion,
                        link: '/accordion'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.button,
                        link: '/button'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.glossary,
                        link: '/glossary'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.htmlVisualizer,
                        link: '/html-visualizer'
                        // }, {
                        //   text: translations.drawer.components.children.calendar,
                        //   link: '/calendar'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.collapsible,
                        link: '/collapsible'
                        // }, {
                        //   text: translations.drawer.components.children.dropdown,
                        //   link: '/dropdown'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.list,
                        link: '/list'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.listItem,
                        link: '/list-item'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.modal,
                        link: '/modal'
                        // }, {
                        //   text: translations.drawer.components.children.table,
                        //   link: '/table'
                        // }, {
                        //   text: translations.drawer.components.children.tooltip,
                        //   link: '/tooltip'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.components.children.scrollSpy,
                        link: '/scroll-spy'
                    }]
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.title,
                link: '/guide/forms',
                children: [{
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.buttonToggle,
                        link: '/button-toggle'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.checkbox,
                        link: '/checkbox'
                        // }, {
                        //   text: translations.drawer.forms.children.checkboxList,
                        //   link: '/checkbox-list'
                        // }, {
                        //   text: translations.drawer.forms.children.datePicker,
                        //   link: '/date-picker'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.formPrefix,
                        link: '/form-prefix'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.formSuffix,
                        link: '/form-suffix'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.input,
                        link: '/input'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.label,
                        link: '/label'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.message,
                        link: '/message'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.radio,
                        link: '/radio'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.select,
                        link: '/select'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.slider,
                        link: '/slider'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.switch,
                        link: '/switch'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.forms.children.textarea,
                        link: '/textarea'
                    }]
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.css.title,
                link: '/guide/css',
                children: [{
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.css.children.card,
                        link: '/card'
                    }, {
                        //   text: translations.drawer.css.children.divider,
                        //   link: '/divider'
                        // }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.css.children.icon,
                        link: '/icon'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.css.children.ripple,
                        link: '/ripple'
                    }]
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.layout.title,
                link: '/guide/layout',
                children: [{
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.layout.children.drawer,
                        link: '/drawer'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.layout.children.navbar,
                        link: '/navbar'
                    }, {
                        text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.layout.children.tab,
                        link: '/tab'
                    }]
            }, {
                text: _translations_en__WEBPACK_IMPORTED_MODULE_2__["translations"].drawer.themes.title,
                link: '/guide/theme'
            }];
    }
    BaseLayoutComponent.prototype.isActive = function (route) {
        return this.router.isActive(route, false);
    };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./base-layout.component.html */ "./src/app/base-layout/base-layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/accordion/accordion.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>ACCORDION</h1>\n  \n      <p>\n        The <b>materialize-accordion</b> component is useful for reducing vertical space with\n        large amounts of information. The default functionality of the component is to only\n        display one expansion-panel body at a time.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeAccordionModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-accordion</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-accordion-collapsible</span> tag into your <span class=\"text-accent secondary\">materialize-accordion</span>\n          to control all the collapsibles.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-accordion>\n              <materialize-collapsible>\n                <materialize-collapsible-title>Title A</materialize-collapsible-title>\n                <materialize-collapsible-content>Content A</materialize-collapsible-content>\n              </materialize-collapsible>\n              <materialize-collapsible>\n                <materialize-collapsible-title>Title B</materialize-collapsible-title>\n                <materialize-collapsible-content>Content B</materialize-collapsible-content>\n              </materialize-collapsible>\n            </materialize-accordion>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-accordion>\n            <materialize-collapsible>\n              <materialize-collapsible-title>Title A</materialize-collapsible-title>\n              <materialize-collapsible-content>Content A</materialize-collapsible-content>\n            </materialize-collapsible>\n            <materialize-collapsible>\n              <materialize-collapsible-title>Title B</materialize-collapsible-title>\n              <materialize-collapsible-content>Content B</materialize-collapsible-content>\n            </materialize-collapsible>\n          </materialize-accordion>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Accordion like stepper</h3>\n        <materialize-accordion #accordionExample>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 1</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 2</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 3</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n        </materialize-accordion>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Accordion</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.ts ***!
  \*************************************************************/
/*! exports provided: AccordionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageComponent", function() { return AccordionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionPageComponent = /** @class */ (function () {
    function AccordionPageComponent() {
    }
    AccordionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/components/accordion/accordion.component.html")
        })
    ], AccordionPageComponent);
    return AccordionPageComponent;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>BUTTON</h1>\n  \n      <p>\n        The <b>materialize-button</b> replaces the standard html button. It's based in material design theme and a has multitude of options. \n      </p>\n      <p>\n        Can use different colors for text color and/or background being very modificable and flexible.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeButtonModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-button</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-button>This is a button</materialize-button>\n          '></materialize-html-visualizer>\n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-button>This is a button</materialize-button>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n      <p>\n        Materialize Angular provides custom functions to add functionallity its components in different ways,\n        the most common is using attributes in the component tag.\n      </p>\n\n      <div class=\"card\">\n        <h4 class=\"primary\">@Input Properties</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>disabled</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>level</td>\n              <td>text | accent | outline</td>\n              <td>\"accent\"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>rippleDuration</td>\n              <td>number</td>\n              <td>250</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>type</td>\n              <td>button | submit</td>\n              <td>\"button\"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"card\">\n        <h4 class=\"secondary\">@Output Events</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Signature</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>onClick</td>\n              <td>onClickEmitter(): EventEmitter&lt;void&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n            <tr>\n              <td>onBlur</td>\n              <td>onBlurEmitter(): EventEmitter&lt;void&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      \n      <div class=\"card\">\n        <h4 class=\"terciary\">.button-accent</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-accent-background</td><td>map-get($theme-colors, 'primary')</td><tr>\n            <tr><td>$materialize-button-accent-border</td><td>0</td><tr>\n            <tr><td>$materialize-button-accent-border-radius</td><td>$theme-radius-sm</td><tr>\n            <tr><td>$materialize-button-accent-box-shadow</td><td>$theme-shadow-sm</td><tr>\n            <tr><td>$materialize-button-accent-color</td><td>map-get($theme-colors, 'white')</td><tr>\n            <tr><td>$materialize-button-accent-cursor</td><td>pointer</td><tr>\n            <tr><td>$materialize-button-accent-display</td><td>block</td><tr>\n            <tr><td>$materialize-button-accent-font-family</td><td>$theme-font-family-primary</td><tr>\n            <tr><td>$materialize-button-accent-font-size</td><td>$theme-font-size-md</td><tr>\n            <tr><td>$materialize-button-accent-font-weight</td><td>$theme-font-weight-regular</td><tr>\n            <tr><td>$materialize-button-accent-height</td><td>auto</td><tr>\n            <tr><td>$materialize-button-accent-margin</td><td>$theme-space-sm auto</td><tr>\n            <tr><td>$materialize-button-accent-outline</td><td>none</td><tr>\n            <tr><td>$materialize-button-accent-padding</td><td>$theme-space-sm $theme-space-md</td><tr>\n            <tr><td>$materialize-button-accent-tap-highlight-color</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-accent-text-align</td><td>center</td><tr>\n            <tr><td>$materialize-button-accent-text-transform</td><td>uppercase</td><tr>\n            <tr><td>$materialize-button-accent-transition</td><td>$theme-property-background $theme-timer-md $theme-transition-function-ease</td><tr>\n            <tr><td>$materialize-button-accent-white-space</td><td>nowrap</td><tr>\n            <tr><td>$materialize-button-accent-width</td><td>auto</td><tr>\n\n            <tr><td>$materialize-button-accent-hover-background</td><td>lighten(map-get($theme-colors, 'primary'), 5%)</td><tr>\n            <tr><td>$materialize-button-accent-focused-background</td><td>lighten(map-get($theme-colors, 'primary'), 10%)</td><tr>\n\n            <tr><td>$materialize-button-accent-disabled-background</td><td>map-get($theme-colors, 'gray-60')</td><tr>\n            <tr><td>$materialize-button-accent-disabled-box-shadow</td><td>none</td><tr>\n            <tr><td>$materialize-button-accent-disabled-color</td><td>map-get($theme-colors, 'gray-40')</td><tr>\n\n            <tr><td>$materialize-button-accent-ripple-background</td><td>rgba(lighten(map-get($theme-colors, 'primary'), 50%), 0.2)</td><tr>\n          </tbody>\n        </table>\n     \n        <h4 class=\"terciary\">.button-info</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-outline-background</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-outline-border</td><td>$theme-border-sm solid map-get($theme-colors, 'gray-60')</td><tr>\n            <tr><td>$materialize-button-outline-border-radius</td><td>$theme-radius-sm</td><tr>\n            <tr><td>$materialize-button-outline-color</td><td>map-get($theme-colors, 'primary')</td><tr>\n            <tr><td>$materialize-button-outline-cursor</td><td>pointer</td><tr>\n            <tr><td>$materialize-button-outline-display</td><td>block</td><tr>\n            <tr><td>$materialize-button-outline-font-family</td><td>$theme-font-family-primary</td><tr>\n            <tr><td>$materialize-button-outline-font-size</td><td>$theme-font-size-md</td><tr>\n            <tr><td>$materialize-button-outline-font-weight</td><td>$theme-font-weight-regular</td><tr>\n            <tr><td>$materialize-button-outline-height</td><td>auto</td><tr>\n            <tr><td>$materialize-button-outline-margin</td><td>$theme-space-sm auto</td><tr>\n            <tr><td>$materialize-button-outline-outline</td><td>none</td><tr>\n            <tr><td>$materialize-button-outline-padding</td><td>$theme-space-sm $theme-space-md</td><tr>\n            <tr><td>$materialize-button-outline-tap-highlight-color</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-outline-text-align</td><td>center</td><tr>\n            <tr><td>$materialize-button-outline-text-transform</td><td>uppercase</td><tr>\n            <tr><td>$materialize-button-outline-transition</td><td>$theme-property-background $theme-timer-md $theme-transition-function-ease</td><tr>\n            <tr><td>$materialize-button-outline-white-space</td><td>nowrap</td><tr>\n            <tr><td>$materialize-button-outline-width</td><td>auto</td><tr>\n\n            <tr><td>$materialize-button-outline-hover-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.05)</td><tr>\n            <tr><td>$materialize-button-outline-focused-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.1)</td><tr>\n\n            <tr><td>$materialize-button-outline-disabled-background</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-outline-disabled-border</td><td>$theme-border-sm solid map-get($theme-colors, 'gray-60')</td><tr>\n            <tr><td>$materialize-button-outline-disabled-color</td><td>map-get($theme-colors, 'gray-60')</td><tr>\n\n            <tr><td>$materialize-button-outline-ripple-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.2)</td><tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.button-text</h4>\n        <table class=\"table-guide table-sass\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-text-background</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-text-border</td><td>0</td><tr>\n            <tr><td>$materialize-button-text-border-radius</td><td>$theme-radius-sm</td><tr>\n            <tr><td>$materialize-button-text-color</td><td>map-get($theme-colors, 'primary')</td><tr>\n            <tr><td>$materialize-button-text-cursor</td><td>pointer</td><tr>\n            <tr><td>$materialize-button-text-display</td><td>block</td><tr>\n            <tr><td>$materialize-button-text-font-family</td><td>$theme-font-family-primary</td><tr>\n            <tr><td>$materialize-button-text-font-size</td><td>$theme-font-size-md</td><tr>\n            <tr><td>$materialize-button-text-font-weight</td><td>$theme-font-weight-regular</td><tr>\n            <tr><td>$materialize-button-text-height</td><td>auto</td><tr>\n            <tr><td>$materialize-button-text-margin</td><td>$theme-space-sm auto</td><tr>\n            <tr><td>$materialize-button-text-outline</td><td>none</td><tr>\n            <tr><td>$materialize-button-text-padding</td><td>$theme-space-sm $theme-space-md</td><tr>\n            <tr><td>$materialize-button-text-tap-highlight-color</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-text-text-align</td><td>center</td><tr>\n            <tr><td>$materialize-button-text-text-transform</td><td>uppercase</td><tr>\n            <tr><td>$materialize-button-text-transition</td><td>$theme-property-background $theme-timer-md $theme-transition-function-ease</td><tr>\n            <tr><td>$materialize-button-text-white-space</td><td>nowrap</td><tr>\n            <tr><td>$materialize-button-text-width</td><td>auto</td><tr>\n\n            <tr><td>$materialize-button-text-hover-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.05)</td><tr>\n            <tr><td>$materialize-button-text-focused-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.1)</td><tr>\n\n            <tr><td>$materialize-button-text-disabled-background</td><td>transparent</td><tr>\n            <tr><td>$materialize-button-text-disabled-color</td><td>map-get($theme-colors, 'gray-60')</td><tr>\n\n            <tr><td>$materialize-button-text-ripple-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.2)</td><tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Button Accent</h3>\n        <materialize-button>Button</materialize-button>\n        <materialize-button [disabled]=\"true\">Disabled</materialize-button>\n\n        <h3>Button Outline</h3>\n        <materialize-button level=\"outline\">Button</materialize-button>\n        <materialize-button level=\"outline\" [disabled]=\"true\">Disabled</materialize-button>\n\n        <h3>Button Text</h3>\n        <materialize-button level=\"text\">Button</materialize-button>\n        <materialize-button level=\"text\" [disabled]=\"true\">Disabled</materialize-button>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Button</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageComponent", function() { return ButtonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonPageComponent = /** @class */ (function () {
    function ButtonPageComponent() {
    }
    ButtonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/button/button.component.html")
        })
    ], ButtonPageComponent);
    return ButtonPageComponent;
}());



/***/ }),

/***/ "./src/app/components/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>CALENDAR</h1>\n  \n      <p>\n        The <b>materialize-calendar</b> component is used to display different kind of date information. You can select daily, monthly or yearly.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Calendars...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n  <h2>Contents</h2>\n  <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n    <materialize-glossary-item referenceId=\"title\">Calendar</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n    <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n  </materialize-glossary>      \n</div></div>\n  "

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarPageComponent = /** @class */ (function () {
    function CalendarPageComponent() {
    }
    CalendarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/components/calendar/calendar.component.html")
        })
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/components/collapsible/collapsible.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/collapsible/collapsible.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>COLLAPSIBLE</h1>\n  \n      <p>\n        The <b>materialize-collapsible</b> component you can control the state of a toolbar when the user interacts with it.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeCollapsibleModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-collapsible</span> tag in your template.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-collapsible-title</span> tag into your <span class=\"text-accent secondary\">materialize-collapsible</span>\n          to display the collapsible title.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-collapsible-content</span> tag into your <span class=\"text-accent secondary\">materialize-collapsible</span>\n          to display the collapsible content.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-collapsible>\n              <materialize-collapsible-title>Title</materialize-collapsible-title>\n              <materialize-collapsible-content>Content</materialize-collapsible-content>\n            </materialize-collapsible>\n          '></materialize-html-visualizer>\n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title</materialize-collapsible-title>\n            <materialize-collapsible-content>Content</materialize-collapsible-content>\n          </materialize-collapsible>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple collapsible</h3>\n        <materialize-collapsible>\n          <materialize-collapsible-title>Title</materialize-collapsible-title>\n          <materialize-collapsible-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Aliquam minima soluta enim porro atque placeat quis commodi\n            deserunt veniam libero molestiae doloremque eveniet incidunt,\n            odit expedita cupiditate est tenetur reprehenderit.\n          </materialize-collapsible-content>\n        </materialize-collapsible>\n        \n        <h3>Collapsible open</h3>\n        <materialize-collapsible [isOpen]=\"true\">\n          <materialize-collapsible-title>Title</materialize-collapsible-title>\n          <materialize-collapsible-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Aliquam minima soluta enim porro atque placeat quis commodi\n            deserunt veniam libero molestiae doloremque eveniet incidunt,\n            odit expedita cupiditate est tenetur reprehenderit.\n          </materialize-collapsible-content>\n        </materialize-collapsible>\n        \n        <h3>Collapsible disabled</h3>\n        <materialize-collapsible [disabled]=\"true\">\n          <materialize-collapsible-title>Title</materialize-collapsible-title>\n          <materialize-collapsible-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Aliquam minima soluta enim porro atque placeat quis commodi\n            deserunt veniam libero molestiae doloremque eveniet incidunt,\n            odit expedita cupiditate est tenetur reprehenderit.\n          </materialize-collapsible-content>\n        </materialize-collapsible>\n\n        <h3>Collapsible open disabled</h3>\n        <materialize-collapsible [isOpen]=\"true\" [disabled]=\"true\">\n          <materialize-collapsible-title>Title</materialize-collapsible-title>\n          <materialize-collapsible-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Aliquam minima soluta enim porro atque placeat quis commodi\n            deserunt veniam libero molestiae doloremque eveniet incidunt,\n            odit expedita cupiditate est tenetur reprehenderit.\n          </materialize-collapsible-content>\n        </materialize-collapsible>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Collapsible</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/components/collapsible/collapsible.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/collapsible/collapsible.component.ts ***!
  \*****************************************************************/
/*! exports provided: CollapsiblePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsiblePageComponent", function() { return CollapsiblePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollapsiblePageComponent = /** @class */ (function () {
    function CollapsiblePageComponent() {
    }
    CollapsiblePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./collapsible.component.html */ "./src/app/components/collapsible/collapsible.component.html")
        })
    ], CollapsiblePageComponent);
    return CollapsiblePageComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageComponent", function() { return ComponentsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentsPageComponent = /** @class */ (function () {
    function ComponentsPageComponent() {
    }
    ComponentsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html")
        })
    ], ComponentsPageComponent);
    return ComponentsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>DROPDOWN</h1>\n  \n      <p>\n        The <b>materialize-dropdown</b> component is a normal select with some additional styling for user interaction.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Dropdowns...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Dropdown</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n      "

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.ts ***!
  \***********************************************************/
/*! exports provided: DropdownPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownPageComponent", function() { return DropdownPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownPageComponent = /** @class */ (function () {
    function DropdownPageComponent() {
    }
    DropdownPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/components/dropdown/dropdown.component.html")
        })
    ], DropdownPageComponent);
    return DropdownPageComponent;
}());



/***/ }),

/***/ "./src/app/components/glossary/glossary.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/glossary/glossary.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>GLOSSARY</h1>\n  \n      <p>\n        The <b>materialize-accordion</b> component is useful for reducing vertical space with\n        large amounts of information. The default functionality of the component is to only\n        display one expansion-panel body at a time.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeAccordionModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-accordion</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-accordion-collapsible</span> tag into your <span class=\"text-accent secondary\">materialize-accordion</span>\n          to control all the collapsibles.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-accordion>\n              <materialize-collapsible>\n                <materialize-collapsible-title>Title A</materialize-collapsible-title>\n                <materialize-collapsible-content>Content A</materialize-collapsible-content>\n              </materialize-collapsible>\n              <materialize-collapsible>\n                <materialize-collapsible-title>Title B</materialize-collapsible-title>\n                <materialize-collapsible-content>Content B</materialize-collapsible-content>\n              </materialize-collapsible>\n            </materialize-accordion>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-accordion>\n            <materialize-collapsible>\n              <materialize-collapsible-title>Title A</materialize-collapsible-title>\n              <materialize-collapsible-content>Content A</materialize-collapsible-content>\n            </materialize-collapsible>\n            <materialize-collapsible>\n              <materialize-collapsible-title>Title B</materialize-collapsible-title>\n              <materialize-collapsible-content>Content B</materialize-collapsible-content>\n            </materialize-collapsible>\n          </materialize-accordion>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Accordion like stepper</h3>\n        <materialize-accordion #accordionExample>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 1</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 2</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n          <materialize-collapsible>\n            <materialize-collapsible-title>Title 3</materialize-collapsible-title>\n            <materialize-collapsible-content>\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n              Aliquam minima soluta enim porro atque placeat quis commodi\n              deserunt veniam libero molestiae doloremque eveniet incidunt,\n              odit expedita cupiditate est tenetur reprehenderit.\n        \n              <materialize-button (onClick)=\"accordionExample.showPrev()\">Show Prev</materialize-button>\n              <materialize-button (onClick)=\"accordionExample.showNext()\">Show Next</materialize-button>\n            </materialize-collapsible-content>\n          </materialize-collapsible>\n        </materialize-accordion>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Accordion</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/glossary/glossary.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/glossary/glossary.component.ts ***!
  \***********************************************************/
/*! exports provided: GlossaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryPageComponent", function() { return GlossaryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlossaryPageComponent = /** @class */ (function () {
    function GlossaryPageComponent() {
    }
    GlossaryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./glossary.component.html */ "./src/app/components/glossary/glossary.component.html")
        })
    ], GlossaryPageComponent);
    return GlossaryPageComponent;
}());



/***/ }),

/***/ "./src/app/components/html-visualizer/html-visualizer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/html-visualizer/html-visualizer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>HTML VISUALIZER</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">List</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/html-visualizer/html-visualizer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/html-visualizer/html-visualizer.component.ts ***!
  \*************************************************************************/
/*! exports provided: HTMLVisualizerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVisualizerPageComponent", function() { return HTMLVisualizerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HTMLVisualizerPageComponent = /** @class */ (function () {
    function HTMLVisualizerPageComponent() {
    }
    HTMLVisualizerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./html-visualizer.component.html */ "./src/app/components/html-visualizer/html-visualizer.component.html")
        })
    ], HTMLVisualizerPageComponent);
    return HTMLVisualizerPageComponent;
}());



/***/ }),

/***/ "./src/app/components/list-item/list-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>LIST ITEM</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">List</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-item/list-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ListItemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageComponent", function() { return ListItemPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListItemPageComponent = /** @class */ (function () {
    function ListItemPageComponent() {
    }
    ListItemPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/components/list-item/list-item.component.html")
        })
    ], ListItemPageComponent);
    return ListItemPageComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>LIST</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">List</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n      "

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListPageComponent = /** @class */ (function () {
    function ListPageComponent() {
    }
    ListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html")
        })
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>MODAL</h1>\n  \n      <p>\n        The <b>materialize-modal</b> component is a dialog that can be open by calling the open method\n        and it can be dismissed when touching outside dialog or by pressing the close button.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeModalModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-modal</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - To open the modal just call the modal open() method.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-modal #myModal>\n              This is a modal\n            </materialize-modal>\n            <materialize-button (onClick)=\"myModal.open()\">Open modal</materialize-button>\n          '></materialize-html-visualizer>\n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-modal #modalExample>This is a modal</materialize-modal>\n          <materialize-button (onClick)=\"modalExample.open()\">Open modal</materialize-button>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple modal</h3>\n        <materialize-modal #modalExample1>This is a modal</materialize-modal>\n        <materialize-button (onClick)=\"modalExample1.open()\">Open modal</materialize-button>\n       \n        <h3>Modal without close button</h3>\n        <materialize-modal #modalExample2 [hasCloseButton]=\"false\">This is a modal</materialize-modal>\n        <materialize-button (onClick)=\"modalExample2.open()\">Open modal</materialize-button>\n\n        <h3>Modal not close on backdrop</h3>\n        <materialize-modal #modalExample3 [dismissOnBackdrop]=\"false\">This is a modal</materialize-modal>\n        <materialize-button (onClick)=\"modalExample3.open()\">Open modal</materialize-button>\n\n        <h3>Modal without backdrop</h3>\n        <materialize-modal #modalExample4 [hasBackdrop]=\"false\">This is a modal</materialize-modal>\n        <materialize-button (onClick)=\"modalExample4.open()\">Open modal</materialize-button>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Modal</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageComponent", function() { return ModalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalPageComponent = /** @class */ (function () {
    function ModalPageComponent() {
    }
    ModalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        })
    ], ModalPageComponent);
    return ModalPageComponent;
}());



/***/ }),

/***/ "./src/app/components/scroll-spy/scroll-spy.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>SCROLL SPY</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">List</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/scroll-spy/scroll-spy.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrollSpyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyPageComponent", function() { return ScrollSpyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollSpyPageComponent = /** @class */ (function () {
    function ScrollSpyPageComponent() {
    }
    ScrollSpyPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./scroll-spy.component.html */ "./src/app/components/scroll-spy/scroll-spy.component.html")
        })
    ], ScrollSpyPageComponent);
    return ScrollSpyPageComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>TABLE</h1>\n  \n      <p>\n        The <b>materialize-table</b> component is a way to use <i>table</i> element and all of their table elements like <i>tr</i>, <i>thead</i>...\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Table...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Table</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TablePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageComponent", function() { return TablePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablePageComponent = /** @class */ (function () {
    function TablePageComponent() {
    }
    TablePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html")
        })
    ], TablePageComponent);
    return TablePageComponent;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>TOOLTIP</h1>\n  \n      <p>\n        The <b>materialize-tooltip</b> component is for show information to the user when hover over an element. Tooltip will display a text label to identify an element.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Tooltip...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Tooltip</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPageComponent", function() { return TooltipPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipPageComponent = /** @class */ (function () {
    function TooltipPageComponent() {
    }
    TooltipPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/components/tooltip/tooltip.component.html")
        })
    ], TooltipPageComponent);
    return TooltipPageComponent;
}());



/***/ }),

/***/ "./src/app/css/card/card.component.html":
/*!**********************************************!*\
  !*** ./src/app/css/card/card.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>CARD</h1>\n  \n      <p>\n        The <b>materialize-card</b> component can be used for panel and/or static image.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeCardModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-card</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-card>This is my card</materialize-card>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-card>This is my card</materialize-card>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n        <h3>Simple card</h3>\n        <materialize-card>\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt earum odit quod, dignissimos quidem soluta, porro saepe hic cum deserunt officia? Rerum, facere. Necessitatibus est commodi tempora in esse?\n        </materialize-card>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Card</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/css/card/card.component.ts":
/*!********************************************!*\
  !*** ./src/app/css/card/card.component.ts ***!
  \********************************************/
/*! exports provided: CardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageComponent", function() { return CardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPageComponent = /** @class */ (function () {
    function CardPageComponent() {
    }
    CardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/css/card/card.component.html")
        })
    ], CardPageComponent);
    return CardPageComponent;
}());



/***/ }),

/***/ "./src/app/css/css.component.html":
/*!****************************************!*\
  !*** ./src/app/css/css.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/css/css.component.ts":
/*!**************************************!*\
  !*** ./src/app/css/css.component.ts ***!
  \**************************************/
/*! exports provided: CSSPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPageComponent", function() { return CSSPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CSSPageComponent = /** @class */ (function () {
    function CSSPageComponent() {
    }
    CSSPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./css.component.html */ "./src/app/css/css.component.html")
        })
    ], CSSPageComponent);
    return CSSPageComponent;
}());



/***/ }),

/***/ "./src/app/css/divider/divider.component.html":
/*!****************************************************!*\
  !*** ./src/app/css/divider/divider.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>DIVIDER</h1>\n  \n<p>\n  The <b>materialize-divider</b> component is used to separate sections in lists or layouts.\n</p>"

/***/ }),

/***/ "./src/app/css/divider/divider.component.ts":
/*!**************************************************!*\
  !*** ./src/app/css/divider/divider.component.ts ***!
  \**************************************************/
/*! exports provided: DividerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerPageComponent", function() { return DividerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DividerPageComponent = /** @class */ (function () {
    function DividerPageComponent() {
    }
    DividerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./divider.component.html */ "./src/app/css/divider/divider.component.html")
        })
    ], DividerPageComponent);
    return DividerPageComponent;
}());



/***/ }),

/***/ "./src/app/css/icon/icon.component.html":
/*!**********************************************!*\
  !*** ./src/app/css/icon/icon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>ICON</h1>\n  \n      <p>\n        The <b>materialize-icon</b> component provides context to your application with the different <i>images</i> that you can use. Here is the official <a href=\"https://materialdesignicons.com/\">Material Design Icons site</a>.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeIconModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-icon</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-icon>favorite</materialize-icon>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-icon>favorite</materialize-icon>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n        <h3>Icon Done</h3>\n        <materialize-icon>done</materialize-icon>\n\n        <h3>Icon Accessibility</h3>\n        <materialize-icon>accessibility</materialize-icon>\n\n        <h3>Icon Chat</h3>\n        <materialize-icon>chat</materialize-icon>\n\n        <h3>Icon Laptop Mac</h3>\n        <materialize-icon>laptop_mac</materialize-icon>\n\n        <h3>Icon Phone Android</h3>\n        <materialize-icon>phone_android</materialize-icon>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Card</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/css/icon/icon.component.ts":
/*!********************************************!*\
  !*** ./src/app/css/icon/icon.component.ts ***!
  \********************************************/
/*! exports provided: IconPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPageComponent", function() { return IconPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconPageComponent = /** @class */ (function () {
    function IconPageComponent() {
    }
    IconPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/css/icon/icon.component.html")
        })
    ], IconPageComponent);
    return IconPageComponent;
}());



/***/ }),

/***/ "./src/app/css/ripple/ripple.component.html":
/*!**************************************************!*\
  !*** ./src/app/css/ripple/ripple.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>RIPPLE</h1>\n  \n      <p>\n        The <b>materialize-ripple</b> directive show how a user interact with the site. Can be applied to different components.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeCommonModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materializeRipple</span> directive in your html tag.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\"></div>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <div class=\"text-indent\">\n          <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\"></div>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n        <h3>Simple ripple</h3>\n        <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\"></div>\n        \n        <h3>Ripple center</h3>\n        <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\" [isRippleCenter]=\"true\"></div>\n\n        <h3>Ripple with 2 seconds</h3>\n        <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\" [rippleDuration]=\"2000\"></div>\n        \n        <h3>Ripple disabled</h3>\n        <div materializeRipple style=\"width: 300px; height: 300px; border: 1px solid #CCC;\" [isRippleActive]=\"false\"></div>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Card</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/css/ripple/ripple.component.ts":
/*!************************************************!*\
  !*** ./src/app/css/ripple/ripple.component.ts ***!
  \************************************************/
/*! exports provided: RipplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RipplePageComponent", function() { return RipplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RipplePageComponent = /** @class */ (function () {
    function RipplePageComponent() {
    }
    RipplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./ripple.component.html */ "./src/app/css/ripple/ripple.component.html")
        })
    ], RipplePageComponent);
    return RipplePageComponent;
}());



/***/ }),

/***/ "./src/app/forms/button-toggle/button-toggle.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/button-toggle/button-toggle.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>BUTTON TOGGLE</h1>\n  \n      <p>\n        The <b>materialize-button-toggle</b> component is on/off toggles with the appearance of a button. The toggle can be configured as radio-buttons or checkboxes.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeButtonToggleGroupModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-button-toggle-group</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-button-toggle</span> tag into your <span class=\"text-accent secondary\">materialize-button-toggle-group</span>\n          to show and register each button.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-button-toggle-group value=\"B\">\n              <materialize-button-toggle value=\"A\">Option A</materialize-button-toggle>\n              <materialize-button-toggle value=\"B\">Option B</materialize-button-toggle>\n              <materialize-button-toggle value=\"C\">Option C</materialize-button-toggle>\n            </materialize-button-toggle-group>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-button-toggle-group value=\"B\">\n            <materialize-button-toggle value=\"A\">Option A</materialize-button-toggle>\n            <materialize-button-toggle value=\"B\">Option B</materialize-button-toggle>\n            <materialize-button-toggle value=\"C\">Option C</materialize-button-toggle>\n          </materialize-button-toggle-group>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n      <p>\n        Materialize Angular provides custom functions to add functionallity its components in different ways,\n        the most common is using attributes in the component tag.\n      </p>\n\n      <div class=\"card\">\n        <h4 class=\"primary\">@Input Properties: Button Toggle Group</h4>\n        <table class=\"table-guide margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>canUncheck</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" </td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>disabled</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>value</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>type</td>\n              <td>button | submit</td>\n              <td>\"button\"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"primary\">@Input Properties: Button Toggle</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" </td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>disabled</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>name</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>value</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"card\">\n        <h4 class=\"secondary\">@Output Events: Button Toggle Group</h4>\n        <table class=\"table-guide margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Signature</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>onChange</td>\n              <td>@Output() onChangeEmitter: EventEmitter&lt;string&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"secondary\">@Output Events: Button Toggle</h4>\n        <table class=\"table-guide \">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Signature</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>onClick</td>\n              <td>@Output() onClickEmitter: EventEmitter&lt;string&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n\n      <div class=\"card\">\n        <h4 class=\"terciary\">.button-toggle-group</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-toggle-group-border-color</td><td>map-get($theme-colors, 'primary')</td></tr>\n            <tr><td>$materialize-button-toggle-group-border-radius</td><td>$theme-radius-sm</td></tr>\n            <tr><td>$materialize-button-toggle-group-border-style</td><td>solid</td></tr>\n            <tr><td>$materialize-button-toggle-group-border-width</td><td>$theme-border-sm</td></tr>\n            <tr><td>$materialize-button-toggle-group-margin</td><td>0</td></tr>\n            <tr><td>$materialize-button-toggle-group-padding</td><td>0</td></tr>\n            <tr><td>$materialize-button-toggle-group-width</td><td>max-content</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.button-toggle-group with modifications (.disabled)</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-toggle-group-disabled-border-color</td><td>map-get($theme-colors, 'gray-60')</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.button-toggle</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-toggle-background</td><td>map-get($theme-colors, 'white')</td></tr>\n            <tr><td>$materialize-button-toggle-color</td><td>map-get($theme-colors, 'primary')</td></tr>\n            <tr><td>$materialize-button-toggle-cursor</td><td>pointer</td></tr>\n            <tr><td>$materialize-button-toggle-font-family</td><td>$theme-font-family-primary</td></tr>\n            <tr><td>$materialize-button-toggle-font-size</td><td>$theme-font-size-md</td></tr>\n            <tr><td>$materialize-button-toggle-font-weight</td><td>$theme-font-weight-regular</td></tr>\n            <tr><td>$materialize-button-toggle-outline</td><td>none</td></tr>\n            <tr><td>$materialize-button-toggle-padding</td><td>$theme-space-sm $theme-space-md</td></tr>\n            <tr><td>$materialize-button-toggle-tap-highlight-color</td><td>transparent</td></tr>\n            <tr><td>$materialize-button-toggle-text-align</td><td>center</td></tr>\n            <tr><td>$materialize-button-toggle-transition</td><td>$theme-property-background $theme-timer-md $theme-transition-function-ease</td></tr>\n            <tr><td>$materialize-button-toggle-width</td><td>auto</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.button-toggle (.hover, .focused, .active, .disabled)</h4>\n        <table class=\"table-guide table-sass\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-button-toggle-hover-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.1)</td></tr>\n            <tr><td>$materialize-button-toggle-focused-background</td><td>rgba(map-get($theme-colors, 'primary'), 0.2)</td></tr>\n\n            <tr><td>$materialize-button-toggle-active-background</td><td>map-get($theme-colors, 'primary')</td></tr>\n            <tr><td>$materialize-button-toggle-active-color</td><td>map-get($theme-colors, 'white')</td></tr>\n\n            <tr><td>$materialize-button-toggle-disabled-background</td><td>map-get($theme-colors, 'gray-80')</td></tr>\n            <tr><td>$materialize-button-toggle-disabled-color</td><td>map-get($theme-colors, 'gray-60')</td></tr>\n\n            <tr><td>$materialize-button-toggle-ripple-background</td><td>rgba(lighten(map-get($theme-colors, 'primary'), 50%), 0.2);</td></tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple button toggle</h3>\n        <materialize-button-toggle-group>\n          <materialize-button-toggle value=\"1\">Text1</materialize-button-toggle>\n          <materialize-button-toggle value=\"2\">Text2</materialize-button-toggle>\n        </materialize-button-toggle-group>\n\n        <h3>Button toggle with value</h3>\n        <materialize-button-toggle-group value=\"2\">\n          <materialize-button-toggle value=\"1\">Text1</materialize-button-toggle>\n          <materialize-button-toggle value=\"2\">Text2</materialize-button-toggle>\n        </materialize-button-toggle-group>\n\n        <h3>Button toggle can be unchecked</h3>\n        <materialize-button-toggle-group [canUncheck]=\"true\">\n          <materialize-button-toggle value=\"1\">Text1</materialize-button-toggle>\n          <materialize-button-toggle value=\"2\">Text2</materialize-button-toggle>\n        </materialize-button-toggle-group>\n\n        <h3>Button toggle disabled</h3>\n        <materialize-button-toggle-group [disabled]=\"true\">\n          <materialize-button-toggle value=\"1\">Text1</materialize-button-toggle>\n          <materialize-button-toggle value=\"2\">Text2</materialize-button-toggle>\n        </materialize-button-toggle-group>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Button Toggle</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/button-toggle/button-toggle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/button-toggle/button-toggle.component.ts ***!
  \****************************************************************/
/*! exports provided: ButtonTogglePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTogglePageComponent", function() { return ButtonTogglePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonTogglePageComponent = /** @class */ (function () {
    function ButtonTogglePageComponent() {
    }
    ButtonTogglePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./button-toggle.component.html */ "./src/app/forms/button-toggle/button-toggle.component.html")
        })
    ], ButtonTogglePageComponent);
    return ButtonTogglePageComponent;
}());



/***/ }),

/***/ "./src/app/forms/checkbox-list/checkbox-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/checkbox-list/checkbox-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>CHECKBOX LIST</h1>\n  \n      <p>\n        The <b>materialize-checkbox-list</b> component is the same as checkbox but in a list.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Checkbox Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Checkbox List</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/forms/checkbox-list/checkbox-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/checkbox-list/checkbox-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckboxListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxListPageComponent", function() { return CheckboxListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxListPageComponent = /** @class */ (function () {
    function CheckboxListPageComponent() {
    }
    CheckboxListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./checkbox-list.component.html */ "./src/app/forms/checkbox-list/checkbox-list.component.html")
        })
    ], CheckboxListPageComponent);
    return CheckboxListPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/checkbox/checkbox.component.html":
/*!********************************************************!*\
  !*** ./src/app/forms/checkbox/checkbox.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>CHECKBOX</h1>\n  \n      <p>\n        The <b>materialize-checkbox</b> component works as the native component but with Material Design styling animation and other features.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeCheckboxModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-checkbox</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-checkbox>This is my checkbox field</materialize-checkbox>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-checkbox>This is my checkbox field</materialize-checkbox>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n        <h3>Simple checkbox</h3>\n        <materialize-checkbox>Checkbox</materialize-checkbox>\n\n        <h3>Checkbox with value</h3>\n        <materialize-checkbox [value]=\"true\">With Value</materialize-checkbox>\n\n        <h3>Checkbox disabled</h3>\n        <materialize-checkbox [disabled]=\"true\">Disabled</materialize-checkbox>\n\n        <h3>Checkbox disabled with value</h3>\n        <materialize-checkbox [disabled]=\"true\" [value]=\"true\">Disabled with value</materialize-checkbox>\n\n        <h3>Checkbox indeterminate</h3>\n        <materialize-checkbox [required]=\"true\" [indeterminate]=\"true\">Indeterminate</materialize-checkbox>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Checkbox</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/checkbox/checkbox.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forms/checkbox/checkbox.component.ts ***!
  \******************************************************/
/*! exports provided: CheckboxPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageComponent", function() { return CheckboxPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxPageComponent = /** @class */ (function () {
    function CheckboxPageComponent() {
    }
    CheckboxPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/forms/checkbox/checkbox.component.html")
        })
    ], CheckboxPageComponent);
    return CheckboxPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/date-picker/date-picker.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/date-picker/date-picker.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>DATE PICKER</h1>\n  \n      <p>\n        The <b>materialize-date-picker</b> component is can be utilized with other components. The component is for the user can see in a visual way the date selection like day or month.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Date Picker...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Date Picker</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/forms/date-picker/date-picker.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/date-picker/date-picker.component.ts ***!
  \************************************************************/
/*! exports provided: DatePickerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerPageComponent", function() { return DatePickerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatePickerPageComponent = /** @class */ (function () {
    function DatePickerPageComponent() {
    }
    DatePickerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/forms/date-picker/date-picker.component.html")
        })
    ], DatePickerPageComponent);
    return DatePickerPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-prefix/form-prefix.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/form-prefix/form-prefix.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>FORM PREFIX</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/form-prefix/form-prefix.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/form-prefix/form-prefix.component.ts ***!
  \************************************************************/
/*! exports provided: FormPrefixPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPrefixPageComponent", function() { return FormPrefixPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormPrefixPageComponent = /** @class */ (function () {
    function FormPrefixPageComponent() {
    }
    FormPrefixPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./form-prefix.component.html */ "./src/app/forms/form-prefix/form-prefix.component.html")
        })
    ], FormPrefixPageComponent);
    return FormPrefixPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-suffix/form-suffix.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/form-suffix/form-suffix.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>FORM SUFFIX</h1>\n  \n      <p>\n        The <b>materialize-list</b> component is used to display information in list mode. You can present different kind of data in a collection like actions, subheaders, avatars... \n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n      <p>Lists...</p>\n  \n      <p>Example</p>\n      <p>Visualizer</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/form-suffix/form-suffix.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/form-suffix/form-suffix.component.ts ***!
  \************************************************************/
/*! exports provided: FormSuffixPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSuffixPageComponent", function() { return FormSuffixPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormSuffixPageComponent = /** @class */ (function () {
    function FormSuffixPageComponent() {
    }
    FormSuffixPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./form-suffix.component.html */ "./src/app/forms/form-suffix/form-suffix.component.html")
        })
    ], FormSuffixPageComponent);
    return FormSuffixPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageComponent", function() { return FormsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsPageComponent = /** @class */ (function () {
    function FormsPageComponent() {
    }
    FormsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html")
        })
    ], FormsPageComponent);
    return FormsPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/input/input.component.html":
/*!**************************************************!*\
  !*** ./src/app/forms/input/input.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>INPUT</h1>\n  \n      <p>\n        The <b>materialize-input</b> component is the way to create your own inputs.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeInputModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-input</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-input floatLabel=\"This is my input field\"></materialize-input>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>HTML Generated</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <div class=\"materialize-form-control-container float-label\">\n              <div class=\"materialize-form-control-prefix\"></div>\n              <div class=\"materialize-form-control-wrapper\">\n                <div class=\"materialize-form-control-label\">This is my input field</div>\n                <input class=\"materialize-form-control\" autocomplete=\"none\" maxlength=\"500\" name=\"\" placeholder=\"\" type=\"text\" />\n              </div>\n              <div class=\"materialize-form-control-suffix\"></div>\n            </div>\n          '></materialize-html-visualizer>\n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-input floatLabel=\"This is my input field\"></materialize-input>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n      <p>\n        Materialize Angular provides custom functions to add functionallity its components in different ways,\n        the most common is using attributes in the component tag.\n      </p>\n\n      <div class=\"card\">\n        <h4 class=\"primary\">@Input Properties</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>autocomplete</td>\n              <td>string</td>\n              <td>\"none\"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>disabled</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>floatLabel</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>hasCounter</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>id</td>\n              <td>string | null</td>\n              <td>null</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>maxLength</td>\n              <td>number</td>\n              <td>500</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>name</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>placeholder</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>required</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>type</td>\n              <td>boolean</td>\n              <td>false</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>value</td>\n              <td>\"password\" | \"text\"</td>\n              <td>\"text\"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"card\">\n        <h4 class=\"secondary\">@Output Events</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Signature</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>onFocus</td>\n              <td>onFocusEmitter(): EventEmitter&lt;void&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n            <tr>\n              <td>onChange</td>\n              <td>onChangeEmitter(): EventEmitter&lt;string&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n            <tr>\n              <td>onBlur</td>\n              <td>onBlurEmitter(): EventEmitter&lt;void&gt;</td>\n              <td>\"none\"</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>\n        Materialize Angular supports a lot of SASS variables to change all the component\n        style so that feel to modify component look and feel by changing the following SASS variables.<br><br>\n\n        The Materialize Angular SASS variable names are created base on the following pattern:<br><br>\n        <span class=\"text-accent terciary\">\"tagClassName\" + (optional \"-\" + \"modifierTagClassName\" ) + \"-\" + \"cssProperty\"</span>        \n      </p>\n\n      <div class=\"card\">\n        <h4 class=\"terciary\">.form-control-container</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>$materialize-form-control-container-background</td>\n              <td>$materialize-color-gray-light</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-border-color</td>\n              <td>$materialize-color-gray-dark</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-border-radius</td>\n              <td>$materialize-radius-sm $materialize-radius-sm 0 0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-border-style</td>\n              <td>solid</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-border-width</td>\n              <td>0 0 $materialize-border-sm 0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-margin</td>\n              <td>0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-outiline</td>\n              <td>none</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-bottom</td>\n              <td>-1px</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-color</td>\n              <td>$materialize-color-purple</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-height</td>\n              <td>$materialize-border-md</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-transition</td>\n              <td>$materialize-timer-md $materialize-function-ease $materialize-property-width</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-width</td>\n              <td>0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-container-line-z-index</td>\n              <td>$materialize-zindex-level-1</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-control</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>$materialize-form-control-caret-color</td>\n              <td>$materialize-color-purple</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-color</td>\n              <td>$materialize-color-gray-darkest</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-font-family</td>\n              <td>$materialize-font-family-primary</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-font-size</td>\n              <td>$materialize-font-size-sm</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-font-weight</td>\n              <td>$materialize-font-weight-regular</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-line-height</td>\n              <td>100%</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-letter-spacing</td>\n              <td>0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-padding</td>\n              <td>$materialize-space-sm</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-placeholder-color</td>\n              <td>$materialize-color-gray</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-placeholder-font-weight</td>\n              <td>$materialize-font-weight-regular</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-control with modifications (.with-label, .active, .disabled, .focused)</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>$materialize-form-control-with-label-padding-top</td>\n              <td>$materialize-space-xl</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-active-label-font-size</td>\n              <td>$materialize-font-size-xxs</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-active-label-top</td>\n              <td>0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-focused-container-line-width</td>\n              <td>100%</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-focused-label-color</td>\n              <td>$materialize-color-purple</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-disabled-container-border-color</td>\n              <td>$materialize-color-gray</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-disabled-container-backgorund</td>\n              <td>$materialize-color-gray-light</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-disabled-label-color</td>\n              <td>$materialize-color-gray</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-disabled-color</td>\n              <td>$materialize-color-gray</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-control-label</h4>\n        <table class=\"table-guide table-sass\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>$materialize-form-control-label-background</td>\n              <td>$materialize-color-gray-light</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-color</td>\n              <td>$materialize-color-gray-dark</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-font-family</td>\n              <td>$materialize-font-family-primary</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-font-size</td>\n              <td>$materialize-font-size-sm</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-font-weight</td>\n              <td>$materialize-font-weight-regular</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-letter-spacing</td>\n              <td>0</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-transition-duration</td>\n              <td>$materialize-timer-sm</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-transition-function</td>\n              <td>$materialize-function-ease</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-transition-property</td>\n              <td>$materialize-property-top $materialize-property-font-size</td>\n            </tr>\n            <tr>\n              <td>$materialize-form-control-label-padding</td>\n              <td>$materialize-space-xs $materialize-space-sm $materialize-space-xxxs</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      \n      <div class=\"card\">\n        <table class=\"table-guide table-playground\">\n          <thead>\n            <tr>\n              <td>Option</td>\n              <td>Result</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                <materialize-checkbox (onChange)=\"onChangeDisabled($event)\">disabled</materialize-checkbox>\n                <materialize-checkbox (onChange)=\"onChangeHasCounter($event)\">hasCounter</materialize-checkbox>\n                <materialize-checkbox (onChange)=\"onChangeHasPrefix($event)\">hasPrefix</materialize-checkbox>\n                <materialize-checkbox (onChange)=\"onChangeHasSuffix($event)\">hasSuffix</materialize-checkbox>\n                <materialize-checkbox (onChange)=\"onChangeType($event)\">typePassword</materialize-checkbox>\n                <materialize-label>float label</materialize-label>\n                <materialize-input (onChange)=\"onChangeFloatLabel($event)\">floatLabel</materialize-input>\n                <materialize-label>placeholder</materialize-label>\n                <materialize-input (onChange)=\"onChangePlaceholder($event)\">placeholder</materialize-input>\n                <materialize-label>value</materialize-label>\n                <materialize-input (onChange)=\"onChangeValue($event)\">value</materialize-input>\n              </td>\n              <td>\n                <materialize-input\n                  [disabled]=\"disabled\"\n                  [floatLabel]=\"floatLabel\"\n                  [hasCounter]=\"hasCounter\"\n                  [placeholder]=\"placeholder\"\n                  [type]=\"type\"\n                  [value]=\"value\">\n                  <span materializePrefix *ngIf=\"hasPrefix\">+52</span>\n                  <span materializeSuffix *ngIf=\"hasSuffix\">.00</span>\n                </materialize-input>\n              </td>  \n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <div class=\"example-container\">\n          <h3>Simple input</h3>\n          <materialize-input></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input type password</h3>\n          <materialize-input type=\"password\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input with Value</h3>\n          <materialize-input value=\"My value\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input with Counter</h3>\n          <materialize-input [hasCounter]=\"true\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input with Placeholder</h3>\n          <materialize-input label=\"Placeholder\" placeholder=\"Write here\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input Disabled</h3>\n          <materialize-input [disabled]=\"true\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input Disabled and value</h3>\n          <materialize-input [disabled]=\"true\" value=\"My value\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input Float Label with value</h3>\n          <materialize-input [disabled]=\"true\" value=\"My value\" floatLabel=\"Float label\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input Float Label</h3>\n          <materialize-input floatLabel=\"Float label\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input Float Label with Placeholder</h3>\n          <materialize-input floatLabel=\"Float Label and placeholder\" placeholder=\"Write here\"></materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input with Prefix</h3>\n          <materialize-input floatLabel=\"Float Label\">\n              <materialize-icon materializePrefix>phone</materialize-icon>\n            </materialize-input>\n        </div>\n\n        <div class=\"example-container\">\n          <h3>Input with Suffix</h3>\n          <materialize-input>\n            <span materializeSuffix>.00</span>\n          </materialize-input>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>UP NEXT</h2>\n      <div class=\"up-next-container\">\n        <div class=\"up-next-item\">\n          <div class=\"card\">\n            <p>TextArea</p>\n            <materialize-icon>chevron_right</materialize-icon>\n          </div>\n        </div>\n        <div class=\"up-next-item\">\n          <div class=\"card\">\n            <p>Select</p>\n            <materialize-icon>chevron_right</materialize-icon>\n          </div>\n        </div>\n        <div class=\"up-next-item\">\n          <div class=\"card\">\n            <p>Switch</p>\n            <materialize-icon>chevron_right</materialize-icon>\n          </div>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Input</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/forms/input/input.component.ts":
/*!************************************************!*\
  !*** ./src/app/forms/input/input.component.ts ***!
  \************************************************/
/*! exports provided: InputPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageComponent", function() { return InputPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputPageComponent = /** @class */ (function () {
    function InputPageComponent() {
        this.autocomplete = 'none';
        this.className = '';
        this.disabled = false;
        this.floatLabel = '';
        this.hasCounter = false;
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.id = null;
        this.maxLength = 500;
        this.name = '';
        this.placeholder = '';
        this.required = false;
        this.type = 'text';
        this.value = '';
    }
    InputPageComponent.prototype.onChangeDisabled = function (disabled) {
        this.disabled = disabled;
    };
    InputPageComponent.prototype.onChangeHasCounter = function (hasCounter) {
        this.hasCounter = hasCounter;
    };
    InputPageComponent.prototype.onChangeHasPrefix = function (hasPrefix) {
        this.hasPrefix = hasPrefix;
    };
    InputPageComponent.prototype.onChangeHasSuffix = function (hasSuffix) {
        this.hasSuffix = hasSuffix;
    };
    InputPageComponent.prototype.onChangeFloatLabel = function (floatLabel) {
        this.floatLabel = floatLabel;
    };
    InputPageComponent.prototype.onChangePlaceholder = function (placeholder) {
        this.placeholder = placeholder;
    };
    InputPageComponent.prototype.onChangeValue = function (value) {
        this.value = value;
    };
    InputPageComponent.prototype.onChangeType = function (typePassword) {
        this.type = typePassword ? 'password' : 'text';
    };
    InputPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/forms/input/input.component.html")
        })
    ], InputPageComponent);
    return InputPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/label/label.component.html":
/*!**************************************************!*\
  !*** ./src/app/forms/label/label.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>LABEL</h1>\n  \n      <p>\n        The <b>materialize-label</b> component is to label inside the site.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeLabelModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-label</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-label>This is a form label</materialize-label>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-label>This is a form label</materialize-label>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n      <p>\n        Materialize Angular provides custom functions to add functionallity its components in different ways,\n        the most common is using attributes in the component tag.\n      </p>\n\n      <div class=\"card\">\n        <h4 class=\"primary\">@Input Properties</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      \n      <div class=\"card\">\n        <h4 class=\"terciary\">.label</h4>\n        <table class=\"table-guide table-sass\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-label-color</td><td>map-get($theme-colors, 'primary')</td></tr>\n            <tr><td>$materialize-label-display</td><td>block</td></tr>\n            <tr><td>$materialize-label-font-family</td><td>$theme-font-family-primary</td></tr>\n            <tr><td>$materialize-label-font-size</td><td>$theme-font-size-xs</td></tr>\n            <tr><td>$materialize-label-font-weight</td><td>$theme-font-weight-regular</td></tr>\n            <tr><td>$materialize-label-margin</td><td>0</td></tr>\n            <tr><td>$materialize-label-outline</td><td>none</td></tr>\n            <tr><td>$materialize-label-padding</td><td>$theme-space-xs $theme-space-sm</td></tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple label</h3>\n        <materialize-label>Label</materialize-label>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Label</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/forms/label/label.component.ts":
/*!************************************************!*\
  !*** ./src/app/forms/label/label.component.ts ***!
  \************************************************/
/*! exports provided: LabelPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPageComponent", function() { return LabelPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelPageComponent = /** @class */ (function () {
    function LabelPageComponent() {
    }
    LabelPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./label.component.html */ "./src/app/forms/label/label.component.html")
        })
    ], LabelPageComponent);
    return LabelPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/message/message.component.html":
/*!******************************************************!*\
  !*** ./src/app/forms/message/message.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>MESSAGE</h1>\n  \n      <p>\n        The <b>materialize-label</b> component is to label inside the site.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeLabelModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-label</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-label>This is a form label</materialize-label>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-label>This is a form label</materialize-label>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <div class=\"card\">\n        <h4 class=\"primary\">@Input Properties</h4>\n        <table class=\"table-guide\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Type</td>\n              <td>Default</td>\n              <td>Description</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>level</td>\n              <td>error | info | success | warning</td>\n              <td>\"info\"</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>className</td>\n              <td>string</td>\n              <td>\" \"</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <div class=\"card\">\n        <h4 class=\"terciary\">form-message general variables</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-form-message-font-family</td><td>$theme-font-family-primary</td></tr>\n            <tr><td>$materialize-form-message-font-size</td><td>$theme-font-size-md</td></tr>\n            <tr><td>$materialize-form-message-font-weight</td><td>$theme-font-weight-regular</td></tr>\n            <tr><td>$materialize-form-message-letter-spacing</td><td>0</td></tr>\n            <tr><td>$materialize-form-message-line-height</td><td>100%</td></tr>\n            <tr><td>$materialize-form-message-margin</td><td>0</td></tr>\n            <tr><td>$materialize-form-message-padding</td><td>$theme-space-sm</td></tr>\n            <tr><td>$materialize-form-message-text-align</td><td>left</td></tr>\n          </tbody>\n        </table>\n     \n        <h4 class=\"terciary\">.form-message-info</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-form-message-info-color</td><td>map-get($theme-colors, 'gray-20')</td></tr>\n            <tr><td>$materialize-form-message-info-font-family</td><td>$materialize-form-message-font-family</td></tr>\n            <tr><td>$materialize-form-message-info-font-size</td><td>$materialize-form-message-font-size</td></tr>\n            <tr><td>$materialize-form-message-info-font-weight</td><td>$materialize-form-message-font-weight</td></tr>\n            <tr><td>$materialize-form-message-info-letter-spacing</td><td>$materialize-form-message-letter-spacing</td></tr>\n            <tr><td>$materialize-form-message-info-line-height</td><td>$materialize-form-message-line-height</td></tr>\n            <tr><td>$materialize-form-message-info-margin</td><td>$materialize-form-message-margin</td></tr>\n            <tr><td>$materialize-form-message-info-padding</td><td>$materialize-form-message-padding</td></tr>\n            <tr><td>$materialize-form-message-info-text-align</td><td>$materialize-form-message-text-align</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-message-error</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-form-message-error-color</td><td>map-get($theme-colors, 'danger')</td></tr>\n            <tr><td>$materialize-form-message-error-font-family</td><td>$materialize-form-message-font-family</td></tr>\n            <tr><td>$materialize-form-message-error-font-size</td><td>$materialize-form-message-font-size</td></tr>\n            <tr><td>$materialize-form-message-error-font-weight</td><td>$materialize-form-message-font-weight</td></tr>\n            <tr><td>$materialize-form-message-error-letter-spacing</td><td>$materialize-form-message-letter-spacing</td></tr>\n            <tr><td>$materialize-form-message-error-line-height</td><td>$materialize-form-message-line-height</td></tr>\n            <tr><td>$materialize-form-message-error-margin</td><td>$materialize-form-message-margin</td></tr>\n            <tr><td>$materialize-form-message-error-padding</td><td>$materialize-form-message-padding</td></tr>\n            <tr><td>$materialize-form-message-error-text-align</td><td>$materialize-form-message-text-align</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-message-success</h4>\n        <table class=\"table-guide table-sass margin-bottom-lg\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-form-message-success-color</td><td>map-get($theme-colors, 'info')</td></tr>\n            <tr><td>$materialize-form-message-success-font-family</td><td>$materialize-form-message-font-family</td></tr>\n            <tr><td>$materialize-form-message-success-font-size</td><td>$materialize-form-message-font-size</td></tr>\n            <tr><td>$materialize-form-message-success-font-weight</td><td>$materialize-form-message-font-weight</td></tr>\n            <tr><td>$materialize-form-message-success-letter-spacing</td><td>$materialize-form-message-letter-spacing</td></tr>\n            <tr><td>$materialize-form-message-success-line-height</td><td>$materialize-form-message-line-height</td></tr>\n            <tr><td>$materialize-form-message-success-margin</td><td>$materialize-form-message-margin</td></tr>\n            <tr><td>$materialize-form-message-success-padding</td><td>$materialize-form-message-padding</td></tr>\n            <tr><td>$materialize-form-message-success-text-align</td><td>$materialize-form-message-text-align</td></tr>\n          </tbody>\n        </table>\n\n        <h4 class=\"terciary\">.form-message-warning</h4>\n        <table class=\"table-guide table-sass\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Default</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td>$materialize-form-message-warning-color</td><td>map-get($theme-colors, 'warning')</td></tr>\n            <tr><td>$materialize-form-message-warning-font-family</td><td>$materialize-form-message-font-family</td></tr>\n            <tr><td>$materialize-form-message-warning-font-size</td><td>$materialize-form-message-font-size</td></tr>\n            <tr><td>$materialize-form-message-warning-font-weight</td><td>$materialize-form-message-font-weight</td></tr>\n            <tr><td>$materialize-form-message-warning-letter-spacing</td><td>$materialize-form-message-letter-spacing</td></tr>\n            <tr><td>$materialize-form-message-warning-line-height</td><td>$materialize-form-message-line-height</td></tr>\n            <tr><td>$materialize-form-message-warning-margin</td><td>$materialize-form-message-margin</td></tr>\n            <tr><td>$materialize-form-message-warning-padding</td><td>$materialize-form-message-padding</td></tr>\n            <tr><td>$materialize-form-message-warning-text-align</td><td>$materialize-form-message-text-align</td></tr>\n          </tbody>\n        </table>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple label</h3>\n        <materialize-label>Label</materialize-label>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Label</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/message/message.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/message/message.component.ts ***!
  \****************************************************/
/*! exports provided: MessagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageComponent", function() { return MessagePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagePageComponent = /** @class */ (function () {
    function MessagePageComponent() {
    }
    MessagePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/forms/message/message.component.html")
        })
    ], MessagePageComponent);
    return MessagePageComponent;
}());



/***/ }),

/***/ "./src/app/forms/radio/radio.component.html":
/*!**************************************************!*\
  !*** ./src/app/forms/radio/radio.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>RADIO</h1>\n  \n      <p>\n        The <b>materialize-radio</b> component is a way to select elements from a list.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeRadioGroupModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-radio-group</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-radio</span> tag into your <span class=\"text-accent secondary\">materialize-radio-group</span>.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-radio-group>\n              <materialize-radio value=\"A\">Radio A</materialize-radio>\n              <materialize-radio value=\"B\">Radio B</materialize-radio>\n            </materialize-radio-group>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-radio-group>\n            <materialize-radio value=\"A\">Radio A</materialize-radio>\n            <materialize-radio value=\"B\">Radio B</materialize-radio>\n          </materialize-radio-group>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple radio</h3>\n        <materialize-radio>Radio</materialize-radio>\n\n        <h3>Radio with value</h3>\n        <materialize-radio value=\"2\">With Value</materialize-radio>\n\n        <h3>Radio disabled</h3>\n        <materialize-radio [disabled]=\"true\">Disabled</materialize-radio>\n\n        <h3>Simple radio group</h3>\n        <materialize-radio-group>\n          <materialize-radio value=\"a\">Value A</materialize-radio>\n          <materialize-radio value=\"b\">Value B</materialize-radio>\n        </materialize-radio-group>\n\n        <h3>Radio group with value</h3>\n        <materialize-radio-group value=\"b\">\n          <materialize-radio value=\"a\">Value A</materialize-radio>\n          <materialize-radio value=\"b\">Value B</materialize-radio>\n        </materialize-radio-group>\n\n        <h3>Radio group can be unchecked</h3>\n        <materialize-radio-group [canUncheck]=\"true\">\n          <materialize-radio value=\"a\">Value A</materialize-radio>\n          <materialize-radio value=\"b\">Value B</materialize-radio>\n        </materialize-radio-group>\n\n        <h3>Radio group disabled</h3>\n        <materialize-radio-group [disabled]=\"true\">\n          <materialize-radio value=\"a\">Value A</materialize-radio>\n          <materialize-radio value=\"b\">Value B</materialize-radio>\n        </materialize-radio-group>\n\n        <h3>Radio group disabled with value</h3>\n        <materialize-radio-group [disabled]=\"true\" value=\"b\">\n          <materialize-radio value=\"a\">Value A</materialize-radio>\n          <materialize-radio value=\"b\">Value B</materialize-radio>\n        </materialize-radio-group>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Radio</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/forms/radio/radio.component.ts":
/*!************************************************!*\
  !*** ./src/app/forms/radio/radio.component.ts ***!
  \************************************************/
/*! exports provided: RadioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageComponent", function() { return RadioPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioPageComponent = /** @class */ (function () {
    function RadioPageComponent() {
    }
    RadioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/forms/radio/radio.component.html")
        })
    ], RadioPageComponent);
    return RadioPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/select/select.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/select/select.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>SELECT</h1>\n  \n      <p>\n        The <b>materialize-select</b> component is the way to collect user information from a list of options.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeSelectModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-select</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-select-option</span> tag into your <span class=\"text-accent secondary\">materialize-select</span>.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-select floatLabel=\"This is my select field\">\n              <materialize-select-option value=\"A\">Option A</materialize-select-option>\n              <materialize-select-option value=\"B\">Option B</materialize-select-option>\n            </materialize-select>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-select floatLabel=\"This is my select field\">\n            <materialize-select-option value=\"A\">Option A</materialize-select-option>\n            <materialize-select-option value=\"B\">Option B</materialize-select-option>\n          </materialize-select>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Native Select</h3>\n        <materialize-select [isNativeControl]=\"true\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n        \n        <h3>Native Select with value</h3>\n        <materialize-select [isNativeControl]=\"true\" value=\"2\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Native Select disabled</h3>\n        <materialize-select [isNativeControl]=\"true\" [disabled]=\"true\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Native Select with float label</h3>\n        <materialize-select [isNativeControl]=\"true\" floatLabel=\"Select\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Native Select disabled with value</h3>\n        <materialize-select [isNativeControl]=\"true\" [disabled]=\"true\" value=\"2\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Native Select disabled with value and float label</h3>\n        <materialize-select [isNativeControl]=\"true\" [disabled]=\"true\" value=\"2\" floatLabel=\"Select\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Simple select</h3>\n        <materialize-select>\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Select with value</h3>\n        <materialize-select value=\"2\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Select disabled</h3>\n        <materialize-select [disabled]=\"true\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Select with float label</h3>\n        <materialize-select floatLabel=\"Select\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Select disabled with value</h3>\n        <materialize-select [disabled]=\"true\" value=\"2\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n\n        <h3>Select disabled with value and float label</h3>\n        <materialize-select [disabled]=\"true\" value=\"2\" floatLabel=\"Select\">\n          <materialize-select-option value=\"1\">Option 1</materialize-select-option>\n          <materialize-select-option value=\"2\">Option 2</materialize-select-option>\n        </materialize-select>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Select</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/forms/select/select.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/select/select.component.ts ***!
  \**************************************************/
/*! exports provided: SelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageComponent", function() { return SelectPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectPageComponent = /** @class */ (function () {
    function SelectPageComponent() {
    }
    SelectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/forms/select/select.component.html")
        })
    ], SelectPageComponent);
    return SelectPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/slider/slider.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/slider/slider.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>SLIDER</h1>\n  \n      <p>\n        The <b>materialize-slider</b> component is an easy way to see better the number input.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeSliderModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-slider</span> tag in your template.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-slider-option</span> tag into your <span class=\"text-accent secondary\">materialize-slider</span>\n          to show and register each option.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-slider-indicator</span> tag in your <span class=\"text-accent secondary\">materialize-slider</span>\n          to display the indicator you prefer.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-slider value=\"B\">\n              <materialize-slider-indicator>\n                <img src=\"https://via.placeholder.com/20x20\" />\n              </materialize-slider-indicator>\n\n              <materialize-slider-option value=\"A\">Option A</materialize-slider-option>\n              <materialize-slider-option value=\"B\">Option B</materialize-slider-option>\n              <materialize-slider-option value=\"C\">Option C</materialize-slider-option>\n            </materialize-slider>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-slider value=\"B\">\n            <materialize-slider-indicator>\n              <img src=\"https://via.placeholder.com/20x20/5707EB/FFFFFF\" />\n            </materialize-slider-indicator>\n\n            <materialize-slider-option value=\"A\">Option A</materialize-slider-option>\n            <materialize-slider-option value=\"B\">Option B</materialize-slider-option>\n            <materialize-slider-option value=\"C\">Option C</materialize-slider-option>\n          </materialize-slider>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n\n        <h3>Simple slider</h3>\n        <materialize-slider>\n          <materialize-slider-indicator>\n            <img src=\"https://via.placeholder.com/20x20/5707EB/FFFFFF\" />\n          </materialize-slider-indicator>\n\n          <materialize-slider-option value=\"A\">Option A</materialize-slider-option>\n          <materialize-slider-option value=\"B\">Option B</materialize-slider-option>\n        </materialize-slider>\n\n        <h3>Slider with value</h3>\n        <materialize-slider value=\"B\">\n          <materialize-slider-indicator>\n            <img src=\"https://via.placeholder.com/20x20/5707EB/FFFFFF\" />\n          </materialize-slider-indicator>\n\n          <materialize-slider-option value=\"A\">Option A</materialize-slider-option>\n          <materialize-slider-option value=\"B\">Option B</materialize-slider-option>\n        </materialize-slider>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Slider</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n          "

/***/ }),

/***/ "./src/app/forms/slider/slider.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/slider/slider.component.ts ***!
  \**************************************************/
/*! exports provided: SliderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageComponent", function() { return SliderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderPageComponent = /** @class */ (function () {
    function SliderPageComponent() {
    }
    SliderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/forms/slider/slider.component.html")
        })
    ], SliderPageComponent);
    return SliderPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/switch/switch.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/switch/switch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>SWITCH</h1>\n  \n      <p>\n        The <b>materialize-switch</b> component is another way to select user information from the site.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeSwitchModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-switch</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-switch>This is my switch field</materialize-switch>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-switch>This is my switch field</materialize-switch>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n\n      <div class=\"card\">\n        <h3>Simple switch</h3>\n        <materialize-switch>Switch</materialize-switch>\n\n        <h3>Switch with value</h3>\n        <materialize-switch [value]=\"true\">With Value</materialize-switch>\n\n        <h3>Switch disabled</h3>\n        <materialize-switch [disabled]=\"true\">Disabled</materialize-switch>\n\n        <h3>Switch disabled with value</h3>\n        <materialize-switch [disabled]=\"true\" [value]=\"true\">Disabled with value</materialize-switch>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Switch</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n          "

/***/ }),

/***/ "./src/app/forms/switch/switch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/switch/switch.component.ts ***!
  \**************************************************/
/*! exports provided: SwitchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPageComponent", function() { return SwitchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchPageComponent = /** @class */ (function () {
    function SwitchPageComponent() {
    }
    SwitchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/forms/switch/switch.component.html")
        })
    ], SwitchPageComponent);
    return SwitchPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/textarea/textarea.component.html":
/*!********************************************************!*\
  !*** ./src/app/forms/textarea/textarea.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>TEXTAREA</h1>\n  \n      <p>\n        The <b>materialize-textarea</b> component is to get data (in large amounts) from the user.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeTextAreaModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-textarea</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-textarea floatLabel=\"This is my textarea field\"></materialize-textarea>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <p class=\"text-indent no-margin\">\n          <materialize-textarea floatLabel=\"This is my textarea field\"></materialize-textarea>\n        </p>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple textarea</h3>\n        <materialize-textarea></materialize-textarea>\n\n        <h3>Textarea with value</h3>\n        <materialize-textarea value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"></materialize-textarea>\n\n        <h3>Textarea with 3 rows</h3>\n        <materialize-textarea [rows]=\"3\"></materialize-textarea>\n\n        <h3>Textarea with counter</h3>\n        <materialize-textarea [hasCounter]=\"true\"></materialize-textarea>\n\n        <h3>Textarea with placeholder</h3>\n        <materialize-textarea placeholder=\"Write here\"></materialize-textarea>\n        \n        <h3>Textarea with float label</h3>\n        <materialize-textarea floatLabel=\"Float Label\"></materialize-textarea>\n\n        <h3>Textarea with float label and value</h3>\n        <materialize-textarea floatLabel=\"Float Label\" value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"></materialize-textarea>\n\n        <h3>Textarea with float label, value and placeholder</h3>\n        <materialize-textarea floatLabel=\"Float Label and placeholder\" placeholder=\"Placeholder\"></materialize-textarea>\n\n        <h3>Textarea disabled</h3>\n        <materialize-textarea [disabled]=\"true\"></materialize-textarea>\n\n        <h3>Textarea disabled with value</h3>\n        <materialize-textarea [disabled]=\"true\" value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"></materialize-textarea>\n\n        <h3>Textarea disabled with value and float label</h3>\n        <materialize-textarea [disabled]=\"true\" floatLabel=\"Float Label\" value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"></materialize-textarea>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Textarea</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n          "

/***/ }),

/***/ "./src/app/forms/textarea/textarea.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forms/textarea/textarea.component.ts ***!
  \******************************************************/
/*! exports provided: TextAreaPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaPageComponent", function() { return TextAreaPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextAreaPageComponent = /** @class */ (function () {
    function TextAreaPageComponent() {
    }
    TextAreaPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./textarea.component.html */ "./src/app/forms/textarea/textarea.component.html")
        })
    ], TextAreaPageComponent);
    return TextAreaPageComponent;
}());



/***/ }),

/***/ "./src/app/getting-started/getting-started.component.html":
/*!****************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"materialize-container\">\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <h1>Getting started</h1>\n    </div>\n  </div>\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <div class=\"card\">\n        <h3>Install npm package</h3>\n        <materialize-html-visualizer html='npm install --save materialize-angular'></materialize-html-visualizer>\n      </div>\n    </div>\n  </div>\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <div class=\"card\">\n        <h3>Add styles</h3>\n        <p>Import materialize angular styles by writing the following lines in your styles.scssfile (it is located in my-project/src/styles.scss)</p>\n        <materialize-html-visualizer html=\"\n          $materialize-fonts-path: '~materialize-angular/fonts';\n\n          // You can change styles by overwriting SASS variables here (see the available variable list in each component)\n\n          @import '~materialize-angular/styles/materialize-angular.scss';\n        \"></materialize-html-visualizer>\n      </div>\n    </div>\n  </div>\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <div class=\"card\">\n        <h3>Import component modules in your app module</h3>\n        <p>Import just specific components by importing each one like MaterializeButtonModule, MaterializeCardModule, etc.</p>\n        <materialize-html-visualizer html=\"\n          import { Component, NgModule } from '@angular/core';\n          import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';\n          \n          @NgModule({\n            imports: [\n              MaterializeButtonModule,\n              MaterializeCardModule\n            ]\n          })\n          export class MyModule {}\n        \"></materialize-html-visualizer>\n      </div>\n    </div>\n  </div>\n  <div class=\"materialize-row\">\n    <div class=\"materialize-col-12\">\n      <div class=\"card\">\n        <h3>Use imported components</h3>\n        <p>Finally use the imported components into your apps components:</p>\n        <materialize-html-visualizer html=\"\n          import { Component } from '@angular/core';\n    \n          @Component({\n            selector: 'app-demo',\n            template: `\n              <materialize-card>\n                <materialize-button>Hello From Materialize Angular!</materialize-button>\n              </materialize-card>\n            `\n          })\n          export class MyDemoComponent {}\n        \"></materialize-html-visualizer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/getting-started/getting-started.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.ts ***!
  \**************************************************************/
/*! exports provided: GettingStartedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPageComponent", function() { return GettingStartedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GettingStartedPageComponent = /** @class */ (function () {
    function GettingStartedPageComponent() {
    }
    GettingStartedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/getting-started/getting-started.component.html")
        })
    ], GettingStartedPageComponent);
    return GettingStartedPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <div class=\"header-container\">\n    <div class=\"logo-container\">\n      <img src=\"assets/images/logo-white.svg\" />\n    </div>\n    <div class=\"title-container\">\n      <h1>Materialize Angular</h1>\n      <h2>Frontend design system for Angular</h2>\n\n      <section class=\"links-container\">\n        <materialize-button level=\"outline\" routerLink=\"/guide/get-started\">GET STARTED</materialize-button>\n        <a href=\"https://github.com/workylab/materialize-angular\" target=\"_blank\">\n          <materialize-button>GITHUB</materialize-button>\n        </a>\n\n        <a href=\"https://www.npmjs.com/package/materialize-angular\" target=\"_blank\">\n          <materialize-button>NPM</materialize-button>\n        </a>\n\n        <!-- <materialize-button>GET HELP</materialize-button> -->\n      </section>\n    </div>\n  </div>\n\n  <div class=\"materialize-container\">\n    <div class=\"materialize-row materialize-row-gap\">\n      <div class=\"materialize-col-12 materialize-col-sm-5\">\n        <div class=\"info-text\">\n          <h3>Vibrant community</h3>\n          <p>\n            When you run into a roadblock you need assistance right away.\n            Materialize Angular offers support in our massive community on discord.\n          </p>\n        </div>\n        <div class=\"info-text rounded\">\n          <h3>Semantic Material Components</h3>\n          <p>\n            Be prepared for an armada of specialized components at your disposal.\n            With over 80 in total, there is a solution to any situation.\n          </p>\n        </div>\n        <div class=\"info-text\">\n          <h3>Raedy-Made Project Scaffolding</h3>\n          <p>\n            Materialize Angular supports the future of Angular tooling through its\n            Materialize Angular plugin.\n            With one command you are ready to start building your next great idea.\n          </p>\n        </div>\n      </div>\n      <div class=\"materialize-col-12 materialize-col-sm-7 main-image-container\">\n        <img class=\"materialize-img-fluid\" src=\"assets/images/main-slide.svg\" />\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <span class=\"copyright\">Copyright ©WorkyLab 2019</span>\n  </footer>  \n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/layout/drawer/drawer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/drawer/drawer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>DRAWER</h1>\n  \n      <p>\n        The <b>materialize-drawer</b> component is used by the users to navigate throught the application.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeDrawerModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-drawer</span> tag in your template.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-drawer-content</span> tag into your <span class=\"text-accent secondary\">materialize-drawer</span>\n          to display the content that the drawer will have.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-drawer-container</span> tag into your <span class=\"text-accent secondary\">materialize-drawer</span>\n          to display the content that the rest of your main container will have.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-drawer>\n              <materialize-drawer-content>This is the drawer content</materialize-drawer-content>\n              <materialize-drawer-container>This is the container for your main content</materialize-drawer-container>\n            </materialize-drawer>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <div class=\"text-indent\">\n          <materialize-drawer>\n            <materialize-drawer-content>This is the drawer content</materialize-drawer-content>\n            <materialize-drawer-container>This is the container for your main content</materialize-drawer-container>\n          </materialize-drawer>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n        <h2>API</h2>\n    \n        <table>\n          <tr>\n            <td>Prop</td>\n            <td>Type</td>\n            <td>Default</td>\n          </tr>\n          <tr>\n            <td>className</td>\n            <td>string</td>\n            <td>''</td>\n          </tr>\n        </table>\n      </materialize-scroll-spy-item>\n\n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      <p>Many examples of them with title</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Drawer</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n          "

/***/ }),

/***/ "./src/app/layout/drawer/drawer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/drawer/drawer.component.ts ***!
  \***************************************************/
/*! exports provided: DrawerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPageComponent", function() { return DrawerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrawerPageComponent = /** @class */ (function () {
    function DrawerPageComponent() {
    }
    DrawerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/app/layout/drawer/drawer.component.html")
        })
    ], DrawerPageComponent);
    return DrawerPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageComponent", function() { return LayoutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutPageComponent = /** @class */ (function () {
    function LayoutPageComponent() {
    }
    LayoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html")
        })
    ], LayoutPageComponent);
    return LayoutPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>NAVBAR</h1>\n  \n      <p>\n        The <b>materialize-navbar</b> component is to show a list of options in floating panel mode.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeNavbarModule</span> in your module.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-navbar</span> tag in your template.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-navbar>This is my navbar</materialize-navbar>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <div class=\"text-indent\">\n          <materialize-navbar type=\"over\">This is my navbar</materialize-navbar>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n\n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple navbar</h3>\n        <materialize-navbar>Navbar</materialize-navbar>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Navbar</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarPageComponent", function() { return NavbarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarPageComponent = /** @class */ (function () {
    function NavbarPageComponent() {
    }
    NavbarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/navbar/navbar.component.html")
        })
    ], NavbarPageComponent);
    return NavbarPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/tab/tab.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/tab/tab.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <materialize-scroll-spy class=\"main-container\" #scrollSpy>\n    <materialize-scroll-spy-item id=\"title\">\n      <h1>TAB</h1>\n  \n      <p>\n        The <b>materialize-tab</b> component is for organize content into separate views but only one can be visible.\n      </p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"usage\">\n      <h2>USAGE</h2>\n\n      <div class=\"card\">  \n        <h3>How to use</h3>\n\n        <p class=\"text-indent margin-bottom-sm\">\n          - Import the <span class=\"text-accent\">MaterializeTabModule</span> in your module.\n        </p>\n        <p class=\"text-indent margin-bottom-sm\">\n          - Use the <span class=\"text-accent secondary\">materialize-tab-group</span> tag in your template.\n        </p>\n        <p class=\"text-indent\">\n          - Use the <span class=\"text-accent secondary\">materialize-tab-group</span> tag into your <span class=\"text-accent secondary\">materialize-tab-group</span>\n          to display your tab title and tab content.\n        </p>\n\n        <h3>Code</h3>\n        <p class=\"text-indent\">\n          <materialize-html-visualizer html='\n            <materialize-tab-group>\n              <materialize-tab title=\"Tab A\">Tab A</materialize-tab>\n              <materialize-tab title=\"Tab B\">Tab B</materialize-tab>\n            </materialize-tab-group>\n          '></materialize-html-visualizer>        \n        </p>\n\n        <h3>Result</h3>\n        <div class=\"text-indent\">\n          <materialize-tab-group>\n            <materialize-tab title=\"Tab A\">Tab A</materialize-tab>\n            <materialize-tab title=\"Tab B\">Tab B</materialize-tab>\n          </materialize-tab-group>\n        </div>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"api\">    \n      <h2>API</h2>\n  \n      <table>\n        <tr>\n          <td>Prop</td>\n          <td>Type</td>\n          <td>Default</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>string</td>\n          <td>''</td>\n        </tr>\n      </table>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"theming\">\n      <h2>THEMING</h2>\n      <p>CSS variables here...</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"playground\">\n      <h2>PLAYGROUND</h2>\n      <p>One example with all variants as checkbox or switch controls</p>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"examples\">\n      <h2>EXAMPLES</h2>\n      \n      <div class=\"card\">\n        <h3>Simple tab</h3>\n        <materialize-tab-group>\n          <materialize-tab title=\"Header A\">Content A</materialize-tab>\n          <materialize-tab title=\"Header B\">Content B</materialize-tab>\n        </materialize-tab-group>\n\n        <h3>Simple tab with disabled tab</h3>\n        <materialize-tab-group>\n          <materialize-tab title=\"Header A\">Content A</materialize-tab>\n          <materialize-tab title=\"Header B\" [disabled]=\"true\">Content B disabled</materialize-tab>\n        </materialize-tab-group>\n      </div>\n    </materialize-scroll-spy-item>\n  \n    <materialize-scroll-spy-item id=\"up_next\">\n      <h2>NEXT</h2>\n      <p>More components here...</p>\n    </materialize-scroll-spy-item>\n  </materialize-scroll-spy>\n  \n  <div class=\"glossary-container\">\n    <h2>Contents</h2>\n    <materialize-glossary [scrollSpy]=\"scrollSpy\" [topSpace]=\"90\" className=\"glossary-guide\">\n      <materialize-glossary-item referenceId=\"title\">Tab</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"usage\">Usage</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"api\">API</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"theming\">Theming</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"playground\">Playground</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"examples\">Examples</materialize-glossary-item>\n      <materialize-glossary-item referenceId=\"up_next\">Up Next</materialize-glossary-item>\n    </materialize-glossary>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/tab/tab.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/tab/tab.component.ts ***!
  \*********************************************/
/*! exports provided: TabPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPageComponent", function() { return TabPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabPageComponent = /** @class */ (function () {
    function TabPageComponent() {
    }
    TabPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/layout/tab/tab.component.html")
        })
    ], TabPageComponent);
    return TabPageComponent;
}());



/***/ }),

/***/ "./src/app/themes/theme.component.html":
/*!*********************************************!*\
  !*** ./src/app/themes/theme.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/themes/theme.component.ts":
/*!*******************************************!*\
  !*** ./src/app/themes/theme.component.ts ***!
  \*******************************************/
/*! exports provided: ThemePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageComponent", function() { return ThemePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemePageComponent = /** @class */ (function () {
    function ThemePageComponent() {
    }
    ThemePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/themes/theme.component.html")
        })
    ], ThemePageComponent);
    return ThemePageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/translations/en.ts":
/*!********************************!*\
  !*** ./src/translations/en.ts ***!
  \********************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translations", function() { return translations; });
var translations = {
    drawer: {
        search: { placeholder: 'Search' },
        home: { title: 'Home' },
        about: { title: 'About' },
        getStarted: { title: 'Getting Started' },
        components: {
            title: 'Components',
            children: {
                accordion: 'Accordion',
                collapsible: 'Collapsible',
                button: 'Button',
                calendar: 'Calendar',
                dropdown: 'Dropdown',
                glossary: 'Glossary',
                htmlVisualizer: 'HTML Visualizer',
                list: 'List',
                listItem: 'List Item',
                modal: 'Modal',
                scrollSpy: 'Scroll Spy',
                table: 'Table',
                tooltip: 'Tooltip'
            }
        },
        forms: {
            title: 'Forms',
            children: {
                buttonToggle: 'Button Toggle',
                checkbox: 'Checkbox',
                checkboxList: 'Checkbox List',
                datePicker: 'Date Picker',
                formPrefix: 'Form Prefix',
                formSuffix: 'Form Suffix',
                input: 'Input',
                label: 'Label',
                message: 'Message',
                radio: 'Radio',
                select: 'Select',
                slider: 'Slider',
                switch: 'Switch',
                textarea: 'Textarea'
            }
        },
        css: {
            title: 'CSS',
            children: {
                card: 'Card',
                divider: 'Divider',
                icon: 'Icon',
                ripple: 'Ripple'
            }
        },
        layout: {
            title: 'Layout',
            children: {
                drawer: 'Drawer',
                navbar: 'Navbar',
                tab: 'Tab'
            }
        },
        themes: { title: 'Themes' }
    }
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/repo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map