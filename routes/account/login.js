const express = require('express');
const router = express.Router();
const { ACCOUNT_NOT_REGIST } = require('../../utils/responseCode/code')
const dbConnect = require('../../utils/mysqlConfig')

/* 账号登陆相关 */
router.get('/', async (req, res) => {

  const query = req.query
  console.log('query', query);
  const sql = `
    SELECT
      id,
      account_number AS accountNumber,
      pass_word AS passWord,
      phone_number AS phoneNumber
    FROM 
      users
    WHERE
    account_number='${query.accountNumber}'
  `

  dbConnect(sql, (err, result) => {
    if (err) return console.log('执行失败：' + err.message)

    res.send(res.respTemplate(result, ACCOUNT_NOT_REGIST))
  })


})

module.exports = router;
