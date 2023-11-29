/*for-of amb break: Teniu una array de números.
    Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, 
    llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];*/

let numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
  console.log(numero);
  if (numero === 5) {
    break;
  }
}


