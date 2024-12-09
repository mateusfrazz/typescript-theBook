
//a interface serve para criar elementos do tipo que definimos 
interface Curso1{ 
   titulo:string;
   des:string;
   maxAlunos?:number; //para colocar algo opcional, colocamos a interrogação no inicio
   iniciarCurso?(teste:string):void;
}

//herdando os parametros da interface pai 
interface cursoProg extends Curso1{
     aulas:number;
     maxAlunos?:number;
}
interface cursoArte extends Curso1{
    aulas:number;
    maxAlunos?:number;
}

interface cursoADM extends Curso1{
    aulas:number;
    maxAlunos?:number;
}


//criando um objeto a partir dos elementos da interface C
let Curso1:Curso1
let Curso2:cursoADM

Curso1 = {titulo:"teste",des:"teste de curso",maxAlunos:32}

//definindo o objeto da interface cursoADM com os parametos da interface pai Curso
Curso2 = {titulo:"teste",des:"curso de adm",maxAlunos: 40,aulas:50 }




