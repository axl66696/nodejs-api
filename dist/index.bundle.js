/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-validation");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n\n\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0__.object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0__.string().default('development').allow('development', 'production'),\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0__.number().default(8000),\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0__.number().default(8080),\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0__.string().default('localhost'),\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0__.string(),\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0__.string(),\n  MYSQL_DATABASE: joi__WEBPACK_IMPORTED_MODULE_0__.string(),\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0__.string()\n}).unknown().required();\nconst {\n  error,\n  value: envVars\n} = envVarSchema.validate(process.env);\nif (error) {\n  throw new Error(`Config validation error: ${error.message}`);\n}\nconst config = {\n  vervion: envVars.VERSION,\n  env: envVars.NODE_ENV,\n  port: envVars.PORT,\n  mysqlPort: envVars.MYSQL_PORT,\n  mysqlHost: envVars.MYSQL_HOST,\n  mysqlUserName: envVars.MYSQL_USER,\n  mysqlPass: envVars.MYSQL_PASS,\n  mysqlDatabase: envVars.MYSQL_DATABASE\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://restfulapi/./config/config.js?");

/***/ }),

/***/ "./config/express.js":
/*!***************************!*\
  !*** ./config/express.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ \"./config/config.js\");\n/* harmony import */ var _routes_index_route_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/index.route.js */ \"./routes/index.route.js\");\n/* harmony import */ var _helper_app_error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/app-error.js */ \"./helper/app-error.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n// import express from 'express';\n// import config from './config';\n// import index from '../routes/index';\n\n\n\n\n\n\n\n\n\n\n// var path = require('path');\n\nconst app = express__WEBPACK_IMPORTED_MODULE_3__();\n\n// parse body params and attache them to req.body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_0__.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_0__.urlencoded({\n  extended: true\n}));\n\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_1__());\n// HTTP request logger middleware for node.js\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'));\n\n/* GET home page. */\napp.get('/', (req, res) => {\n  res.send(`express.js: server started on  port http://127.0.0.1:${_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].port} (${_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].env})`);\n  res.render('index', {\n    title: 'Express'\n  });\n});\napp.use('/api', _routes_index_route_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n// if error is not an instanceOf APIError, convert it.\napp.use((err, req, res, next) => {\n  let errorMessage;\n  let errorCode;\n  let errorStatus;\n  // express validation error 所有傳入參數驗證錯誤\n  if (err instanceof express_validation__WEBPACK_IMPORTED_MODULE_8__.ValidationError) {\n    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n      errorMessage = err.errors[0].messages;\n      errorCode = 400;\n      errorStatus = http_status__WEBPACK_IMPORTED_MODULE_7__.BAD_REQUEST;\n    }\n    const error = new _helper_app_error_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](errorMessage, errorStatus, true, errorCode);\n    return next(error);\n  }\n  return next(err);\n});\n\n// error handler, send stacktrace only during development 錯誤後最後才跑這邊\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : http_status__WEBPACK_IMPORTED_MODULE_7__[err.status],\n    code: err.code ? err.code : http_status__WEBPACK_IMPORTED_MODULE_7__[err.status],\n    stack: _config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://restfulapi/./config/express.js?");

/***/ }),

/***/ "./config/param-validation.js":
/*!************************************!*\
  !*** ./config/param-validation.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n\n\n// 使用Joi限制前端傳來的資料格式\nvar validArticle = {\n  body: joi__WEBPACK_IMPORTED_MODULE_0__.object({\n    user_id: joi__WEBPACK_IMPORTED_MODULE_0__.number().required(),\n    // 數字＋必填\n    article_title: joi__WEBPACK_IMPORTED_MODULE_0__.string().required(),\n    // 字串＋必填\n    article_tag: joi__WEBPACK_IMPORTED_MODULE_0__.string().required(),\n    // 字串＋必填\n    article_content: joi__WEBPACK_IMPORTED_MODULE_0__.string().min(20).required() // 文章長度至少20字\n  })\n};\nvar validUser = {\n  body: joi__WEBPACK_IMPORTED_MODULE_0__.object({\n    user_name: joi__WEBPACK_IMPORTED_MODULE_0__.string().required(),\n    // 字串＋必填\n    user_mail: joi__WEBPACK_IMPORTED_MODULE_0__.string().email().trim().required(),\n    // 限定email格式並移除多餘空白\n    user_password: joi__WEBPACK_IMPORTED_MODULE_0__.string().pattern(/[a-zA-Z0-9]{6,30}$/).required() // 最小長度6最大30，只允許英文大小寫和數字\n  })\n};\nvar validComment = {\n  body: joi__WEBPACK_IMPORTED_MODULE_0__.object({\n    article_id: joi__WEBPACK_IMPORTED_MODULE_0__.number().required(),\n    user_id: joi__WEBPACK_IMPORTED_MODULE_0__.number().required(),\n    content: joi__WEBPACK_IMPORTED_MODULE_0__.string().min(1).required()\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  validArticle,\n  validUser,\n  validComment\n});\n\n//# sourceURL=webpack://restfulapi/./config/param-validation.js?");

/***/ }),

