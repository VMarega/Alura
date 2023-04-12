const botaoAdicionar = document.querySelector("#adicionar-paciente");
const mensagensErro = document.querySelector("#mensagens-erro");

botaoAdicionar.addEventListener("click", (e)=>{
    e.preventDefault();

    const form = document.querySelector("#form-adiciona");
    
    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);    

    let erros = validaPaciente(paciente);

    if(erros.length>0){
       exibeMensagensDeErro(erros);
        
        return;
    }

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    mensagensErro.innerHTML = "";

})

function exibeMensagensDeErro(erros){
    mensagensErro.innerHTML = "";

    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;
        mensagensErro.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco!");

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso é inválido!");
   
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push("Altura é inválida!");

    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco!")

    return erros;
}