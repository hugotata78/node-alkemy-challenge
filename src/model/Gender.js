module.exports = (sequelize, type) => {
    return sequelize.define('genders', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: type.BLOB,
            allowNull: false,
            unique: true
        }
    },
        {
            timestamps: false
        })
}