const { User, Role } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
require('dotenv').config()


module.exports = {
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body
            const user = await User.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, 10),
            })

            const role = await Role.findOne({
                where: {
                    id: 2
                }
            })

            role.addUser(user)
            const token = jwt.sign({ user: user }, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRES_IN })
            res.status(201).json({
                user,
                token
            })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                },
            })
            if (!user) return res.status(401).json({msg:'Email o contraseña invalido!'})
            const pass = bcrypt.compareSync(password, user.password)
            if (!pass) return res.status(401).json({msg:'Email o contraseña invalido!'})
            const token = jwt.sign({ user: user }, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRES_IN })
            res.status(200).json({ token })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                include: {
                    model: Role,
                    as: 'role',
                    attributes: ['name']
                }
            })
            console.log(req.url)
            res.status(200).json({ users })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    getUser: async (req, res) => {
        try {
            const { id } = req.params
            const user = await User.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Role,
                    as: 'role',
                    attributes: ['name']
                }
            })

            if (!user) return res.status(404).json({ msg: 'No se encontró el Usuario!' })
            res.status(200).json({ user })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params
            const result = await User.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!result[0]) return res.status(404).json({ msg: 'No se encontró el Usuario!' })
            res.status(205).json({ result })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params
            const result = await User.destroy({
                where: {
                    id: id
                }
            })
            if (!result) return res.status(404).json({ msg: 'No se encontró el Usuario!' })
            res.status(205).json({ result })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

}