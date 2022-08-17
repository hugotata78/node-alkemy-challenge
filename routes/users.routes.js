const { Router } = require('express')
const { getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { Auth, checkPermissionsDelete, checkPermissionsUpdate, idExists}= require('../middlewares')


const router = Router()

router.get('/', getAllUsers)
router.get('/:id', Auth, getUser)
router.put('/:id',Auth, checkPermissionsUpdate, updateUser)
router.delete('/:id', Auth, checkPermissionsDelete, deleteUser)

module.exports = router