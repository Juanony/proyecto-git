// Función saludo usando template strings
function saludo(nombre, mensaje) {
console.log(`${mensaje}, ${nombre}!`);
}
// Ejemplos de uso:
saludo("Rosario", "¡Hola"); // Resultado: ¡Hola, Rosario!
saludo("Pepe", "¡Buen trabajo"); // Resultado: ¡Buen trabajo, Pepe!
saludo("Juan", "¡Buen trabajo"); // Resultado: ¡Buen trabajo, Juan!
saludo("Pedro", "¡Buen trabajo"); // Resultado: ¡Buen trabajo, Pedro!

function despedida(nombre, mensaje) {
console.log(`${mensaje}, ${nombre}!`);
}

despedida("Rosario", "¡Adiós"); // Resultado: ¡Adiós, Rosario!
despedida("Pepe", "¡Hasta luego"); // Resultado: ¡Hasta luego, Pepe!
despedida("Juan", "¡Hasta luego"); // Resultado: ¡Hasta luego, Juan!
despedida("Pedro", "¡Hasta luego"); // Resultado: ¡Hasta luego, Pedro!