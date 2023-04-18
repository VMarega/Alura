async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCEP.json();
        if(consultaCepConvertida.erro){
            throw Error('CEP não existente!');
        }
        console.log(consultaCEP);
        return consultaCepConvertida;

    } catch {
        console.log(erro);
    }
}

