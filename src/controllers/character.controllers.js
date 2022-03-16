
const { Character, Movie } = require('../db/db')
const fs = require('fs')
const {Buffer} = require('buffer')


module.exports = {
    createCharacter: async (req, res) => {
        try {
            const { name, history, weight, age } = req.body
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            const image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
            
            const character = await Character.create({
                name,
                image,
                history,
                weight,
                age
            })
            res.json(character)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCharacters: async (req,res)=>{
        try {
            const characters = await Character.findAll({
                attributes:['name','image']
            })
            res.json(characters)
        } catch (error) {
            res.json(error.message)
        }
    },

    characterAddMovie: async (req,res)=>{
        try {
            const { id } = req.params
            const { movieId } = req.body
            const character = await Character.findByPk(id)
            const movie = await Movie.findByPk(movieId)

            character.addMovie(movie)
            res.json('Se agrego la pelicula y/o serie correctamente!')
        } catch (error) {
            res.json(error.message)
        }
    },
    getCharacterByName: async(req,res)=>{
        try {
            const { name } = req.query
            const character = await Character.findOne({
                where:{
                    name:name
                },
                include:{
                    model:Movie
                }
            })
            res.json(!character ? 'No se encotro el personaje': character)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCharacterByAge: async(req,res)=>{
        try {
            const { age } = req.query
            const character = await Character.findAll({
                where:{
                    age:age
                },
                include:[{
                    model:Movie
                }]
            })
            res.json(!character ? 'No se encotro el personaje': character)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCharactersByMovieId: async(req,res)=>{
        try {
            const {movieId } = req.query
            const characters = await Character.findAll({
                include:[
                    {
                        model:Movie,
                        where:{
                            id:movieId
                        }
                    },
                ]
            })
            res.json(characters)
        } catch (error) {
            res.json(error.message)
        }
    },
    updateCharacter: async(req,res)=>{
        const { id } = req.params
        try {

            const count = await Character.update(req.body,{
                where:{
                    id:id
                }
            })
            res.json(count[0] !== 0 ? 'Se modificaron los datos del personaje!' : 'No se pudo modificar los datos')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteCharacter: async (req,res)=>{
        try {
            const { id } = req.params
            const character = await Character.destroy({
                where:{
                    id:id
                }
            })
            res.json(character == 0 ? 'No se pudo eliminar el personaje!':'Personaje eliminado!')
        } catch (error) {
            res.json(error.message)
        }
    }
}