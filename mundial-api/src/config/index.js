require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'cambia-este-secreto-en-produccion',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  AUTH_USER: {
    username: process.env.AUTH_USERNAME || 'admin',
    plainPassword: process.env.AUTH_PASSWORD || 'admin123'
  }
};
