const botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", ()=>{
        console.log(xhr.responseText);
    });

    xhr.send();

})