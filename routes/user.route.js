// var express = require('express');
// var {validate} = require('express-validation');
// var {userPost, userGet, userPut, userDelete, userLogin} = require('../controllers/user.controller').default;
// var {validUser} = require('../config/param-validation').default;
import express from 'express';
import validate from 'express-validation';
import userCtrl from '../controllers/user.controller.js';
import paramValidation from '../config/param-validation.js';

const router = express.Router();

router.route('/')
  .get(userCtrl.userGet)
  .post(validate.validate(paramValidation.validUser), userCtrl.userPost);

router.route('/:user_id')
  .put(userCtrl.userPut)
  .delete(userCtrl.userDelete);

router.route('/login').post(userCtrl.userLogin);

// module.exports = router;
export default router;