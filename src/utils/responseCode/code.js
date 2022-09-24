const SUCCESS = 200 // 各种意义的成功
const ACCOUNT_NOT_REGIST = 1001 // 账号未注册
const ACCOUNT_DID_REGIST = 1002 // 账号已注册
const UNKNOW_ERROR = 2001 // 未知错误
const ARGMENTS_FAIL = 2002 // 请求参数校验失败

const TOKEN_OVERDUE_NEED_REFRESH = 10000 // 用户token失效,refresh token有效,告诉用户刷新token和refreshtoken
const REQ_NO_TOKEN_OR_REFRESHTOKEN = 10001 // 用户未携带token | refreshToken
const REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE = 10002 // 用户token & refreshToken 都已经失效 

module.exports = {
  SUCCESS,
  ACCOUNT_NOT_REGIST,
  ACCOUNT_DID_REGIST,
  UNKNOW_ERROR,
  ARGMENTS_FAIL,
  REQ_NO_TOKEN_OR_REFRESHTOKEN,
  REQ_TOKEN_AND_REFRESHTOKEN_OVERDUE,
  TOKEN_OVERDUE_NEED_REFRESH
}