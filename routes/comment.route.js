import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation.js';
import commentController from '../controllers/comment.controller.js';

const router = express.Router();

// 使用Middleware取得Header中的 Bearer Token（教學網站）
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

// 以controller統一處理打ＡＰＩ後的後續功能
// 使用express-validation驗證傳入的Comment是否符合規範
router.route('/')
.post(validate.validate(paramValidation.validComment), commentController.createComment);

// 使用傳入的文章id取得該文章下所有Comment
router.route('/:article_id')
      .get(commentController.getComments);

// 使用jwt驗證後，進行Comment的更新或刪除
router.put('/edit', ensureToken, commentController.updateComment);
router.delete('/delete/:comment_id', ensureToken, commentController.deleteComment);
      
export default router;