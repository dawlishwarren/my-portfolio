/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/themeContext/ThemeState.js":
/*!********************************************!*\
  !*** ./context/themeContext/ThemeState.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-actions */ \"./context/themeContext/theme-actions.js\");\n/* harmony import */ var _theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-context */ \"./context/themeContext/theme-context.js\");\n/* harmony import */ var _theme_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-reducer */ \"./context/themeContext/theme-reducer.js\");\n\n\n\n\n\nconst ThemeState = (props)=>{\n    const initialState = {\n        themes: [],\n        activeTheme: \"\",\n        defaultTheme: \"\",\n        loading: true\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_theme_reducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initialState);\n    // Load all available themes\n    const loadThemes = (APIthemes)=>{\n        dispatch({\n            type: _theme_actions__WEBPACK_IMPORTED_MODULE_2__.LOAD_THEMES,\n            payload: APIthemes\n        });\n    };\n    const getThemes = ()=>{\n        dispatch({\n            type: _theme_actions__WEBPACK_IMPORTED_MODULE_2__.GET_THEME_STATE\n        });\n    };\n    // Set Active Theme\n    const setActiveTheme = (id)=>{\n        dispatch({\n            type: _theme_actions__WEBPACK_IMPORTED_MODULE_2__.SET_ACTIVE_THEME,\n            payload: id\n        });\n    };\n    // Initialise default theme\n    const getDefaultTheme = (theme)=>{\n        dispatch({\n            type: _theme_actions__WEBPACK_IMPORTED_MODULE_2__.GET_DEFAULT_THEME,\n            payload: theme\n        });\n    };\n    // Set loading\n    const setLoading = (value)=>{\n        dispatch({\n            type: _theme_actions__WEBPACK_IMPORTED_MODULE_2__.SET_LOADING,\n            payload: value\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            state: state,\n            themes: state.themes,\n            activeTheme: state.activeTheme,\n            defaultTheme: state.defaultTheme,\n            loading: state.loading,\n            setLoading,\n            getThemes,\n            loadThemes,\n            setActiveTheme,\n            getDefaultTheme\n        },\n        __source: {\n            fileName: \"D:\\\\Users\\\\Alex\\\\Documents\\\\Code\\\\VSCode\\\\Portfolio\\\\my-portfolio\\\\context\\\\themeContext\\\\ThemeState.js\",\n            lineNumber: 45,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: props.children\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lQ29udGV4dC9UaGVtZVN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQU9qQjtBQUNrQjtBQUNBO0FBRTFDLEtBQUssQ0FBQ1MsVUFBVSxJQUFJQyxLQUFLLEdBQUssQ0FBQztJQUM5QixLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO1FBQ3JCQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1ZDLFdBQVcsRUFBRSxDQUFFO1FBQ2ZDLFlBQVksRUFBRSxDQUFFO1FBQ2hCQyxPQUFPLEVBQUUsSUFBSTtJQUNkLENBQUM7SUFDRCxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJaEIsaURBQVUsQ0FBQ08sc0RBQVksRUFBRUcsWUFBWTtJQUUvRCxFQUE0QjtJQUM1QixLQUFLLENBQUNPLFVBQVUsSUFBSUMsU0FBUyxHQUFLLENBQUM7UUFDbENGLFFBQVEsQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRWhCLHVEQUFXO1lBQUVpQixPQUFPLEVBQUVGLFNBQVM7UUFBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxLQUFLLENBQUNHLFNBQVMsT0FBUyxDQUFDO1FBQ3hCTCxRQUFRLENBQUMsQ0FBQztZQUFDRyxJQUFJLEVBQUVqQiwyREFBZTtRQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEVBQW1CO0lBQ25CLEtBQUssQ0FBQ29CLGNBQWMsSUFBSUMsRUFBRSxHQUFLLENBQUM7UUFDL0JQLFFBQVEsQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRWYsNERBQWdCO1lBQUVnQixPQUFPLEVBQUVHLEVBQUU7UUFBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxFQUEyQjtJQUMzQixLQUFLLENBQUNDLGVBQWUsSUFBSUMsS0FBSyxHQUFLLENBQUM7UUFDbkNULFFBQVEsQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRWxCLDZEQUFpQjtZQUFFbUIsT0FBTyxFQUFFSyxLQUFLO1FBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsRUFBYztJQUNkLEtBQUssQ0FBQ0MsVUFBVSxJQUFJQyxLQUFLLEdBQUssQ0FBQztRQUM5QlgsUUFBUSxDQUFDLENBQUM7WUFBQ0csSUFBSSxFQUFFZCx1REFBVztZQUFFZSxPQUFPLEVBQUVPLEtBQUs7UUFBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLHNFQUNKckIsK0RBQXFCO1FBQ3JCcUIsS0FBSyxFQUFFLENBQUM7WUFDUFosS0FBSyxFQUFFQSxLQUFLO1lBQ1pKLE1BQU0sRUFBRUksS0FBSyxDQUFDSixNQUFNO1lBQ3BCQyxXQUFXLEVBQUVHLEtBQUssQ0FBQ0gsV0FBVztZQUM5QkMsWUFBWSxFQUFFRSxLQUFLLENBQUNGLFlBQVk7WUFDaENDLE9BQU8sRUFBRUMsS0FBSyxDQUFDRCxPQUFPO1lBQ3RCWSxVQUFVO1lBQ1ZMLFNBQVM7WUFDVEosVUFBVTtZQUNWSyxjQUFjO1lBQ2RFLGVBQWU7UUFDaEIsQ0FBQzs7Ozs7OztrQkFDQWYsS0FBSyxDQUFDb0IsUUFBUTs7QUFHbEIsQ0FBQztBQUVELGlFQUFlckIsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vY29udGV4dC90aGVtZUNvbnRleHQvVGhlbWVTdGF0ZS5qcz8zYjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX0RFRkFVTFRfVEhFTUUsXHJcblx0R0VUX1RIRU1FX1NUQVRFLFxyXG5cdExPQURfVEhFTUVTLFxyXG5cdFNFVF9BQ1RJVkVfVEhFTUUsXHJcblx0U0VUX0xPQURJTkcsXHJcbn0gZnJvbSBcIi4vdGhlbWUtYWN0aW9uc1wiO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gXCIuL3RoZW1lLWNvbnRleHRcIjtcclxuaW1wb3J0IHRoZW1lUmVkdWNlciBmcm9tIFwiLi90aGVtZS1yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBUaGVtZVN0YXRlID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdFx0dGhlbWVzOiBbXSxcclxuXHRcdGFjdGl2ZVRoZW1lOiBcIlwiLFxyXG5cdFx0ZGVmYXVsdFRoZW1lOiBcIlwiLFxyXG5cdFx0bG9hZGluZzogdHJ1ZSxcclxuXHR9O1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0aGVtZVJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG5cdC8vIExvYWQgYWxsIGF2YWlsYWJsZSB0aGVtZXNcclxuXHRjb25zdCBsb2FkVGhlbWVzID0gKEFQSXRoZW1lcykgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBMT0FEX1RIRU1FUywgcGF5bG9hZDogQVBJdGhlbWVzIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFRoZW1lcyA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogR0VUX1RIRU1FX1NUQVRFIH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIFNldCBBY3RpdmUgVGhlbWVcclxuXHRjb25zdCBzZXRBY3RpdmVUaGVtZSA9IChpZCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBTRVRfQUNUSVZFX1RIRU1FLCBwYXlsb2FkOiBpZCB9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBJbml0aWFsaXNlIGRlZmF1bHQgdGhlbWVcclxuXHRjb25zdCBnZXREZWZhdWx0VGhlbWUgPSAodGhlbWUpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogR0VUX0RFRkFVTFRfVEhFTUUsIHBheWxvYWQ6IHRoZW1lIH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIFNldCBsb2FkaW5nXHJcblx0Y29uc3Qgc2V0TG9hZGluZyA9ICh2YWx1ZSkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBTRVRfTE9BRElORywgcGF5bG9hZDogdmFsdWUgfSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRoZW1lQ29udGV4dC5Qcm92aWRlclxyXG5cdFx0XHR2YWx1ZT17e1xyXG5cdFx0XHRcdHN0YXRlOiBzdGF0ZSxcclxuXHRcdFx0XHR0aGVtZXM6IHN0YXRlLnRoZW1lcyxcclxuXHRcdFx0XHRhY3RpdmVUaGVtZTogc3RhdGUuYWN0aXZlVGhlbWUsXHJcblx0XHRcdFx0ZGVmYXVsdFRoZW1lOiBzdGF0ZS5kZWZhdWx0VGhlbWUsXHJcblx0XHRcdFx0bG9hZGluZzogc3RhdGUubG9hZGluZyxcclxuXHRcdFx0XHRzZXRMb2FkaW5nLFxyXG5cdFx0XHRcdGdldFRoZW1lcyxcclxuXHRcdFx0XHRsb2FkVGhlbWVzLFxyXG5cdFx0XHRcdHNldEFjdGl2ZVRoZW1lLFxyXG5cdFx0XHRcdGdldERlZmF1bHRUaGVtZSxcclxuXHRcdFx0fX0+XHJcblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN0YXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwiR0VUX0RFRkFVTFRfVEhFTUUiLCJHRVRfVEhFTUVfU1RBVEUiLCJMT0FEX1RIRU1FUyIsIlNFVF9BQ1RJVkVfVEhFTUUiLCJTRVRfTE9BRElORyIsIlRoZW1lQ29udGV4dCIsInRoZW1lUmVkdWNlciIsIlRoZW1lU3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInRoZW1lcyIsImFjdGl2ZVRoZW1lIiwiZGVmYXVsdFRoZW1lIiwibG9hZGluZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2FkVGhlbWVzIiwiQVBJdGhlbWVzIiwidHlwZSIsInBheWxvYWQiLCJnZXRUaGVtZXMiLCJzZXRBY3RpdmVUaGVtZSIsImlkIiwiZ2V0RGVmYXVsdFRoZW1lIiwidGhlbWUiLCJzZXRMb2FkaW5nIiwidmFsdWUiLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/themeContext/ThemeState.js\n");

