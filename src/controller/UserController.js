const UserModel = require("../models/User")
const jwt = require('jsonwebtoken')
const SECRET = 'asilas'

module.exports = {

  // HOME CREATE JWT
  async getHome(req, res) {
    const { email } = req.body
    const token = jwt.sign({ email }, SECRET, { expiresIn: '6h' })
    res.status(200).json(
      { message: `Hello baby, agora você pode acessar todas as rotas, EXEMPLO: passando a chave:*Authorization* e valor:*type + token*  :)`,
        auth: true,
        type: 'Bearer',
        token })
  },

  // CREATE USER
  async createUser(req, res) {
    try {
      const { name, email } = req.body
      const user = await UserModel.findOne({ where: { email } })
      if (user) {
        res.status(401).json({ message: `Usuario já cadastrado com o nome: ${name}`})
      } else {
        const user = await UserModel.create({ name, email })        
        res.status(200).json({ user })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  // UPDATE USERS
  async updateUser(req, res) {
    const { id } = req.params
    const { name, email } = req.body

    const userId = await UserModel.findOne({ where: { id } })

    if (!userId) {
      res.status(401).json({ message: `Usuario com id${id} não cadastrado.` })
    } else {
      const userId = await UserModel.update({ name, email }, { where: { id } })
      res.status(200).json(`Usuario do id: ${userId}, do name: ${name} e email: ${email}. Atualizado com sucesso!`)
    }
  },

  // GET USERS
  async getUsers(req, res) {
    try {
      const users = await UserModel.findAll()
      if (!users) {
        res.status(200).json({ message: `NoNoNo Users Errrouuuuuuuuuuuu` })
      }
      res.status(200).json(users)
    } catch (error) {
      res.status(400).json(`${error} NoNoNo list Users Errrouuuuuuuuuuuu`)
    }
  },

  // FIND USER
  async findUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findOne({ where: { id: Number(id) } })
      if (!user) return res.json({ error: "No existed user registered." })
      return res.json(user)
    } catch (error) {
      return res.json(`${error} No No list User Errrouuuuuuuuuuuu`)
    }
  },

  // DELETE USER
  async deleteUser(req, res) {
    try {
      const { id } = req.params
      let user = await UserModel.findOne({ where: { id } })
      if (!user) {
        res.json(401).json({ message: `No existed user registered ${id}` })
      } else {
        const user = await UserModel.destroy({ where: { id } })
        return res.status(200).json(`User ${id} delete Sucess!!`)
      }
    } catch (error) {
      return res.status(401).json(`${error} No Delete User Errrouuuuuuuuuuuuuuu`)
    }
  }
}