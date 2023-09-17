//Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer');
    const dpMenu = document.querySelector('.dp-menu');

    hamburguer.addEventListener('click', () => {
        dpMenu.classList.toggle('menu-ativo');
        console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
    });
});
 // Inicia o carrossel
 $('#carouselExample').carousel();

 // Configura um intervalo para avançar automaticamente
 var carouselInterval = 3000; // Tempo em milissegundos (3 segundos)

 function startCarouselInterval() {
   setInterval(function() {
     $('#carouselExample').carousel('next');
   }, carouselInterval);
 }

 startCarouselInterval();

//Cadastro
document.addEventListener('DOMContentLoaded', function () {
const inome = document.getElementById('inome');
const iemail = document.getElementById('iemail');
const isenha = document.getElementById('isenha');
const iconfirmarSenha = document.getElementById('iconfirmarsenha');
const icadastrar = document.getElementById('icadastrar');

icadastrar.addEventListener('click', (event) => {
    event.preventDefault()
  
    if (inome.value == '') {
        alert('Por favor, preencha o campo Nome completo.');
        inome.classList.add('erro');
    }

    if (iemail.value == '') {
        alert('Por favor, preencha o campo Email.');
        iemail.classList.add('erro');
    } else if (!isValidEmail(iemail.value)) {
        alert('Por favor, insira um endereço de email válido.');
        iemail.classList.add('erro');
    }

    if (isenha.value == '') {
        alert('Por favor, preencha o campo Senha.');
        isenha.classList.add('erro');
    }

    if (iconfirmarSenha.value === '') {
        alert('Por favor, preencha o campo Confirmar Senha.');
        iconfirmarSenha.classList.add('erro');
    } else if (isenha.value !== iconfirmarSenha.value) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        isenha.classList.add('erro');
        iconfirmarSenha.classList.add('erro');
    }
    else{
       alert('nome: '+ inome.value + '/n Email: ' + iemail.value + '/n Senha: ' + isenha.value )
       alert('Cadastro realizado com sucesso ✅')
    }
});
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



