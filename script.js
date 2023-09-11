//Menu
function clickMenu() {
    var navContainer = document.querySelector('.nav-container');
    if (window.getComputedStyle(navContainer).display === 'block') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'block';
    }
}


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
});
});



// Feedback
const ianame = document.getElementById('ianame');
const iaemail = document.getElementById('iaemail');
const iamessage = document.getElementById('iamessage');
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (ianame.value == '') {
        alert('Por favor, preencha o campo Nome.');
        ianame.classList.add('erro');
    }

    if (iaemail.value == '') {
        alert('Por favor, preencha o campo Email.');
        iaemail.classList.add('erro');
    } else if (!isValidEmail(iaemail.value)) {
        alert('Por favor, insira um endereço de email válido.');
        iaemail.classList.add('erro');
    }

    if (iamessage.value == '') {
        alert('Por favor, preencha o campo Mensagem.');
        iamessage.classList.add('erro');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}





var feedbacks = [];

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('ianame').value;
    var email = document.getElementById('iaemail').value;
    var message = document.getElementById('iamessage').value;

    // Cria um objeto feedback com os valores do formulário
    var feedback = {
        name: name,
        email: email,
        message: message
    };

    // Adiciona o feedback ao array de feedbacks
    feedbacks.push(feedback);

    // Limpa o formulário
    document.getElementById('ianame').value = '';
    document.getElementById('iaemail').value = '';
    document.getElementById('iamessage').value = '';

    // Atualiza a exibição dos feedbacks
    exibirFeedbacks();
});

function exibirFeedbacks() {
    var feedbackContainer = document.getElementById("feedbackContainer");
    feedbackContainer.innerHTML = '';

    feedbacks.forEach(function(feedback) {
        var feedbackElement = document.createElement("div");
        feedbackElement.innerHTML = "<h3>" + feedback.name + "</h3>"
            + "<p>Email: " + feedback.email + "</p>"
            + "<p>Mensagem: " + feedback.message + "</p>";

        feedbackContainer.appendChild(feedbackElement);
    });
}

// formulario   
