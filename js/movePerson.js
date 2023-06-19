var numeroJugadoresMismaPosicion = [];
var jugadoresjuntosAnteriores = "";
var player;
var rutaPregunta;

function actualizarPosiciones(ruta) {
  rutaPregunta = ruta;
  if (ruta == 0){
    limpiarTablero();
    animarMovimiento();
  }
  
  // verificarJugadoresMismaPosicion();
  // imprimirJugadoresJuntos();
  // imprimirJugadoresAnteriores();
}
// limpiarTablero: Limpia el tablero y muestra la tabla de juego y la imagen del dado actualizada.
function limpiarTablero() {
  document.getElementById("block3").innerHTML = tablaDeJuego;
  actualizarImgDado();
  informacionRondaJugadores(0)
  document.getElementById("titleRonda_numeroRonda").innerHTML=`Round ${rondaActual}`
  mostrarColor_Turno()

}
// mostrarNuevasPosiciones: Muestra las nuevas posiciones de los jugadores en sus respectivas casillas.
// Función para animar el movimiento de los jugadores
async function animarMovimiento() {
  var turnoplayer = turnoJugador
  var player="player"+turnoplayer
    var posicionActual = positionPlayers.posicionAnterior[player];
    var posicionNueva =positionPlayers[player]; // Función que obtiene la nueva posición asignada al jugador
    // verifico si la posicion del jugador ya supero la vuelta y modifico sus numeros segun la vuelta
    if(positionPlayers[player]>=32){
      posicionNueva=33;
      positionPlayers[player] = 0;
      positionPlayers.vueltas[player] += 1
    }
    while (posicionActual<posicionNueva){
      // Realizar animación de movimiento
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML=avataresSeleccionados[player];
         // Actualizar posición nueva
          await dalay(500)
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML="";

        switch (player) {
          case "player1":
            positionPlayers.posicionAnterior.player1 +=1

            if (positionPlayers.player3 > 31){
              positionPlayers.player1 = 0;
              positionPlayers.vueltas.player1 += 1
              }
            break;
          case "player2":
              positionPlayers.posicionAnterior.player2 +=1
              if (positionPlayers.player2 > 31){
                positionPlayers.player2 = 0;
                positionPlayers.vueltas.player2 += 1
                }
              break;
          case "player3":
            positionPlayers.posicionAnterior.player3 +=1
            if (positionPlayers.player3 > 31){
              positionPlayers.player3 = 0;
              positionPlayers.vueltas.player3 += 1
              }
            break;
          case "player4":
            positionPlayers.posicionAnterior.player4 +=1
            if (positionPlayers.player4 > 31){
            positionPlayers.player4 = 0;
            positionPlayers.vueltas.player4 += 1
            }
              break;
        
          default:

            break;
        }
        for (let  i= 1; i <= cantidadJugadores;i++) {
          if (i != turnoplayer){
            var printJugadoresRestantes = `player${i}`
            document.getElementById("position" + positionPlayers[printJugadoresRestantes]).innerHTML=avataresSeleccionados[printJugadoresRestantes];
          }

          
        }
        // Limpiar posición actual
        if(posicionActual<32){
          posicionActual+=1
          if(posicionActual==32){
            posicionActual=0
            posicionNueva=0
            positionPlayers.posicionAnterior[player]=0
          }
        }
         
        
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML= avataresSeleccionados[player]
      }
      
      verificarJugadoresMismaPosicion();
      imprimirJugadoresJuntos(); 
      imprimirJugadoresAnteriores();
      await dalay(1500)
      mostrarPregunta(player);

      

}

  

