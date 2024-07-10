/* Funciones en JavaScript */

console.log('%c Funciones', 'font-weight: bold; font-size: 1.8em;');


/* Conceptos básicos */

// Declaración de una función, no se recomienda
function saludar() {
    console.log('Hola, ¿cómo estás?');
}

// Llamamos a la función
saludar();

/* Conceptos avanzados */

// Función anónima asignada a una variable
const despedirse = function(nombre) {
    console.log(`¡Hasta luego, ${nombre}!`);
}

despedirse('Carlos');

// Función con parámetros
function saludar2(nombre){
    console.log(`Hola, ${nombre}`);
}

saludar2('Juan');

// Función de flecha (arrow function)
const saludarFlecha = () => {
    console.log('Hola, desde función de flecha');
};

saludarFlecha();

// Función de flecha (arrow function) con parámetros
const saludarFlecha2 = (nombre) => {
    console.log(`Hola, ${nombre}`);
};

saludarFlecha2('Ana');

// Función con retorno de valor
function sumar(a, b){
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado);

// Función de flecha (arrow function) con retorno de valor
const sumarFlecha = (a, b) => {return a + b};

let resultado2 = sumarFlecha(10, 20);
console.log(resultado2);

// Función de flecha (arrow function) con retorno de valor simplificado
const sumarFlecha2 = (a, b) => a + b;

let resultado3 = sumarFlecha2(100, 200);
console.log(resultado3);

// Función con parámetros por defecto
function saludar3(nombre = 'Invitado'){
    console.log(`Hola, ${nombre}`);
}

saludar3('Pedro');
saludar3();

// Función de flecha con parámetros por defecto
const saludarFlecha3 = (nombre = 'Invitado') => {
    console.log(`Hola, ${nombre}`);
}

saludarFlecha3('María');
saludarFlecha3();


const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());