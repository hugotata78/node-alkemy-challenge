const { validateLogin } = require('./login.validator')
const { validateRegister } = require('./register.validator')
const { validateCharacter } = require('./character.validator')

module.exports = {
    validateLogin,
    validateRegister,
    validateCharacter
}