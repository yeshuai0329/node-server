const JWT = require("../../utils/jwt")
const dbConnect = require("../../utils/mysqlConfig")
const { sel_auth_menus_sql } =require('../../sql/user')

const getMenusController = (req, res, next) => {
  const token = req.headers.token
  dbConnect(sel_auth_menus_sql, [] ,(err, result) => {
    if (err) return console.log('执行失败：' + err.message)
    if (result && !!result.length) {
      res.send(res.successTemplate(result))
    } else {
      return res.send(res.failTemplate(ACCOUNT_NOT_REGIST))
    }
  })
}

module.exports = {
  getMenusController
}