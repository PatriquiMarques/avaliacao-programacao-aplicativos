import Livro from "./Livro";
import ebook from "./Ebook";
import leia from "readline-sync"
import livroFisico from "./LivroFisico";

export default class Biblioteca {

  
    public livros : Livro[] = [];



    public adicionarLivro(): void{
         
        livro : Livro; 

      
            var titulo = leia.question  ("DIGITE O TÍTULO DO LIVRO");
            var autor = leia.question  ("DIGITE O AUTOR DO LIVRO");
            var isbn = leia.question  ("DIGITE O ISBN DO LIVRO");
            var tipoLivro = leia.questionInt (["LIVRO FÍSICO", "EBOOK"])+1;
            
            livro:Livro;
            
        if(tipoLivro === 1){
            var numeroPaginas = leia.questionInt  ("DIGITE O NÚMERO DE PÁGINA");
             var livro = new livroFisico(titulo, autor, isbn, numeroPaginas)
          

            this.livros.push (livro);
        }else {
            
            var tamanhoArquivo = leia.questionInt  ("DIGITE O TAMANHO DO ARQUIVO");
            var livros = new ebook(titulo, autor, isbn, tamanhoArquivo)
            this.livros.push (livros);
                }

           
        }

    

    public removerLivro(): void{

        var titulo = leia.question  ("DIGITE O TÍTULO DO LIVRO");
  
        for (var i = 0; i<this.livros.length; i++){
            if (titulo === this.livros[i].titulo){
                this.livros.splice(i, 1)
                console.log("LIVRO EXCLUÍDO  COM SUCESSO")
                return;
            }
        else{
            console.log("LIVRO NÃO ENCONTRADO")
        }
        
    }
}
   public buscarLivro(): void{

        var insb = leia.question  ("DIGITE O TÍTULO DO LIVRO");

        for (var i = 0; i<this.livros.length; i++){
            if (insb === this.livros[i].isbn){
                console.log (` ENCONTRAMOS O LIVRO ${this.livros[i].titulo} DO AUTOR ${this.livros[i]} CÓDIGO DO ISBN ${this.livros[i]} `)
                return;
            }
            else{
                console.log("LIVRO NÃO ENCONTRADO")
             }
        
        
    }

    }
}