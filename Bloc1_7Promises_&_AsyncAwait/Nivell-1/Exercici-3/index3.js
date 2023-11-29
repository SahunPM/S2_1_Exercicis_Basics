//Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const input = prompt("Saluda amb un Hola...");
        if (input === 'Hola') {
            resolve('Hola');
        } else {
            reject(new Error('Error, has de dir  "Hola".'));
        }
    }, 2000);
});

promesa.then((resultat) => {
    console.log(resultat);
})
    .catch((error) => {
        console.error(error.message);
    });


