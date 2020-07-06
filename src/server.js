//--------------------------------------------------Instancias de las dependencias------------
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan')
const app = express();
//-------------------------------------------------settings ----------------------------------
app.set('port', process.env.PORT || 3000);//configuramos el puerto del servidor
app.set('views', path.join(__dirname,'views'))//configuramos la direccion de las vistas
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    defaultLayout:'main',
    extname:'.hbs'
}));//configuramos el motor de plantilla de handlebars 
app.set('view engine','.hbs')//le indicamos que motor de plantilla utilizaremos
//--------------------------------------------------middewares--------------------------------
app.use(morgan('dev'))//visualizamos las peticiones del servidor en la terminal
app.use(express.json())//entender los datos como un json
app.use(express.urlencoded({extended:false}))//enterder los datos que vienen de un formulario
app.use(require('./router/index.routes'))//redireccionamos las rutas de peticion Http
app.use(express.static(path.join(__dirname, 'public')))//indicamos a express que utilise los cdn de style

//--------------------------------------------------Routers-----------------------------------


//--------------------------------------------------static files public-----------------------



module.exports = app; 