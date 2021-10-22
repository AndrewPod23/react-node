const jwt = require('jsonwebtoken');
const { UNAUTH } = require('../utils/errors');

const authorizeRequest = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).send(UNAUTH);

  return jwt.verify(authorization, process.env.JWT_SECRET, (err, decoded) => {
    if (err) res.status(401).send(UNAUTH)
    next();
  })
};

module.exports = {
  authorizeRequest
};