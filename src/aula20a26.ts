
//classes abstratas servem apenas de modelos e para ser herdada, mas nao tem como instanciar essa classe ou seja nao se pode criar um objeto dessas contas
abstract class Conta{
    // public:  acessado de qualquer lugar
    //  private: acessar somente na sua propria classe 
    // protected: acessado somente na sua propria classe e nas classes filho

    protected readonly  numeroConta:number; //indicando que o parametro será apenas de leitura 
    protected titular:string;// usnado protected dessa forma posso utilizar meus paramentros somente nas classes filhos mas nao consigo utilizar fora das classes 
    protected saldoConta:number = 0;
    constructor(
        titular:string,
        saldoConta:number,
    ){
       this.numeroConta = this.gerarNumeroConta()
       this.titular = titular
       this.saldoConta = saldoConta
       
    }
   
    //metodo para gerar numeros aleatorios de conta
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }

        protected logcontaCriada():void{
      console.log(`Titular: ${this.titular}`)
    }

     public saldo():string{
         return `${this.saldoConta}`
     }

    protected sacar(valorSaque:number):void{
        if(valorSaque >= this.saldoConta){
            console.log(`O valor que de ${valorSaque} é maior que o saldo da sua conta, por gentileza digite um valor valido`)
        }else {
             this.saldoConta += valorSaque
             console.log(`O valor de ${valorSaque} foi sacado com sucesso`)
        }
    }

    private set saldoTotal(saldoConta:number){ //setter
       this.saldoConta = saldoConta;
    }
}

interface Tributos{
    baseCalculo:number;
    CalcularTrib(taxa:number):number;
}

//criando uma classe usando o extends(herdando da classe conta)
class ContaPF  extends Conta implements Tributos{
    baseCalculo = 100
    public cpf : number;
   constructor(cpf:number, titular:string, saldoConta:number) {
      super(titular,saldoConta)//faz referencia ao parametro da classe pai
      this.cpf = cpf;
   }
   info(){
      super.logcontaCriada()//acessando o parametro da classe pai com o super e chamando o metodo logcontacriada
      console.log(`CPF: ${this.cpf}`)
    }
    
     CalcularTrib(taxa: number): number {
         return valor*this.baseCalculo
     }
   
}

class ContaPJ  extends Conta{
    constructor(
        public cnpj:number,
        titular:string,
        saldoConta:number,
    ){
        super(titular,saldoConta)
    }
    
    infoPJ():void{
        super.logcontaCriada()//acessando o parametro da classe pai com o super e chamando o metodo logcontacriada
        console.log(`CNPJ: ${this.cnpj}`)
    }
}

const cont1 = new ContaPF(12345, "mateus", 2000)
const cont2 = new ContaPJ( 222, "Lucas",4000)

// console.log(cont1.titular);
// console.log(cont1.numeroConta)

// console.log(cont2.numeroConta)
cont1.info()
cont2.infoPJ()
