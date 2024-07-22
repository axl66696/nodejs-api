// var express = require('express');
// var config = require('./../config/config').default;
// var mysql = require('mysql2');
// var articleRouter = require('./article.route');
// var userRouter = require('./user.route');

import express from "express";
import config from './../config/config.js';
import mysql from 'mysql2';
// Router
import article from './article.route.js';
import user from './user.route.js';
import comment from './comment.route.js';

var router = express.Router();
router.use('/article', article);
router.use('/user', user);
router.use('/comment', comment);

/* GET home page. */
router.get('/', function(req, res) {
  res.send(`此路徑是： localhost:${config.port}/api`);
  res.render('index', { title: 'Express' });
});

router.get('/sqlTest', (req, res)=>{
  const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
  });
  // console.log('connectionPool', connectionPool);
  connectionPool.getConnection((err, connection)=>{
    // throw new Error('App is error from inner');
    // console.log('connection: ', connection);
    if(err) {
      res.send(err);
      console.log('連線失敗');
    } else {
      res.send('連線成功');
      console.log('connection: ', connection);
    }
  })
})

export default router;
