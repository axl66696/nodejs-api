// var express = require('express');
// var {validate} = require('express-validation');
// var {articlePost, articleGet, articlePut, articleDelete, articlePersonalGet} = require('../controllers/article.controller').default;
// var {validArticle} = require('../config/param-validation').default;

import express from 'express';
import validate from 'express-validation';
import articleCtrl from '../controllers/article.controller.js';
import paramValidation from '../config/param-validation.js';

// var joi = require('joi');

/** 利用 Middleware 取得 Header 中的 Rearer Token */
const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' '); // 字串切割
    const bearerToken = bearer[1]; // 取得 JWT
    req.token = bearerToken; // 在response中建立一個token參數
    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet
  } else {
    res.status(403).send(Object.assign({ code: 403 }, { message: '您尚未登入！' })); // Header 查無 Rearer Token
  }
};

const router = express.Router();

router.route('/')
  .get(articleCtrl.articleGet)
  .post(validate.validate(paramValidation.validArticle), articleCtrl.articlePost);

router.route('/:article_id')
  .put(articleCtrl.articlePut)
  .delete(articleCtrl.articleDelete);

/** 取得某用戶 Article 所有值組 */
router.get('/personal', ensureToken, articleCtrl.articlePersonalGet);
  
// module.exports = router;
export default router;