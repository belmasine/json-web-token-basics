const { BadRequestError } = require('../errors');
const jwt = require('jsonwebtoken');
const { v4 } = require("uuid");
const login = (req, res) => {

  const { username, password } = req.body;
  if (!username || !password) {
    const field = !username ? 'username' : 'password';
    throw new BadRequestError(`${field} not provided`)
  }

  const token = jwt.sign({username,id: v4()}, process.env.SECRET_KEY, { expiresIn: '2d' })
  res.status(200).json({username, token})
}
const dashboard = (req, res) => {
  const {username } = req.user;
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `You are authenticated`,
  });
}
module.exports = { dashboard, login };
