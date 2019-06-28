var opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('crear', 'crea archivo txt con la tabla de multiplicar especificada', opts)
    .command('listar', 'Imprime la tabla de multiplicar especificada', opts)
    .argv;


module.exports = {
    argv
};