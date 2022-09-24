const codeMapMessage = require('../utils/responseCode/codeMapMessage')
const { SUCCESS } = require('../utils/responseCode/code')

/* 响应成功的模版 */
const successTemplate = (req, res, next) => {
  res.successTemplate = (data) => {
    return {
      code: SUCCESS,
      message: codeMapMessage[SUCCESS],
      data: data || []
    }
  }
  next()
}

/* 响应失败的模版 */
const failTemplate = (req, res, next) => {
  res.failTemplate = (failCode, data) => {
    return {
      code: failCode,
      message: codeMapMessage[failCode],
      data: data || []
    }
  }
  next()
}

module.exports = {
  successTemplate,
  failTemplate
}