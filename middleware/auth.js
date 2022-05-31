
const { BadRequestError, ForbiddenAccessError } = require('../errors');

const jwt = require('jsonwebtoken');

const authenticatedMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new BadRequestError('Bad request');
  }
  const token = authHeader.split(' ')[1];
  try {
    const {username, id} = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {username, id}
    next();
 
  } catch (error) {
    throw new ForbiddenAccessError(`Forbidden access`);
  }
}

module.exports = authenticatedMiddleware;
