'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.Character, { as:'characters', through: 'character_movie', foreignKey:'movie_id'  })
      Movie.belongsToMany(models.Gender, { as:'genders', through: 'gender_movie', foreignKey:'movie_id' })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    qualification: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};