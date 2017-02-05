const http = require('http');

const Yum = {

  init: function (app) {
    const me = this;
    me.app = app;

    me.hunger();
  },

  hunger: function () {
    const me = this;

    setInterval(function () {
      me.app.get('/api/ordernumber/123/', function (req, res) {
        yumbot.get(req.params, res);
      });
      console.log('hunger');
    }, 5000);
  },

  callAPI: function (path, method, postData) {
    // const me = this;
    //
    // let options = {
    //   hostname: 'localhost',
    //   port: 8080,
    //   path: path,
    //   method: method,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': Buffer.byteLength(postData)
    //   }
    // }
    //
    // let req = http.request(options, (res) => {
    //   console.log(`STATUS: ${res.statusCode}`);
    //
    //   res.setEncoding('utf8');
    //
    //
    // })
  }

}

module.exports = Yum;
