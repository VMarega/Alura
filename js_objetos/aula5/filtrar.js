const clientes = require("./cliente.json");

function filtrarApartamentoSemcComplemento(clientes){
    return clientes.filter((cliente) =>{
        return(cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
};
const filtrados = filtrarApartamentoSemcComplemento(clientes);
console.log(filtrados);