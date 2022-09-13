/* 创建时间 */
const requestTime = (req, res, next) => {
  req.requestTime = new Date().getTime()
  next()
}

module.exports = requestTime