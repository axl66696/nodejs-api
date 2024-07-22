import Joi from 'joi';
import 'dotenv/config';

// 使用Joi實作環境變數限制規則
const envVarSchema = Joi.object().keys({
  NODE_ENV: Joi.string().default('development').allow('development', 'production'),
  PORT: Joi.number().default(8000),
  MYSQL_PORT: Joi.number().default(8080),
  MYSQL_HOST: Joi.string().default('localhost'),
  MYSQL_USER: Joi.string(),
  MYSQL_PASS: Joi.string(),
  MYSQL_DATABASE: Joi.string(),
  VERSION: Joi.string()
}).unknown().required();

// 對process.env進行驗證
const { error, value: envVars } = envVarSchema.validate(process.env);
if(error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// 將環境變數設定為config物件並匯出
const config = {
  vervion: envVars.VERSION,
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mysqlPort: envVars.MYSQL_PORT,
  mysqlHost: envVars.MYSQL_HOST,
  mysqlUserName: envVars.MYSQL_USER,
  mysqlPass: envVars.MYSQL_PASS,
  mysqlDatabase: envVars.MYSQL_DATABASE
};

export default config;