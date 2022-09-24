const express = require('express');
const router = express.Router();
const { getMenusController } = require('../../controllers/usersController/authMenus')

/* 获取用户权限菜单 */
router.get('/authmenus', getMenusController);

module.exports = router;
