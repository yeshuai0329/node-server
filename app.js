/* 生成 express 服务 */
const express = require('express');
const app = express();
const middleware = require('./src/middleware')
const indexRouter = require('./src/routes/index');
const PORT = 8090

/* 中间件处理 */
middleware(app)
/* 处理路由 */
app.use('/', indexRouter);

/* 启动服务器，并且监听 */
app.listen(PORT, () => {
  console.log(`${PORT} 服务器已经启动了`);
})

