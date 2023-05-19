var idPaginaSelecionada = "";
var listPaginas;
// trae un numero de pagina a la que se pasara
function mostrarPaginas(page){
    // creo la lista de todas las paginas existentes
    listPaginas = document.getElementsByClassName("paginas")
    for (let index = 0; index < listPaginas.length; index++) {
        // las oculto todas las paginas 
        listPaginas[index].classList.remove("mostrar");
        listPaginas[index].classList.add("ocultar");
    }
    // ahora solo muestro la pagina que voy a mostrar 
    idPaginaSelecionada=document.getElementById(`block${page}`)
    idPaginaSelecionada.classList.remove("ocultar")
    idPaginaSelecionada.classList.add("mostrar")
    

    // imprimo el tablero y los jugadores en tablero, se hace aqui para que ya inicie con los valores ya asignados
    document.getElementById("block2").innerHTML=  tablaDeJuego;
    document.getElementById(`position0`).innerHTML= `${avataresSeleccionados.player1} ${avataresSeleccionados.player2}`;
    actulizarPosiciones()
    document.getElementById("dado").innerHTML = '<img src="img/carasDado/cara1Fondo.png" alt="1"/>';
}