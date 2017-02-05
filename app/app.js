const axios = require('axios');

const Yum = {

  init: function (app) {
    const me = this;
    me.app = app;

    me.hunger();
  },

  hunger: function () {
    const me = this;

    setInterval(function () {
      me.callAPI();
      console.log('hunger');
    }, 5000);
  },

  callAPI: function (path, method, postData) {

    axios.get('/api', {params: {
      ordernumber: 123
    }}).then(res => {
      console.log(res);
    });

  }

}

module.exports = Yum;
