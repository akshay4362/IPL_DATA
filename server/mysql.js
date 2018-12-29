var mysql=require ('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'akshay1',
    password : 'Akshay@4362',
    database : 'ipldata'
  });
  
  connection.connect(() =>   console.log("database is connected"))
  
//   connection.query('SELECT season,count(season) as matches from matches group by season', function (err, rows) {
//     if (err) throw err
//     console.log('The solution is: ', rows)
//   });

  connection.query('SELECT winner from matches group by winner', function (err, rows1) {
    if (err) throw err
    console.log(rows1)
  });

  connection.end()