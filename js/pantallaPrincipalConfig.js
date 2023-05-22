var cantidadJugadores = 1;



var avataresSeleccionados = {
    player1:"",
    player2:"",
    player3:"",
    player4:"",
    numeroAvatarSeleccionado:{
        player1:1,
        player2:1,
        player3:1,
        player4:1,
    }
    
}

// seccion 1 de eleccion de cantidad de jugadores 
function cantidadJugadoresPartida(numJugadores){

    // busco los botones de la cantidad de participantes y los reseteo 
    var btnJugadoresPartida = document.getElementsByClassName("btn_CantJugadores");
    // reseteo de botones
    for (let index = 0; index < btnJugadoresPartida.length; index++) {
        btnJugadoresPartida[index].style="color:white;background-color: #244C76;";
    }
    // le añado el estilo al boton de la cantidades de jugadores a participar
    cantidadJugadores = numJugadores;
    document.getElementById(`seleccionCantJugadores${cantidadJugadores}`).style="color:#244C76;background-color:white ;";

    // reseteo las clases de los perfiles de los jugadores para luego ocultarlos
    var perfilPlayers = document.getElementsByClassName("contenedorInfoPlayers");
    for (let index = 0; index < cantidadJugadores; index++) {
        perfilPlayers[index].classList.remove("mostrarAvatar");
        perfilPlayers[index].classList.remove("ocultar");
    }
    // reseteo para que no se vea ninguno
    for (let index = 0; index < perfilPlayers.length; index++) {
        perfilPlayers[index].classList.add("ocultar");
        
    }
    // habilito los perfiles solo de lacantidad de jugadores que jugaran
    for (let index = 0; index < cantidadJugadores; index++) {
        perfilPlayers[index].classList.remove("ocultar");
        perfilPlayers[index].classList.add("mostrarAvatar");
        
    }
    for (let i = 1; i <= cantidadJugadores; i++) {
        seleccionAvatar(i)
    }
}



// inicializo por defecto los avatares 


seleccionAvatar(1)
// seccion 2 seleccion de avatares y nombre equipo 
function seleccionAvatar(idSelect){
    var numid=idSelect
    var playerSeleccion = "player"+numid;
    avataresSeleccionados.numeroAvatarSeleccionado[playerSeleccion] +=1
    if(avataresSeleccionados.numeroAvatarSeleccionado[playerSeleccion] == 9){
        avataresSeleccionados.numeroAvatarSeleccionado[playerSeleccion]=1
    }
    var numAvatar = avataresSeleccionados.numeroAvatarSeleccionado[playerSeleccion] 
    var nameNumAvatar = "avatar"+numAvatar

    

    var imgAvatares = {
        avatar1:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player1.png" alt="iconPlayer1">`,
        avatar2:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player2.png" alt="iconPlayer2">`,
        avatar3:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player3.png" alt="iconPlayer3">`,
        avatar4:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player4.png" alt="iconPlayer4">`,
        avatar5:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player5.png" alt="iconPlayer5">`,
        avatar6:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player6.png" alt="iconPlayer6">`,
        avatar7:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player7.png" alt="iconPlayer7">`,
        avatar8:`<img class="iconsPlayers" id="iconPlayer${idSelect}" src="img/personajes/Player8.png" alt="iconPlayer8">`,
      }
    // agarro el lugar donde imprimo la preimagen
    var imprimirAvatarElegido = document.getElementById(`seleccionAvatar${idSelect}`);

    // asigno la imagen que selecciono cada jugador 
    switch (idSelect) {
        case 1:
            avataresSeleccionados.player1 =imgAvatares[nameNumAvatar]
            imprimirAvatarElegido.innerHTML = avataresSeleccionados.player1
           // reseteo los que siguen
            avataresSeleccionados.player2 = ""
            avataresSeleccionados.player3=""
            avataresSeleccionados.player4=""
            break;
        case 2:
            avataresSeleccionados.player2 = imgAvatares[nameNumAvatar]
            imprimirAvatarElegido.innerHTML = avataresSeleccionados.player2
            avataresSeleccionados.player3=""
            avataresSeleccionados.player4=""
            break;
        case 3:
            avataresSeleccionados.player3 = imgAvatares[nameNumAvatar]
            imprimirAvatarElegido.innerHTML = avataresSeleccionados.player3
            avataresSeleccionados.player4=""
        break;
        case 4:
            avataresSeleccionados.player4 = imgAvatares[nameNumAvatar]
            imprimirAvatarElegido.innerHTML = avataresSeleccionados.player4

        break;


        default:
            break;
    } 

}
