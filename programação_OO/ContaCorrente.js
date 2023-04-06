export class ContaCorrente {
    agencia;
    cliente;
    #saldo = 0;


    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;

        this.#saldo += valor;
        console.log(this.#saldo)
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