/***/ }),

/***/ "./context/themeContext/theme-actions.js":
/*!***********************************************!*\
  !*** ./context/themeContext/theme-actions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOAD_THEMES\": () => (/* binding */ LOAD_THEMES),\n/* harmony export */   \"GET_THEME_STATE\": () => (/* binding */ GET_THEME_STATE),\n/* harmony export */   \"ADD_THEME\": () => (/* binding */ ADD_THEME),\n/* harmony export */   \"UPDATE_THEME\": () => (/* binding */ UPDATE_THEME),\n/* harmony export */   \"DELETE_THEME\": () => (/* binding */ DELETE_THEME),\n/* harmony export */   \"GET_DEFAULT_THEME\": () => (/* binding */ GET_DEFAULT_THEME),\n/* harmony export */   \"SET_ACTIVE_THEME\": () => (/* binding */ SET_ACTIVE_THEME),\n/* harmony export */   \"SET_LOADING\": () => (/* binding */ SET_LOADING)\n/* harmony export */ });\nconst LOAD_THEMES = \"LOAD_THEMES\";\nconst GET_THEME_STATE = \"GET_THEMES\";\nconst ADD_THEME = \"ADD_THEME\";\nconst UPDATE_THEME = \"UPDATE_THEME\";\nconst DELETE_THEME = \"DELETE_THEME\";\nconst GET_DEFAULT_THEME = \"GET_DEFAULT_THEME\";\nconst SET_ACTIVE_THEME = \"SET_ACTIVE_THEME\";\nconst SET_LOADING = \"SET_LOADING\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lQ29udGV4dC90aGVtZS1hY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxXQUFXLEdBQUcsQ0FBYTtBQUNqQyxLQUFLLENBQUNDLGVBQWUsR0FBRyxDQUFZO0FBQ3BDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLENBQVc7QUFDN0IsS0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBYztBQUNuQyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFjO0FBQ25DLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBbUI7QUFDN0MsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxDQUFrQjtBQUMzQyxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vY29udGV4dC90aGVtZUNvbnRleHQvdGhlbWUtYWN0aW9ucy5qcz8zN2EwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMT0FEX1RIRU1FUyA9IFwiTE9BRF9USEVNRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9USEVNRV9TVEFURSA9IFwiR0VUX1RIRU1FU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1RIRU1FID0gXCJBRERfVEhFTUVcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9USEVNRSA9IFwiVVBEQVRFX1RIRU1FXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVEhFTUUgPSBcIkRFTEVURV9USEVNRVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0RFRkFVTFRfVEhFTUUgPSBcIkdFVF9ERUZBVUxUX1RIRU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX1RIRU1FID0gXCJTRVRfQUNUSVZFX1RIRU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9IFwiU0VUX0xPQURJTkdcIjtcclxuIl0sIm5hbWVzIjpbIkxPQURfVEhFTUVTIiwiR0VUX1RIRU1FX1NUQVRFIiwiQUREX1RIRU1FIiwiVVBEQVRFX1RIRU1FIiwiREVMRVRFX1RIRU1FIiwiR0VUX0RFRkFVTFRfVEhFTUUiLCJTRVRfQUNUSVZFX1RIRU1FIiwiU0VUX0xPQURJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/themeContext/theme-actions.js\n");

