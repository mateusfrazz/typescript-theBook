"use strict";
class Carro {
    marca;
    modelo;
    ano;
    velocidade = 0;
    constructor(marca, modelo, ano, velocidade) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.velocidade = velocidade;
    }
    acelerar(aumentarVelocidade) {
        this.velocidade += aumentarVelocidade;
        console.log(`A velocidade do carro ${this.modelo} aumentou para ${this.velocidade}`);
    }
    frear(diminuirVelocidade) {
        this.velocidade -= diminuirVelocidade;
        console.log(`A velocidade do carro ${this.modelo} diminuiu  para ${this.velocidade}`);
    }
}
//instanciando o objeto da classe Carro e realizando testes 
const carroOne = new Carro("Citroen", "Zentorno", "2022", 50);
// Usando o metodo para acelerar o carro
carroOne.acelerar(20);
carroOne.frear(30);
