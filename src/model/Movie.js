module.exports = (sequelize, type) => {
    return sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: type.BLOB,
            allowNull: false,
            unique: true
        },
        creationDate: {
            type: type.DATE,
            allowNull: false,
        },
        qualification: {
            type: type.INTEGER,
            allowNull: false
        },
    },
        {
            timestamps: false
        }
    )
}