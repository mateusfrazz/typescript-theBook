class Usuario {
    nome:string;
    email:string;
    senha:string;
    
    //instanciando os paramentros da classe
    constructor(nome:string,email:string,senha:string){
       this.nome = nome;
       this.email = email;
       this.senha = senha;
    }

    //logs do usuario
    mostrarUser():void{
        console.log(this.nome);
        console.log(this.email);
        console.log(this.senha);
    }
    
    //metodo para alterar a senha do usuario
    alterarSenha(novaSenha:string):void {
        this.senha = novaSenha;
        console.log(`Sua senha foi alterada para ${novaSenha}`);//log de alteração de senha
    }
}

//instancinando o objeto da classe Usuario
const userOne = new Usuario ("Mateus","mateus@gmail.com","konami");

userOne.alterarSenha("PalmeirasSemMundial");//chamando o metodo alterarSenha para alterar a senha do user

userOne.mostrarUser();// chamando o metodo mostrarUser para mostrar os dados do user atual
