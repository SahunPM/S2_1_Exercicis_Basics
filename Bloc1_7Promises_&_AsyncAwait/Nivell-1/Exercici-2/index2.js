//Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000); 
});

promesa.then((resultat) => {
    console.log(resultat);  
});

