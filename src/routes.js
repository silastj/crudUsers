const { Router } = require("express")
const UserController = require("./controller/UserController")
const Auth = require('./middlewares/auth') 

const router = Router()

router.get('/', UserController.getHome) //home and key
router.post('/login', UserController.login) //login

router.post('/user-create', UserController.createUser)  //create user
router.get('/user/:id', UserController.findUser)  // find user
router.put('/user-update/:id', Auth, UserController.updateUser)  // update user
router.delete('/user-delete/:id',Auth, UserController.deleteUser)  //delete user

router.get('/list', UserController.getUsers) //find all user

module.exports = router