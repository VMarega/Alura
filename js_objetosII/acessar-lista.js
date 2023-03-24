const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"1123452342",
    email: "andre@gmail.com"
}

const chaves =["nome", "idade", "cpf", "email"]

chaves.forEach(info=>console.log(cliente[info]))