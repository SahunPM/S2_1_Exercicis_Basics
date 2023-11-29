/*Exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.*/

function parOImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      let mensaje = numeros[i] % 2 === 0 ? "par" : "impar";
      console.log(`${numeros[i]} és ${mensaje}`);
    }
  }
  
  // Ejemplo de uso
  let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  parOImpar(arrayNumeros);
  