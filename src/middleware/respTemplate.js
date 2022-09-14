const codeMapMessage = require('../utils/responseCode/codeMapMessage')
const { SUCCESS } = require('../utils/responseCode/code')

/* 响应模版 */
const respTemplate = (req, res, next) => {
  res.respTemplate = (result, message) => {
    return {
      code: result ? SUCCESS : message,
      message: codeMapMessage[result ? SUCCESS : message],
      data: result || []
    }
  }
  next()
}

module.exports = respTemplate