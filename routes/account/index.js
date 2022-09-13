const express = require('express');
const router = express.Router();
const loginRouter = require('./login')
const registRouter = require('./regist')

/* 账号登陆相关 */
router.use('/login', loginRouter);
/* 账号登陆相关 */
router.use('/regist', registRouter);

module.exports = router;
