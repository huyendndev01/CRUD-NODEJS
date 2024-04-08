
import mysql from 'mysql2/promise';


  // create the connection
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
  });


module.exports = pool;

