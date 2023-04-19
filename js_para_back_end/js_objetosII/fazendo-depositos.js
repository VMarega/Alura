const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1123452342',
    email: 'andre@gmail.com',
    fones: [ '34343434234', '34434535333' ],
    dependentes: [
        { nome: 'Sara', 
        parentesco: 'filha', 
        dataNascimento: '20/03/2011' }, 
    {
        nome: 'Sonia Maria',
        parentesco: 'filha',
        dataNascimento: '04/01/2000'}],
        saldo: 100,
        depositar: function(valor){
            this.saldo += valor
        }
  }

  console.log(cliente.saldo)
  cliente.depositar(30)
  console.log(cliente.saldo)