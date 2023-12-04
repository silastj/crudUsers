## crud nodejs
- npm init -y
- npm install express 
- npm install sequelize-cli -D
- npm install sequelize 
- npm install nodemon -D
- npm install -g sequelize-cli
- npx sequelize db:create // cria o banco de dados
- npx sequelize migration:create --name=create-user // cria a migration para criar a tabela e coluna
- npx sequelize db:migrate // cria a tabela com as colunas acima
- npx sequelize-cli init // podemos usar como template

- npm install jsonwebtoken

## Rodar o Projeto
- Clone o repositorio  `https://github.com/silastj/crudUsers.git`
- Node v15.0.0
- npm install
- npm run dev


## CRUD USER

- Get Users GET
-- http://localhost:3030/list ou 
-- https://userscrud.up.railway.app/list

- Delete User  DELETE
-- passar o numero do id exemplo: 4
-- http://localhost:3030/user-delete/4 ou
-- https://userscrud.up.railway.app/user-delete/4

- Update User UPDATE
-- passar as informações com json:
`{"name": "velho",  "email": "velho@hotmail.com"}`
-- passar o id:
-- http://localhost:3030/user-update/1 ou 
-- https://userscrud.up.railway.app/user-update/1

- Create User POST
-- http://localhost:3030/user-create 
-- https://userscrud.up.railway.app/user-create 

-- passar as informações com json(name, email):
`{"name": "velho",  "email": "velho@hotmail.com"}`

- Get Users GET - Pages
-- http://localhost:3030/list?page=3 ou 
-- https://userscrud.up.railway.app/list?page=3

## BANCO DE DADOS

// NEON 
// https://console.neon.tech/app/projects/old-paper-175028/tables

module.exports = {  
  dialect: "postgres",
  host:'ep-jolly-bush-147065.us-east-2.aws.neon.tech',
  database:'teste',
  username:'silastj',
  password:'GEigHBY8qs9r',
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

// LOCAL POSTGRES PGADMIN

module.exports = {
  dialect: "postgres",
  username: "postgres",
  password: "1234",
  database: "teste",
  host: "localhost",
  port: "5432",
  define: {
    timestamp: true,
    underscored:true
  }
}

// LOCAL DBEAVER MYSQL

module.exports = {
  dialect: "mysql",
  username: "root",
  password: "1234",
  database: "teste",
  host: "localhost",
  port: "3306",
  define: {
    timestamp: true,
    underscored:true
  }
}

// DEIXAR DINAMICO COM LOCAL OU PROCESS BANCO ONLINE

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

