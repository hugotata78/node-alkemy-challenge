const { User } = require('../db/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

module.exports = {
    createUser: async (req,res)=>{
        try {
            const {username, email, password } = req.body
            const user = await User.create({
                username:username,
                email:email,
                password:bcrypt.hashSync(password,10)
            })

            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure:false,
                auth: {
                    user: 'hillary.harvey54@ethereal.email',
                    pass: 'e9Z6SKKgKEnAVsr4zk'
                }
            });

            const mailOption = {
                from: 'hillary.harvey54@ethereal.email',
                to: email,
                subject:`Bienvenido ${username}!`,
                text:'Tu cuenta ya se encuentra activa. Por cualquier duda o consulta envia un correo a hillary.harvey54@ethereal.email'
            }

            transporter.sendMail(mailOption, (error,info)=>{
                if(error){
                    res.json(error.message)
                }else{
                    console.log(info)
                }
            })

            res.json(user)
        } catch (error) {
            error.message
        }
    },
    login: async(req,res)=>{
        try {
            const { email, password } = req.body
            const user = await User.findOne({where:{ email: email}})
            if(!user) return res.json('Email o contraseña invalido!')
            const pass = bcrypt.compareSync(password,user.password)
            if(!pass) return res.json('Email o contraseña invalida')
            const token = jwt.sign({user:user}, 'topSecret',{expiresIn:'24h'})
            res.json(token)
        } catch (error) {
            error.message
        }
    }
}