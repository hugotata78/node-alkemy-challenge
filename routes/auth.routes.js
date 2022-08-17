const { Router } = require('express')
const { createUser, login } = require('../controllers/user.controller')
const { validateLogin, validateRegister } = require('../validators')

const router = Router()

router.post('/register', validateRegister, createUser)
router.post('/login',validateLogin, login)

module.exports = router