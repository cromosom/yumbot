var connection = require('../libs/connection');

function Yumbot () {

  this.get = function (id, result) {
    connection.acquire(function (err, con) {
      con.query('select * from r_orders where ordernumber = ?', [id.ordernumber], function (err, res) {
        con.release();
        result.send(res);
      });
    });
  }

  this.create = function (yumbot, res) {
    connection.acquire(function (err, con) {
      con.query('insert into r_orders set ?', yumbot, function (err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Order creation failed'});
        } else {
          res.send({status: 0, message: 'Order created successfully'});
        }
      });
    });
  }

  this.update = function (yumbot, res) {
    connection.acquire(function (err, con) {
      con.query('update r_orders set ? where id = ?', [yumbot, yumbot.id], function (err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Order update failed'});
        } else {
          res.send({status: 0, message: 'Order updated successfully'});
        }
      });
    });
  }

  this.delete = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('delete from r_orders where id = ?', [id.id], function (err, result) {
        con.release();

        if (err) {
          res.send({status: 1, message: 'Order deletion failed'});
        } else {
          res.send({status: 0, message: 'Order deleted successfully'});
        }
      });
    });
  }

}

module.exports = new Yumbot();
