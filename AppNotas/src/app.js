const chalk = require('chalk');
const yargs = require("yargs");

const getNotes = require('./notes.js');

//let comando = (process.argv[2]);
//console.log(process.argv);
console.log(yargs.argv);

// if (comando === "add") {
//     console.log("GATO AGREGATE UNA NOTA");
// } else if (comando === "sup") {
//     console.log("GATO ELIMINATE UNA NOTA");
// } else {
//     console.log("GATO PONÉ BIEN CARAJO!");
//}