import Biblioteca from "./Biblioteca";
import Livro from "./Livro";
import leia from "readline-sync"
var opcao =0;

var biblioteca = new Biblioteca;


do{

    console.log("---------------MENU------------------");

    opcao = leia.keyInSelect(["ADICIONAR UM LIVRO", "REMOVER UM LIVRO", "BUSCAR UM LIVRO", "MOSTRAR DETALHES DO LIVRO"]) +1;

    switch(opcao){
        case 1: biblioteca.adicionarLivro
            
            break;

        case 2:biblioteca.buscarLivro
          
            break;

        case 3:biblioteca.removerLivro
            ;
            break;

     

    
    }


}while(opcao !== 0);