var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./libs/connection');
var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connection.init();
routes.configure(app);

var server = app.listen(8000, function () {
  console.log('server listning on ' + server.address().port);
});
