//Definindo o tipo do objeto

type Carro = {
   marca : string;
   modelo: string;
   ano: number;
}

//Instanciando o objeto
const carroComercial: Carro ={
    marca: "BWM",
    modelo: "x6",
    ano: 2022,
};

//  function descricaoCarro() {
//     return `O carro é um ${carroComercial.marca} ${carroComercial.modelo} ${carroComercial.ano}`
// }


// console.log(descricaoCarro());

//segundo desafio 
// type Produto = {
//     nome: string;
//     preco: number;
//     emEstoque: boolean;
// };

// const produtos: Produto[] = [
//      {nome:"Arroz", preco: 10, emEstoque:  false},
//      {nome:"Feijao", preco: 20, emEstoque: true},
//      {nome:"Carne", preco: 30, emEstoque:  true },
//      {nome: "batata", preco: 40, emEstoque:false},
// ]

// function listarProdutosEstoque() {
//    const produtoEstoque = produtos.filter((produto) => produto.emEstoque === true); 
//    return produtoEstoque
// }

// console.log(listarProdutosEstoque());

// type  Endereco ={
//   rua: string;
//   numero: number;
//   cidade: string;
// }

// type Usuario = {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
// }

// const enderecoUser: Endereco = {
//     rua: "avenida paraiso", 
//     numero: 32, 
//     cidade:"são luis"
// }

// const User : Usuario = {
//     nome: "Mateus",
//     idade: 24,
//     endereco: enderecoUser,
// }

// function listarEnderecoUser () {
//     return `O usuário ${User.nome} mora na rua ${enderecoUser.rua} número ${enderecoUser.numero} em cidade ${enderecoUser.cidade}`
// }

// console.log(listarEnderecoUser ());

type ContaBancaria ={
    titular: string;
    saldo: number;
    

}

