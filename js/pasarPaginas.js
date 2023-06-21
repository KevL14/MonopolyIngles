var idPaginaSelecionada = "";
var listPaginas;
var ultimaPagina;
var mostrarTipo;
// trae un numero de pagina a la que se pasara
function mostrarPaginas(paginaActual, paginaAnterior) {
  if (paginaActual == 3 && paginaAnterior == 2) {
    var nombresValidados = validarNamesTeams();
    if (nombresValidados == true) {
      mostrarNuevaPagina(paginaActual, paginaAnterior);
    } else {
      alert(
        "Los nombre de los participantes debe de ser (minimo) 4 caracteres"
      );
    }
  } else {
    mostrarNuevaPagina(paginaActual, paginaAnterior);
  }
  if(paginaActual==1 && paginaAnterior==4){
    reset()
  }

  async function mostrarNuevaPagina(page, anteriorPage) {
    if (page == 0 && anteriorPage == 0) {
      mostrarTipo = "mostrar_ModeFlex";
      idPaginaSelecionada = document.getElementById(`block${ultimaPagina}`);
    } else if (page == 1 || page == 5 || page == 2 || page == 3 || page == 4) {
      mostrarTipo = "mostrar_ModeFlex";
      idPaginaSelecionada = document.getElementById(`block${page}`);
    } else {
      mostrarTipo = "mostrar";
      idPaginaSelecionada = document.getElementById(`block${page}`);
    }

    ultimaPagina = anteriorPage;
    // creo la lista de todas las paginas existentes
    listPaginas = document.getElementsByClassName("paginas");
    for (let index = 0; index < listPaginas.length; index++) {
      // las oculto todas las paginas
      listPaginas[index].classList.remove("mostrar");
      listPaginas[index].classList.remove("mostrar_ModeFlex");
      listPaginas[index].classList.add("ocultar");
    }
    // ahora solo muestro la pagina que voy a mostrar
    idPaginaSelecionada.classList.remove("ocultar");
    idPaginaSelecionada.classList.add(mostrarTipo);

    // imprimo el tablero y los jugadores en tablero, se hace aqui para que ya inicie con los valores ya asignados
    // si la pagina es 3 y la anterior es 5, quiere decir que vienen de contestar rutaPregunta, y mando
    // 1 como parametro para que no actulicen nada de las pocisiones y por ende no vuelvan a hacer preguntas
    if (page == 3 && anteriorPage == 5) {
      actualizarPosiciones(1);
      await dalay(1500);
      // aqui se actualiza unicamente las penalizaciones en pantalla de la tabla
      actualizarTurno();
      if (cantidadJugadores == 1) {
        document.getElementById("dado").disabled = false;
      }
    } else if (page == 3) {
      actualizarPosiciones(0);
      mostrarColor_Turno();
    }
  }
}
