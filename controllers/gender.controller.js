const { Gender, Movie } = require('../models')
const fs = require('fs')
const { Buffer } = require('buffer')

module.exports = {
    createGender: async (req, res) => {
        try {

            const { name } = req.body
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            const image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
            const gender = await Gender.create({
                name,
                image
            })
            res.status(201).json({ gender })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getGenders: async (req, res) => {
        try {
            const genders = await Gender.findAll({
                include: [{
                    model: Movie,
                    as: 'movies'
                }]
            })
            res.status(200).json({ genders })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    getGenderById: async (req, res) => {
        try {
            const { id } = req.params
            const gender = await Gender.findByPk(id,{
                include: [{
                    model: Movie,
                    as: 'movies'
                }]
            })
            res.status(200).json({ gender })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    genderAddMovie: async (req, res) => {
        try {
            const { id } = req.params
            const { movieId } = req.body
            const gender = await Gender.findByPk(id)
            const movie = await Movie.findByPk(movieId)
            if(!movie) return res.status(404).json('No se encontró la pelicula y/o serie!')
            gender.addMovie(movie)
            res.status(201).json({ msg: 'Se agrego la pelicula y/o serie correctamente!' })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    updateGender: async (req, res) => {
        const { id } = req.params
        try {
            const response = await Gender.update(req.body, {
                where: {
                    id: id
                }
            })
            if(!response[0]) return res.status(404).json({msg:'No se encontró el Genero'})
            res.status(205).json({response})
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    deleteGender: async (req, res) => {
        try {
            const { id } = req.params

            const response = await Gender.destroy({
                where: {
                    id: id
                }
            })
            if(!response) return res.status(404).json({msg:'No se encontró el Genero'})
            res.status(205).json({response})
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}