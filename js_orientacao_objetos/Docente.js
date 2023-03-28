import User from "./User.js";

class Docente extends User{
    constructor(nome,email,nascimento, role="docente", ativo=true){
        super(nome,email,nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){

        return `Estudante ${estudante} aprovado no curso de ${curso}`
    }
}

const novoDocente = new Docente("mariana", "m@m.com", "2021-01-01")
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovarEstudante("juliana", "JS"))