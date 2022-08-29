const fs = require('fs')
const { Buffer } = require('buffer')

const verifyReqFile = (req) => {
    let image
    if (req.file || req.body.image ) {
        if(req.file){
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            return image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
        }else {
            return image = req.body.image
        }
    }
    else {
       return null
    }
}

module.exports = { verifyReqFile }