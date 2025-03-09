const mysql2 = require('mysql2');

const db = mysql2.createConnection ({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(err => {
    if (err) {
      console.error('Database connection failed:', err);
      process.exit(1);
    } else {
      console.log('Connected to MySQL database');
    }
  });
  
module.exports = db;