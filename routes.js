var yumbot = require('./models/yumbot');

module.exports = {
  configure: function (app) {
    app.get('/api/ordernumber/:ordernumber/', function (req, res) {
      yumbot.get(req.params, res);
    });

    app.post('/api/', function (req, res) {
      yumbot.create(req.body, res);
    });

    app.put('/api/', function (req, res) {
      yumbot.update(req.body, res);
    });

    app.delete('/api/delete/:id/', function (req, res) {
      yumbot.delete(req.params, res);
    });
  }
}
