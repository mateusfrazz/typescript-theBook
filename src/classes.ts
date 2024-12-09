//para utilizar essa classe em outro arquivo usamos o export 

class Pessoa{
    nome:string
    altura:number

    constructor(nome:string,altura:number){
        this.nome = nome;
        this.altura = altura;
    }
}

class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
 }

 export default Pessoa //definindo a classe como um export padrão

 export { Objeto} //Definindo um export unico com todas as classes 