const { Auth } = require('./auth.middleware')
const {
    checkPermissionsDelete,
    checkPermissionsUpdate
} = require('./checkPermissions.middleware')
const { isAdmin } = require('./isAdmin.middleware')
const { idExists } = require('./idExists.middleware')

module.exports = {
    Auth,
    checkPermissionsDelete,
    checkPermissionsUpdate,
    isAdmin,
    idExists
}