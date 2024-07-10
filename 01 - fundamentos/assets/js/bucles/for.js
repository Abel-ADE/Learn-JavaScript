/* Bucle For */
console.log('%c Bucle For', 'font-weight: bold; font-size: 1.8em;');

const heroes = ['Batman','Superman','Mujer Maravilla','Aquaman'];

console.warn('For tradicional');

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('For in');

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('For of');

for(let heroe of heroes){
    console.log(heroe);
}