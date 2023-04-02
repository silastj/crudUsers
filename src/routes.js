const { Router } = require("express")
const UserController = require("./controller/UserController")

const router = Router()

router.get('/', UserController.getHome) 
router.get('/list', UserController.getUsers) 
router.post('/user-create', UserController.createUser) 
router.put('/user-update/:id', UserController.updateUser) 
router.delete('/user-delete/:id', UserController.deleteUser) 





module.exports = router