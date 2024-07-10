// Función original:
function crearPersona(nombre, apellido) {
    return { 
        nombre: nombre, 
        apellido: apellido
     };
}

const persona = crearPersona('Juan', 'Perez');
console.log(persona);

// Función refactorizada:
function crearPersona2(nombre, apellido) {
    return {nombre,apellido};
}

const persona2 = crearPersona2('María', 'López');
console.log(persona2);

// Con función de flecha
const crearPersonaFlecha = (nombre, apellido) => {return {nombre, apellido}};

let personaFlecha = crearPersonaFlecha('Ramón', 'Pérez');
console.log(personaFlecha);

// Con función de flecha refactorizada
const crearPersonaFlecha2 = (nombre, apellido) => ({nombre, apellido}); //Devolvemos un objeto simplificado

let personaFlecha2 = crearPersonaFlecha2('José','Suárez');
console.log(personaFlecha2);

// Función para imprimir argumentos
function imprimirArgumentos(){
    console.log(arguments);
}

imprimirArgumentos(10,true, 'Pedro');

// Función de flecha para imprimir argumentos (Parámetro REST)
const imprimirArgumentosFlecha = (...args) => console.log(args);

imprimirArgumentosFlecha(10,'Hola',12);

// Función de flecha para imprimir argumentos variables y argumentos fijos
const imprimirArgumentosFlecha2 = (edad, ...args) => console.log({edad,args});

imprimirArgumentosFlecha2(10,'Hola',12);