class ContaBancaria {
    public titular:string;
    private saldo:number;

     
    constructor(titular:string, saldo:number){
         this.titular = titular;
         this.saldo = saldo;
    }

    public depositar (valorDeposito:number):void{
        if(valorDeposito < 0){
            console.log(`O valor de ${valorDeposito} é um valor invalido, digite um valor valido`)
        }else{
            this.saldo += valorDeposito 
            console.log(`O valor de ${valorDeposito} foi depositado com sucesso, obrigado !`)
        }
    }

    //definindo o metodo sacar que vai permitir a retirada do dinheiro da conta
    public sacar (valorSacar:number):void{
        if( this.saldo < valorSacar){
            console.log(`Erro você está tentando sacar o valor de ${valorSacar} mas na sua conta só tem disponivel o valor de ${this.saldo}`)
        }else{ 
           this.saldo -= valorSacar;
           console.log(`o valor de ${valorSacar} foi retirado com sucesso`)
        }
    }

    //metodo  para ver o saldo atual do usuario 
    public verSaldo():void{
        console.log(`Saldo atual: R$ ${this.saldo}`)
    }

    //metodo para exibir informações do uisuario e o saldo 
    public exibirResumo(){
        console.log(`O titular: ${this.titular}`)
        console.log(`Tem o saldo de ${this.saldo}`)
    }
}


const userOne = new ContaBancaria("Mateus", 1200);
const userTwo = new ContaBancaria("Lucas", 1500);

//verificando se o metodo para apresentar o erro está funcionando ao exibir um valor negativo


// userOne.depositar(3000);

userOne.sacar(1100)
userOne.exibirResumo();
// userOne.verSaldo();







