"use strict";
class Livro {
    titulo;
    autor;
    paginas;
    lidas;
    constructor(titulo, autor, paginas, lidas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lidas = lidas;
    }
    //metodo para adicionar as paginas ao parametro de paginas lidas
    ler(paginasLidas) {
        if (paginasLidas > this.paginas) {
            console.log("Erro o numero de paginas lidas é maior que o numero de paginas do livro");
        }
        else {
            this.lidas += paginasLidas;
            console.log("Paginas lidas salvas com sucesso ");
        }
    }
    //exibe o progresso da leitura com base em duas condicionais
    statusLeitura() {
        if (this.lidas === this.paginas) { // condicional que verifica se o numero de paginas lidas é igual ao numero de paginas do livro
            console.log(`o Livro ${this.titulo} do autor ${this.autor} foi concluido`);
        }
        else { //caso o numero de paginas do usuario nao for igual a quantidade de paginas do livro, vai ser exibido o progresso para o usuario
            let progressoLeitura = this.paginas - this.lidas;
            console.log(`leitura em andamento você leu ${this.lidas} paginas  falta exatas ${progressoLeitura} paginas`);
        }
    }
}
const livroOne = new Livro("Harry Potter e a camera secreta", "J. K. Rowling", 224, 0);
const livroTwo = new Livro("IT. A coisa", "Stephen King", 300, 0);
const livroFour = new Livro("O Iluminado", "Stephen King", 400, 10);
livroOne.ler(100);
livroTwo.ler(200);
livroOne.statusLeitura();
livroTwo.statusLeitura();
