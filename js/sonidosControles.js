// sonido ambiente configuracion
switchSonidoAmbiente.checked = false;
var sonidosEfectos = true;
function activarSonido(sonido) {
  var switchUsado;
  var sonidoUsado;
  switch (sonido) {
    case "ambiente":
      switchUsado = document.getElementById("switchSonidoAmbiente");
      sonidoUsado = sonidoAmbiente;
      sonidoAmbiente.loop = true;
      sonidoAmbiente.volume = 0.1; // Volumen al 30%
      if (switchUsado.checked == true) {
        sonidoUsado.play();
      } else {
        sonidoUsado.pause();
      }
      break;
    case "efectos":
      if (sonidosEfectos == true) {
        sonidoDado.volume = 0;
        sonidoRespuestaCorrecta.volume = 0;
        sonidoRespuestaIncorrecta.volume = 0;
        sonidoTurnoJugador.volume = 0;
        sonidosEfectos = false;
      } else {
        sonidoDado.volume = 0.2;
        sonidoRespuestaCorrecta.volume = 0.1;
        sonidoRespuestaIncorrecta.volume = 0.1;
        sonidoTurnoJugador.volume = 0.3;
        sonidosEfectos = true;
      }
      break;
    default:
      break;
  }
}
