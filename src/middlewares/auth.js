const { Request, Response, NextFunction} = require('express')
const JWT = require('jsonwebtoken')
const SECRET = 'asilas'

function Auth(Request, Response, NextFunction)  {
  let sucess = false

  if(Request.headers.authorization){
    const[ authType, token ] = Request.headers.authorization.split(' ')
    if(authType === 'Bearer'){
      try{
        const decoded = JWT.verify(token, SECRET)  
 
       if(decoded){
         sucess = true
         NextFunction()
       }else{
         Response.status(401).end().json({ message: 'Token inválido!' });
       }
      }catch(error){
        Response.status(403);
        Response.json({error: 'Não autorizado, entre na home, rota =>  "/", para liberar o acesso e pegar o token'})
      }
    }
  }
  else{
    Response.status(403);
    Response.json({error: 'Falta passar no Headers *Authorization* + Bearer token'})
  }
  
}

module.exports = Auth