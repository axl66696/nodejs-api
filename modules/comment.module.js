import mysql from 'mysql2';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';

// 處理資料庫連線與SQL操作
// 資料庫連線池設定
var connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
})

// 新增留言
var createComment = (comment) => {
  return new Promise((resolve, reject)=> {
    // 取得連線資源
    connectionPool.getConnection((connectionError, connection)=>{

      if(connectionError) {
        console.log(`connectionError: ${connectionError}`); // 資料庫連線錯誤
        reject(connectionError);
      } else {
        connection.query('INSERT INTO Comment SET ?', comment, (error, result)=> {

          if(error) {
            console.log(`SQL error: ${error}`);
            reject(error);
          } else if(result.affectedRows === 1){ //若有affectedRows，代表新增成功
            resolve(`新增成功! comment_id: ${result.insertId}`);
          }
        });
      }
      connection.release(); // 釋放連線資源
    });
  });
}

// 取得某文章下所有留言
var getComments = (article_id) => {
  return new Promise((resolve, reject)=>{
    connectionPool.getConnection((connectionError, connection)=>{

      if(connectionError) {
        reject(connectionError);
      } else {

        connection.query(`SELECT * FROM Comment WHERE article_id=?`, article_id, (error, result)=>{
          if(error) {
            console.log(`SQL error: ${error}`);
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
      connection.release();
    });
  });
}

// 更新留言
var updateComment = (token, commentId, comment) => {
  return new Promise((resolve, reject) => {
    // 驗證jwt token
    jwt.verify(token, 'my_secret_key', (err, decoded)=> {
      if(err) {
        reject(err);
      } else {
        // 取得token中的user_id
        const userId = decoded.payload.user_id;
        connectionPool.getConnection((connectionError, connection) => {
          if(connectionError) {
            reject(connectionError);
          } else {
            connection.query('UPDATE Comment SET ? WHERE _id=? AND user_id=?', [comment, commentId, userId], (error, result) => {
              if(error) {
                console.log(`SQL error: ${error}`);
                reject(error);
              } else if(result.affectedRows === 0) {  // 若無affectedRows
                resolve('請確認修改id');
              } else if(result.info.match('Changed: 1')) {
                resolve('留言修改成功');
              } else {
                resolve('留言無異動');
              }
            });
          }
          connection.release();
        });
      }
    })
  })
}

// 刪除留言
var deleteComment = (token, commentId) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'my_secret_key', (err, decoded) => {
      if(err) {
        reject(err);
      } else {
        const userId = decoded.payload.user_id;
        connectionPool.getConnection((connectionError, connection) => {
          if(connectionError) {
            reject(connectionError);
          } else {
            connection.query('DELETE FROM Comment WHERE _id=? AND user_id=?', [commentId, userId], (error, result) => {
              if(error) {
                console.log(`SQL error: ${error}`);
                reject(error);
              } else if(result.affectedRows === 1) {
                resolve('留言刪除成功');
              } else {
                resolve('留言刪除失敗');
              }
            });
          }
          connection.release();
        });
      }
    });
    
    
    
    
  });

}

export default {createComment, getComments, updateComment, deleteComment};