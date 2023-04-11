const titulo = document.querySelector('h1');
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc")




    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log('peso inválido')
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
