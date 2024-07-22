import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import config from './config.js';
import indexRouter from '../routes/index.route.js';
import APIError from '../helper/app-error.js';
import httpStatus from 'http-status';
import { ValidationError } from 'express-validation';

// 依教學網站設計，將主程式分離到此檔案
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing，跨來源資源共享
app.use(cors());
// HTTP request logger middleware for node.js，紀錄狀態碼除錯
app.use(morgan('dev'));

// GET home page，測試首頁連線
app.get('/', (req, res) => {
  res.send(`express.js: server started on  port http://127.0.0.1:${config.port} (${config.env})`);
  res.render('index', { title: 'Express' });
});
// 路由目錄
app.use('/api', indexRouter);

// 錯誤處理
// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  let errorMessage;
  let errorCode;
  let errorStatus;
  // express validation error 所有傳入參數驗證錯誤
  if (err instanceof ValidationError) {
    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
      errorMessage = err.errors[0].messages;
      errorCode = 400;
      errorStatus = httpStatus.BAD_REQUEST;
    }
    const error = new APIError(errorMessage, errorStatus, true, errorCode);
    return next(error);
  }
  return next(err);
});

// error handler, send stacktrace only during development 錯誤後最後才跑這邊
app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    code: err.code ? err.code : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  });
  next();
});


export default app;