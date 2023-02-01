
const cors = require('cors');
const express = require('express');
const app = express();


//Requerir archivo de configuracion
require('./config/mongoose.config');



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//CORS
app.use(cors({
    origin:'http://localhost:3000'
}));


//Importar las rutas del servidor back-end
const Rutas = require('./routes/products.routes');
Rutas(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000");
});