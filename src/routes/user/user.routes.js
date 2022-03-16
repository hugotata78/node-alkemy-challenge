const { Router } = require('express')
const router = Router()
const { createUser, login } = require('../../controllers/user.controllers')

router.post('/auth/register',createUser)
router.post('/auth/login',login)

module.exports = router