var casillasPreguntasNormales=[1,3,5,7,9,11,14,17,20,23,25,27,29]
var casillasPreguntasBomba=[6,13,19,24,31]
var casillasPreguntasDificiles=[4,10,22,28,30]
var tipoPregunta;
var pregunta;
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
    htmlButtonsRespuesta+=`<button id="btnRespuesta1" onclick="evaluarRespuesta("${pregunta.answers[0]}")">${pregunta.answers[0]}</button>`
    htmlButtonsRespuesta+=`<button id="btnRespuesta2" onclick="evaluarRespuesta("${pregunta.answers[1]}")">${pregunta.answers[1]}</button>`
    htmlButtonsRespuesta+=`<button id="btnRespuesta3" onclick="evaluarRespuesta("${pregunta.answers[2]}")">${pregunta.answers[2]}</button>`
    htmlButtonsRespuesta+=`<button id="btnRespuesta4" onclick="evaluarRespuesta("${pregunta.answers[3]}")">${pregunta.answers[3]}</button>`
    contentRespuestas.innerHTML = htmlButtonsRespuesta
}

function evaluarRespuesta(respuesta) {
    alert(pregunta.correctAnswer)
    alert(respuesta)
    buttonRespuestaUser = document.getElementById(respuesta)
    buttonRespuestaCorrecta = document.getElementById(pregunta.correctAnswer)
    if (respuesta != pregunta.correctAnswer) {
     switch (tipoPregunta) {
        case 1:
            positionPlayers.penalidades[player] +=1
            break;
        case 2:
            positionPlayers.penalidades[player] +=2
            break;
        case 3:
            positionPlayers.penalidades[player] +=3
            break;
     }

     buttonRespuestaUser.style = "background-color: red"
     buttonRespuestaCorrecta.style = "background-color: green"
    }
}
