const { Router } = require("express")
const UserController = require("./controller/UserController")
const Auth = require('./middlewares/auth') 

const router = Router()

router.get('/', UserController.getHome) //home and key

router.post('/user-create', Auth, UserController.createUser)  //create user
router.get('/user/:id', Auth, UserController.findUser)  // find user
router.put('/user-update/:id', Auth, UserController.updateUser)  // update user
router.delete('/user-delete/:id',Auth, UserController.deleteUser)  //delete user

router.get('/list', Auth, UserController.getUsers) //find all user

module.exports = router