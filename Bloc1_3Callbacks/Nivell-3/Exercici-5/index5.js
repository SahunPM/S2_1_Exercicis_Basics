/*Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback.
La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.*/

function processarCadena(cadenaCaracters, callback) {
    const cadenaMajuscules = cadenaCaracters.toUpperCase();

    callback(cadenaMajuscules);
}

const miCadena = "hello world!!";

function imprimirCadena(cadenaCaracters) {
    console.log(cadenaCaracters);
}

processarCadena(miCadena, imprimirCadena);