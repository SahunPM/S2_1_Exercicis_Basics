/*Spread en Funcions: Crea una funció que accepti tres arguments.
    Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.*/

// Definir una función que acepta tres argumentos
function funcioArguments(arg1, arg2, arg3) {
    console.log('Argument 1:', arg1);
    console.log('Argument 2:', arg2);
    console.log('Argument 3:', arg3);
  }
  
  // Crear un array con tres elementos diferentes
  const miArray = ['Javi', 42, true];
  
  // Llamar a la función utilizando el operador spread
  funcioArguments(...miArray);
  