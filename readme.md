## crud nodejs
- npm init -y
- npm install express 
- npm install sequelize-cli -D
- npm install sequelize 
- npm install nodemon -D
- npm install pg pg-hstore
- npm install -g sequelize-cli
- npx sequelize db:create
- npx sequelize migration:create --name=create-user

## Rodar o Projeto
- Clone o repositorio 
- Node v15.0.0
- nom run dev


## DB
- server host localhost
- database crudnode
- port 3306 5432
- username root  admin
- password 1234  

- tabela users



## Pg Admin
-- altere dentro da pasta C:\Program Files\PostgreSQL\14\data pg_hba.conf
-- deixar tudo trust
-- exemplo:

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# IPv6 local connections:
host    all             all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust


-- HOST NAME/ADRESS
postgres-asilas
127.0.0.1

-- maintenance database
postgres	

-- username
postgres		

-- password
1234