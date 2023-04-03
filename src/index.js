const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')
app.use(express.json())
app.use(routes)
const PORT = 3030
app.listen(process.env.PORT || PORT, ()=> console.log("RUN SERVER " + PORT))