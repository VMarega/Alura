class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;

        this.#saldo += valor;
    }
}




const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233398;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233398;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);




