/*Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
        Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.*/


function crearPromesa(tempo, resultat) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultat);
        }, tempo);
    });
}

const promesa1 = crearPromesa(2000, 'Primera promesa resolta');
const promesa2 = crearPromesa(3000, 'Segona promesa resolta');

Promise.all([promesa1, promesa2])
    .then((resultats) => {
        console.log(resultats);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

