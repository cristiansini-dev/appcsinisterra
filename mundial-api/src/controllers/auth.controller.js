const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET, JWT_EXPIRES_IN, AUTH_USER } = require('../config');

// El hash se calcula una sola vez al levantar el servidor.
const passwordHash = bcrypt.hashSync(AUTH_USER.plainPassword, 10);

function login(req, res) {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  const isUsernameValid = username === AUTH_USER.username;
  const isPasswordValid = isUsernameValid && bcrypt.compareSync(password, passwordHash);

  if (!isUsernameValid || !isPasswordValid) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ sub: username, role: 'admin' }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });

  return res.json({ token, tokenType: 'Bearer', expiresIn: JWT_EXPIRES_IN });
}

module.exports = { login };
