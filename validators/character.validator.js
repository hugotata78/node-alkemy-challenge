const { check } = require('express-validator')
const { Character } = require('../models')
const { validateResult } = require('./errors')

const validateCharacter = [
    check('name')
        .custom(async (name) => {
            console.log(name)
            if (!name) {
                throw new Error('Por favor ingrese el nombre del Personaje!');
            } else {
                const character = await Character.findOne({ where: { name: name } })
                console.log(character)
                if (character) {
                    throw new Error('El nombre del personaje ya se encuentra en uso!');
                }
            }
        }),
    check('age')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la edad del Personaje!')
        .isInt()
        .withMessage('El campo edad debe contener un valor numérico!'),
    check('weight')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese el peso del Personaje!')
        .isFloat()
        .withMessage('El campo peso debe contener un valor numérico!'), 
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