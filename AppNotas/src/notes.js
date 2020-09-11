const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return 'Your notes...'
}

const agregarNota = (titulo, contenido) => {
    let notas = cargarNotas();
    
    if(!notaDuplicada(titulo, notas)){
        notas.push({
            titulo: titulo,
            contenido: contenido
        });
    
        guardarNotas(notas);

        console.log(chalk.green.inverse("NOTA AGREGADA CON ÉXITO"));
    } else {
        console.log(chalk.red.inverse("NOTA EXISTENTE :O"));
    }
}

const cargarNotas = () => {
    let datos = null;
    try {
        let dataBuffer = fs.readFileSync("notas.json");
        datos = JSON.parse(dataBuffer.toString());
    } catch(err) {
        datos = [];
    }

    return datos;
}

const guardarNotas = (notas) => {
    let notasJSON = JSON.stringify(notas);
    fs.writeFileSync("notas.json", notasJSON);
}

const eliminarNota = (titulo) => {
    let notas = cargarNotas();

    let notasFiltradas = notas.filter(nota => nota.titulo.toUpperCase() != titulo.toUpperCase());

    if(notasFiltradas.length != notas.length) { //Si la cantidad de elementos difiere, es que se eliminó alguno
        guardarNotas(notasFiltradas);

        console.log(chalk.green.inverse("Se ha eliminado la nota " + titulo));
        console.log();
    } else {
        console.log(chalk.red.inverse("Ninguna nota eliminada. El título " + titulo + " no existe"));
        console.log();
    }
}

//Funciones Auxiliares

const notaDuplicada = (titulo, notas) => {
    let filtroNotas = notas.filter(nota => nota.titulo.toUpperCase() == titulo.toUpperCase());

    return filtroNotas.length > 0;
}

module.exports = {
    getNotes: getNotes,
    agregarNota: agregarNota,
    eliminarNota: eliminarNota,
    cargarNotas: cargarNotas
}