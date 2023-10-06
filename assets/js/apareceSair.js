const btnLogin = document.querySelector("#login")
const btnSair = document.querySelector("#sair")
if (localStorage.getItem("contaLogada")) {
    btnLogin.style.display = "none";
    btnSair.style.display = "inline"
}



btnSair.addEventListener("click", (evento)=> {
    evento.stopImmediatePropagation()
    localStorage.removeItem("contaLogada")
})
