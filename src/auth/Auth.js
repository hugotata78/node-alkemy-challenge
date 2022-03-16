const { User } = require('../db/db')
const jwt = require('jsonwebtoken')

const Auth = async (req, res, next) => {
    try {
        const strToken = req.headers.authorization

        if (!strToken) return res.json('Debes iniciar sesión!')
        const token = strToken.split(' ')[1]
        const key = jwt.verify(token, 'topSecret')
        const user = User.findOne({ where: { id: key.user.ide } })
        if(!user) return res.json('Acceso denegado!')
        next()

    } catch (error) {
        res.json(error.message)
    }
}

module.exports = Auth