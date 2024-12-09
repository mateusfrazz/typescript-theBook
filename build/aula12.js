"use strict";
// function logar(user:string,pass:string):void{
//     console.log(`User..: ${user}`);
//     console.log(`Senha: ${pass}`);
// }
const room = [
    { roomName: "Suite", roomNumber: 24, isBooked: true },
    { roomName: "Mansao", roomNumber: 30, isBooked: false },
    { roomName: "Lago", roomNumber: 45, isBooked: false },
    { roomName: "Vargem", roomNumber: 36, isBooked: true }
];
function bookroom() {
    let listarQuartos = room.filter((quartos) => quartos.isBooked === false);
    return `essa é a quantidade de quartos livres ${listarQuartos}`;
}
bookroom();
