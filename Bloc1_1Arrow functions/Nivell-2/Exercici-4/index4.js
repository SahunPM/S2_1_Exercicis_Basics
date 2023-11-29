/*Exercici 4
Funció de fletxa dins d'un loop: 
Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        // loop for per imprimir cada número a la consola utilitzant una funció de fletxa
        (() => {
            console.log(numbers[i]);
        })();
    }
};

// array de números
const numbersArray = [1, 2, 3, 4, 5, 6, 7];
// funció anomenada printNumbers 
printNumbers(numbersArray);


