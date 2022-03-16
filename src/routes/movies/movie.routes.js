const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer ({ dest: 'public/image'})
const Auth = require('../../auth/Auth')
const { createMovie, getMovies, updateMovie, deleteMovie, getMoviesByTitle, getMoviesByGender, orderMovie, movieAddCharacter, movieAddGender } = require('../../controllers/movie.controllers')

router.post('/create', Auth, upload.single('image'),createMovie)
router.get('/',getMovies)
router.post('/add-character/:id',Auth,movieAddCharacter)
router.post('/add-gender/:id',Auth,movieAddGender)
router.get('/title/search',getMoviesByTitle)
router.get('/gender/search',getMoviesByGender)
router.get('/',orderMovie)
router.put('/edit/:id', Auth, updateMovie)
router.delete('/delete/:id', Auth, deleteMovie)

module.exports = router