/*for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada 
element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']*/

let noms = ['Anna', 'Bernat', 'Clara'];

for (let nom of noms) {
  let index = noms.indexOf(nom);
  console.log( index + ': ' + nom);
}


