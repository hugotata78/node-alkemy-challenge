const { validateLogin } = require('./login.validator')
const { validateRegister } = require('./register.validator')
const { validateCharacter } = require('./character.validator')
const { validateRole } = require('./role.validator')
const { validateGender } = require('./gender.validator')

module.exports = {
    validateLogin,
    validateRegister,
    validateCharacter,
    validateRole,
    validateGender
}