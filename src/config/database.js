// DEIXAR DINAMICO COM LOCAL OU PROCESS BANCO ONLINE
module.exports = {
  dialect: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
      timestamp: true,
      underscored:true
    }
}