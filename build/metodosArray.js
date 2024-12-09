"use strict";
// definindo o tipo do objeto
// criando um array de objetos e definindo que será de acordo com o objeto User
const users = [
    { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
    { name: "Jose", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0 },
    { name: "Ana Caroline", age: 60, salary: 6000, active: true, team: "Mobile", bonus: 0 },
    { name: "Mateus", age: 56, salary: 10000, active: true, team: "Frontend", bonus: 0 },
    { name: "Bauer", age: 54, salary: 8000, active: false, team: "Backend", bonus: 0 },
];
// Find percorre o array e com base na condição que for passada ele devolve o primeiro item que encontrar 
// const userFind =  users.find((userFind) => {
//     return userFind.age >= 25 //foi definido para retornar o usuario que tiver a idade maior ou igual a 25
// })
// console.log(userFind);
// //Filter percorre o array e retorna uma lista com base na condição 
// const userFilter = users.filter((userFilter)=> {
//    return userFilter.salary >= 4000 && userFilter.active;// filter para retornar os usuarios que tiverem o salario maior ou igual a 4000
// })
// console.log(userFilter);
//findIndex localiza a posição de um item dentro de um array
// const indexUser = users.findIndex ((indexUser) =>{
//    return indexUser.name === "Mateus" //usando o findindex para percorrer o array onde o name for igual a mateus, vai retornar a posição index dentro do array
// })
// console.log(indexUser);
// console.log(users[indexUser].active = false);
// console.log(users);
// //Map percorre o array e faz alguma coisa 
// const mapUsers = users.map((mapUsers) =>{
//     if(mapUsers.salary <= 2500){
//         mapUsers.salary += 900;
//         mapUsers.bonus += 1;
//     }
//     return{
//         name: mapUsers.name,
//         salary: mapUsers.salary,
//         bonus: mapUsers.bonus,
//     }
// })
// console.log(mapUsers);
// //reverse reverte a ordem do array
// console.log(users.reverse())
// // some percorre a lista de array e verifica se pelo menos um unico item tem o boolean false ou true, retornando um booleano
// const  userInactive = users.some((userInactive) => {
//     return userInactive.active === false;
// })
//Every percorre a lista de array e verifica se todos os itens são true ou false de acordo com a condição, para ele retornar true todos os itens tem que ser true
const usersActive = users.every((usersActive) => {
    return usersActive.active === true;
});
//Reduce reduz o array 
const totalSalarios = users.reduce((total, user) => {
    return total += user.salary;
}, 0);
console.log(totalSalarios);
