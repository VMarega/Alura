const botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", ()=>{
        const erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacientesJSON = JSON.parse(resposta); 
            
            pacientesJSON.forEach((paciente)=>{
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        });

    xhr.send();

})