const express = require('express');
const router = express.Router();

/* 账号注册相关 */
router.post('/', (req, res) => {
  const requestTime = req.requestTime
  res.send(requestTime)
})

module.exports = router;
