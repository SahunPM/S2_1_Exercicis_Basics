/*Rest en Destructuring: Crea una array amb diversos elements.
    Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.*/

const miArray = [1, 2, 3, 4, 5];

const [primerElement, segonElement, ...restaElements] = miArray;


console.log('Primer element:', primerElement);
console.log('Segon element:', segonElement);
console.log('Resta del elements:', restaElements);
