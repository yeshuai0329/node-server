const JWT = require("../utils/jwt")
const { REQ_NO_TOKEN_OR_REFRESHTOKEN, REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE } = require('../utils/responseCode/code')
/* 验证token */
const verifyToken = (req, res, next) => {
  const token = req.token
  const refreshToken = req.refreshToken
  // 如果用户未携带 token
  if (!token | refreshToken) {
    res.send(res.failTemplate(REQ_NO_TOKEN_OR_REFRESHTOKEN))
  }

  // 用户携带 token 但是 token 有效
  if (JWT.verifyToken(token)) {
    next()
  } else {
    // 用户携带 token 但是 token 失效
    if (JWT.verifyRefreshToken(refreshToken)) {
      // refreshToken 有效
    } else {
      // refreshToken 无效
      res.send(res.failTemplate(REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE))
    }

  }
}

module.exports = verifyToken