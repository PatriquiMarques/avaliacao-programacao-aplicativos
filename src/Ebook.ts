import Livro from "./Livro";
import leia from "readline-sync"

export default class ebook extends Livro {
    public tamanhoArquivo : number;

   constructor(titulo:string, autor: string, isbn: string, tamanhoArquivo : number){
        super(titulo, autor, isbn);
        this.tamanhoArquivo = tamanhoArquivo;
   
}


public override exibirDetalhes(): void{

    console.log(`NÚMERO DE PÁGINAS: ${this.tamanhoArquivo}`);

}

}