module.exports = {
  dialect: "mysql",
  host: 'localhost',
  username: 'root',
  port: '3306',
  password: 'admin',
  database: 'users',
  define: {
    timestamp: true,
    underscored:true
  }
}