/***/ }),

/***/ "./context/themeContext/theme-context.js":
/*!***********************************************!*\
  !*** ./context/themeContext/theme-context.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst themeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lQ29udGV4dC90aGVtZS1jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUVyQyxLQUFLLENBQUNDLFlBQVksaUJBQUdELG9EQUFhO0FBRWxDLGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9jb250ZXh0L3RoZW1lQ29udGV4dC90aGVtZS1jb250ZXh0LmpzP2Y2YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInRoZW1lQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/themeContext/theme-context.js\n");

/***/ }),

/***/ "./context/themeContext/theme-reducer.js":
/*!***********************************************!*\
  !*** ./context/themeContext/theme-reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-actions */ \"./context/themeContext/theme-actions.js\");\n\nconst themeReducer = (state, action)=>{\n    switch(action.type){\n        case _theme_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_THEMES:\n            return {\n                ...state,\n                themes: [\n                    ...state.themes,\n                    action.payload\n                ],\n                loading: false\n            };\n        case _theme_actions__WEBPACK_IMPORTED_MODULE_0__.SET_ACTIVE_THEME:\n            return {\n                ...state,\n                activeTheme: action.payload,\n                loading: false\n            };\n        case _theme_actions__WEBPACK_IMPORTED_MODULE_0__.GET_DEFAULT_THEME:\n            return {\n                ...state,\n                defaultTheme: action.payload,\n                loading: false\n            };\n        case _theme_actions__WEBPACK_IMPORTED_MODULE_0__.GET_THEME_STATE:\n            return state;\n        case _theme_actions__WEBPACK_IMPORTED_MODULE_0__.SET_LOADING:\n            return {\n                ...state,\n                loading: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3RoZW1lQ29udGV4dC90aGVtZS1yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBTXdCO0FBRXhCLEtBQUssQ0FBQ0ssWUFBWSxJQUFJQyxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ3hDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2xCLElBQUksQ0FBQ04sdURBQVc7WUFDZixNQUFNLENBQUMsQ0FBQzttQkFDSkksS0FBSztnQkFDUkcsTUFBTSxFQUFFLENBQUM7dUJBQUdILEtBQUssQ0FBQ0csTUFBTTtvQkFBRUYsTUFBTSxDQUFDRyxPQUFPO2dCQUFBLENBQUM7Z0JBQ3pDQyxPQUFPLEVBQUUsS0FBSztZQUNmLENBQUM7UUFDRixJQUFJLENBQUNSLDREQUFnQjtZQUNwQixNQUFNLENBQUMsQ0FBQzttQkFDSkcsS0FBSztnQkFDUk0sV0FBVyxFQUFFTCxNQUFNLENBQUNHLE9BQU87Z0JBQzNCQyxPQUFPLEVBQUUsS0FBSztZQUNmLENBQUM7UUFDRixJQUFJLENBQUNYLDZEQUFpQjtZQUNyQixNQUFNLENBQUMsQ0FBQzttQkFDSk0sS0FBSztnQkFDUk8sWUFBWSxFQUFFTixNQUFNLENBQUNHLE9BQU87Z0JBQzVCQyxPQUFPLEVBQUUsS0FBSztZQUNmLENBQUM7UUFDRixJQUFJLENBQUNWLDJEQUFlO1lBQ25CLE1BQU0sQ0FBQ0ssS0FBSztRQUNiLElBQUksQ0FBQ0YsdURBQVc7WUFDZixNQUFNLENBQUMsQ0FBQzttQkFDSkUsS0FBSztnQkFDUkssT0FBTyxFQUFFSixNQUFNLENBQUNHLE9BQU87WUFDeEIsQ0FBQzs7WUFFRCxNQUFNLENBQUNKLEtBQUs7O0FBRWYsQ0FBQztBQUVELGlFQUFlRCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9jb250ZXh0L3RoZW1lQ29udGV4dC90aGVtZS1yZWR1Y2VyLmpzPzU5NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRHRVRfREVGQVVMVF9USEVNRSxcclxuXHRHRVRfVEhFTUVfU1RBVEUsXHJcblx0TE9BRF9USEVNRVMsXHJcblx0U0VUX0FDVElWRV9USEVNRSxcclxuXHRTRVRfTE9BRElORyxcclxufSBmcm9tIFwiLi90aGVtZS1hY3Rpb25zXCI7XHJcblxyXG5jb25zdCB0aGVtZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9BRF9USEVNRVM6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGhlbWVzOiBbLi4uc3RhdGUudGhlbWVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNFVF9BQ1RJVkVfVEhFTUU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlVGhlbWU6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBHRVRfREVGQVVMVF9USEVNRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkZWZhdWx0VGhlbWU6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBHRVRfVEhFTUVfU1RBVEU6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdGNhc2UgU0VUX0xPQURJTkc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiR0VUX0RFRkFVTFRfVEhFTUUiLCJHRVRfVEhFTUVfU1RBVEUiLCJMT0FEX1RIRU1FUyIsIlNFVF9BQ1RJVkVfVEhFTUUiLCJTRVRfTE9BRElORyIsInRoZW1lUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRoZW1lcyIsInBheWxvYWQiLCJsb2FkaW5nIiwiYWN0aXZlVGhlbWUiLCJkZWZhdWx0VGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/themeContext/theme-reducer.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage */ \"./utils/localStorage.js\");\n/* harmony import */ var _styles_themes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/themes.json */ \"./styles/themes.json\");\n/* harmony import */ var _context_themeContext_ThemeState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/themeContext/ThemeState */ \"./context/themeContext/ThemeState.js\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.setDataToLocalStorage)(\"all-themes\", _styles_themes_json__WEBPACK_IMPORTED_MODULE_3__);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_themeContext_ThemeState__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Users\\\\Alex\\\\Documents\\\\Code\\\\VSCode\\\\Portfolio\\\\my-portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"D:\\\\Users\\\\Alex\\\\Documents\\\\Code\\\\VSCode\\\\Portfolio\\\\my-portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUMrQjtBQUNaO0FBQ1U7U0FFbERHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDTCwwRUFBcUIsQ0FBQyxDQUFZLGFBQUVDLGdEQUFnQjtJQUVwRCxNQUFNLHNFQUNKQyx3RUFBVTs7Ozs7Ozt1RkFDVEUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7QUFHM0IsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBzZXREYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgKiBhcyB1aVRoZW1lcyBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lcy5qc29uXCI7XG5pbXBvcnQgVGhlbWVTdGF0ZSBmcm9tIFwiLi4vY29udGV4dC90aGVtZUNvbnRleHQvVGhlbWVTdGF0ZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0c2V0RGF0YVRvTG9jYWxTdG9yYWdlKFwiYWxsLXRoZW1lc1wiLCB1aVRoZW1lcy5kZWZhdWx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxUaGVtZVN0YXRlPlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvVGhlbWVTdGF0ZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsic2V0RGF0YVRvTG9jYWxTdG9yYWdlIiwidWlUaGVtZXMiLCJUaGVtZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/localStorage.js":
