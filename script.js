let botoes = document.querySelectorAll(".botoes")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarnota) 
})

function guardarnota(evento) {
    let nota = evento.target.innertext
    localStorage.setItem("nota", nota)
}