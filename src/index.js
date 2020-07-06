require('dotenv').config();//leeremos las variables de entorno
const app = require('./server');
require('./database')

app.listen(app.get('port'), ()=>{
    console.log( `server en port ${app.get('port')}`)
})

