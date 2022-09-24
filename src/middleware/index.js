const express = require('express');
const cookieParser = require('cookie-parser');
const requestTime = require('./requestTime')
const { successTemplate, failTemplate } = require('./respTemplate')
const verifyToken = require('./verifyToken')
const headerConfig = require('./headerConfig')
const path = require('path');



module.exports = function middleware(app) {
  /* express 核心中间件 */
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));

  /* 第三方中间件 */
  app.use(cookieParser());
  app.use(headerConfig)
  app.use(requestTime)
  app.use(successTemplate)
  app.use(failTemplate)
  app.use(/^((?!^\/account\/(login|regist)$).)*$/, verifyToken)
}
