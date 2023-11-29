/*Exercici 3
Ús enllaçat d'operadors ternaris: 
- Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.*/


let numero = 12;

let numPositiunegatiuZero =
    numero > 0 ? "positiu" :
    numero === 0 ? "zero" :
    "negatiu";

console.log("El número és " + numPositiunegatiuZero);


/*- Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/

function trobarMaxim(a, b, c) {
    let maxim = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    return maxim;
  }
  
  let valorMaxim = trobarMaxim(7, 24, 12);
  console.log("El valor màxim és: " + valorMaxim);
  

