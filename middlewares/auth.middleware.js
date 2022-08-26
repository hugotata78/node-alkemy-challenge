const { User, Role } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Auth = async (req, res, next) => {
    try {
        const strToken = req.headers.authorization

        if (!strToken) return res.status(403).json({ msg: 'Debes iniciar sesión!' })
        const token = strToken.split(' ')[1]
        const key = jwt.verify(token, process.env.PRIVATE_KEY)
        const user = await User.findOne({
            where: {
                id: key.user.id
            },
            include: {
                model: Role,
                as: 'role'
            }
        })
        if (!user) return res.status(401).json({ msg: 'Acceso denegado!' })
        req.user = user
        next()

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { Auth }