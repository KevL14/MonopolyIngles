var cantidadJugadores = 2;
var imgAvatares = {
    avatar1:'<img class="iconsPlayers" id="iconPlayer1" src="img/iconPlayer1.png" alt="iconPlayer1">',
    avatar2:'<img class="iconsPlayers" id="iconPlayer2" src="img/iconPlayer2.jpeg" alt="iconPlayer2">',
    avatar3:'<img class="iconsPlayers" id="iconPlayer3" src="img/iconPlayer3.png" alt="iconPlayer3">',
    avatar4:'<img class="iconsPlayers" id="iconPlayer4" src="img/iconPlayer4.png" alt="iconPlayer4">'
}
var avataresSeleccionados = {
    player1:"",
    player2:"",
    player3:"",
    player4:"",
}
// seccion 1 de eleccion de cantidad de jugadores 
function cantidadJugadoresPartida(numJugadores){

    // busco los botones de la cantidad de participantes y los reseteo 
    var btnJugadoresPartida = document.getElementsByClassName("btn_CantJugadores");
    // reseteo de botones
    for (let index = 0; index < btnJugadoresPartida.length; index++) {
        btnJugadoresPartida[index].style="border: black 5px solid";
    }
    // le añado el estilo al boton de la cantidades de jugadores a participar
    cantidadJugadores = numJugadores;
    document.getElementById(`seleccionCantJugadores${cantidadJugadores}`).style="border:5px green solid;";

    // reseteo los perfiles de los jugadores para que no se vean 
    var perfilPlayers = document.getElementsByClassName("contenedorInfoPlayers");
    for (let index = 0; index < perfilPlayers.length; index++) {
        perfilPlayers[index].classList.remove("mostrar");
    }
    // habilito los perfiles solo de lacantidad de jugadores que jugaran
    for (let index = 0; index < cantidadJugadores; index++) {
        perfilPlayers[index].classList.add("mostrar");
        
    }
}


// seccion 2 seleccion de avatares y nombre equipo 
function seleccionAvatar(numAvatar,idSelect){
    // agarro el lugar donde imprimo la preimagen
    var imprimirAvatarElegido = document.getElementById(`imgAvatarSeleccionado${idSelect}`);
    // le imprimo segun la imagen seleccionada 
    var imgAvatarseleccionado;
    switch (numAvatar) {
        case "1":
            imprimirAvatarElegido.innerHTML = imgAvatares.avatar1;
            imgAvatarseleccionado= imgAvatares.avatar1;
            break;
        case "2":
            imprimirAvatarElegido.innerHTML = imgAvatares.avatar2;
            imgAvatarseleccionado = imgAvatares.avatar2
                        break;
        case "3":
            imprimirAvatarElegido.innerHTML = imgAvatares.avatar3;
            imgAvatarseleccionado = imgAvatares.avatar3
                        break;
        case "4":
            imprimirAvatarElegido.innerHTML = imgAvatares.avatar4;
            imgAvatarseleccionado = imgAvatares.avatar4
                        break;
        default:
            imprimirAvatarElegido.style="border:1px red solid";
            break;
    }
    // asigno la imagen que selecciono cada jugador 
    switch (idSelect) {
        case 1:
            avataresSeleccionados.player1 = imgAvatarseleccionado

            break;
        case 2:
            avataresSeleccionados.player2 = imgAvatarseleccionado

            break;
        case 3:
            avataresSeleccionados.player3 = imgAvatarseleccionado

            break;
            avataresSeleccionados.player4 = imgAvatarseleccionado

        case 4:

            break;
        default:
            break;
    }
    

}