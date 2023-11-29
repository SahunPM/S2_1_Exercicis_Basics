
/*Copiant objectes amb Spread: Crea un objecte 'objecte1'.
Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.*/


const objecte1 = {
  prop1: 'valor1',
  prop2: 'valor2',
};

const objecte2 = { ...objecte1 };

objecte2.prop1 = 'nouValor';

console.log('objecte1:', objecte1);
console.log('objecte2:', objecte2);
      


