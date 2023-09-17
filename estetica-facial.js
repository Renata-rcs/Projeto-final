//Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer');
    const dpMenu = document.querySelector('.dp-menu');

    hamburguer.addEventListener('click', () => {
        dpMenu.classList.toggle('menu-ativo');
        console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
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
const botaoSaibaMais1 = document.getElementById('botao-saiba-mais1');
const conteudo1 = document.getElementById('conteudo1');

    botaoSaibaMais1.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo1.style.display === 'none' || conteudo1.style.display === '') {
            conteudo1.style.display = 'block';
            botaoSaibaMais1.textContent = 'Mostrar Menos';
        } else {
            conteudo1.style.display = 'none';
            botaoSaibaMais1.textContent = 'Saiba Mais';
        }
    });
const botaoSaibaMais2 = document.getElementById('botao-saiba-mais2');
const conteudo2 = document.getElementById('conteudo2');

    botaoSaibaMais2.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo2.style.display === 'none' || conteudo2.style.display === '') {
            conteudo2.style.display = 'block';
            botaoSaibaMais2.textContent = 'Mostrar Menos';
        } else {
            conteudo2.style.display = 'none';
            botaoSaibaMais2.textContent = 'Saiba Mais';
        }
    });
const botaoSaibaMais3 = document.getElementById('botao-saiba-mais3');
const conteudo3 = document.getElementById('conteudo3');

    botaoSaibaMais3.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo3.style.display === 'none' || conteudo3.style.display === '') {
            conteudo3.style.display = 'block';
            botaoSaibaMais3.textContent = 'Mostrar Menos';
        } else {
            conteudo3.style.display = 'none';
            botaoSaibaMais3.textContent = 'Saiba Mais';
        }
    });
const botaoSaibaMais4 = document.getElementById('botao-saiba-mais4');
const conteudo4 = document.getElementById('conteudo4');

    botaoSaibaMais4.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo4.style.display === 'none' || conteudo4.style.display === '') {
            conteudo4.style.display = 'block';
            botaoSaibaMais4.textContent = 'Mostrar Menos';
        } else {
            conteudo4.style.display = 'none';
            botaoSaibaMais4.textContent = 'Saiba Mais';
        }
    });
const botaoSaibaMais5 = document.getElementById('botao-saiba-mais5');
const conteudo5 = document.getElementById('conteudo5');

    botaoSaibaMais5.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo5.style.display === 'none' || conteudo5.style.display === '') {
            conteudo5.style.display = 'block';
            botaoSaibaMais5.textContent = 'Mostrar Menos';
        } else {
            conteudo5.style.display = 'none';
            botaoSaibaMais5.textContent = 'Saiba Mais';
        }
    });
const botaoSaibaMais6 = document.getElementById('botao-saiba-mais6');
const conteudo6 = document.getElementById('conteudo6');

    botaoSaibaMais5.addEventListener('click', function() {
        // Toggle (alternância) para mostrar ou ocultar o conteúdo
        if (conteudo6.style.display === 'none' || conteudo6.style.display === '') {
            conteudo6.style.display = 'block';
            botaoSaibaMais6.textContent = 'Mostrar Menos';
        } else {
            conteudo6.style.display = 'none';
            botaoSaibaMais6.textContent = 'Saiba Mais';
        }
    });

    
    
    
    
    
    