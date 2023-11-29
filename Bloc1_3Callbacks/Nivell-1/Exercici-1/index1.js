/*Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback.
La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

function processar(nombre, callback) {
    callback(nombre);
  }
  
  function elMeuCallback(valor) {
    console.log("El nombre és: " + valor);
  }
  
  processar(12, elMeuCallback);



