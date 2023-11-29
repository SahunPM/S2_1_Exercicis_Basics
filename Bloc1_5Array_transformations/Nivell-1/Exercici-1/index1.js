/*Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.*/

const numeros = [1, 2, 3, 4];

const quadrats = numeros.map(numero => numero * numero);

console.log(quadrats);
