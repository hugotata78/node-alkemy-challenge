'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsToMany(models.Movie, { as:'movies', through: 'character_movie', foreignKey:'character_id' })
    }
  }
  Character.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    image: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    history: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};