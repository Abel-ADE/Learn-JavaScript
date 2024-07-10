/* Operador Ternario */
console.log('%c Operador Ternario', 'font-weight: bold; font-size: 1.8em;');

/**
 * Ejercicio:
 * Los días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9.
 */

// Entra a un sitio web, para consultar si está abierto hoy
const diaActual = 3; // 0: domingo, 1: lunes, ...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto || Está cerrado, hoy abrimos a las XX

//Si es fin de semana
if( diaActual === 0 || diaActual === 6){
    console.log('Fin de semana');
    horaApertura = 9;
}else {
    console.log('Día de semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura){
    mensaje = 'Está abierto';
}else {
    //mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura; // No se recomienda
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, horaActual, mensaje});

/* Refactorizando el código anterior */

//Si es fin de semana
horaApertura = ([0,6].includes(diaActual) ? 9 : 11);

mensaje = (horaActual >= horaApertura ? 'Está abierto' :  `Está cerrado, hoy abrimos a las ${horaApertura}`);

console.log({horaApertura, horaActual, mensaje});