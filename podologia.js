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
   