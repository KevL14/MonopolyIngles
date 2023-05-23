var idPaginaSelecionada = "";
var listPaginas;
var ultimaPagina
var mostrarTipo;
// trae un numero de pagina a la que se pasara
function mostrarPaginas(page,anteriorPage){
    if (page == 0 && anteriorPage == 0) {
        mostrarTipo = "mostrar_ModeFlex"
        idPaginaSelecionada=document.getElementById(`block${ultimaPagina}`) 
    }else if(page ==5||page ==2){
        mostrarTipo = "mostrar_ModeFlex"
        idPaginaSelecionada=document.getElementById(`block${page}`)
    }
    else{
        mostrarTipo = "mostrar"
        idPaginaSelecionada=document.getElementById(`block${page}`)
    }
    ultimaPagina = anteriorPage
    // creo la lista de todas las paginas existentes
    listPaginas = document.getElementsByClassName("paginas")
    for (let index = 0; index < listPaginas.length; index++) {
        // las oculto todas las paginas 
        listPaginas[index].classList.remove("mostrar");
        listPaginas[index].classList.remove("mostrar_ModeFlex");
        listPaginas[index].classList.add("ocultar");

    }
    // ahora solo muestro la pagina que voy a mostrar 
    idPaginaSelecionada.classList.remove("ocultar")
    idPaginaSelecionada.classList.add(mostrarTipo)
    

    // imprimo el tablero y los jugadores en tablero, se hace aqui para que ya inicie con los valores ya asignados
   if(page ==3){
    actualizarPosiciones()
    }
}