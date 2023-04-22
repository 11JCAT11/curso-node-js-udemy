const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5 , listar = false, hasta = 10)=>{
    try {
        let consola = '';
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } X ${ i } = ${ i * base }\n`;
            consola += `${ base } ${ 'X'.red } ${ i } ${'='.red} ${ i * base }\n`;
        }
        if(listar) {
            //console.log(listar);
            console.log('=======================' .green);
            console.log(`Tabla del:`.green, colors.blue(base) );
            console.log('=======================' .green);
            console.log(consola);
        }
        // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        //     if(err) throw err;
        //     console.log(`Tabla-${base} creado`);
        // })
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}