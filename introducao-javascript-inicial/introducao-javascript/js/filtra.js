const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {

    let pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = paciente.textContent;
            if (nome != this.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})