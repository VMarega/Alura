const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1123452342',
    email: 'andre@gmail.com',
    fones: [ '34343434234', '34434535333' ],
    dependentes: [{ nome: 'Sara Silva', parentesco: 'filha', dataNascimento: '20/03/2011' }]
  }

  cliente.dependentes.push({nome:"Sonia Maria", parentesco:"filha", dataNascimento:"04/01/2000"});

  const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2000"  )

  console.log(filhaMaisNova[0].nome);
  console.log(cliente)