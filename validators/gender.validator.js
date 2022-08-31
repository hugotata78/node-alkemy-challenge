const { check } = require('express-validator')
const { Gender } = require('../models')
const { validateResult } = require('./errors')

const validateGender = [
    check('name')
        .custom(async (name) => {
            console.log(name)
            if (!name) {
                throw new Error('Por favor ingrese el nombre del género!');
            } else {
                const gender = await Gender.findOne({ where: { name: name } })
                if (gender) {
                    throw new Error('El nombre del género ya se encuentra en uso!');
                }
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    validateGender
}