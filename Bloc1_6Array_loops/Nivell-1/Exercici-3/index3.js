/*filter: Teniu una array de números. 
Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
*/

let numeros = [1, 2, 3, 4, 5, 6];

let numerosParells = numeros.filter(numero => numero % 2 === 0);

console.log(numerosParells); 
