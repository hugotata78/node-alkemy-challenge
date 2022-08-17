const { check } = require('express-validator')
const { validateResult } = require('./errors')

const validateLogin = [

    check('email')
        .custom(async (email) => {
            if (email === '') {
                throw new Error('Por favor ingrese su email!')
            } else {
                let testMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                if (!testMail.test(email)) {
                    throw new Error('Por favor ingrese un email válido!')
                }
            }

        }),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese su contraseña!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }


]

module.exports = {
    validateLogin,
}