const { ACCOUNT_DID_REGIST, UNKNOW_ERROR } = require('../../utils/responseCode/code')
const { sel_acc_isSave_sql, regist_acc_sql } = require('../../sql/accountSql')
const dbConnect = require('../../utils/mysqlConfig');


const registController = (req, res) => {
  // const requestTime = req.requestTime
  const { accountNumber, passWord, loginType } = req.body
  // 参数校验
  if (!accountNumber || !passWord || !loginType) {
    res.send(res.failTemplate(ARGMENTS_FAIL))
  }

  // 参数校验成功
  dbConnect(sel_acc_isSave_sql, [accountNumber], (err, result) => {
    if (err) return console.log('执行失败：' + err.message)
    // 数据库中已经有了
    if (result && !!result.length) {
      // 账号已经注册
      res.send(res.failTemplate(ACCOUNT_DID_REGIST))
    } else {
      // 账号未注册
      dbConnect(regist_acc_sql, [accountNumber, passWord], (err, result) => {
        if (err) return console.log('执行失败：' + err.message)
        if (result.insertId) {
          res.send(res.successTemplate())
        } else {
          res.send(res.failTemplate(UNKNOW_ERROR))
        }
      })
    }
  })
}

module.exports = {
  registController
}