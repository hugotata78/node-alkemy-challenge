module.exports = (sequelize, type) => {
    return sequelize.define('character', {
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
        },
        history: {
            type: type.STRING,
            allowNull: false,
        },
        weight: {
            type: type.INTEGER,
            allowNull: false
        },
        age: {
            type: type.INTEGER,
            allowNull: false
        }
    },
        {
            timestamps: false
        }
    )
}