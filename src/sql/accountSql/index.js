// 根据用户账号密码查询用户
const sel_acc_pass_sql = `
      SELECT
        id,
        account_number AS accountNumber,
        pass_word AS passWord,
        phone_number AS phoneNumber,
        id_number AS idNumber,
        nick_name AS nickName
      FROM 
        users
      WHERE
      account_number=?
      AND
      pass_word=?
    `

// 查询数据库中账号是否已经注册
const sel_acc_isSave_sql = `
    SELECT
      account_number AS accountNumber
    FROM 
      users
    WHERE
    account_number=?
  `

// 账号密码注册
const regist_acc_sql = `
  INSERT INTO
    users
  (account_number, pass_word)
  VALUES
  (?, ?)
`
module.exports = {
  sel_acc_pass_sql,
  sel_acc_isSave_sql,
  regist_acc_sql
}