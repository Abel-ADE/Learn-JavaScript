/* Objetos literales */

console.log('%c Objetos literales', 'font-weight: bold; font-size: 1.8em;');

// Crear un objeto literal
let persona = {
    nombre: 'Juan',
    edad: 30,
    vivo: true,
    edad: 40,
    direccion: {
        calle: 'Av. Principal',
        numero: 123,
        ciudad: 'Buenos Aires'
    }, // Objeto cómo propiedad de otro objeto
    ropa: ['camisa', 'pantalon', 'zapatos'], // Array cómo propiedad de un objeto
    'ultima-pelicula': 'Spiderman' // Propiedad con guiones
};

// Mostramos el objeto completo
console.log(persona); 

// Accedemos a las propiedades del objeto
console.log('%c Acceder a propiedades', 'font-weight: bold; font-size: 1.4em;');

console.log('Nombre: ', persona.nombre); // mediante punto 
console.log('Edad: ', persona['edad']); // mediante corchetes

console.log('Calle: ', persona.direccion.calle);
console.log('Número de ropa: ', persona.ropa.length);
console.log('Zapatos: ', persona.ropa[ persona.ropa.length - 1]);
console.log('¿Está vivo?', persona.vivo);
console.log('Última película:', persona['ultima-pelicula']);

// Modificamos una propiedad
console.log('%c Modificar propiedades', 'font-weight: bold; font-size: 1.4em;');

persona.nombre = 'Pedro';
console.log('Nombre:', persona.nombre);

// Eliminamos una propiedad
delete persona.edad;
console.log('Edad:', persona.edad); // No existe la propiedad edad -> undefined

// Añadimos una propiedad
persona.profesion = 'Programador';
console.log('Profesión:', persona.profesion);

// Transformamos un objeto a un array
console.log('%c Convertir objeto a array', 'font-weight: bold; font-size: 1.4em;');

let arrayPersona = Object.entries(persona);
console.log('Array:', arrayPersona);

// Transformamos un array a un objeto
console.log('%c Convertir array a objeto', 'font-weight: bold; font-size: 1.4em;');
let objetoPersona = Object.fromEntries(arrayPersona);
console.log('Objeto:', objetoPersona);

// Bloqueamos la modificación de un objeto
console.log('%c Bloquear la modificación de un objeto', 'font-weight: bold; font-size: 1.4em;');
Object.freeze(objetoPersona);

// Intentamos modificar una propiedad
objetoPersona.nombre = 'María'; // No se puede modificar el objeto
console.log('Nombre:', objetoPersona.nombre); 

delete objetoPersona.profesion; // No se puede eliminar una propiedad
console.log('Profesión:', objetoPersona.profesion);

// Bloqueamos la reasignación del objeto
console.log('%c Bloquear la reasignación de un objeto', 'font-weight: bold; font-size: 1.4em;');
const nuevoObjeto = objetoPersona;

// Intentamos reasignar el objeto
// nuevoObjeto = {}; Error - No se puede reasignar el objeto

// Obtenemos las propiedades y valores de un objeto
console.log('%c Propiedades y valores de un objeto', 'font-weight: bold; font-size: 1.4em;');

const propiedades = Object.getOwnPropertyNames(objetoPersona);
console.log('Propiedades:', propiedades);

const valores = Object.values(objetoPersona);
console.log('Valores:', valores);