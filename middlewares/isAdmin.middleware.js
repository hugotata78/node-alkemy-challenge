module.exports = {
    
    isAdmin: (req,res,next) =>{

        const user = req.user
        const isAdmin = user.role.find(r=> r.id === 1)
        if(isAdmin){
            next()
        }else{
            res.status(401).json({msg:'Acceso denegado'})
        }
    },
}