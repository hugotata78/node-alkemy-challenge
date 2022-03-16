const { Movie, Gender, Character } = require('../db/db')
const fs = require('fs')
const { Buffer } = require('buffer')
module.exports = {
    createMovie: async (req, res) => {
        try {
            const { title, creationDate, qualification } = req.body
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            const image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])

            const movie = await Movie.create({
                title,
                image,
                creationDate,
                qualification
            })
            res.json(movie)
        } catch (error) {
            res.json(error.message)
        }
    },
    getMovies: async (req, res) => {
        try {
            const movies = await Movie.findAll({
                attributes:['title','image','creationDate']
            })
            res.json(movies)
        } catch (error) {
            res.json(error.message)
        }
    },
    movieAddCharacter: async (req,res)=>{
        try {
            const { id } = req.params
            const { characterId } = req.body
            const movie = await Movie.findByPk(id)
            const character = await Character.findByPk(characterId)
            movie.addCharacter(character)
            res.json('Se agrego el personaje correctamente!')
        } catch (error) {
            res.json(error.message)
        }
    },
    movieAddGender: async (req,res)=>{
        try {
            const { id } = req.params
            const { genderId } = req.body
            const movie = await Movie.findByPk(id)
            const gender = await Gender.findByPk(genderId)
            movie.addGender(gender)
            res.json('Se agrego genero correctamente!')
        } catch (error) {
            res.json(error.message)
        }
    },
    getMoviesByTitle: async(req,res)=>{
        try {
            const { title } = req.query
            const movie = await Movie.findOne({
                where:{
                    title:title
                },
                include:[
                    {
                        model:Gender
                    },
                    {
                        model:Character
                    }
                ]
            })
            res.json(movie)
        } catch (error) {
            res.json(error.message)
        }
    },
    getMoviesByGender: async(req,res)=>{
        try {
            const { genderId } = req.query
            const movie = await Movie.findAll({
                include:[
                    {
                        model:Gender,
                        where:{
                            id:genderId
                        }
                    },
                    {
                        model:Character
                    }
                ]
            })
            res.json(movie)
        } catch (error) {
            res.json(error.message)
        }
    },
    orderMovie: async(req,res)=>{
        try {
            const { order } = req.query
            const movies = Movie.findAll({
                Order:[
                    [order]
                ]
            })
            res.json(movies)
        } catch (error) {
            res.json(error.message)
        }
    },
    updateMovie: async (req, res) => {
        try {
            const { id } = req.params
            
            const count = await Movie.update(req.body, {
                where: {
                    id: id
                }
            })

            res.json(count[0] !== 0 ? 'Se modificaron los datos correctamente' : 'No se pudo modificar los datos')
        } catch (error) {
            res.json(error.json)
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const { id } = req.params
            const count = await Movie.destroy({
                where: {
                    id: id
                }
            })

            res.json(count != 0 ? 'Se eliminaron los datos correctamente' : 'No se pudo eliminar los datos')
        } catch (error) {
            res.json(error.json)
        }
    }
}