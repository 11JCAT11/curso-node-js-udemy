//const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar'); 
const argv = require('./config/yargs')

console.clear();
//console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.b);
// console.log('base: yargs',argv.base);
// const [ , , arg3 = 5] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);
//const base = 7;
crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado') )
    .catch( err => console.log(err) );
