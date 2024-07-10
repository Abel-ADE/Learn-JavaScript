/* IF - Else */
console.log('%c IF - Else', 'font-weight: bold; font-size: 1.8em;');

let number = 5;

if(number >= 10){ // Un IF recibe un booleano como argumento
    console.log('El número es mayor o igual a 10');
} else{
    console.log('El nñumero es menor a 10');
}

console.log('Fin del programa');

// Otro ejemplo

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, ...

console.log(dia);

if (dia === 0 ){
    console.log('Es domingo');
} else {
    console.log('No es domingo');
}

// Ejercicio - Devolver el día de la semana sin usar IF, Else o Switch
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

console.log(dias[dia]);