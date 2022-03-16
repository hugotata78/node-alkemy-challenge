const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer ( { dest: 'public/image'})
const Auth = require('../../auth/Auth')
const { createGender, getGenders, updateGender, deleteGender, genderAddMovie } = require('../../controllers/gender.controllers')

router.post('/create', Auth, upload.single('image'),createGender)
router.get('/',getGenders)
router.post('/add-movie/:id', Auth, genderAddMovie)
router.put('/edit/:id', Auth, updateGender)
router.delete('/delete/:id',deleteGender)

module.exports = router