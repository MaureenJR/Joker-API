const express = require("express");
const app = express();

//Iniciar DB
require("./server/config/mongoose.config")

//Para usar json y obtener datos de la URL
app.use(express.json(), express.urlencoded({ extended: true }));

//Importar Rutas
const myRoutes = require("./server/routes/jokes.routes");
myRoutes(app);

//Ejecutar servidor
app.listen(8000, () => {
    console.log("The server is ready and working!")
})