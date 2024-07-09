console.log('Hello, World!');

/* Tipos de 'variables' */
let a = 10; // Variable local
var b = 20; // Variable global - dentro del objeto window, no recomendado
const c = 30; // Constante

/* Mostrar datos por consola */
console.log('El valor de a es: ' + a); // Muestra el valor de la variable, texto, etc.
console.warn('Mensaje de advertencia'); // Muestra una advertencia 
console.error('Mensaje de error'); // Muestra un error 
console.info('Mensaje informativo'); // Muestra un mensaje informativo

/* Formas de mostrar los datos por consola */
console.log('%c Mostrar datos por consola', 'color: blue; font-weight: bold'); // Mensaje con estilos CSS - Se necesita '%c' para aplicar los estilos
console.log('El valor de a es: ' + a); // Concatenación de variables - Se imprime un string
console.log(`El valor de b es: ${b}`); // Interpolación de variables - Se imprime un string
console.log('El valor de c es: ', c); // Concatenación con coma - Se imprime un número
console.log({a}); // Mostrar un objeto
console.log({a, b, c}); // Mostrar varios objetos
console.table({a, b, c}); // Mostrar una tabla de datos

/* Variables dinámicas */
a = 'Hola'; // Se puede cambiar el tipo de variable

/* Constantes */
const saludo = 'Hola, Mundo!' // Declaramos una constante
console.log(saludo); // Mostramos la constante
// saludo = 'Hola, Abel!'; Error - No se puede cambiar el valor de una constante 

/* Tipos de datos primitivos:
    - Boolean: true/false
    - Null: sin valor en lo absoluto
    - Undefined: variable declarada pero sin valor asignado
    - Number: todos los números (enteros, decimales, etc.)
    - String: texto (cadenas de caracteres)
    - Symbol: valor único e inmutable, puede ser usado como clave de una propiedad de un objeto.  
*/

// Ver archivo primitivos.js
