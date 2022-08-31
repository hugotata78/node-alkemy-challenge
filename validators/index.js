const { validateLogin } = require('./login.validator')
const { validateRegister } = require('./register.validator')
const { validateCharacter } = require('./character.validator')
const { validateRole } = require('./role.validator')

module.exports = {
    validateLogin,
    validateRegister,
    validateCharacter,
    validateRole
}