/***/ "./controllers/article.controller.js":
/*!*******************************************!*\
  !*** ./controllers/article.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/article.module.js */ \"./modules/article.module.js\");\n\nconst articlePost = (req, res) => {\n  const insertValues = req.body;\n  _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createArticle(insertValues).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nconst articleGet = (req, res) => {\n  _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectArticle().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nconst articlePut = (req, res) => {\n  // 取得修改id\n  const article_id = req.params.article_id;\n  console.log('userId', article_id);\n  // 取得修改參數\n  const insertValues = req.body;\n  _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyArticle(insertValues, article_id).then(result => {\n    res.send(result); // 回傳修改成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst articleDelete = (req, res) => {\n  // 取得刪除id\n  const userId = req.params.article_id;\n  _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteArticle(userId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/*  Article GET JWT取得個人文章  */\nconst articlePersonalGet = (req, res) => {\n  _modules_article_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPersonalArticle(req.token).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.status(401).send(err);\n  }); // 失敗回傳錯誤訊息\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  articlePost,\n  articleGet,\n  articlePut,\n  articleDelete,\n  articlePersonalGet\n});\n\n//# sourceURL=webpack://restfulapi/./controllers/article.controller.js?");

/***/ }),

/***/ "./controllers/comment.controller.js":
/*!*******************************************!*\
  !*** ./controllers/comment.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_comment_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/comment.module.js */ \"./modules/comment.module.js\");\n\nvar createComment = (req, res) => {\n  const comment = req.body;\n  _modules_comment_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createComment(comment).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nvar getComments = (req, res) => {\n  const article_id = req.params.article_id;\n  _modules_comment_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(article_id).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nvar updateComment = (req, res) => {\n  const comment = req.body;\n  const commentId = comment._id;\n  const token = req.token;\n  _modules_comment_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateComment(token, commentId, comment).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nvar deleteComment = (req, res) => {\n  const comment_id = req.params.comment_id;\n  const token = req.token;\n  _modules_comment_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteComment(token, comment_id).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createComment,\n  getComments,\n  updateComment,\n  deleteComment\n});\n\n//# sourceURL=webpack://restfulapi/./controllers/comment.controller.js?");

/***/ }),

/***/ "./controllers/user.controller.js":
/*!****************************************!*\
  !*** ./controllers/user.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user.module.js */ \"./modules/user.module.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\n\nconst userPost = (req, res) => {\n  const insertValues = {\n    user_name: req.body.user_name,\n    user_mail: req.body.user_mail,\n    user_password: bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hashSync(req.body.user_password, 10)\n  };\n  _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createUser(insertValues).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nconst userLogin = (req, res, next) => {\n  // 取得帳密\n  const insertValues = req.body;\n  _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUserLogin(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    console.log('err: ', err);\n    next(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst userGet = (req, res) => {\n  _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUser().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\nconst userPut = (req, res) => {\n  // 取得修改id\n  const user_id = req.params.user_id;\n  // 取得修改參數\n  const insertValues = req.body;\n  _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyUser(insertValues, user_id).then(result => {\n    res.send(result); // 回傳修改成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst userDelete = (req, res) => {\n  // 取得刪除id\n  const userId = req.params.user_id;\n  _modules_user_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteUser(userId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userPost,\n  userGet,\n  userPut,\n  userDelete,\n  userLogin\n});\n\n//# sourceURL=webpack://restfulapi/./controllers/user.controller.js?");

/***/ }),

