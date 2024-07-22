import userModule from '../modules/user.module.js';
import bcrypt from 'bcryptjs';

const userPost = (req, res)=>{
  const insertValues = {
    user_name: req.body.user_name,
    user_mail: req.body.user_mail,
    user_password: bcrypt.hashSync(req.body.user_password, 10)
  };
  userModule.createUser(insertValues).then((result)=>{
    res.send(result);
  }).catch((err)=>{ return res.send(err); });
}

const userLogin = (req, res, next) => {
  // 取得帳密
  const insertValues = req.body;
  userModule.selectUserLogin(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { console.log('err: ', err);next(err); }); // 失敗回傳錯誤訊息
};

const userGet = (req, res)=> {
  userModule.selectUser().then((result)=>{
    res.send(result);
  }).catch((err)=>{ return res.send(err); });
}

const userPut = (req, res) => {
  // 取得修改id
  const user_id = req.params.user_id;
  // 取得修改參數
  const insertValues = req.body;
  userModule.modifyUser(insertValues, user_id).then((result) => {
    res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const userDelete = (req, res) => {
  // 取得刪除id
  const userId = req.params.user_id;
  userModule.deleteUser(userId).then((result) => {
    res.send(result); // 回傳刪除成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

export default {userPost, userGet, userPut, userDelete, userLogin};