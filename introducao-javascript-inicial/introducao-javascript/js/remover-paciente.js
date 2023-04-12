let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", (event)=>{
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(()=>{
        event.target.parentNode.remove();
    }, 500);
    
    
    // const alvoEvento = event.target;
    // const paiDoAlvo = alvoEvento.parentNode;
    
    // paiDoAlvo.remove();
})
// pacientes.forEach((element)=>{
//     element.addEventListener("dblclick", ()=>{
//         this.remove();
//     })
// })