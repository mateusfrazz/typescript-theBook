"use strict";
//a classe é o modelo do objeto
class Computador {
    id = 0;
    nome = "";
    ram;
    cpu; //só pode ser acessado o atributo dentro da classe 
    ligado;
    //metodo função construtora da classe Computador, é executado ao instanciar a classe
    constructor(nome, ram, cpu) {
        this.nome = nome; //this ( este) se refere a classe //modo de leitura : esse nome da classe computador recebe o paramentro nome
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    //metodo para exibir os dados de cada objeto instanciado da classe computador
    info() {
        console.log(`Nome:${this.nome}`);
        console.log(`Nome:${this.ram}`);
        console.log(`Nome:${this.cpu}`);
        console.log(`Nome:${this.ligado}`);
        console.log("--------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
    }
}
//instanciando um objeto da classe computador( modelo)
const c11 = new Computador("Rapidão", 64, 10);
const c12 = new Computador("Carão", 32, 5);
const c13 = new Computador("Gamer", 128, 10);
//chamando o metodo info
