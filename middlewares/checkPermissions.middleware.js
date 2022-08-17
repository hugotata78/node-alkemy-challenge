module.exports = {
    checkPermissionsDelete: (req,res,next) =>{

        const { id, role } = req.user
        const isAdmin = role.find(r=> r.id === 1)
        if(id == req.params.id || isAdmin){
            next()
        }else{
            res.status(401).json({msg:'Acceso denegado'})
        }
    },
    checkPermissionsUpdate: (req,res,next) =>{

        const { id } = req.user
        if(id == req.params.id){
            next()
        }else{
            res.status(401).json({msg:'Acceso denegado'})
        }
    },
}