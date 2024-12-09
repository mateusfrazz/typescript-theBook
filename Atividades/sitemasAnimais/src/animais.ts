class Animal{
    public nome:string;
    protected idade:number;

    constructor(
        nome:string, idade:number,
    ){
        this.nome = nome;
        this.idade = idade;
    }
     
    //metodo para exibir a idade do animal
    public exibirIdade():string{
         return `A idade do animal é de ${this.idade}`
    }
}

class Mamifero extends Animal {
     protected tempoGestacao: string;
     constructor(nome:string, idade:number, tempoGestacao:string){
          super(nome,idade)//acessando os parametros da classe pai 
          this.tempoGestacao = tempoGestacao
     }
     public exibirTempoGestacao():string{
         return `Tempo de gestação: ${this.tempoGestacao}`
     }

    public exibirdados():void{
        console.log()
    }
}

class Ave extends Animal {
     public tipoBico : string
     constructor(nome:string, idade:number, tipoBico:string){
       super(nome,idade)
       this.tipoBico = tipoBico;
     }

     //criando o metodo para a ave voar 
     public voar():void{
        console.log(" A Ave está voando")
     }
}


const animal1 = new Mamifero("gato", 4, "4 meses");
const animal2 = new Ave("Papagaio",3, "Curvo")