/*Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.*/

function suma(...numeros) {
        return numeros.reduce((total, numero) => total + numero, 0);
      }
      
      const resultat = suma(1, 2, 3, 4, 5);
      
      console.log(resultat); 





      


