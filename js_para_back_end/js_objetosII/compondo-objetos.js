const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"1123452342",
    email: "andre@gmail.com",
    fones: ["34343434234", "34434535333"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNascimento:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)