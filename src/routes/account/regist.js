const express = require('express');
const router = express.Router();
const { registController } = require('../../controllers/accoutController/regist')

/* 账号注册相关 */
router.post('/', registController)

module.exports = router;
