module.exports = {
  dialect: "mysql",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "6eKEpZrsxmssXlqsgGvd",
  database: process.env.DB_DBNAME || "railway",
  host: process.env.DB_HOST || "containers-us-west-171.railway.app",
  port:process.env.DB_PORT || "6298",
  define: {
    timestamp: true,
    underscored:true
  }
}