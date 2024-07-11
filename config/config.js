require('dotenv').config();
module.exports = {
  development: {
    "username": process.env.BD_USER_NAME,
    "password":  process.env.BD_PASSWORD,
    "database":  process.env.BD_NAME,
    "host":  process.env.BD_HOST,
    "port":  process.env.BD_PORT,
    "dialect": "mysql"
  },
  test: {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
   "username": process.env.BD_USER_NAME,
    "password":  process.env.BD_PASSWORD,
    "database":  process.env.BD_NAME,
    "host":  process.env.BD_HOST,
    "port":  process.env.BD_PORT,
    "dialect": "mysql"
  }
}
