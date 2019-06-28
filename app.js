var { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, imprimeTabla } = require('./multiplicar/multiplicar');

var comando = argv._[0];

switch (comando) {

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Se creo el archivo ${ colors.green( archivo ) }`))
            .catch((err) => console.log(err));
        break;

    case 'listar':
        imprimeTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no reconocido');
}

/* 
let base = '8';

var argv2 = process.argv; */
/* var parametro = argv[2];

base = parametro.split('=')[1];

console.log(base);*/

//console.log(argv2);
//console.log(argv.limite);