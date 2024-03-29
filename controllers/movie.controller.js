const { Movie, Gender, Character } = require('../models')
const { verifyReqFile } = require('../helpers/verifyReqFile')
module.exports = {
    createMovie: async (req, res) => {
        try {
            const { title, creationDate, qualification } = req.body
            const image = verifyReqFile(req)
            if(!image) return res.status(500).json({error:'Debe seleccionar una imagen para subir al servidor!'})
            const movie = await Movie.create({
                title,
                image,
                creationDate,
                qualification
            })
            res.status(201).json({ movie })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getMovies: async (req, res) => {
        try {
            const { item, order } = req.query
            const movies = await Movie.findAll({
                attributes: ['title', 'image', 'creationDate'],
                order: [
                    [item || 'title', order || 'ASC']
                ]
            })
            res.status(200).json({ movies })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    movieAddCharacter: async (req, res) => {
        try {
            const { id } = req.params
            const { characterId } = req.body
            const movie = await Movie.findByPk(id, {
                include: {
                    model: Character,
                    as: 'characters'
                }
            })
            if (!movie) {
                res.status(404).json({ msg: 'No se encontró la película y/o serie!' })
            } else {
                const character = await Character.findByPk(characterId)
                if (!character) {
                    return res.status(404).json({ msg: 'No se encontró el Personaje!' })
                }
                const findCharacterId = movie.characters.find(c => c.id == character.id)
                if (findCharacterId) {
                    return res.status(400).json({ msg: `La película y/o serie ${movie.title} ya cuenta con el personaje con el id ${character.id}!` })
                }
                movie.addCharacter(character)
                res.status(201).json({ msg: 'Se agrego el personaje correctamente!' })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    movieAddGender: async (req, res) => {
        try {
            const { id } = req.params
            const { genderId } = req.body
            const movie = await Movie.findByPk(id, {
                include: {
                    model: Gender,
                    as: 'genders'
                }
            })
            if (!movie) {
                res.status(404).json({ msg: 'No se encontró la película y/o serie!' })
            } else {
                const gender = await Gender.findByPk(genderId)
                if (!gender) {
                    return res.status(404).json({ msg: 'No se encontró el Género!' })
                }
                const findGenderId = movie.genders.find(g => g.id == gender.id)
                if (findGenderId) {
                    return res.status(400).json({ msg: `La pelicula y/o serie ${movie.title} ya cuenta con el género con el id ${gender.id}!` })
                }
                movie.addGender(gender)
                res.status(201).json({ msg: 'Se agrego genero correctamente!' })
            }

        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getMoviesById: async (req, res) => {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                where: {
                    id: id
                },
                include: [
                    {
                        model: Gender,
                        as: 'genders',
                        attributes: ['name', 'image']
                    },
                    {
                        model: Character,
                        as: 'characters',
                        attributes: ['name', 'image']
                    }
                ]
            })
            if (!movie) return res.status(404).json({ msg: 'Pelicula no encontrada!' })
            res.status(200).json({ movie })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getMoviesByTitle: async (req, res) => {
        try {
            const { title } = req.query
            const movie = await Movie.findOne({
                where: {
                    title: title
                },
                include: [
                    {
                        model: Gender,
                        as: 'genders',
                        attributes: ['name', 'image']
                    },
                    {
                        model: Character,
                        as: 'characters',
                        attributes: ['name', 'image']
                    }
                ]
            })
            if (!movie) return res.status(404).json({ msg: 'Pelicula no encontrada!' })
            res.status(200).json({ movie })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getMoviesByGender: async (req, res) => {
        try {
            const { genderId } = req.query
            const movies = await Movie.findAll({
                include: [
                    {
                        model: Gender,
                        as: 'genders',
                        attributes: ['name', 'image'],
                        where: {
                            id: genderId
                        }
                    },
                    {
                        model: Character,
                        as: 'characters',
                        attributes: ['name', 'image']
                    }
                ]
            })
            res.status(200).json({ movies })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    updateMovie: async (req, res) => {
        try {
            const { id } = req.params

            const response = await Movie.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!response[0]) return res.status(404).json({ msg: 'No se encontró la Película!' })
            res.status(205).json(response[0])
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const { id } = req.params
            const response = await Movie.destroy({
                where: {
                    id: id
                }
            })

            if (!response) return res.status(404).json({ msg: 'No se encontró la Pelicula!' })
            res.status(205).json(response)
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}