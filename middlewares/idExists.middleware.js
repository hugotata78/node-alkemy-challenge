const models = require('../models')

const idExists = (req, res, next) => {
    const { id } = req.params
    const url = req.originalUrl.split('/')[2]
    const model = getModel(id, url)
    if (!model) return res.status(404).json({ msg: 'Id not found!' })
    req.model = model
    next()
}

const getModel = async (id, url) => {
    let model
    switch (url) {
        case 'characters':
            model = await model.Character.findByPk(id)
            break;
        case 'genders':
            model = await model.Gender.findByPk(id)
            break;
        case 'movies':
            model = await model.Movie.findByPk(id)
            break;
        case 'roles':
            model = await model.Role.findByPk(id)
            break;
        case 'users':
            model = await model.User.findByPk(id)
            break;
        default:
            model = null
            break;
    }
    return model
}

module.exports = { idExists }