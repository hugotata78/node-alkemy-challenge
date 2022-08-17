const { check } = require('express-validator')
const { Character } = require('../models')
const { validateResult } = require('./errors')

const validateCharacter = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese nombre del personaje!'),
    check('age')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la edad del personaje!'),
    check('image')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la imagen del personaje!'),
    check('weight')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese el peso del personaje!'),
    check('history')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la historia del personaje!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    validateCharacter
}