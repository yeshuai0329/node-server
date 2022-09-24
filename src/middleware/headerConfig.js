const whiteList = require('../utils/whiteList')

const headerConfig = (req, res, next) => {
  const origin = req.headers.origin
  const whiteObj = whiteList.find((white) => white.origin === origin)

  // 设置跨域中资源共享
  if (whiteObj && whiteObj.isEnable) {
    // 动态设置白名单, 设置允许通过的源
    res.header('Access-Control-Allow-Origin', origin)
    // 设置可以发送请求的方式
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    // 允许http请求携带cookie
    res.header("Access-Control-Allow-Credentials", true);
    // 允许http请求设置的请求头
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, token, refreshtoken')
    next()
  } else {
    next()
  }
}

module.exports = headerConfig