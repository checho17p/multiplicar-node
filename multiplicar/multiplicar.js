const fs = require('fs');
const colors = require('colors');

let imprimeTabla = (base, limite) => {

    console.log('============'.green);
    console.log(`tabla del ${ base }`.green);
    console.log('============'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(base, ' * ', i, ' = ', base * i);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((reverso, reject) => {

        let contenido = '';

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            contenido += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tablas${ base }.txt`, contenido, (err) => {
            if (err) {
                reject(`Se presento un error: ${ err }`);
            }

            reverso(`tablas${ base }.txt`);
        })

    });

}

module.exports = {
    crearArchivo,
    imprimeTabla
}