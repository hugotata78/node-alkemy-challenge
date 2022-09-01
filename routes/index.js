const { Router } = require('express')
const swaggerUi = require('swagger-ui-express');
const swagger = require('../docs/swagger')
const authRoutes = require('./auth.routes')
const userRoutes = require('./users.routes')
const characterRoutes = require('./characters.routes')
const movieRoutes = require('./movies.routes')
const genderRoutes = require('./genders.routes')
const roleRoutes = require('./roles.routes')

const router = Router()

router.get('/', (req,res)=>{
    res.render('index')
})
router.use('/auth',authRoutes)
router.use('/users',userRoutes)
router.use('/characters', characterRoutes)
router.use('/movies',movieRoutes)
router.use('/genders',genderRoutes)
router.use('/roles', roleRoutes)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

module.exports = router