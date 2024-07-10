/* Bucle While */

console.log('%c While', 'font-weight: bold; font-size: 1.8em;');

const coches = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

console.log('\n Versión 1: Contenido del Array:');

while (i < coches.length) {
    console.log(coches[i]);
    i++;
}

// Condiciones falsas (dejan de ejecutar el bucle):
//  - undefined
//  - null
//  - false

i = 0;

console.log('\n Versión 2: Contenido del Array:');

while (coches[i]) {
    console.log(coches[i]);
    i++;
}

/* Bucle Do While */

console.log('%c Do While', 'font-weight: bold; font-size: 1.8em;');

let j = 0;

console.log('\n Contenido del Array:');

do {
    console.log(coches[j]);
    j++;
} while (coches[j]);