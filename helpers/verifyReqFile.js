const fs = require('fs')
const { Buffer } = require('buffer')

const verifyReqFile = (req) => {
    let image
    if (req.file) {
        fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
        image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
    }
    else {
        image = req.body.image
    }
    return image
}

module.exports = { verifyReqFile }