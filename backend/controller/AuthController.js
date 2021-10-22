const AuthService = require('../service/authService');
const { USER_NOT_FOUND, INVALID_PASSWORD } = require('../utils/errors');

const signIn = (req, res) => {
  const { login, password } = req.body;

  return AuthService.signIn(login, password)
    .then(token => res.status(200).send({ 'access_token': token }))
    .catch(err => {
      err.message === USER_NOT_FOUND || err.message === INVALID_PASSWORD 
      ? res.status(400).send(err.message) 
      : res.status(500).send(err.message)
    })
};

module.exports = {
  signIn
};