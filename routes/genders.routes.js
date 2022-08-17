const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer ( { dest: 'public/image'})
const { Auth, isAdmin } = require('../middlewares')
const { createGender, getGenders, getGenderById, updateGender, deleteGender, genderAddMovie } = require('../controllers/gender.controller')

router.post('/', Auth, isAdmin, upload.single('image'),createGender)
router.get('/',getGenders)
router.get('/:id',getGenderById)
router.post('/:id', Auth, isAdmin, genderAddMovie)
router.put('/:id', Auth, isAdmin, updateGender)
router.delete('/:id', Auth, isAdmin, deleteGender)

module.exports = router