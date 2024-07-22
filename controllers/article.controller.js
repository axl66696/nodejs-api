import articleModule from '../modules/article.module.js';

const articlePost = (req, res)=>{
  const insertValues = req.body;
  articleModule.createArticle(insertValues).then((result)=>{
    res.send(result);
  }).catch((err)=>{ return res.send(err); });
}

const articleGet = (req, res)=> {
  articleModule.selectArticle().then((result)=>{
    res.send(result);
  }).catch((err)=>{ return res.send(err); });
}

const articlePut = (req, res) => {
  // 取得修改id
  const article_id = req.params.article_id;
  console.log('userId', article_id);
  // 取得修改參數
  const insertValues = req.body;
  articleModule.modifyArticle(insertValues, article_id).then((result) => {
    res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const articleDelete = (req, res) => {
  // 取得刪除id
  const userId = req.params.article_id;
  articleModule.deleteArticle(userId).then((result) => {
    res.send(result); // 回傳刪除成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  Article GET JWT取得個人文章  */
const articlePersonalGet = (req, res) => {
  articleModule.selectPersonalArticle(req.token).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.status(401).send(err); }); // 失敗回傳錯誤訊息
};

export default {articlePost, articleGet, articlePut, articleDelete, articlePersonalGet};