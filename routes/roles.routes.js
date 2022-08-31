const { Router } = require('express')
const { createRole,getAllRoles,getRole,updateRole,deleteRole, addUserRole,removeUserRole } = require('../controllers/role.controller')
const { Auth,isAdmin } = require('../middlewares')
const { validateRole} = require('../validators')

const router = Router()

router.use(Auth,isAdmin)
router.post('/', validateRole, createRole)
router.get('/',getAllRoles)
router.get('/:id',getRole)
router.put('/:id',updateRole)
router.delete('/:id',deleteRole)
router.post('/:id/:userId',addUserRole)
router.put('/:id/:userId',removeUserRole)

module.exports = router
