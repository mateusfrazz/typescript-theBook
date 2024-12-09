"use strict";
class Pessoa {
    nome;
    idade;
    idUser;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.idUser = this.definirIdUser(); // definindo o metodo, dessa forma vai ser gerado um id ao instanciar a classe 
    }
    //metodo para gerar um ID aleatorio para o user
    definirIdUser() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    acessarId() {
        return `ID: ${this.idUser}`;
    }
}
//criando a classe Funcionario que herda da classe pai Pessoa
class Funcionario extends Pessoa {
    nome;
    idade;
    cargo;
    salario;
    constructor(nome, idade, cargo, salario) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
    obterSalario() {
        console.log(`O salario do funcionario ${this.nome} é de $${this.salario} reais`);
    }
    calcularBonus() {
        let bonus = this.salario * 0.1;
        return `Bônus R$${bonus}`;
    }
    exibirDados() {
        console.log(`${this.acessarId()}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario: R$${this.salario}`);
        console.log(`${this.calcularBonus()}`); //chamando o metodo calcularBonus
        console.log("---------------------------------------");
    }
}
const funcionario1 = new Funcionario("Mateus", 24, "Desenvolvedor", 2000);
const funcionario2 = new Funcionario("Lucas", 26, "Desenvolvedor Back-End", 9000);
funcionario1.exibirDados();
funcionario2.exibirDados();
