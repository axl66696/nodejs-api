import commentModule from '../modules/comment.module.js'

// 各功能以module統一管理詳細邏輯，controller只處理request與response

// 建立Comment
var createComment = (req, res)=> {
  const comment = req.body;
  commentModule.createComment(comment).then((result)=> {
    res.send(result);
  }).catch((err)=> { return res.send(err); });
}

// 取得某文章下所有Comment
var getComments = (req, res) => {
  const article_id = req.params.article_id;
  commentModule.getComments(article_id).then((result)=> {
    res.send(result);
  }).catch((err)=> { return res.send(err); });
}

// 更新Comment
var updateComment = (req, res) => {
  const comment = req.body;
  const commentId = comment._id;
  const token = req.token;
  commentModule.updateComment(token, commentId, comment).then((result)=> {
    res.send(result);
  }).catch((err)=> { return res.send(err); });
}

// 刪除Comment
var deleteComment = (req, res) => {
  const comment_id = req.params.comment_id;
  const token = req.token;
  commentModule.deleteComment(token, comment_id).then((result)=> {
    res.send(result);
  }).catch((err)=> { return res.send(err); });
}

export default {createComment, getComments, updateComment, deleteComment};