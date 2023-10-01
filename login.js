const confirmarButton = document.getElementById('confirma');
const cancelar = document.getElementById('cancela');
const modal = document.getElementById('sec-modal');
const cadastroButton = document.getElementById('cadastro-modal');
const form = document.getElementById('form1');

cadastroButton.addEventListener('click', function(event) {
    event.preventDefault();
    open();
});

function open() {
    modal.classList.remove('hide');
    console.log('open');
}

confirmarButton.addEventListener('click', function(event) {
    event.preventDefault();

    const onome = document.getElementById('onome');
    const onascimento = document.getElementById('onascimento');
    const oemail = document.getElementById('oemail');
    const osenha = document.getElementById('osenha');
    const oconfirmarsenha = document.getElementById('oconfirmarsenha');

    // Validação dos campos
    if (onome.value == '') {
        alert('Por favor, preencha o campo Nome completo.');
        onome.classList.add('erro');
        return; // Encerra a função se algum campo estiver vazio
    }

   if (oemail.value == '') {
    alert('Por favor, preencha o campo Email.');
    oemail.classList.add('erro');
    return;
} else if (!isValidEmail(oemail.value)) {
    alert('Por favor, insira um endereço de email válido.');
    oemail.classList.add('erro');
    return;
}


    if (osenha.value == '') {
        alert('Por favor, preencha o campo Senha.');
        osenha.classList.add('erro');
        return;
    }

    if (oconfirmarsenha.value === '') {
        alert('Por favor, preencha o campo Confirmar Senha.');
        oconfirmarsenha.classList.add('erro');
        return;
    }

    if (osenha.value !== oconfirmarsenha.value) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        osenha.classList.add('erro');
        oconfirmarsenha.classList.add('erro');
        return;
    }
    
    // Criar um objeto com os dados do cadastro
    const cadastro = {
        nome: onome,
        nascimento: onascimento,
        email: oemail,
        senha: osenha
    };

    // Salvar os dados do cadastro no Local Storage
    localStorage.setItem('cadastro', JSON.stringify(cadastro));

    alert('nome: '+ onome.value + '\n Nascimento: ' +  onascimento.value + '\nEmail: ' + oemail.value + '\n Senha: ' + osenha.value + '\nCadastro realizado com sucesso ✔️ ');

    onome.value = '';
    onascimento.value = '';
    oemail.value = '';
    osenha.value = '';
    oconfirmarsenha.value = '';

  
    onome.classList.remove('erro');
    oemail.classList.remove('erro');
    osenha.classList.remove('erro');
    oconfirmarsenha.classList.remove('erro');

    modal.classList.add('hide');
});

cancelar.addEventListener('click', fechar);

function fechar() {
    modal.classList.add('hide');
}

function isValidEmail(oemail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(oemail);
}
// ...

const loginButton = document.getElementById('submit');
loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const inputEmail = document.getElementById('rlogin').value;
    const inputSenha = document.getElementById('rsenha').value;

    const cadastroJSON = localStorage.getItem('cadastro');
    if (cadastroJSON) {
     
        const cadastro = JSON.parse(cadastroJSON);

        if (inputEmail === cadastro.email && inputSenha === cadastro.senha) {
            alert('Login bem-sucedido!');

            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    } else {
        alert('Não há dados de cadastro. Faça o cadastro primeiro.');
    }
});







