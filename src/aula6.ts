
//declarando dessa forma estamos dizendo que esse array será somente do tipo number e tambem só ira recebere valores numericos
let numeros:number[]=[20,30,40];

//para adicionar um valor ao final do array usamos o push
numeros.push(10);

//para adicionar um valor ao inicio de um array usamos o metodo unshift
numeros.unshift(20)

//Metodo pop faz a retirada do elemento no final do array
numeros.pop();

//metodo shift faz a retirada d elemento no inicio do array
numeros.shift();

console.log(numeros);

// //outra forma de definir o array com o union types
// let numbers:Array<number|string>=[20,30,40];


//Readonly array podemos usar quando precisamos trabalhar com um array onde nao queremos alterar os valores 
let numeros_ro:ReadonlyArray<number>=[100,300,400];
