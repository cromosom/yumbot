const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./libs/connection');
const routes = require('./routes');
const yum = require('./app/app');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connection.init();
routes.configure(app);
yum.init(app);

var server = app.listen(8080, function () {
  console.log('server listning on ' + server.address().port);
});
