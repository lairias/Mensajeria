const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smsdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(db=> console.log('conectado a la base de datos'))
.catch(erro=> console.log('error al conectar'))