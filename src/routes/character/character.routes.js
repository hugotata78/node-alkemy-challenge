const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'public/image'})
const Auth = require('../../auth/Auth')
const { 
    createCharacter,
     getCharacters,
     getCharacterByName,
     getCharacterByAge,
     updateCharacter, 
     deleteCharacter, 
     getCharactersByMovieId,
     characterAddMovie} = require('../../controllers/character.controllers')

router.post('/create', Auth, upload.single('image'), createCharacter)
router.get('/',getCharacters)
router.post('/add-movie/:id', Auth, characterAddMovie)
router.get('/name/search',getCharacterByName)
router.get('/age/search',getCharacterByAge)
router.get('/movieId/search',getCharactersByMovieId)
router.put('/edit/:id', Auth,updateCharacter)
router.delete('/delete/:id', Auth,deleteCharacter)

module.exports = router