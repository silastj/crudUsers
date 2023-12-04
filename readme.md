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
`{"name": "velho2",  "email": "velho@hotmail.com2"}`
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






