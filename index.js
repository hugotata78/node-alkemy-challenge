const app = require('./app')

app.listen(app.get('port'), _=>{
    console.log(`${app.get('name')} en escucha en puerto ${app.get('port')}`)
})