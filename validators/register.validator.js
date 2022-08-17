const { check } = require('express-validator')
const { User } = require('../models')
const { validateResult } = require('./errors')

const validateRegister = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese su nombre de usuario!'),
    check('email')
        .custom(async (email) => {
            if (email === '') {
                throw new Error('Por favor ingrese su email!')
            } else {
                let testMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                if (!testMail.test(email)) {
                    throw new Error('Por favor ingrese un email válido!')
                } else {
                    const user = await User.findOne({ where: { email: email } })
                    if (user) {
                        throw new Error('El email ingresado ya se halla registrado!')
                    }
                }
            }

        }),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese una contraseña!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    validateRegister
}
