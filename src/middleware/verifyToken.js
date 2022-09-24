const JWT = require("../utils/jwt")
const whiteApiList = require('../utils/whiteApiList')
const { REQ_NO_TOKEN_OR_REFRESHTOKEN, REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE,TOKEN_OVERDUE_NEED_REFRESH } = require('../utils/responseCode/code')


/* 验证token */
const verifyToken = (req, res, next) => {
  const pathname = req._parsedUrl.pathname
  // 如果在白名单api列表中 不校验token
  if (whiteApiList.find((item) => item.pathname === pathname)) {
    next()
  } else {
    // 不在白名单的校验token
    const token = req.headers.token
    const refreshtoken = req.headers.refreshtoken
    // 如果用户未携带 token
    if (!token || !refreshtoken) {
      return res.send(res.failTemplate(REQ_NO_TOKEN_OR_REFRESHTOKEN))
    }  else {
      console.log('token', token)
      console.log('refreshtoken', refreshtoken)
      console.log('JWT.verifyToken(token)', JWT.verifyToken(token))
      console.log('JWT.verifyRefreshToken(refreshtoken)', JWT.verifyRefreshToken(refreshtoken))
      // 用户携带 token 但是 token 有效
      if (JWT.verifyToken(token)) {
        next()
      } else {
        // 用户携带 token 但是 token 失效
        if (JWT.verifyRefreshToken(refreshtoken)) {
          const data = JWT.verifyRefreshToken(refreshtoken)
          
          // refreshtoken 有效
          return res.send(res.failTemplate(TOKEN_OVERDUE_NEED_REFRESH, {
            token: JWT.generateToken(data.id),
            refreshtoken: JWT.generateRefreshToken(data.id)
          }))
        } else {
          return res.send(res.failTemplate(REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE))
        }
      }
    }
  }
}

module.exports = verifyToken