//Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer');
    const dpMenu = document.querySelector('.dp-menu');

    hamburguer.addEventListener('click', () => {
        dpMenu.classList.toggle('menu-ativo');
        console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
    });
});