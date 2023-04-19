const clientes = [
    {
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
            dataNascimento: '04/01/2000'}]
        },
        {
            nome: "Juliana",
            cpf: "54545345353543",
            dependentes: [{
                nome: "Sophia",
                parentesco: "filha",
                dataNascimento: "30/08/2020"
            }]
        }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)