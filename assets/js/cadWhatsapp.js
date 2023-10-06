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

               // Limpar os campos após o cadastro bem-sucedido
    nome.value = '';
    email.value = '';
    whatsapp.value = '';

    // Remover a classe 'erro' dos campos
    nome.classList.remove('erro');
    email.classList.remove('erro');
    whatsapp.classList.remove('erro');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

