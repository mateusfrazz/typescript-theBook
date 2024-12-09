// function logar(user:string,pass:string):void{
//     console.log(`User..: ${user}`);
//     console.log(`Senha: ${pass}`);
// }

// logar('Bruno','123');

// function soma2(n1:number,n2:number):number{
//     let r= n1+n2
//     return r;
// }

// let res:number=soma2(10,15);

// console.log(res);

type Room = {
   roomName: string;
   roomNumber:number;
   isBooked:boolean;
}


const room: Room[] =[
    {roomName:"Suite",roomNumber:24,isBooked:true},
    {roomName:"Mansao",roomNumber:30,isBooked:false},
    {roomName:"Lago",roomNumber:45,isBooked:false},
    {roomName:"Vargem",roomNumber:36,isBooked:true}
]

function bookroom():string{
    let listarQuartos = room.filter((quartos) => quartos.isBooked === false);
    return `essa é a quantidade de quartos livres ${listarQuartos}`
}


bookroom();