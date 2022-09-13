const { SUCCESS, ACCOUNT_NOT_REGIST } = require('./code')

const codeMapMessage = {
  [SUCCESS]: 'success',
  [ACCOUNT_NOT_REGIST]: '账号未注册，请先注册再登录！'
}

module.exports = codeMapMessage