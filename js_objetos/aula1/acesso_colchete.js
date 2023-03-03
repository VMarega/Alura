const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11222233345",
    email:"andre@dominio.com",
};

//console.log(cliente)

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);


const chaves = ["email", "idade", "cpf", "nome", "altura"];


chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
