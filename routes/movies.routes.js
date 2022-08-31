const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'public/image' })
const { Auth, isAdmin } = require('../middlewares')
const {
    createMovie,
    getMovies,
    movieAddCharacter,
    movieAddGender,
    getMoviesById,
    getMoviesByTitle,
    getMoviesByGender,
    updateMovie,
    deleteMovie,
} = require('../controllers/movie.controller')
const { validateMovie } = require('../validators')

router.post('/', Auth,isAdmin, upload.single('image'), validateMovie, createMovie)
router.get('/', getMovies)
router.post('/add-character/:id', Auth, isAdmin, movieAddCharacter)
router.post('/add-gender/:id', Auth, isAdmin, movieAddGender)
router.get('/:id', getMoviesById)
router.get('/search/title', getMoviesByTitle)
router.get('/search/gender', getMoviesByGender)
router.put('/:id', Auth, isAdmin, updateMovie)
router.delete('/:id', Auth, isAdmin, deleteMovie)

module.exports = router