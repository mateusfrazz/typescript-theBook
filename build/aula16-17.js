"use strict";
//a classe é o modelo do objeto
class Computador {
    nome = "";
    ram;
    cpu;
    ligado;
    //metodo função construtora da classe Computador, é executado ao instanciar a classe
    constructor(nome, ram, cpu) {
        this.nome = nome; //this ( este) se refere a classe //modo de leitura : esse nome da classe computador recebe o paramentro nome
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
//instanciando um objeto da classe computador( modelo)
const c11 = new Computador("Rapidão", 64, 10);
const c12 = new Computador("Carão", 32, 5);
const c13 = new Computador("Gamer", 128, 10);
//atribuindo valor a um objeto da classe Computador
console.log(c11.nome);
