const express = require('express');
const router = express.Router();
const accountRouter = require('./account')
const userRouter = require('./user')

/* 账号相关 */
router.use('/account', accountRouter);

/* 用户相关 */ 
router.use('/user', userRouter);


module.exports = router;
