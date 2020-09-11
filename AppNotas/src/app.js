const chalk = require('chalk');
const yargs = require("yargs");
const notas = require("./notes.js");

//Personalizar la versión de YARGS
//Importante que sea la primera línea que se ejecuta relacionada con YARGS
yargs.version('1.1.0');

// Comando "add"
yargs.command({
    command: "add",
    describe: "Agregar una nueva nota",
    builder: {
        titulo: {
            describe: "Título de la nueva alta nota",
            demandOption: true,
            type: "string"
        },
        contenido: {
            describe: "Contenido de la nueva alta nota",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notas.agregarNota(argv.titulo, argv.contenido);
    }
});

// Comando "remove"
yargs.command({
    command: "remove",
    describe: "Eliminar una nota",
    builder: {
        titulo: {
            describe: "Título de la alta nota a eliminar",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notas.eliminarNota(argv.titulo);
    }
});

//Comando "list"
yargs.command({
    command: "list",
    describe: "Listar las notas ingresadas",
    handler() {
        let listaNotas = notas.cargarNotas();

        console.log(chalk.green("Tus NOTAS"));
        listaNotas.forEach(notita => {
            console.log(chalk.blue(" - " + notita.titulo));
            console.log("   - " + notita.contenido);
        });
    }
});

// Comando "read"
yargs.command({
    command: "read",
    descibe: "Leer una nota",
    handler() {
        console.log("LEER UNA NOTA");
    }
});

//console.log(yargs.argv);
yargs.parse();
////Accediendo a los comandos de consola (A huevo)
////------------------------------------------------------
//let comando = (process.argv[2]);
// console.log(process.argv);
// if (comando === "add") {
//     console.log("GATO AGREGATE UNA NOTA");
// } else if (comando === "sup") {
//     console.log("GATO ELIMINATE UNA NOTA");
// } else {
//     console.log("GATO PONÉ BIEN CARAJO!");
// }

