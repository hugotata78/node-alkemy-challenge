const { Character, Movie } = require('../models')
const { verifyReqFile } = require('../helpers/verifyReqFile')


module.exports = {
    createCharacter: async (req, res) => {
        try {
            const { name, age, weight, history } = req.body
            const image = verifyReqFile(req)
            if(!image) return res.status(500).json({error:'Debe seleccionar una imagen para subir al servidor!'})
            const character = await Character.create({
                name,
                age,
                image,
                weight,
                history,
            })
            res.status(201).json({ character })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getCharacters: async (req, res) => {
        try {
            const characters = await Character.findAll({
                attributes: ['name', 'image']
            })
            res.status(200).json({ characters })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    getCharacterById: async (req, res) => {
        try {
            const { id } = req.params
            const character = await Character.findOne({
                where: {
                    id: id
                },
                include: [{
                    model: Movie,
                    as: 'movies',
                    attributes: ['title', 'image'],
                }]
            })

            if (!character) return res.status(404).json({ msg: 'No se encotro el personaje!' })
            res.status(200).json({ character })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    characterAddMovie: async (req, res) => {
        try {
            const { id } = req.params
            const { movieId } = req.body
            const character = await Character.findByPk(id, {
                include: {
                    model: Movie,
                    as: 'movies'
                }
            })
            if (!character) {
                res.status(404).json({ msg: 'No se encotro el personaje!' })
            } else {
                const movie = await Movie.findByPk(movieId)
                if (!movie) {
                    return res.status(404).json({ msg: 'No se encontró la pelicula y/o serie!' })
                }
                const findMovieId = character.movies.find(m => m.id == movie.id)
                if (findMovieId) {
                    return res.status(400).json({ msg: `El personaje ${character.name} ya cuenta con la película y/o serie con el id ${movie.id}` })
                }
                character.addMovie(movie)
                res.status(201).json({ msg: 'Se agrego la pelicula y/o serie correctamente!' })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    getCharacterByName: async (req, res) => {
        try {
            const { name } = req.query
            const character = await Character.findOne({
                where: {
                    name: name
                },
                include: [{
                    model: Movie,
                    as: 'movies',
                    attributes: ['title', 'image'],
                }]
            })

            if (!character) return res.status(404).json({ msg: 'No se encotro el personaje!' })
            res.status(200).json({ character })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getCharacterByAge: async (req, res) => {
        try {
            const { age } = req.query
            const character = await Character.findAll({
                where: {
                    age: age
                },
                include: [{
                    model: Movie,
                    as: 'movies',
                    attributes: ['title', 'image'],
                }]
            })
            if (!character) return res.status(404).json({ msg: 'No se encotro el personaje!' })
            res.status(200).json({ character })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getCharactersByMovieId: async (req, res) => {
        try {
            const { movieId } = req.query
            const characters = await Character.findAll({
                include: [
                    {
                        model: Movie,
                        as: 'movies',
                        attributes: ['title', 'image'],
                        where: {
                            id: movieId
                        }
                    },
                ]
            })
            res.status(200).json({ characters })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    updateCharacter: async (req, res) => {
        const { id } = req.params
        try {

            const count = await Character.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!count[0]) return res.status(404).json({ msg: 'No se encotro el personaje' })
            res.status(205).json({ count })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    deleteCharacter: async (req, res) => {
        try {
            const { id } = req.params
            const character = await Character.destroy({
                where: {
                    id: id
                }
            })
            if (!character) return res.status(404).json({ msg: 'No se encotro el personaje' })
            res.status(205).json({ character })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}