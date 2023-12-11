# Documentação da API

## 1. Get Token

### 1.1 Localhost
- **Endpoint:** `http://localhost:3030/`

### 1.2 Ambiente de Produção
- **Endpoint:** `https://list-users.cyclic.app/`

## 2. Get Users (GET)

### 2.1 Localhost
- **Endpoint:** `http://localhost:3030/list`

### 2.2 Ambiente de Produção
- **Endpoint:** `https://list-users.cyclic.app/list`

## 3. Get User (GET)

### 3.1 Localhost
- **Endpoint:** `http://localhost:3030/user/1`

### 3.2 Ambiente de Produção
- **Endpoint:** `https://list-users.cyclic.app/user/1`

## 4. Get Users (GET)

### 4.1 Localhost
- **Endpoint:** `http://localhost:3030/list?page=3`

### 4.2 Ambiente de Produção
- **Endpoint:** `https://list-users.cyclic.app/list?page=3`

## 5. Create User (CREATE)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-create`
  - Produção: `https://list-users.cyclic.app/user-create`
- **Exemplo:** `-- passar as informações com json(name, email):`          
- **Requisição JSON:**
  {
    "name": "velho33",
    "email": "velho33@hotmail.com",
    "password: "1234"
  }

## 6. Update User (UPDATE com Autenticação - token)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-update/{id}`
  - Produção: `https://list-users.cyclic.app/user-update/{id}`
- **Exemplo:** `http://localhost:3030/user-update/1`
  {
    "email": "bob@example.com",
    "password": "1234"
  }

## 7. Delete User (DELETE com Autenticação - token)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-delete/{id}`
  - Produção: `https://list-users.cyclic.app/user-delete/{id}`
- **Exemplo:** `http://localhost:3030/user-delete/4`

## 8. Login User (POST)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/login`
  - Produção: `https://list-users.cyclic.applogin`
- **Exemplo:** `http://localhost:3030/login`
  {
    "email": "bob@example.com",
    "password": "1234"
  }