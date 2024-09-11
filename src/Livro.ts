

export default class Livro {
    
    constructor(titulo:string, autor: string, isbn: string){

        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;

    }

    public titulo : string;
    public autor : string;
    public isbn : string;


    exibirDetalhes(): void{

        console.log (`O LIVRO ${this.titulo} DO AUTOR ${this.autor} CÓDIGO DO ISBN ${this.isbn}`)

    }

}
 
