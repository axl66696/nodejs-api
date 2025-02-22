import { createPool } from 'mysql2';
import config from '../config/config.js';
import bcrypt from 'bcryptjs';
import AppError from '../helper/app-error.js';
import jwt from 'jsonwebtoken';

const connectionPool = createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
});

/*  User GET (Login)登入取得資訊  */
const selectUserLogin = (insertValues) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query( // User撈取所有欄位的值組
          'SELECT * FROM User WHERE user_mail = ?',
          insertValues.user_mail, (error, result) => {
            if (error) {
              console.error('SQL error: ', error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else if (Object.keys(result).length === 0) {
              reject(new AppError.LoginError1()); //信箱尚未註冊
            } else {
              const dbHashPassword = result[0].user_password; // 資料庫加密後的密碼
              const userPassword = insertValues.user_password; // 使用者登入輸入的密碼
              bcrypt.compare(userPassword, dbHashPassword).then((res) => { // 使用bcrypt做解密驗證
                if (res) {
                  // 產生 JWT
                  const payload = {
                    user_id: result[0].user_id,
                    user_name: result[0].user_name,
                    user_mail: result[0].user_mail
                  };
                  // 取得 API Token
                  const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, 'my_secret_key');
                  resolve(Object.assign({ code: 200 }, { message: '登入成功', token })); // 登入成功

                } else {
                  reject(new AppError.LoginError2()) // 登入失敗 輸入密碼錯誤
                }
              });
            }
            connection.release();
          }
        );
      }
    });
  });
};

// Artucle POST 新增
const createUser = (insertValues)=>{
  return new Promise((resolve, reject)=>{
    connectionPool.getConnection((connectionError, connection)=>{ //資料庫連線
      if (connectionError) {
        reject(connectionError);
      } else {
        connection.query('INSERT INTO User SET ?', insertValues, (error, result)=>{
          if (error) {
            console.log('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
            reject(error);
          } else if(result.affectedRows === 1) {
            resolve(`新增成功! user_id: ${result.insertId}`); //寫入成功回傳寫入ID
          }
          connection.release();
        });
      }
    });
  });
}

const selectUser = () => {
  return new Promise((resolve, reject)=> {
    connectionPool.getConnection((connectionError, connection)=> {
      if(connectionError) {
        reject(connectionError);
      } else {
        connection.query(`SELECT * FROM User`, (error, result)=> {
          if(error) {
            console.log('SQL error: ', error);
            reject(error);
          } else {
            resolve(result);
          }
        });
        connection.release();
      }
    });
  });
}

const modifyUser = (insertValues, userId) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else { // User資料表修改指定id一筆資料
        connection.query('UPDATE User SET ? WHERE user_id = ?', [insertValues, userId], (error, result) => {
          console.log('result', result);
          if (error) {
            console.error('SQL error: ', error);// 寫入資料庫有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
            resolve('請確認修改Id！');
          } else if (result.info.match('Changed: 1')) { // 寫入成功
            resolve('資料修改成功');
          } else { 
            resolve('資料無異動');
          }
          connection.release();
        });
      }
    });
  });
};

/* User  DELETE 刪除 */
const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else { // User資料表刪除指定id一筆資料
        connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {
          if (error) {
            console.error('SQL error: ', error);// 資料庫存取有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 1) {
            resolve('刪除成功！');
          } else {
            resolve('刪除失敗！');
          }
          connection.release();
        });
      }
    });
  });
};

export default {createUser, selectUserLogin, selectUser, modifyUser, deleteUser};