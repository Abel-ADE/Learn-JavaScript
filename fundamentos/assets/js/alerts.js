// Formas de ingreso de datos por el usuario nativas de JavaScript, son funciones del objeto 'window'.
// El objeto 'window' es el objeto global de JavaScript para el navegador web. Contiene métodos y propiedades que se pueden usar en cualquier parte de la aplicación web.
// El objeto 'global' es el equivalente a window en node.js.
// Estas formas de ingreso únicamente se pueden usar en aplicaciones web, no en aplicaciones de consola (node.js).

// Alert - Bloquea el flujo de la aplicación mostrando un mensaje de alerta
alert('Hola Mundo');

// Prompt - Bloquea el flujo de la aplicación y permite ingresar un valor
let nombre = prompt('Ingresa tu nombre', 'Ej. Juan Pérez'); // Devuelve un string
console.log(nombre);
console.log('****' + nombre + '****');

//Confirm - Bloquea el flujo de la aplicación y permite confirmar o cancelar una acción
const selection = confirm('¿Estás seguro de querer borrar este elemento?'); // Devuelve un booleano
console.log(selection);
