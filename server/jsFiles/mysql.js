var mysql=require ('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'akshay1',
    password : 'Akshay@4362',
    database : 'ipldata'
  });

  function sqlQuery(sqlString) {
    return new Promise((resolve, reject) => {
      connection.query(sqlString, function (err, rows) {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }
  module.exports = sqlQuery;
 