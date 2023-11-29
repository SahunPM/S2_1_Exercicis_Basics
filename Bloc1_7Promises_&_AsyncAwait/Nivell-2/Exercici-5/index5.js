/*Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.*/


const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const input = prompt("Introdueix 'Hola' o alguna altra cosa:");
        input === 'Hola' ? resolve('Hola') : reject(new Error('La entrada no és igual a "Hola".'));
    }, 2000); 
});

async function executarPromesa() {
    try {
        const resultat = await promesa;

        console.log(resultat);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

executarPromesa();

