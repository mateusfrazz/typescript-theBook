"use strict";
class Conta {
    // public:  acessado de qualquer lugar
    //  private: acessar somente na sua propria classe 
    // protected: acessado somente na sua propria classe e nas classes filho
    numeroConta;
    titular; // usnado protected dessa forma posso utilizar meus paramentros somente nas classes filhos mas nao consigo utilizar fora das classes 
    saldoConta = 0;
    constructor(titular, saldoConta) {
        this.numeroConta = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = saldoConta;
    }
    //metodo para gerar numeros aleatorios de conta
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    logcontaCriada() {
        console.log(`Titular: ${this.titular}`);
    }
    saldo() {
        return `${this.saldoConta}`;
    }
    sacar(valorSaque) {
        if (valorSaque >= this.saldoConta) {
            console.log(`O valor que de ${valorSaque} é maior que o saldo da sua conta, por gentileza digite um valor valido`);
        }
        else {
            this.saldoConta += valorSaque;
            console.log(`O valor de ${valorSaque} foi sacado com sucesso`);
        }
    }
}
//criando uma classe usando o extends(herdando da classe conta)
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular, saldoConta) {
        super(titular, saldoConta); //faz referencia ao parametro da classe pai
        this.cpf = cpf;
    }
    info() {
        super.logcontaCriada(); //acessando o parametro da classe pai com o super e chamando o metodo logcontacriada
        console.log(`CPF: ${this.cpf}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular, saldoConta) {
        super(titular, saldoConta);
        this.cnpj = cnpj;
    }
    infoPJ() {
        super.logcontaCriada(); //acessando o parametro da classe pai com o super e chamando o metodo logcontacriada
        console.log(`CNPJ: ${this.cnpj}`);
    }
}
const cont1 = new ContaPF(12345, "mateus", 2000);
const cont2 = new ContaPJ(222, "Lucas", 4000);
// console.log(cont1.titular);
// console.log(cont1.numeroConta)
// console.log(cont2.numeroConta)
cont1.info();
cont2.infoPJ();
