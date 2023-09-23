//Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer');
    const dpMenu = document.querySelector('.dp-menu');

    hamburguer.addEventListener('click', () => {
        dpMenu.classList.toggle('menu-ativo');
        console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
    });
});

//Cadastrar pelo whatsapp
document.addEventListener('DOMContentLoaded', function () {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const whatsapp = document.getElementById('whatsapp');
    const cadastrar = document.getElementById('cadastrar');

    cadastrar.addEventListener('click', function (e) {
        e.preventDefault();

        if (nome.value == '') {
            alert('Por favor, preencha o campo Nome completo.');
            nome.classList.add('erro');
        }

        if (email.value == '') {
            alert('Por favor, preencha o campo Email.');
            email.classList.add('erro');
        } else if (!isValidEmail(email.value)) {
            alert('Por favor, insira um endereço de email válido.');
            email.classList.add('erro');
        }

        if (whatsapp.value == '') {
            alert('Por favor, preencha o campo WhatsApp.');
            whatsapp.classList.add('erro');
        } else {
            alert('Nome: ' + nome.value + '\nEmail: ' + email.value + '\nWhatsApp: ' + whatsapp.value);
            alert('Cadastro realizado com sucesso ✅');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
$(document).ready(function () {
    $(".card").hover(function () {
        $(this).toggleClass("flipped");
    });
});
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