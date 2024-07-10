/* Switch */
console.log('%c Switch', 'font-weight: bold; font-size: 1.8em;');

const dia = 1; // 0: Domingo, 1: Lunes, ...

switch (dia) { // Respeta los tipos de datos
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Día incorrecto')
}