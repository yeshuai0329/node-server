const jsonwebtoken = require('jsonwebtoken')
const tokenSecret = 'token-yedashuaiyyds'
const refreshTokenSecret = 'refreshToken-yedashuaiyyds'
const tokenExpiresIn = '4h'
const refreshTokenExpiresIn = '6h'

const JWT = {
  // 生成token
  generateToken: (id) => {
    return jsonwebtoken.sign({ id }, tokenSecret, { expiresIn: tokenExpiresIn })
  },

  // 生成refreshToken,
  generateRefreshToken: (id) => {
    return jsonwebtoken.sign({ id }, refreshTokenSecret, { expiresIn: refreshTokenExpiresIn })
  },

  // 验证token
  verifyToken(token) {
    try {
      return jsonwebtoken.verify(token, tokenSecret)
    } catch (e) {
      return false
    }
  },

  // 验证 refreshToken
  verifyRefreshToken(token) {
    try {
      return jsonwebtoken.verify(token, refreshTokenSecret)
    } catch (e) {
      return false
    }
  }
}

module.exports = JWT