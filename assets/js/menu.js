//Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer');
    const dpMenu = document.querySelector('.dp-menu');

    hamburguer.addEventListener('click', () => {
        console.log('clicou')
        dpMenu.classList.toggle('menu-ativo');
        console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
    });
});


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
