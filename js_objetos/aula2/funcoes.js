const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550", "114444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
            console.log("Saldo Isuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. Novo Saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(25);

