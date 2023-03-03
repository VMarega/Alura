const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550", "114444440"]
};

cliente.enderecos = {
    rua: "R. Joseph Climber",
    numero: '1337',
    apartamento: true,
    complemento: "ap 934",
};

//for (let chave in cliente){
//    console.log(chave);
//}
//for (let chave in cliente){
//    console.log(cliente[chave])
//}

//for (let chave in cliente){
//    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
//}
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function" ){
console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}