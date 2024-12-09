"use strict";
class Conta {
    numeroConta;
    titular;
    constructor(titular) {
        this.numeroConta = this.gerarNumeroConta();
        this.titular = titular;
    }
    //metodo para gerar numeros aleatorios de conta
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
//criando uma classe usando o extends(herdando da classe conta)
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    titular;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        this.titular = titular;
    }
}
const cont1 = new ContaPF(12345, "mateus");
const cont2 = new ContaPJ(222, "Lucas");
console.log(cont1.titular);
console.log(cont1.numeroConta);
console.log(cont2.titular);
console.log(cont2.numeroConta);
