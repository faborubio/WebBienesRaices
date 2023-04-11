import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from "./config/db.js"

// crear la app
const app = express()

// conexcion a la base de datos

try {
    await db.authenticate();
    console.log("conexion a la base de datos")
} catch (error) {
    console.log(error)
}

//habilitar Pug

app.set('view engine', 'pug')
app.set('views', './views')

// carpeta publica
app.use( express.static('public'))

// Routing
app.use('/auth', usuarioRoutes)



// definir puerto y arrancar servidor
const port = 3000;

app.listen(port, () =>{
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})