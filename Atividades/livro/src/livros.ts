class Livro {
    constructor(
        public titulo:string, 
        public autor:string,
        public paginas:number,
        public lidas:number){
    }
    //metodo para adicionar as paginas ao parametro de paginas lidas
    ler(paginasLidas:number):void{
        if(paginasLidas > this.paginas){
            console.log("Erro o numero de paginas lidas é maior que o numero de paginas do livro");
        } else{
            this.lidas += paginasLidas
            console.log("Paginas lidas salvas com sucesso ")
        }
    } 
   

    //exibe o progresso da leitura com base em duas condicionais
    statusLeitura():void{
        if(this.lidas === this.paginas){ // condicional que verifica se o numero de paginas lidas é igual ao numero de paginas do livro
            console.log(`o Livro ${this.titulo} do autor ${this.autor} foi concluido`);
        }else {  //caso o numero de paginas do usuario nao for igual a quantidade de paginas do livro, vai ser exibido o progresso para o usuario
            let progressoLeitura:number = this.paginas - this.lidas;
           console.log(`leitura em andamento você leu ${this.lidas} paginas  falta exatas ${progressoLeitura} paginas`);
        }
    }
}


const livroOne = new Livro("Harry Potter e a camera secreta", "J. K. Rowling",224, 0);

const livroTwo = new Livro("IT. A coisa", "Stephen King",300, 0);

const livroFour = new Livro("O Iluminado", "Stephen King",400, 10);

livroOne.ler(100);
livroTwo.ler(200);
livroOne.statusLeitura();
livroTwo.statusLeitura();