/***/ "./helper/app-error.js":
/*!*****************************!*\
  !*** ./helper/app-error.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n\n\n/**\n * @extends Error\n */\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n}\n/**\n * 信箱尚未註冊 Error\n * @extends ExtendableError\n */\nclass LoginError1 extends ExtendableError {\n  /**\n   * Creates an API error.\n   * @param {string} message - Error message.\n   * @param {number} status - HTTP status code of error.\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\n   */\n  constructor(message = '信箱尚未註冊！', status = http_status__WEBPACK_IMPORTED_MODULE_0__.UNAUTHORIZED, isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n/**\n * 密碼錯誤 Error.\n * @extends ExtendableError\n */\nclass LoginError2 extends ExtendableError {\n  /**\n   * Creates an API error.\n   * @param {string} message - Error message.\n   * @param {number} status - HTTP status code of error.\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\n   */\n  constructor(message = '您輸入的密碼有誤！', status = http_status__WEBPACK_IMPORTED_MODULE_0__.UNAUTHORIZED, isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  LoginError1,\n  LoginError2\n});\n\n//# sourceURL=webpack://restfulapi/./helper/app-error.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config.js */ \"./config/config.js\");\n/* harmony import */ var _config_express_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express.js */ \"./config/express.js\");\n\n\n\n// if (!module) {\n// listen on port config.port\n_config_express_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n  console.log(`server started on  port http://127.0.0.1:${_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n});\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://restfulapi/./index.js?");

/***/ }),

/***/ "./modules/article.module.js":
/*!***********************************!*\
  !*** ./modules/article.module.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n\n\nconst connectionPool = (0,mysql2__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n  connectionLimit: 10,\n  host: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\n\n// Artucle POST 新增\nconst createArticle = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      //資料庫連線\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => {\n          if (error) {\n            console.log('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功! article_id: ${result.insertId}`); //寫入成功回傳寫入ID\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst selectArticle = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM Article`, (error, result) => {\n          if (error) {\n            console.log('SQL error: ', error);\n            reject(error);\n          } else {\n            resolve(result);\n          }\n        });\n        connection.release();\n      }\n    });\n  });\n};\nconst modifyArticle = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // Article資料表修改指定id一筆資料\n        connection.query('UPDATE Article SET ? WHERE article_id = ?', [insertValues, userId], (error, result) => {\n          console.log('result', result);\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            // 寫入時發現無該筆資料\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            // 寫入成功\n            resolve('資料修改成功');\n          } else {\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* Article  DELETE 刪除 */\nconst deleteArticle = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // Article資料表刪除指定id一筆資料\n        connection.query('DELETE FROM Article WHERE article_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/*  Article GET JWT取得個人文章  */\nconst selectPersonalArticle = token => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(token, 'my_secret_key', (err, decoded) => {\n      if (err) {\n        reject(err); // 驗證失敗回傳錯誤\n      } else {\n        // JWT 驗證成功 ->取得用戶 user_id\n        const userId = decoded.payload.user_id;\n        // JWT 驗證成功 -> 撈取該使用者的所有文章\n        connectionPool.getConnection((connectionError, connection) => {\n          // 資料庫連線\n          if (connectionError) {\n            reject(connectionError); // 若連線有問題回傳錯誤\n          } else {\n            connection.query(\n            // Article 撈取 user_id 的所有值組\n            'SELECT * FROM Article WHERE user_id = ?', [userId], (error, result) => {\n              if (error) {\n                reject(error); // 寫入資料庫有問題時回傳錯誤\n              } else {\n                resolve(result); // 撈取成功回傳 JSON 資料\n              }\n              connection.release();\n            });\n          }\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createArticle,\n  selectArticle,\n  modifyArticle,\n  deleteArticle,\n  selectPersonalArticle\n});\n\n//# sourceURL=webpack://restfulapi/./modules/article.module.js?");

/***/ }),

