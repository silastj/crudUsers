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

## 3. Get Users (GET) - Páginas com Autenticação (token)

### 3.1 Localhost
- **Endpoint:** `http://localhost:3030/list?page=3`

### 3.2 Ambiente de Produção
- **Endpoint:** `https://list-users.cyclic.app/list?page=3`

## 4. Create User (CREATE)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-create`
  - Produção: `https://list-users.cyclic.app/user-create`
- **Exemplo:** `-- passar as informações com json(name, email):`          
- **Requisição JSON:**
  {
    "name": "velho",
    "email": "velho@hotmail.com"
  }

## 5. Update User (UPDATE com Autenticação - token)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-update/{id}`
  - Produção: `https://list-users.cyclic.app/user-update/{id}`
- **Exemplo:** `http://localhost:3030/user-update/1`

## 6. Delete User (DELETE com Autenticação - token)

- **Endpoint:** 
  - Localhost: `http://localhost:3030/user-delete/{id}`
  - Produção: `https://list-users.cyclic.app/user-delete/{id}`
- **Exemplo:** `http://localhost:3030/user-delete/4`

