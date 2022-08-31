const { check } = require('express-validator')
const { Role } = require('../models')
const { validateResult } = require('./errors')

const validateRole = [
    check('name')
        .custom(async (name) => {
            console.log(name)
            if (!name) {
                throw new Error('Por favor ingrese el nombre del rol!');
            } else {
                const role = await Role.findOne({ where: { name: name } })
                if (role) {
                    throw new Error('El nombre del role ya se encuentra en uso!');
                }
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    validateRole
}