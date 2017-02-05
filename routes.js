var rhenus = require('./models/yumbot');

module.exports = {
  configure: function (app) {
    app.get('/api/ordernumber/:ordernumber/', function (req, res) {
      rhenus.get(req.params, res);
    });

    app.post('/api/', function (req, res) {
      rhenus.create(req.body, res);
    });

    app.put('/api/', function (req, res) {
      rhenus.update(req.body, res);
    });

    app.delete('/api/delete/:id/', function (req, res) {
      rhenus.delete(req.params, res);
    });
  }
}
