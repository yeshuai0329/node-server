const express = require('express');
const router = express.Router();
const accountRouter = require('./account')
const usersRouter = require('./users')

/* 账号相关 */
router.use('/account', accountRouter);

/* 用户相关 */
router.use('/user', usersRouter);

module.exports = router;
