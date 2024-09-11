import Livro from "./Livro";

export default class livroFisico extends Livro {
   public numeroPaginas : number;

   constructor(titulo:string, autor: string, isbn: string, numeroPaginas : number){
        super(titulo, autor, isbn);
        this.numeroPaginas = numeroPaginas;
   
}


public override exibirDetalhes(): void{

    console.log(`NÚMERO DE PÁGINAS: ${this.numeroPaginas}`);

}

}