require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const PORT = process.env.PORT || 19000

//----------------------------------------------------------------------------//
//-----------------------SYNC-DEL-SERVIDOR------------------------------------//
//-------------------------vvvvvvvvvvvvvv-------------------------------------//
//--------------------------{force:true}--------------------------------------//
//-------------------------^^^^^^^^^^^^^^-------------------------------------//
//-------------------PARA QUE RESETEE EL SERVIDOR-----------------------------//
//---------vvvvvvvvvvvvvvvvv--------------------------------------------------//

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log("_________________________________________________");
        console.log(`||--> el servidor esta corriendo en el ${PORT} <--||`);
        console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
    });
});