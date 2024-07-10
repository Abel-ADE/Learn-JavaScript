/* Paso por valor - Valores primitivos */
console.log('%c Paso por valor - Primitivos','font-size: 1.8em; font-weight:bold;');

let a = 10;
let b = a;
a = 30;
console.log({a,b});

/* Paso por referencia - Objetos */
console.log('%c Paso por referencia - Objetos','font-size: 1.8em; font-weight:bold;');

let juan = {
    nombre: 'Juan',
}

let ana = juan;
ana.nombre='Ana';

console.table({juan, ana});

// Arrays
const frutas = ['Manzana','Pera', 'Piña'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

/* Rompemos el paso por referencia de objetos (Paso por valor de objetos) */
console.log('%c Rompemos paso por referencia en Objetos (Spread)','font-size: 1.8em; font-weight:bold;');

let pedro = {nombre: 'Pedro'}
let maria = {...pedro}; // Operador Spread '...' - Separa los elementos y rompe la referencia.
maria.nombre='María';

console.table({pedro, maria});

// Segundo ejemplo
const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.table({peter, tony});

// Tercer ejemplo - Arrays
const frutas2 = ['Manzana','Pera', 'Piña'];

console.time('spread'); // Iniciamos contador para medir eficiencia de la operación siguiente
const otrasFrutas2 = [...frutas2];
console.timeEnd('spread');// Finalizamos contador

otrasFrutas2.push('Mango');

console.table({frutas2, otrasFrutas2});

