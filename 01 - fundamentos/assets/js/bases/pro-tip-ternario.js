/* Pro Tip - Ternario */

console.log('%c Pro Tip - Ternario', 'font-weight: bold; font-size: 1.8em;');

/* Funciones de flecha con operador ternario */
const numeroMayor = (a,b) =>  (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'; 

console.log('El número mayor es: ',numeroMayor(10,20));
console.log('Costo del servicio:',tieneMembresia(false));

/* Operador ternario en Array */
const amigo = false;
const amigosArr = [
    'peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Niki Fury')(), //Función anónima auto-invocada
    numeroMayor(20,50),
];

console.log(amigosArr);

/* Operador ternario anidado */
const nota = 82.5; // A+, A, B+, ...
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota,grado});