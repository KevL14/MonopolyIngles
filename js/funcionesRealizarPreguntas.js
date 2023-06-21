// var casillasNormales=[0,2,8,12,15,16,18,21,26]
var casillasPreguntasNormales = [1, 3, 5, 7, 9, 11, 14, 17, 20, 23, 25, 27, 29];
var casillasPreguntasBomba = [6, 13, 19, 24, 31];
var casillasPreguntasDificiles = [4, 10, 22, 28, 30];
var tipoPregunta;
var pregunta;
var playerPregunta;
var imgTarjetasPreguntas = {
  preguntaNormal: `<img src="img/Tarjetas/tarjeta preguntas.jpg" alt="">`,
  preguntaBomba: `<img src="img/Tarjetas/tarjeta retos.jpg" alt="">`,
  preguntaDificil: `<img src="img/Tarjetas/tarjeta peligro.jpg" alt="">`,
};
// pagina de respuesta
var imgTarjetaType;
var imgTarjeta = document.getElementById("imgTarjetaPregunta");
var textTarjeta = document.getElementById("textPregunta");
var contentRespuestas = document.getElementById("contenedorRespuestas");

async function mostrarPregunta(jugador) {
  var hacerPreguntaNormal = false;
  var hacerPreguntaBomba = false;
  var hacerPreguntaDificil = false;
  playerPregunta = jugador;

  // verifico a ver si alguna de las posiciones del jugador es de alguna casilla de pregunta
  for (let index = 0; index < casillasPreguntasNormales.length; index++) {
    if (positionPlayers[jugador] == casillasPreguntasNormales[index]) {
      hacerPreguntaNormal = true;
    }
  }
  for (let index = 0; index < casillasPreguntasBomba.length; index++) {
    if (positionPlayers[jugador] == casillasPreguntasBomba[index]) {
      hacerPreguntaBomba = true;
    }
  }
  for (let index = 0; index < casillasPreguntasDificiles.length; index++) {
    if (positionPlayers[jugador] == casillasPreguntasDificiles[index]) {
      hacerPreguntaDificil = true;
    }
  }

  // veo la situacion de cual fue verdadera y hago una accion
  if (hacerPreguntaNormal) {
    imgTarjetaType = imgTarjetasPreguntas.preguntaNormal;

    escogerPreguntaAzar(1);
    mostrarPaginas(5, 3);
  } else if (hacerPreguntaBomba) {
    imgTarjetaType = imgTarjetasPreguntas.preguntaBomba;
    escogerPreguntaAzar(2);
    mostrarPaginas(5, 3);
  } else if (hacerPreguntaDificil) {
    imgTarjetaType = imgTarjetasPreguntas.preguntaDificil;
    escogerPreguntaAzar(3);
    mostrarPaginas(5, 3);
  } else {
    actualizarTurno();
  }
}
function escogerPreguntaAzar(tipo) {
  var numPregunta;
  tipoPregunta = tipo;
  switch (tipo) {
    case 1:
      numPregunta = Math.floor(Math.random() * easyQuestions.length);
      pregunta = easyQuestions[numPregunta];
      break;
    case 2:
      numPregunta = Math.floor(Math.random() * mediumQuestions.length);
      pregunta = mediumQuestions[numPregunta];
      break;
    case 3:
      numPregunta = Math.floor(Math.random() * difficultQuestions.length);
      pregunta = difficultQuestions[numPregunta];
      break;
    default:
      break;
  }
  imgTarjeta.innerHTML =imgTarjetaType + `<span id="textPregunta">${pregunta.question}</span>`;
  if (pregunta.question.length>100) {
    document.getElementById("textPregunta").style="font-size: 28px;"
  }else{
    document.getElementById("textPregunta").style="font-size: 35px;"
  }
  var htmlButtonsRespuesta = "";
  var combinacionesOrdenPreguntas = [];

  while (combinacionesOrdenPreguntas.length < 4) {
    var numCombinacion = Math.floor(Math.random() * 4) + 1;
    console.log("numero de combinacion" + numCombinacion);
    console.log("lista con combinaciones" + combinacionesOrdenPreguntas);
    console.log(
      "ver si esta " +
        numCombinacion +
        " en la lista " +
        combinacionesOrdenPreguntas.indexOf(numCombinacion)
    );
    if (numCombinacion == 4) {
      numCombinacion = 0;
    }
    if (combinacionesOrdenPreguntas.indexOf(numCombinacion) == -1) {
      combinacionesOrdenPreguntas.push(numCombinacion);
    }
  }
  for (let i = 0; i < combinacionesOrdenPreguntas.length; i++) {
    htmlButtonsRespuesta += `<button id="${
      pregunta.answers[combinacionesOrdenPreguntas[i]]
    }" class="btn_Respuestas" onclick="evaluarRespuesta('${
      pregunta.answers[combinacionesOrdenPreguntas[i]]
    }')">${pregunta.answers[combinacionesOrdenPreguntas[i]]}</button>`;
  }
  console.log(htmlButtonsRespuesta);
  console.log(combinacionesOrdenPreguntas);

  imgJugadorPreguntado.innerHTML = `
        <h1>${playerPregunta}</h1>
        ${avataresSeleccionados[playerPregunta]}
        <p>${positionPlayers.nameTeams[playerPregunta]}</p>
        <img id="continuarJuego_Pregunta" src="img/paginaPresentacion/flecha.png" onclick="mostrarPaginas(3,5)" alt="------>"/>`;
  contentRespuestas.innerHTML = htmlButtonsRespuesta;
  continuarJuego_Pregunta.style = "display:none;";
}

async function evaluarRespuesta(respuesta) {
  buttonRespuestaUser = document.getElementById(respuesta);
  buttonRespuestaCorrecta = document.getElementById(pregunta.correctAnswer);
  await dalay(500);
  if (respuesta != pregunta.correctAnswer) {
    sonidoRespuestaIncorrecta.play();
    switch (tipoPregunta) {
      case 1:
        positionPlayers.penalidades[playerPregunta] += 1;
        break;
      case 2:
        positionPlayers.penalidades[playerPregunta] += 2;
        break;
      case 3:
        positionPlayers.penalidades[playerPregunta] += 3;
        break;
    }

    buttonRespuestaUser.style =
      "background-color: red; color:white;transform: scale(1.2);";
    buttonRespuestaCorrecta.style = "background-color: green;color:white;";
  } else {
    sonidoRespuestaCorrecta.play();
    buttonRespuestaUser.style =
      "background-color: green;color:white;transform: scale(1.2);";
  }
  var listButtonsRespuestas = document.getElementsByClassName("btn_Respuestas");
  for (let i = 0; i < listButtonsRespuestas.length; i++) {
    listButtonsRespuestas[i].disabled = true;
  }
  continuarJuego_Pregunta.style = "display:block;";
}

// dalay de tiempos
function dalay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
