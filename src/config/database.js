module.exports = {
  dialect: "postgres",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DBNAME || "teste",
  host: process.env.DB_HOST || "localhost",
  port:process.env.DB_PORT || "5432",
  define: {
    timestamp: true,
    underscored:true
  },
  dialectOptions: {
    ssl: {
      require: 'true'
    }
  }
}