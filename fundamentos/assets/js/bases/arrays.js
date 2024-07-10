/* Arrays:  es un tipo de dato que permite almacenar varios valores en una sola variable.
    
    - Pueden contener cualquier tipo de dato, incluyendo otros arrays.
    - Los índices empiezan en cero.
    - Son objetos.
    - No tienen un tamaño fijo. 
    - Puede ser una variable o constante.
*/

/* Tipos de arrays */
console.log('%c Arrays', 'font-weight: bold; font-size: 1.8em;');

// Forma 1: Array literal
const arr = ['a', 'b', 'c'];
console.log('Un array es de tipo: ',typeof arr); // Un array es un objeto
console.log('Su contenido es:',arr); // Mostramos el array completo
console.log('El primer elemento es:',arr[0]); // Mostramos el primer elemento del array
console.log('El primer elemento es de tipo:',typeof arr[0]); // Mostramos el tipo de dato del primer elemento del array

// Forma 2: Array constructor con longitud
let arr2 = new Array(10); // Creamos un array vacío con 10 elementos

// Forma 3: Array constructor con elementos
let arr3 = new Array('a', 'b', 'c');

// Forma 4: Array constructor vacío
let arr4 = new Array() // Creamos un array vacío de longitud 0

// Puede contener cualquier tipo de dato
let arrayMixto = [
    'Hola', //String
    2, // Number
    true, // Boolean
    ['a', 'b', 'c'], // Array
    2*5, // Expresión
    function() {
        console.log('Soy una función');
    }, // Función
    {nombre: 'Juan', edad: 30} // Objeto
];
console.log('Array mixto:',arrayMixto);

/* Accedemos a los elementos de un array dentro de otro array
console.log('Valor: ',arrayMixto[3][2]); */

/* Propiedades y métodos de los arrays */
console.log('%c Propiedades y métodos de los arrays', 'font-weight: bold; font-size: 1.4em;');

let juegos = ['Zelda', 'Mario', 'Metroid', 'Castlevania'];
console.log('Contenido:',juegos); // Mostramos el contenido del array
console.log('Longitud:',juegos.length); // Mostramos la longitud del array
console.log('Primer elemento:',juegos[0]); // Mostramos el primer elemento del array
console.log('Último elemento:',juegos[juegos.length - 1]); // Mostramos el último elemento del array

console.log('For each:'); //Recorremos el array con forEach
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

juegos.push('Final Fantasy'); // Añadimos un elemento al final
juegos.unshift('Sonic'); // Añadimos un elemento al principio
console.log('Contenido:',juegos);

juegos.pop(); // Eliminamos el último elemento
console.log('Contenido:',juegos);

juegos.shift(); // Eliminamos el primer elemento
console.log('Contenido:',juegos);

juegos.splice(1, 2); // Eliminamos elementos a partir de la posición 1 y eliminamos 2 elementos
console.log('Contenido:',juegos);

console.log('Índice de Zelda: ',juegos.indexOf('Zelda')); // Buscamos la posición de un elemento
console.log('Índice de Mario: ',juegos.indexOf('Mario')); // No existe el juego Mario
