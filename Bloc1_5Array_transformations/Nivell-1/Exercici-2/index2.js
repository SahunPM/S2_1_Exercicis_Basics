/*Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.*/

const numeros = [1, 2, 3, 4];

const parells = numeros.filter(numero => numero % 2 === 0);

console.log(parells); 

