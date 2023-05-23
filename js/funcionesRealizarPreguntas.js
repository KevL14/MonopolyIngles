var casillasPreguntasNormales=[1,3,5,7,9,11,14,17,20,23,25,27,29]
var casillasPreguntasBomba=[6,13,19,24,31]
var casillasPreguntasDificiles=[4,10,22,28,30]
var imgTarjetasPreguntas={
    preguntaNormal:`<img src="img/Tarjetas/tarjeta preguntas.png" alt="">`,
    preguntaBomba:`<img src="img/Tarjetas/targeta retos.png" alt="">`,
    preguntaDificil:`<img src="img/Tarjetas/targeta peligro.png" alt="">`
}
// pagina de respuesta
var imgTarjetaType;
var imgTarjeta = document.getElementById("imgTarjetaPregunta")
var textTarjeta = document.getElementById("textPregunta")
var btn1_respuesta=document.getElementById("btnRespuesta1")
var btn2_respuesta=document.getElementById("btnRespuesta2")
var btn3_respuesta=document.getElementById("btnRespuesta3")
var btn4_respuesta=document.getElementById("btnRespuesta4")


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
function escogerPreguntaAzar(tipoPregunta){
    var numPregunta ;
    var pregunta;
    switch (tipoPregunta) {
        case 1:
            numPregunta = Math.floor(Math.random() * easyQuestions.length)
            pregunta = easyQuestions[numPregunta]
            break;
        case 2:
            numPregunta = Math.floor(Math.random() * mediumQuestions.length)
            pregunta = mediumQuestions[numPregunta]
            break;
            case 3:
                numPregunta = Math.floor(Math.random() * hardQuestions.length)
                pregunta = hardQuestions[numPregunta]
                break;
            
        default:
            break;
    }
    imgTarjeta.innerHTML = imgTarjetaType + `<span id="textPregunta">${pregunta.question}</span>`
    btn1_respuesta.innerHTML=pregunta.answers[0]
    btn2_respuesta.innerHTML=pregunta.answers[1]
    btn3_respuesta.innerHTML=pregunta.answers[2]
    btn4_respuesta.innerHTML=pregunta.answers[3]
    
    console.log(pregunta)
}
