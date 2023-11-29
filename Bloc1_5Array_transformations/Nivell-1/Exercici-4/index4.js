/*Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/

const numeros = [13, 7, 8, 21];

const sumaTotal = numeros.reduce((total, numero) => total + numero, 0);

console.log(sumaTotal); 


