/*
Leyenda de cartas:

    2C = 2 de Tréboles
    2D = 2 de Diamantes
    2H = 2 de Corazones
    2S = 2 de Picas
*/

// Variables (globales) para crear una Baraja de cartas
let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador     = 0;
let puntosComputadora = 0;

// Referencias al Html
const htmlBotonPedir =      document.querySelector('#btnPedir');
const htmlBotonDetener =    document.querySelector('#btnDetener');
const htmlBotonNuevoJuego = document.querySelector('#btnNuevo');

const htmlPuntos =            document.querySelectorAll('small');
const htmlCartasJugador =     document.querySelector('#jugador-cartas');
const htmlCartasComputadora = document.querySelector('#computadora-cartas');

// Crea una nueva baraja
const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push (i+tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push (esp+tipo);
        }
    }

    deck = _.shuffle(deck);

    return deck;
}


// Toma una carta
const pedirCarta = () => {
    
    if(deck.length === 0){
        throw 'No hay cartas en la baraja';
    }
    
    return deck.pop();
}

// Calcula el valor de la carta
const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : valor * 1;
}

// Lógica de la computadora
const turnoComputadora = ( puntosMinimos ) => {
     do {
        //Cogemos la carta
        const carta = pedirCarta();

        //Obtenemos los puntos
        puntosComputadora += valorCarta(carta);
        htmlPuntos[1].innerText = puntosComputadora;
        
        //La mostramos en pantalla
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        htmlCartasComputadora.append(imgCarta);
     } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

     setTimeout(() => {
        if (puntosMinimos === puntosComputadora) {
            alert('Empate');
        } else if (puntosMinimos > 21) {
            alert('Gana la computadora');
        } else if (puntosComputadora > 21 ) {
            alert('Gana el jugador');
        }else {
            alert('Gana la computadora');
        }
    }, 20);
}

// Botón pedir carta
htmlBotonPedir.addEventListener('click', () => {
    //Disparar la acción en el evento click del botón pedir
    //Cogemos la carta
    const carta = pedirCarta();

    //Obtenemos los puntos
    puntosJugador += valorCarta(carta);
    htmlPuntos[0].innerText = puntosJugador;
    
    //La mostramos en pantalla
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    htmlCartasJugador.append(imgCarta);

    //Deshabilitamos el botón cuando el usuario llega a 21 o superior
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        htmlBotonPedir.disabled = true;
        htmlBotonDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        htmlBotonPedir.disabled = true;
        htmlBotonDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

// Botón detener
htmlBotonDetener.addEventListener('click', () => {
    htmlBotonPedir.disabled = true;
    htmlBotonDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

// Botón nueva partida
htmlBotonNuevoJuego.addEventListener('click', () => {   
    //Creo una nueva baraja
    deck = [];
    deck = crearDeck();
    
    // Pongo los marcadores a cero
    for(let marcador of htmlPuntos){
        marcador.innerText = 0;
    }
    puntosComputadora = 0;
    puntosJugador = 0;

    // Elimino las cartas de la mesa
    htmlCartasComputadora.innerHTML = '';
    htmlCartasJugador.innerHTML = '';

    // Habilito los botones
    htmlBotonPedir.disabled = false;
    htmlBotonDetener.disabled = false;

    // Limpiamos la consola
    console.clear();
});


crearDeck();