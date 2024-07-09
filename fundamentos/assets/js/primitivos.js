/* Nomenclatura de variables: camelCase
    - No pueden empezar con números
    - No pueden contener espacios
    - No pueden ser palabras reservadas
    - No pueden contener caracteres especiales (solo guión bajo y signo de dólar) - Aunque se recomienda no usarlos
    - Se recomienda que sean descriptivas y en inglés

    * Ejemplos:
        + nombreCompleto
        + edadPersona
*/

/* Tipos de datos primitivos:
    - Boolean: true/false
    - Null: sin valor en lo absoluto
    - Undefined: variable declarada pero sin valor asignado
    - Number: todos los números (enteros, decimales, etc.)
    - String: texto (cadenas de caracteres)
    - Symbol: valor único e inmutable, puede ser usado como clave de una propiedad de un objeto.  
*/

/* String - Formas de declarar un string */
let nombre = "Juan"; // Comillas dobles
let apellido1 = 'Pérez'; // Comillas simples
let apellido2 = `Gómez`; // Backticks

let saludo = `Hola, ${nombre} ${apellido1} ${apellido2}`; // Template string: permite concatenar variables

console.log('%c Strings:', 'font-size: 1.8em; font-weight: bold;');
console.log('La variable nombre es un:', typeof nombre); // Mostramos el tipo de dato de la variable nombre
console.log(saludo); 

/* Number - Formas de declarar un número */
let edad = 25; // Entero
let altura = 1.75; // Decimal
let temperatura = -5; // Negativo

// Los números (todos) en JavaScript son de tipo Number
console.log('%c Números:', 'font-size: 1.8em; font-weight: bold;');
console.log('La variable edad es un:', typeof edad);
console.log('La variable altura es un:', typeof altura);
console.log('La variable temperatura es un:', typeof temperatura);

/* Boolean - Formas de declarar un booleano */
let esMayorEdad = true; // Verdadero 
let esMenorEdad = false; // Falso
let esMayor = edad >= 18; // Expresión lógica

console.log('%c Booleanos:', 'font-size: 1.8em; font-weight: bold;');
console.log('La variable esMayorEdad es un:', typeof esMayorEdad);
console.log('La variable esMenorEdad es un:', typeof esMenorEdad);
console.log('La variable esMayor es un:', typeof esMayor);

// Null y Undefined
let superPoder; // Variable declarada pero sin valor asignado
let vacio = null; // Variable sin valor en lo absoluto

console.log('%c Null y Undefined:', 'font-size: 1.8em; font-weight: bold;');
console.log('La variable superPoder es un:', typeof superPoder);
console.log('La variable vacio es un:', typeof vacio); // Null es un objeto en JavaScript

// Symbol
let simbolo1 = Symbol('a');
let simbolo2 = Symbol('a');

console.log('%c Symbol:', 'font-size: 1.8em; font-weight: bold;');
console.log('La variable simbolo1 es un:', typeof simbolo1);
console.log('La variable simbolo2 es un:', typeof simbolo2);

console.log('simbolo1:', simbolo1);
console.log('simbolo2:', simbolo2);
console.log('¿Los símbolos son iguales?', simbolo1 === simbolo2); // false - Los símbolos son únicos

