const express = require('express');
const cookieParser = require('cookie-parser');
const requestTime = require('./requestTime')
const respTemplate = require('./respTemplate')
const path = require('path');



module.exports = function middleware(app) {
  /* express 核心中间件 */
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));

  /* 第三方中间件 */
  app.use(cookieParser());
  app.use(requestTime)
  app.use(respTemplate)
}