//verificarJugadoresMismaPosicion: Verifica si hay jugadores en las mismas posiciones y actualiza la variable numeroJugadoresMismaPosicion.
function verificarJugadoresMismaPosicion() {
  numeroJugadoresMismaPosicion = obtenerClavesValoresIguales(positionPlayers);
}
// imprimirJugadoresJuntos: Imprime los jugadores que se encuentran juntos en una misma posición.
function imprimirJugadoresJuntos() {
  var numCombinacionesPosibles = numeroJugadoresMismaPosicion.length - 1;
  var jugadoresJuntos = numeroJugadoresMismaPosicion[numCombinacionesPosibles];
  if (jugadoresJuntos != undefined) {
    if (jugadoresJuntos.length > 0) {
      var imprimirJugadoresJuntos = "";

      for (let i = 0; i < jugadoresJuntos.length; i++) {
        var player = jugadoresJuntos[i];
        imprimirJugadoresJuntos += avataresSeleccionados[player];
        document.getElementById("position" + positionPlayers[player]).innerHTML = imprimirJugadoresJuntos;
      }
    }
  }
}
// imprimirJugadoresAnteriores: Imprime los jugadores que estaban juntos en la jugada anterior, en caso de haberlos.
function imprimirJugadoresAnteriores() {
  if (cantidadJugadores == 4) {
    var elementosPenultimaJugada = numeroJugadoresMismaPosicion[numeroJugadoresMismaPosicion.length - 2];

    if (elementosPenultimaJugada && elementosPenultimaJugada.length > 0) {
      jugadoresjuntosAnteriores = "";

      for (let i = 0; i < 2; i++) {
        var player = elementosPenultimaJugada[i];
        jugadoresjuntosAnteriores += avataresSeleccionados[player];
        document.getElementById("position" + positionPlayers[player]).innerHTML =
          jugadoresjuntosAnteriores;
      }
    }
  }
}
//obtenerClavesValoresIguales: Obtiene las claves (nombres de los jugadores) cuyos valores (posiciones) son iguales en el objeto positionPlayers.
function obtenerClavesValoresIguales(objeto) {
  var clavesValoresIguales = {};

  Object.keys(objeto).forEach((clave) => {
    var valor = objeto[clave];
    if (Object.values(objeto).filter((v) => v === valor).length > 1) {
      if (!clavesValoresIguales.hasOwnProperty(valor)) {
        clavesValoresIguales[valor] = [clave];
      } else {
        clavesValoresIguales[valor].push(clave);
      }
    }
  });

  return Object.values(clavesValoresIguales);
}



// sistema de informacion del tablero
function informacionRondaJugadores(status) {
// primero solo muestra las cartas en el tablero que debe mostrar
  for (let i = 1; i <= cantidadJugadores; i++) {
        document.getElementById(`infoRondas_Player${i}`).style="display:flex;"
      }
  switch (status) {
    case 0:
      // ahora miestro las estadisticas de cada jugador en su respectiva carta 
      for (let i = 1; i <= cantidadJugadores; i++) {
        document.getElementById(`infoImg_Table_Player${i}`).src=avataresSeleccionados.src[`player${i}`]
        document.getElementById(`infoVueltas_Table_Player${i}`).innerHTML=`Laps: ${positionPlayers.vueltas[`player${i}`]}`
        document.getElementById(`infoPenalidad_Table_Player${i}`).innerHTML=`Penalties: ${positionPlayers.penalidades[`player${i}`]}`
        document.getElementById(`infoNombre_Table_Player${i}`).innerHTML=positionPlayers.nameTeams[`player${i}`]
  
      }
      break;
    case 1:
      for (let i = 1; i <= cantidadJugadores; i++) {
        document.getElementById(`infoPenalidad_Table_Player${i}`).innerHTML=`Penalties: ${positionPlayers.penalidades[`player${i}`]}`
      }
      break;
    default:
      break;
  }
}
function mostrarColor_Turno() {
  document.getElementById(`infoRondas_Player${turnoJugadorAnterior}`).style="background-color: none;display:flex;"
  document.getElementById(`infoRondas_Player${turnoJugador}`).style=`background-color: ${colorTarjetaRonda};display:flex;`
  
}
// dalay de tiempos 
function dalay(time) {
  return new Promise(resolve=>
    setTimeout(resolve,time)
    )
}
// aparente error aqui al imprimir al jugador 
// Llamar a la función para ejecutar el código
// actualizarPosiciones();

