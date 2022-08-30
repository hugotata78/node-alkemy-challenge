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
        .custom(age => {
            if (!age) {
                throw new Error('Por favor ingrese la edad del Personaje!');
            } else {
                if (typeof parseInt(age) !== 'number') {
                    throw new Error('La edad del Personaje debe ser un valor numérico!');
                }
            }
        }),
    check('weight')
        .custom(weight => {
            if (!weight) {
                throw new Error('Por favor ingrese la edad del Personaje!');
            } else {
                if (typeof parseFloat(weight) !== 'number') {
                    throw new Error('El peso del Personaje debe ser un valor numérico!');
                }
            }
        }),
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