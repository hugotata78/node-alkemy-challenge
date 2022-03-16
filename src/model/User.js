module.exports = (sequelize, type)=>{
    return sequelize.define('users', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:type.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:type.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:type.STRING,
            allowNull:false,
        }
    })
}