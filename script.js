const opciones = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

//contadores para el juego
let contadorJugador = 0;
let contadorComputadora = 0;
let contadorJugadas = 0;
let opcionJugador1;

/*  <div class="btnJuego">
        <div class="btn-rock">
          <button data-opcion="rock">
            <img src="imagen/rock.png" alt="rock" />
            <p>Rock</p>
          </button>
        </div>
 */
const botonElement = [];

botonElement.push({
  name: 'Rock',
  image:
    'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmFwQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--25d674cf174995906d96d68f1a84f32f80a09e11/rock-paper__1_-removebg-preview.png',
  opcion: 'rock',
});

botonElement.push({
  name: 'Paper',
  image:
    'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNktwQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--48d4e1f685c1e03ecc66bc2b1c0b5678d84182fc/paper.png',
  opcion: 'paper',
});

botonElement.push({
  name: 'Scissors',
  image:
    'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNkdwQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--82f30bfc26ce00bd84b6f82f913377f9778600aa/Scissors.png',
  opcion: 'scissors',
});

botonElement.push({
  name: 'Lizard',
  image:
    'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNk9wQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2a7713005ba973024e72784d342479a4d8163d1/lizard.png',
  opcion: 'lizard',
});

botonElement.push({
  name: 'Spock',
  image:
    'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNlNwQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6f280f70eb8dca4c709b822fbade203fae08f94e/spock-removebg-preview.png',
  opcion: 'spock',
});
//marcador
const resultadoDiv = document.createElement('div');
resultadoDiv.classList.add('marcador');

//resultado jugada
const resultadoTitulo = document.createElement('p');
resultadoTitulo.innerText = 'Resultado';

const resultadoJugada = document.createElement('span');
resultadoJugada.classList.add('resultadoJugada');

//mostrar resultado
const resulTurnoTitulo = document.createElement('p');
resulTurnoTitulo.innerText = 'Resultado turno';

const mostrarResulTurno = document.createElement('span');
mostrarResulTurno.classList.add('mostrarResulTurno');

//conteo de puntos
const resulPuntosTitulo = document.createElement('p');
resulPuntosTitulo.innerText = 'Puntos';

const conteoPuntos = document.createElement('span');
conteoPuntos.classList.add('conteoPuntos');

function renderElement(array) {
  //buttons-container
  const main = document.querySelector('main');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  main.appendChild(buttonsContainer);

  const elementDivReset = document.createElement('div');
  elementDivReset.classList.add('resetBtn');
  main.appendChild(elementDivReset);

  const elementReset = document.createElement('button');
  elementReset.classList.add('reset-button');
  elementReset.innerText = 'Reset';

  const btnJuegoWrapper = document.createElement('div');
  btnJuegoWrapper.classList.add('btnJuegoWrapper');
  buttonsContainer.appendChild(btnJuegoWrapper);

  buttonsContainer.appendChild(resultadoDiv);
  resultadoDiv.appendChild(resultadoTitulo);

  resultadoDiv.appendChild(resulTurnoTitulo);

  resultadoDiv.appendChild(resulPuntosTitulo);

  resultadoDiv.appendChild(resultadoJugada);
  resultadoDiv.appendChild(mostrarResulTurno);
  resultadoDiv.appendChild(conteoPuntos);

  elementDivReset.appendChild(elementReset);

  for (elementJuego of array) {
    const btnJuego = document.createElement('div');
    //btnJuego.classList.add('btn-juego');

    // render element a div
    const btnImagen = document.createElement('img');
    btnImagen.setAttribute('src', elementJuego.image);

    btnJuegoWrapper.appendChild(btnJuego);
    btnJuego.appendChild(btnImagen);

    // btnJuego.addEventListener('click', elegirOpcion);

    btnJuegoWrapper.appendChild(btnJuego);
  }
}
renderElement(botonElement);

function elegirOpcion() {
  const opcionJug = this.id;
  opcionJugador1 = opcionJug;

  juego(opcionJugador1);
}

function juego(opcionJugador1) {
  contadorJugadas++;
  if (contadorJugadas > 5) {
    detenerJuego();
    return;
  }
  const opcionJugador2 = opciones[Math.floor(Math.random() * opciones.length)];
  const result = determinarGanador(opcionJugador1, opcionJugador2);
  showResult(opcionJugador1, opcionJugador2, result);
}

/* Funcion detenerjuego  y optener resultado*/
function detenerJuego() {
  const resultado_elemento = document.querySelector('.resultadoJugada');
  if (contadorJugador > contadorComputadora) {
    resultado_elemento.innerText = '¡El jugador UNO gana el Juego!';
  } else if (contadorComputadora > contadorJugador) {
    resultado_elemento.innerText = '¡El jugador DOS gana el Juego!';
  } else {
    resultado_elemento.innerText = '¡Empate!';
  }
  const botones = document.querySelectorAll('button'); //mirar
  botones.forEach((boton) => {
    boton.addEventListener('click', elegirOpcion);
  });
  const resetButton = document.querySelector('.reset-button');
  resetButton.style.display = 'block';
}

function determinarGanador(opcionJugador1, opcionJugador2) {
  if (opcionJugador1 === opcionJugador2) {
    return 'Empate';
  }
  if (
    (opcionJugador1 === 'rock' &&
      (opcionJugador2 === 'scissors' || opcionJugador2 === 'lizard')) ||
    (opcionJugador1 === 'paper' &&
      (opcionJugador2 === 'rock' || opcionJugador2 === 'spock')) ||
    (opcionJugador1 === 'scissors' &&
      (opcionJugador2 === 'paper' || opcionJugador2 === 'lazard')) ||
    (opcionJugador1 === 'lazard' &&
      (opcionJugador2 === 'paper' || opcionJugador2 === 'spock')) ||
    (opcionJugador1 === 'spock' &&
      (opcionJugador2 === 'scissors' || opcionJugador2 === 'rock'))
  ) {
    contadorJugador++;
    return 'Jugador UNO gana';
  } else {
    contadorComputadora++;
    return 'Jugador DOS gana';
  }
}

function showResult(opcionJugador1, opcionJugador2, resultadoJugada) {
  const resultadoJugSpan = document.querySelector('.resultadoJugada');
  const resultadoTurJugada = document.querySelector('.mostrarResulTurno');
  const puntosJugador = document.querySelector('.conteoPuntos');

  resultadoJugSpan.innerText = `Jugador UNO eligió ${opcionJugador1} 
   Jugador DOS eligió ${opcionJugador2}.`;
  resultadoTurJugada.innerText = `${resultadoJugada}`;
  puntosJugador.innerText = `Jugador UNO: ${contadorJugador}  
  Jugador DOS: ${contadorComputadora}`;
}
function reiniciarJuego() {
  const resultadoJugSpan = document.querySelector('.resultadoJugada');
  resultadoJugSpan.innerText = '';
  const resultadoTurJugada = document.querySelector('.mostrarResulTurno');
  resultadoTurJugada.innerText = '';
  const puntosJugador = document.querySelector('.conteoPuntos');
  puntosJugador.innerText = '';

  const resetButton = document.querySelector('.reset-button');
  resetButton.style.display = 'none';
  contadorJugadas = 0;
  contadorJugador = 0;
  contadorComputadora = 0;
  const botones = document.querySelectorAll('button');
  botones.forEach((boton) => {
    boton.addEventListener('click', elegirOpcion);
  });
}
//Escucha el evento de click en los botones y llama a la funcion elegirOpcion
const botones = document.querySelectorAll('button');
botones.forEach((boton) => {
  boton.addEventListener('click', elegirOpcion);
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', reiniciarJuego);
