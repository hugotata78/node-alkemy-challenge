const { check } = require('express-validator')
const { Movie } = require('../models')
const { validateResult } = require('./errors')

const validateMovie = [
    check('title')
        .custom(async (title) => {
            if (!title) {
                throw new Error('Por favor ingrese el nombre de la Película y/o Serie!');
            } else {
                const movie = await Movie.findOne({ where: { title: title } })
                if (movie) {
                    throw new Error('El nombre de la Película y/o Serie ya se encuentra en uso!');
                }
            }
        }),
    check('creationDate')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la fecha de creaciónde la Película y/o Serie!')
        .isDate()
        .withMessage('El campo fecha debe contener un dato en formato fecha (yyyy-mm-dd)!'),
    check('qualification')
        .not()
        .isEmpty()
        .withMessage('Por favor ingrese la calificación de la Película y/o Serie!')
        .isFloat()
        .withMessage('El campo calificación debe contener un valor numérico!'), 
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    validateMovie
}