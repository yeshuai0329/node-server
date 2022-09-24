const { SUCCESS, ACCOUNT_NOT_REGIST, ARGMENTS_FAIL, ACCOUNT_DID_REGIST, UNKNOW_ERROR, REQ_NO_TOKEN_OR_REFRESHTOKEN, REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE } = require('./code')

const codeMapMessage = {
  [SUCCESS]: 'success',
  [ACCOUNT_NOT_REGIST]: '账号未注册，请先注册再登录！',
  [ACCOUNT_DID_REGIST]: '账号已经注册，请直接登录！',
  [UNKNOW_ERROR]: '未知错误!',
  [ARGMENTS_FAIL]: '请求参数无效！',
  [REQ_NO_TOKEN_OR_REFRESHTOKEN]: '用户未携带 token | refreshToken',
  [REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE]: '用户token & refreshToken 都已经失效',
}

module.exports = codeMapMessage