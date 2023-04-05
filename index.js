import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"

// crear application
const app = express()

// habilitar pug
app.set("view engine", "pug")
app.set("views", "./views")

// routing
app.use('/auth', usuarioRoutes)


//definir puerto y arracar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor running puerto ${port}`);
})