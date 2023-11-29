/*Exercicic 3 : Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre*/


function esperarISaludar(nom, callback) {
    setTimeout(function() {
        callback(nom);
    }, 2000); 
}

esperarISaludar("Javi", function(nom) {
    console.log("¡Hola, " + nom + "!");
});

