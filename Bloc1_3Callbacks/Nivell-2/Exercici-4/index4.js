/*Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback.
La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/

function procesarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const miArray = [1, 2, 3, 4, 5, 6, 7];

function imprimirElement(element) {
    console.log(element);
}

procesarElements(miArray, imprimirElement);
