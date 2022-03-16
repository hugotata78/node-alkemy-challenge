const Sequelize = require('sequelize')
const modelUser = require('../model/User')
const modelCharacter = require('../model/Character')
const modelGender = require('../model/Gender')
const modelMovie = require('../model/Movie')

const sequelize = new Sequelize('disney_db','root','',{
    host:'localhost',
    dialect:'mysql'
})

const User = modelUser(sequelize,Sequelize)
const Character = modelCharacter(sequelize,Sequelize)
const Gender = modelGender(sequelize,Sequelize)
const Movie = modelMovie(sequelize,Sequelize)

Character.belongsToMany(Movie, { through: 'characterMovies'})
Movie.belongsToMany(Character, { through: 'characterMovies'})
Movie.belongsToMany(Gender, { through: 'genderMovies'})
Gender.belongsToMany(Movie, { through: 'genderMovies'})

sequelize.sync({ force: false })
.then(_=>{
    console.log('Sincronización con base de datos exitosa!')
})

module.exports = {
    User,
    Character,
    Gender,
    Movie
}