/*!*******************************!*\
  !*** ./utils/localStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDataToLocalStorage\": () => (/* binding */ setDataToLocalStorage),\n/* harmony export */   \"getDataFromLocalStorage\": () => (/* binding */ getDataFromLocalStorage),\n/* harmony export */   \"getAllThemesFromLocalStorage\": () => (/* binding */ getAllThemesFromLocalStorage)\n/* harmony export */ });\nconst setDataToLocalStorage = (key, value)=>{\n    if (false) {}\n};\nconst getDataFromLocalStorage = (key)=>{\n    try {\n        if (false) {}\n    } catch (e) {\n        console.error(e);\n    }\n};\nconst getAllThemesFromLocalStorage = (key)=>{\n    try {\n        if (false) {}\n    } catch (e) {\n        console.log(e);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9sb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxxQkFBcUIsSUFBSUMsR0FBRyxFQUFFQyxLQUFLLEdBQUssQ0FBQztJQUNyRCxFQUFFLEVBQUUsS0FBNkIsRUFBRSxFQUVsQztBQUNGLENBQUM7QUFFTSxLQUFLLENBQUNLLHVCQUF1QixJQUFJTixHQUFHLEdBQUssQ0FBQztJQUNoRCxHQUFHLENBQUMsQ0FBQztRQUNKLEVBQUUsRUFBRSxLQUE2QixFQUFFLEVBS2xDO0lBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRVMsQ0FBQyxFQUFFLENBQUM7UUFDWkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUM7SUFDaEIsQ0FBQztBQUNGLENBQUM7QUFFTSxLQUFLLENBQUNHLDRCQUE0QixJQUFJWixHQUFHLEdBQUssQ0FBQztJQUNyRCxHQUFHLENBQUMsQ0FBQztRQUNKLEVBQUUsRUFBRSxLQUE2QixFQUFFLEVBS2xDO0lBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRVMsQ0FBQyxFQUFFLENBQUM7UUFDWkMsT0FBTyxDQUFDRyxHQUFHLENBQUNKLENBQUM7SUFDZCxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby8uL3V0aWxzL2xvY2FsU3RvcmFnZS5qcz8wYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXREYXRhVG9Mb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcblx0XHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFRoZW1lc0Zyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuXHRcdFx0aWYgKHZhbHVlICYmIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0fVxyXG59O1xyXG4iXSwibmFtZXMiOlsic2V0RGF0YVRvTG9jYWxTdG9yYWdlIiwia2V5IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldERhdGFGcm9tTG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImdldEFsbFRoZW1lc0Zyb21Mb2NhbFN0b3JhZ2UiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/localStorage.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./styles/themes.json":
/*!****************************!*\
  !*** ./styles/themes.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"light":{"index":"0","id":"t_001","name":"lightTheme","title":"Light","colors":{"body":"#f8f8f8","text":"#2a2e35","navigation":{"background":"linear-gradient(to right, #f8f8f8, #6c7983)","dropdown":"#b2becd"},"border":"#12181b","accent":{"primary":"#cc4f1f","secondary":"#bdc1cc"}}},"dark":{"index":"1","id":"t_002","colors":{"body":"#2a2e35","text":"#f8f8f8","navigation":{"background":"linear-gradient(to right, #454e56, #12181b)","dropdown":"#12181b"},"border":"#dbe1e8","accent":{"primary":"#082032","secondary":"#FF4C29"}},"name":"darkTheme","title":"Dark"},"sepia":{"index":"2","id":"t_003","colors":{"body":"#cda882","text":"#eadbcb","navigation":{"background":"linear-gradient(to right, #454e56, #12181b)","dropdown":"#cda882"},"border":"#eadbcb","accent":{"primary":"#332718","secondary":"#7D803C"}},"name":"sepiaTheme","title":"Sepia"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();