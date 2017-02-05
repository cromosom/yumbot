const mysql = require('mysql');
const fs = require('fs');

function Connection () {
  this.pool = null;

  let config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

  this.init = function () {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: config.hostname,
      user: config.use,
      password: config.password,
      database: config.database
    })
  }

  this.acquire = callback => {
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  }
}

module.exports = new Connection();
