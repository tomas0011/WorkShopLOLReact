require("dotenv").config();
const server = require('./src/app')

// se utiliza process.env para acceder al puerto activo
const PORT = process.env.PORT || 3000

server.listen(PORT, ()=>{
    console.log(` __________________________________`)
    console.log(`| Server corriendo en puerto ${PORT} |`)
    console.log(` VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`)
})