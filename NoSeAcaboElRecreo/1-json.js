const fs = require("fs");

// const datos = {
//     "nombre": "Gas",
//     "planeta": "Sayago",
//     "edad": "522"
// };

// const datosString = JSON.stringify(datos);
// fs.writeFileSync("1-json.json", datosString);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.nombre);

data.nombre = "GASODUCTO";

grabarArchivo(data, "1-json.json");

function grabarArchivo(datos, nombre) {
    const datosString = JSON.stringify(datos);
    fs.writeFileSync(nombre, datosString);
}