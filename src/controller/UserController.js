const UserModel = require("../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const SECRET = 'asilas'

module.exports = {

  //LOGIN
  async login(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(401).send("Usuário não encontrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      return res.status(401).send("Senha inválida");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY || SECRET, { expiresIn: "1h" });

    res.cookie("auth_token", token, { expires: new Date(Date.now() + 3600000) });
    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      token
    });
  },

  // HOME CREATE JWT
  async getHome(req, res) {
    const { email } = req.body
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY || SECRET, { expiresIn: '6h' })
    res.status(200).json(
      {
        message: `Hello baby :), agora você pode acessar todas as rotas =>  EXEMPLO: passando a chave:*Authorization* e valor:*type + token*  :)`,
        auth: true,
        type: 'Bearer',
        token
      })
  },

  // CREATE USER
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UserModel.findOne({ where: { email } })
      if (user) {
        res.status(401).json({ message: `User registered with the name: ${name}` })
      } else {
        const user = await UserModel.create({ name, email, password: hashedPassword })
        res.status(200).json({ user })
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  // UPDATE USERS
  async updateUser(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({ where: { id } });

    if (!user) {
      return res.status(401).json({ message: `User with id${id} no registered.` });
    }

    const body = {};

    if (name !== user.name) {
      body.name = name;
    }

    if (email !== user.email) {
      body.email = email;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      body.password = hashedPassword;
    }

    if (Object.keys(body).length > 0) {
      await UserModel.update(body, { where: { id } });
      res.status(200).json(`User with id: ${id}, do name: ${name} and email: ${email}. Successfully Updated !`);
    } else {
      res.status(200).json({ message: "No changes were made to the user." });
    }
  },


  // GET USERS
  async getUsers(req, res) {
    try {
      const { page = 1, size = 12 } = req.query
      const offset = (page - 1) * size;
      const users = await UserModel.findAndCountAll({
        offset,
        limit: size,
        attributes: ["id", "name", "email", "created_at", "updated_at"],
      })
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
      const user = await UserModel.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name", "email", "created_at", "updated_at"]
      })
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
        return res.status(200).json(`User ${user} do ${id} deleted Sucess!!`)
      }
    } catch (error) {
      return res.status(401).json(`${error} No Delete User Errrouuuuuuuuuuuuuuu`)
    }
  }
}