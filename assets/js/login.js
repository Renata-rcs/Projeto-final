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
        return;
    }
    if (onascimento.value == '') {
        alert('Por favor, preencha o campo Nascimento.');
        onascimento.classList.add('erro');
        return; 
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
    const userData = {
        nome: onome.value,
        nascimento: onascimento.value,
        email: oemail.value,
        senha: osenha.value
    };
    let salvaLogins = []
    if(localStorage.getItem('userData')){
        salvaLogins = [...JSON.parse(localStorage.getItem("userData"))]
        salvaLogins[salvaLogins.length] = userData
        localStorage.setItem('userData', JSON.stringify(salvaLogins));
    } else {
        salvaLogins[salvaLogins.length] = userData
        localStorage.setItem("userData", JSON.stringify(salvaLogins))
    }
    

    alert('nome: '+ onome.value + '\nNascimento: ' +  onascimento.value + '\nEmail: ' + oemail.value + '\n Senha: ' + osenha.value + '\nCadastro realizado com sucesso ✔️ ');

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

// Função para verificar o login com os dados do Local Storage
function fazerLogin() {
    const emailLogin = document.getElementById('rlogin').value;
    const senhaLogin = document.getElementById('rsenha').value;
    let userDataJSON = []

    if (localStorage.getItem('userData')) {
        userDataJSON = [...JSON.parse(localStorage.getItem("userData"))];

        if (emailLogin != "" && senhaLogin != "") {
            const index = userDataJSON.findIndex( coiso => {
                return coiso.email == emailLogin
            })
            
            if (userDataJSON[index].senha == senhaLogin && index != -1) {
                alert('Login bem-sucedido! Bem-vindo, ' + userData.nome);
                window.location.href = 'index.html';
            }
            
        } else {
            alert('Credenciais de login inválidas. Por favor, tente novamente.');
        }
    } else {
        alert('Nenhum usuário cadastrado. Por favor, faça o cadastro primeiro.');
    }
}


const loginButton = document.getElementById('submit');
    loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('clicou')
    fazerLogin();

    
});