/***/ "./modules/comment.module.js":
/*!***********************************!*\
  !*** ./modules/comment.module.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n\n\nvar connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_0__.createPool({\n  connectionLimit: 10,\n  host: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\nvar createComment = comment => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log(`connectionError: ${connectionError}`);\n        reject(connectionError);\n      } else {\n        connection.query('INSERT INTO Comment SET ?', comment, (error, result) => {\n          if (error) {\n            console.log(`SQL error: ${error}`);\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功! comment_id: ${result.insertId}`);\n          }\n        });\n      }\n      connection.release();\n    });\n  });\n};\nvar getComments = article_id => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM Comment WHERE article_id=?`, article_id, (error, result) => {\n          if (error) {\n            console.log(`SQL error: ${error}`);\n            reject(error);\n          } else {\n            resolve(result);\n          }\n        });\n      }\n      connection.release();\n    });\n  });\n};\nvar updateComment = (token, commentId, comment) => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(token, 'my_secret_key', (err, decoded) => {\n      if (err) {\n        reject(err);\n      } else {\n        const userId = decoded.payload.user_id;\n        connectionPool.getConnection((connectionError, connection) => {\n          if (connectionError) {\n            reject(connectionError);\n          } else {\n            connection.query('UPDATE Comment SET ? WHERE _id=? AND user_id=?', [comment, commentId, userId], (error, result) => {\n              if (error) {\n                console.log(`SQL error: ${error}`);\n                reject(error);\n              } else if (result.affectedRows === 0) {\n                resolve('請確認修改id');\n              } else if (result.info.match('Changed: 1')) {\n                resolve('留言修改成功');\n              } else {\n                resolve('留言無異動');\n              }\n            });\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nvar deleteComment = (token, commentId) => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(token, 'my_secret_key', (err, decoded) => {\n      if (err) {\n        reject(err);\n      } else {\n        const userId = decoded.payload.user_id;\n        connectionPool.getConnection((connectionError, connection) => {\n          if (connectionError) {\n            reject(connectionError);\n          } else {\n            connection.query('DELETE FROM Comment WHERE _id=? AND user_id=?', [commentId, userId], (error, result) => {\n              if (error) {\n                console.log(`SQL error: ${error}`);\n                reject(error);\n              } else if (result.affectedRows === 1) {\n                resolve('留言刪除成功');\n              } else {\n                resolve('留言刪除失敗');\n              }\n            });\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createComment,\n  getComments,\n  updateComment,\n  deleteComment\n});\n\n//# sourceURL=webpack://restfulapi/./modules/comment.module.js?");

/***/ }),

/***/ "./modules/user.module.js":
/*!********************************!*\
  !*** ./modules/user.module.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var _helper_app_error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/app-error.js */ \"./helper/app-error.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n\n\n\n\nconst connectionPool = (0,mysql2__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n  connectionLimit: 10,\n  host: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\n\n/*  User GET (Login)登入取得資訊  */\nconst selectUserLogin = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query(\n        // User撈取所有欄位的值組\n        'SELECT * FROM User WHERE user_mail = ?', insertValues.user_mail, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else if (Object.keys(result).length === 0) {\n            reject(new _helper_app_error_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError1()); //信箱尚未註冊\n          } else {\n            const dbHashPassword = result[0].user_password; // 資料庫加密後的密碼\n            const userPassword = insertValues.user_password; // 使用者登入輸入的密碼\n            bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare(userPassword, dbHashPassword).then(res => {\n              // 使用bcrypt做解密驗證\n              if (res) {\n                // 產生 JWT\n                const payload = {\n                  user_id: result[0].user_id,\n                  user_name: result[0].user_name,\n                  user_mail: result[0].user_mail\n                };\n                // 取得 API Token\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.sign({\n                  payload,\n                  exp: Math.floor(Date.now() / 1000) + 60 * 15\n                }, 'my_secret_key');\n                resolve(Object.assign({\n                  code: 200\n                }, {\n                  message: '登入成功',\n                  token\n                })); // 登入成功\n              } else {\n                reject(new _helper_app_error_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError2()); // 登入失敗 輸入密碼錯誤\n              }\n            });\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n// Artucle POST 新增\nconst createUser = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      //資料庫連線\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('INSERT INTO User SET ?', insertValues, (error, result) => {\n          if (error) {\n            console.log('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功! user_id: ${result.insertId}`); //寫入成功回傳寫入ID\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst selectUser = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM User`, (error, result) => {\n          if (error) {\n            console.log('SQL error: ', error);\n            reject(error);\n          } else {\n            resolve(result);\n          }\n        });\n        connection.release();\n      }\n    });\n  });\n};\nconst modifyUser = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // User資料表修改指定id一筆資料\n        connection.query('UPDATE User SET ? WHERE user_id = ?', [insertValues, userId], (error, result) => {\n          console.log('result', result);\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            // 寫入時發現無該筆資料\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            // 寫入成功\n            resolve('資料修改成功');\n          } else {\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* User  DELETE 刪除 */\nconst deleteUser = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // User資料表刪除指定id一筆資料\n        connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createUser,\n  selectUserLogin,\n  selectUser,\n  modifyUser,\n  deleteUser\n});\n\n//# sourceURL=webpack://restfulapi/./modules/user.module.js?");

/***/ }),

