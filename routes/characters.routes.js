const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'public/image'})
const {Auth,isAdmin} = require('../middlewares')
const { 
    createCharacter,
     getCharacters,
     getCharacterById,
     getCharacterByName,
     getCharacterByAge,
     updateCharacter, 
     deleteCharacter, 
     getCharactersByMovieId,
     characterAddMovie} = require('../controllers/character.controller')
const { validateCharacter } = require('../validators')

router.post('/', Auth, isAdmin, upload.single('image'), createCharacter)
router.get('/',getCharacters)
router.get('/:id', getCharacterById)
router.post('/:id', Auth, isAdmin, characterAddMovie)
router.get('/search/name',getCharacterByName)
router.get('/search/age',getCharacterByAge)
router.get('/search/movieId',getCharactersByMovieId)
router.put('/:id', Auth, isAdmin,updateCharacter)
router.delete('/:id', Auth, isAdmin,deleteCharacter)

module.exports = router