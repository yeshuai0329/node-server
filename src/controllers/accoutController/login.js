const { ACCOUNT_NOT_REGIST } = require('../../utils/responseCode/code')
const dbConnect = require('../../utils/mysqlConfig')
const { sel_acc_pass_sql } = require('../../sql/accountSql')
const JWT = require('../../utils/jwt')

// 登录的逻辑
const loginController = (req, res) => {
  const { accountNumber, passWord, loginType } = req.body


  // 账号密码登录
  if (loginType === '1') {
    dbConnect(sel_acc_pass_sql, [accountNumber, passWord], (err, result) => {
      if (err) return console.log('执行失败：' + err.message)

      if (result && !!result.length) {
        const [userInfo] = result
        const token = JWT.generateToken(result[0].id)
        const refreshtoken = JWT.generateRefreshToken(result[0].id)
        console.log('token.', token)
        console.log('refreshtoken.', refreshtoken)
        console.log('verifyToken.', JWT.verifyToken(token))
        console.log('verifyRefreshToken.', JWT.verifyRefreshToken(refreshtoken))
        return res.send(res.successTemplate({
          accountNumber: userInfo.accountNumber,
          nickName: userInfo.nickName,
          phoneNumber: userInfo.phoneNumber,
          token: token,
          refreshtoken: refreshtoken
        }))
      } else {
        return res.send(res.failTemplate(ACCOUNT_NOT_REGIST))
      }
    })
  }

  // 手机号登录
  if (loginType === '2') {
    // TODO
  }
}


module.exports = {
  loginController
}