/***/ "./routes/article.route.js":
/*!*********************************!*\
  !*** ./routes/article.route.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var _controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/article.controller.js */ \"./controllers/article.controller.js\");\n/* harmony import */ var _config_param_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/param-validation.js */ \"./config/param-validation.js\");\n// var express = require('express');\n// var {validate} = require('express-validation');\n// var {articlePost, articleGet, articlePut, articleDelete, articlePersonalGet} = require('../controllers/article.controller').default;\n// var {validArticle} = require('../config/param-validation').default;\n\n\n\n\n\n\n// var joi = require('joi');\n\n/** 利用 Middleware 取得 Header 中的 Rearer Token */\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' '); // 字串切割\n    const bearerToken = bearer[1]; // 取得 JWT\n    req.token = bearerToken; // 在response中建立一個token參數\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    })); // Header 查無 Rearer Token\n  }\n};\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.route('/').get(_controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleGet).post(express_validation__WEBPACK_IMPORTED_MODULE_1__.validate(_config_param_validation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].validArticle), _controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePost);\nrouter.route('/:article_id').put(_controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePut).delete(_controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleDelete);\n\n/** 取得某用戶 Article 所有值組 */\nrouter.get('/personal', ensureToken, _controllers_article_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePersonalGet);\n\n// module.exports = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restfulapi/./routes/article.route.js?");

/***/ }),

/***/ "./routes/comment.route.js":
/*!*********************************!*\
  !*** ./routes/comment.route.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var _config_param_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/param-validation.js */ \"./config/param-validation.js\");\n/* harmony import */ var _controllers_comment_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/comment.controller.js */ \"./controllers/comment.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\n\n/** 利用 Middleware 取得 Header 中的 Rearer Token */\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' '); // 字串切割\n    const bearerToken = bearer[1]; // 取得 JWT\n    req.token = bearerToken; // 在response中建立一個token參數\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    })); // Header 查無 Rearer Token\n  }\n};\nrouter.route('/').post(express_validation__WEBPACK_IMPORTED_MODULE_1__.validate(_config_param_validation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validComment), _controllers_comment_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createComment);\nrouter.route('/:article_id').get(_controllers_comment_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getComments);\nrouter.put('/edit', ensureToken, _controllers_comment_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateComment);\nrouter.delete('/delete/:comment_id', ensureToken, _controllers_comment_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteComment);\n// router.route('/edit/:comment_id', ensureToken)\n//       .put(commentController.updateComment)\n//       .delete(commentController.deleteComment);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restfulapi/./routes/comment.route.js?");

/***/ }),

/***/ "./routes/index.route.js":
/*!*******************************!*\
  !*** ./routes/index.route.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config.js */ \"./config/config.js\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var _article_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.route.js */ \"./routes/article.route.js\");\n/* harmony import */ var _user_route_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.route.js */ \"./routes/user.route.js\");\n/* harmony import */ var _comment_route_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.route.js */ \"./routes/comment.route.js\");\n// var express = require('express');\n// var config = require('./../config/config').default;\n// var mysql = require('mysql2');\n// var articleRouter = require('./article.route');\n// var userRouter = require('./user.route');\n\n\n\n\n// Router\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.use('/article', _article_route_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/user', _user_route_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/comment', _comment_route_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* GET home page. */\nrouter.get('/', function (req, res) {\n  res.send(`此路徑是： localhost:${_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port}/api`);\n  res.render('index', {\n    title: 'Express'\n  });\n});\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_2__.createPool({\n    connectionLimit: 10,\n    host: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n    user: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n    password: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n    database: _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n  });\n  // console.log('connectionPool', connectionPool);\n  connectionPool.getConnection((err, connection) => {\n    // throw new Error('App is error from inner');\n    // console.log('connection: ', connection);\n    if (err) {\n      res.send(err);\n      console.log('連線失敗');\n    } else {\n      res.send('連線成功');\n      console.log('connection: ', connection);\n    }\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restfulapi/./routes/index.route.js?");

/***/ }),

/***/ "./routes/user.route.js":
/*!******************************!*\
  !*** ./routes/user.route.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var _controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user.controller.js */ \"./controllers/user.controller.js\");\n/* harmony import */ var _config_param_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/param-validation.js */ \"./config/param-validation.js\");\n// var express = require('express');\n// var {validate} = require('express-validation');\n// var {userPost, userGet, userPut, userDelete, userLogin} = require('../controllers/user.controller').default;\n// var {validUser} = require('../config/param-validation').default;\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.route('/').get(_controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userGet).post(express_validation__WEBPACK_IMPORTED_MODULE_1__.validate(_config_param_validation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].validUser), _controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPost);\nrouter.route('/:user_id').put(_controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPut).delete(_controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userDelete);\nrouter.route('/login').post(_controllers_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userLogin);\n\n// module.exports = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restfulapi/./routes/user.route.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;