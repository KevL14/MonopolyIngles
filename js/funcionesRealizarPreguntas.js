var casillasPreguntasNormales=[1,3,5,7,9,11,14,17,20,23,25,27,29]
var casillasPreguntasBomba=[6,13,19,24,31]
var casillasPreguntasDificiles=[4,10,22,28,30]
var tipoPregunta;
var pregunta;
var playerPregunta;
var imgTarjetasPreguntas={
    preguntaNormal:`<img src="img/Tarjetas/tarjeta preguntas.jpg" alt="">`,
    preguntaBomba:`<img src="img/Tarjetas/tarjeta retos.jpg" alt="">`,
    preguntaDificil:`<img src="img/Tarjetas/tarjeta peligro.jpg" alt="">`
}
// pagina de respuesta
var imgTarjetaType;
var imgTarjeta = document.getElementById("imgTarjetaPregunta")
var textTarjeta = document.getElementById("textPregunta")
var contentRespuestas = document.getElementById("contenedorRespuestas")


function mostrarPregunta(jugador) {
    var hacerPreguntaNormal=false;
    var hacerPreguntaBomba=false;
    var hacerPreguntaDificil=false;
    playerPregunta = jugador

    // verifico a ver si alguna de las posiciones del jugador es de alguna casilla de pregunta 
    for (let index = 0; index < casillasPreguntasNormales.length; index++) {
        if (positionPlayers[jugador]==casillasPreguntasNormales[index]) {
            hacerPreguntaNormal = true
        }
    }
    for (let index = 0; index < casillasPreguntasBomba.length; index++) {
        if (positionPlayers[jugador]==casillasPreguntasBomba[index]) {
            hacerPreguntaBomba = true
        }
    }
    for (let index = 0; index < casillasPreguntasDificiles.length; index++) {
        if (positionPlayers[jugador]==casillasPreguntasDificiles[index]) {
            hacerPreguntaDificil = true
        }
    }

    // veo la situacion de cual fue verdadera y hago una accion
    if (hacerPreguntaNormal) {
        imgTarjetaType=imgTarjetasPreguntas.preguntaNormal

        escogerPreguntaAzar(1)
        mostrarPaginas(5,3)
    }else if(hacerPreguntaBomba){
        imgTarjetaType=imgTarjetasPreguntas.preguntaBomba
        escogerPreguntaAzar(2)
        mostrarPaginas(5,3)
    }else if(hacerPreguntaDificil){
        imgTarjetaType=imgTarjetasPreguntas.preguntaDificil
        escogerPreguntaAzar(3)
        mostrarPaginas(5,3)
    }

}
function escogerPreguntaAzar(tipo){
    var numPregunta ;
    tipoPregunta = tipo
    switch (tipo) {
        case 1:
            numPregunta = Math.floor(Math.random() * easyQuestions.length)
            pregunta = easyQuestions[numPregunta]
            break;
        case 2:
            numPregunta = Math.floor(Math.random() * mediumQuestions.length)
            pregunta = mediumQuestions[numPregunta]
            break;
        case 3:
            numPregunta = Math.floor(Math.random() * difficultQuestions.length)
            pregunta = difficultQuestions[numPregunta]
            break;
            
        default:
            break;
    }
    imgTarjeta.innerHTML = imgTarjetaType + `<span id="textPregunta">${pregunta.question}</span>`
    var htmlButtonsRespuesta = "";
    htmlButtonsRespuesta+=`<button id="${pregunta.answers[0]}" class="btn_Respuestas" onclick="evaluarRespuesta('${pregunta.answers[0]}')">${pregunta.answers[0]}</button>`
    htmlButtonsRespuesta+=`<button id="${pregunta.answers[1]}" class="btn_Respuestas" onclick="evaluarRespuesta('${pregunta.answers[1]}')">${pregunta.answers[1]}</button>`
    htmlButtonsRespuesta+=`<button id="${pregunta.answers[2]}" class="btn_Respuestas" onclick="evaluarRespuesta('${pregunta.answers[2]}')">${pregunta.answers[2]}</button>`
    htmlButtonsRespuesta+=`<button id="${pregunta.answers[3]}" class="btn_Respuestas" onclick="evaluarRespuesta('${pregunta.answers[3]}')">${pregunta.answers[3]}</button>`
    imgJugadorPreguntado.innerHTML=`
        <h1>${playerPregunta}</h1>
        ${avataresSeleccionados[playerPregunta]}
        <p>${positionPlayers.nameTeams[playerPregunta]}</p>
        <img id="continuarJuego_Pregunta" src="img/paginaPresentacion/flecha.png" onclick="mostrarPaginas(3,5)" alt="------>"/>`
    contentRespuestas.innerHTML = htmlButtonsRespuesta
    continuarJuego_Pregunta.style="display:none;"
}

async function evaluarRespuesta(respuesta) {
    buttonRespuestaUser = document.getElementById(respuesta)
    buttonRespuestaCorrecta = document.getElementById(pregunta.correctAnswer)
    await dalay(500)
    if (respuesta != pregunta.correctAnswer) {
        sonidoRespuestaIncorrecta.play()
     switch (tipoPregunta) {
        case 1:
            positionPlayers.penalidades[playerPregunta] +=1;
            break;
        case 2:
            positionPlayers.penalidades[playerPregunta] +=2;
            break;
        case 3:
            positionPlayers.penalidades[playerPregunta] +=3;
            break;
     }
    
     buttonRespuestaUser.style = "background-color: red; color:white;transform: scale(1.2);"
     buttonRespuestaCorrecta.style = "background-color: green;color:white;"
    }else{
        sonidoRespuestaCorrecta.play()
        buttonRespuestaUser.style = "background-color: green;color:white;transform: scale(1.2);"      
    }
    var listButtonsRespuestas= document.getElementsByClassName("btn_Respuestas")
    for (let i = 0; i < listButtonsRespuestas.length; i++) {
        listButtonsRespuestas[i].disabled=true;
    }
    continuarJuego_Pregunta.style="display:block;"
}


// dalay de tiempos 
function dalay(time) {
  return new Promise(resolve=>
    setTimeout(resolve,time)
    )
}