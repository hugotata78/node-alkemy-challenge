const { Router } = require('express')
const router = Router()
const routerCharacter = require('./character/character.routes')
const routerGender = require('./gender/gender.routes')
const routerMovie = require('./movies/movie.routes')
const routerUser = require('./user/user.routes')

router.use('/characters', routerCharacter)
router.use('/genders',routerGender)
router.use('/movies', routerMovie)
router.use('/users',routerUser)

module.exports = router
