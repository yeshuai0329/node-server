const JWT = require("../../utils/jwt")

const getMenusController = (req, res, next) => {
  const token = req.headers.token
  const userId = JWT.verifyToken(token).id

  res.send(res.successTemplate([userId,userId]))
}

module.exports = {
  getMenusController
}