
const { Role, User } = require('../models')

module.exports = {
    createRole: async (req, res) => {
        try {
            const { name } = req.body
            const role = await Role.create({
                name: name
            })
            res.status(201).json({ role })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getAllRoles: async (req, res) => {
        try {
            const roles = await Role.findAll({
                attibutes: ['id', 'name'],
                include: {
                    model: User,
                    as: 'user'
                }
            })
            res.status(200).json({ roles })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getRole: async (req, res) => {
        try {
            const { id } = req.params
            const role = await Role.findOne({
                where: {
                    id: id
                },
                attibutes: ['id', 'name']
            })
            if (!role) return res.status(404).json({ msg: 'No se encontró el rol!' })
            res.status(200).json({ role })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    updateRole: async (req, res) => {
        try {
            const { id } = req.params
            const response = await Role.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!response[0]) return res.status(404).json({ msg: 'No se encontró el rol!' })
            res.status(205).json({ response })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    deleteRole: async (req, res) => {
        try {
            const { id } = req.params
            const response = await Role.destroy({
                where: {
                    id: id
                }
            })
            if (!response) return res.status(404).json({ msg: 'No se encontró el rol!' })
            res.status(205).json({ response })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    addUserRole: async (req, res) => {
        try {
            const { id, userId } = req.params
            const role = await Role.findOne({
                where: {
                    id: id
                },
                include: {
                    model: User,
                    as: 'user'
                }
            })
            if (!role) {
                res.status(404).json({ msg: 'No se encontró el rol!' })
            } else {
                const findUserId = role.user.find(u => u.id == userId)
                if (findUserId) {
                    return res.status(400).json({ msg: `El usuario con el id ${userId} ya cuenta con el rol ${role.name}` })
                }
                const user = await User.findOne({
                    where: {
                        id: userId
                    }
                }
                )
                if (!user) {
                    return res.status(404).json({ msg: 'No se encontró el usuario!' })
                }
                role.addUser(user)
                res.status(201).json({ msg: `Se agrego el rol con id ${id} al usuario usuario con id ${userId}` })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    removeUserRole: async (req, res) => {
        try {
            const { id, userId } = req.params
            const role = await Role.findOne({
                where: {
                    id: id
                },
                include: {
                    model: User,
                    as: 'user'
                }
            })
            if (!role) {
                return res.status(404).json({ msg: 'No se encontró el rol' })
            } else {
                const findUserId = role.user.find(u => u.id == userId)
                if (!findUserId) {
                    return res.status(400).json({ msg: `El usuario con el id ${userId} no cuenta con el rol que desea eliminar` })
                }
                const user = await User.findOne({
                    where: {
                        id: userId
                    }
                })
                if (!user) {
                    return res.status(404).json({ msg: 'No se encontró el usuario!' })
                }
                const users = role.user.filter(u => u.id !== user.id)
                role.setUser(users)
                res.status(205).json({ msg: `Se removio el rol ${role.name} al usuario con el id ${user.id}` })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}