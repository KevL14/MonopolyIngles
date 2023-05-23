var numeroJugadoresMismaPosicion = [];
var jugadoresjuntosAnteriores = "";
var player;

function actualizarPosiciones() {
  limpiarTablero();
  animarMovimiento();
  // verificarJugadoresMismaPosicion();
  // imprimirJugadoresJuntos();
  // imprimirJugadoresAnteriores();
}
// limpiarTablero: Limpia el tablero y muestra la tabla de juego y la imagen del dado actualizada.
function limpiarTablero() {
  document.getElementById("block3").innerHTML = tablaDeJuego;
  actualizarImgDado();
}
// mostrarNuevasPosiciones: Muestra las nuevas posiciones de los jugadores en sus respectivas casillas.
// Función para animar el movimiento de los jugadores
async function animarMovimiento() {
  var turnoplayer = turnoJugador
  var player="player"+turnoplayer
    
    
    var posicionActual = positionPlayers.posicionAnterior[player];
    var posicionNueva =positionPlayers[player]; // Función que obtiene la nueva posición asignada al jugador
    

    while (posicionActual<posicionNueva){
      // Realizar animación de movimiento
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML=avataresSeleccionados[player];
         // Actualizar posición nueva
          await dalay(500)
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML="";

        switch (player) {
          case "player1":
            positionPlayers.posicionAnterior.player1 +=1
            
            break;
            case "player2":
              positionPlayers.posicionAnterior.player2 +=1
              break;
              case "player3":
                positionPlayers.posicionAnterior.player3 +=1
                break;
                case "player4":
                  positionPlayers.posicionAnterior.player4 +=1
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
        posicionActual=posicionActual+1
        document.getElementById("position" + positionPlayers.posicionAnterior[player]).innerHTML= avataresSeleccionados[player]
      }
      
      verificarJugadoresMismaPosicion();
      imprimirJugadoresJuntos(); 
      imprimirJugadoresAnteriores();
        await dalay(1500)
      mostrarPregunta(player)
    }

  

//verificarJugadoresMismaPosicion: Verifica si hay jugadores en las mismas posiciones y actualiza la variable numeroJugadoresMismaPosicion.
function verificarJugadoresMismaPosicion() {
  numeroJugadoresMismaPosicion = obtenerClavesValoresIguales(positionPlayers);
}
// imprimirJugadoresJuntos: Imprime los jugadores que se encuentran juntos en una misma posición.
function imprimirJugadoresJuntos() {
  var numCombinacionesPosibles = numeroJugadoresMismaPosicion.length - 1;
  var jugadoresJuntos = numeroJugadoresMismaPosicion[numCombinacionesPosibles];

  if (jugadoresJuntos.length > 0) {
    var imprimirJugadoresJuntos = "";

    for (let i = 0; i < jugadoresJuntos.length; i++) {
      var player = jugadoresJuntos[i];
      imprimirJugadoresJuntos += avataresSeleccionados[player];
      document.getElementById("position" + positionPlayers[player]).innerHTML =
        imprimirJugadoresJuntos;
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
// dalay de tiempos 
function dalay(time) {
  return new Promise(resolve=>
    setTimeout(resolve,time)
    )
}
// Llamar a la función para ejecutar el código
actualizarPosiciones();

