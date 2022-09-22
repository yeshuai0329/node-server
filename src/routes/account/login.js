const express = require('express');
const router = express.Router();
const { loginController } = require('../../controllers/accoutController/login')

/* 账号登陆相关 */
router.post('/', loginController)

module.exports = router;
