/* Lógica booleana */
console.log('%c Lógica Booleana', 'font-weight: bold; font-size: 1.8em;');

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('NOT o negación');
console.log('true:', true);
console.log('true negado:',!true);

console.warn('AND con cortocircuito');
console.log('true && true: ',true && true);
console.log('true && false: ',true && false);
console.log('true && !false: ',true && !false);

console.warn('OR con cortocircuito');
console.log('true || true: ',true || true);
console.log('true || false: ',true || false);
console.log('false || false: ',false || false);

console.warn('Asignaciones con operadores');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const verdadero = true && 'Hola Mundo' && 150; // Coge el último valor
const falso = false && 'Hola Mundo' && 150; // Coge el primer valor
const hola = 'Hola' && 'Mundo'; // Coge el último valor

const prueba1 = soyFalso || soyUndefined || soyNull || 'Tengo valor';
const prueba2 = 'Tengo valor' || soyFalso || soyUndefined || soyNull;
const prueba3 =  soyFalso || 'Tengo valor' ||soyUndefined || soyNull;

console.log('verdadero:',verdadero);
console.log('falso:',falso);
console.log('hola:',hola);

console.log('prueba1:', prueba1);
console.log('prueba2:', prueba2);
console.log('prueba2:', prueba2);
