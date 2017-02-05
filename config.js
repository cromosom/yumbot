const co =  require('co');
const prompt = require('co-prompt');
const fs = require('fs');
const chalk = require('chalk');

co(function* (file) {
  let host = yield prompt('hostname: ');
  let user = yield prompt('user: ');
  let pwd  = yield prompt.password('pwd: ');
  let db   = yield prompt('database: ');

  let inputObj = {
    hostname : host,
    user : user,
    password : pwd,
    database : db
  }

  writeConfig(inputObj);

});

const writeConfig = data => {
  const path = './config.json';
  data = JSON.stringify(data);

  fs.writeFile(path, data, error => {
    if (error) return console.log(error);

    console.log(chalk.cyan('config.json successfully created.'));
    process.exit(1);
  });
}
