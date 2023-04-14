const botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", ()=>{
        let resposta = xhr.responseText;
        let pacientesJSON = JSON.parse(resposta); 
        
        pacientesJSON.forEach((paciente)=>{
            adicionaPacienteNaTabela(paciente);
        })
        });

    xhr.send();

})