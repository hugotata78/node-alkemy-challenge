const { Gender, Movie } = require('../db/db')
const fs = require('fs')
const {Buffer} = require('buffer')

module.exports = {
    createGender: async (req,res)=>{
        try {
            
            const { name } = req.body
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            const image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
            const gender = await Gender.create({
                name,
                image
            })
            res.json(gender)
        } catch (error) {
            res.json(error.message)
        }
    },
    getGenders: async(req,res)=>{
        try {
            const genders = await Gender.findAll({
                include:[{
                    model:Movie
                }]
            })
            res.json(genders)
        } catch (error) {
            res.json(error.message)
        }
    },
    genderAddMovie: async (req,res)=>{
        try {
            const { id } = req.params
            const { movieId } = req.body
            const gender = await Gender.findByPk(id)
            const movie = await Movie.findByPk(movieId)
            gender.addMovie(movie)
            res.json('Se agrego la pelicula y/o serie correctamente!')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateGender: async (req,res)=>{
        const { id } = req.params
        try {

            const count = await Gender.update(req.body,{
                where:{
                    id:id
                }
            })
            res.json(count[0] !== 0 ? 'Se modificaron los datos correctamente!' : 'No se pudo modificar los datos')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteGender: async (req,res)=>{
        try {
            const { id } = req.params

            const count = Gender.destroy({
                where:{
                    id:id
                }
            })
            res.json(count != 0 ? 'Se eliminaron los datos correctamente!': 'No se pudo modificar los datos!')
        } catch (error) {
            res.json(error.message)
        }
    }
}