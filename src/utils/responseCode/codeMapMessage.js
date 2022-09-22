const { SUCCESS, ACCOUNT_NOT_REGIST, ARGMENTS_FAIL, ACCOUNT_DID_REGIST, UNKNOW_ERROR } = require('./code')

const codeMapMessage = {
  [SUCCESS]: 'success',
  [ACCOUNT_NOT_REGIST]: '账号未注册，请先注册再登录！',
  [ACCOUNT_DID_REGIST]: '账号已经注册，请直接登录！',
  [UNKNOW_ERROR]: '未知错误!',
  [ARGMENTS_FAIL]: '请求参数无效！',
}

module.exports = codeMapMessage