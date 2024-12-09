
//definindo a função como gerenics, dessa forma vamso ter que usar o tipo 
function f_teste <T> (v:T):T{
    return v
}

//definindo que o retorno é tipo number
console.log(f_teste<number>(10))