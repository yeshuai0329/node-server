const mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node-server-pc'
}

const dbConnect = async (sql, conditionArr, callback) => {
  const pool = mysql.createPool(config)

  pool.getConnection((err, conn) => {
    if (err) throw err
    // 事件驱动的回调
    conn.query(sql, conditionArr, callback)
    conn.release()
  })
}

module.exports = dbConnect
