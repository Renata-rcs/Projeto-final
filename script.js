function clickMenu() {
    var navContainer = document.querySelector('.nav-container');
    if (window.getComputedStyle(navContainer).display === 'block') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'block';
    }
}



const inome = document.getElementById('inome');
const iemail = document.getElementById('iemail');
const isenha = document.getElementById('isenha');
const iconfirmarSenha = document.getElementById('iconfirmarsenha');
const icadastrar = document.getElementById('icadastrar');

icadastrar.addEventListener('click', function (event) {
    event.preventDefault();
  
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

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário padrão

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


document.addEventListener('DOMContentLoaded', function () {
    var tratamentoSelect = document.getElementById('tratamento');
    var medicoSelect = document.getElementById('medico');
    var dataInput = document.getElementById('data');
    var horarioInput = document.getElementById('horario');
    var agendarButton = document.getElementById('agendar');
    
    // Mapeia as opções de médico para cada tratamento
    var opcoesMedicoPorTratamento = {
        'esteticaFacial': ['Dr. João', 'Dra. Maria', 'Dra. Ana'],
        'esteticaCorporal': ['Dra. Carla', 'Dr. André', 'Dra. Sofia'],
        'centroCapilar': ['Dr. Roberto', 'Dr. Marcos'],
        'podologia': ['Podóloga Laura', 'Podóloga Sofia', 'Podóloga Ana', 'Podóloga Maria', 'Podólogo Roberto'],
        'depilacao': [] // Adicione opções de médico para depilação aqui
    };
    
    // Função para atualizar as opções de médico com base no tratamento selecionado
    function atualizarOpcoesMedico() {
        var tratamentoSelecionado = tratamentoSelect.value;
        var opcoesMedico = opcoesMedicoPorTratamento[tratamentoSelecionado];
        
        // Limpa as opções de médico atuais
        medicoSelect.innerHTML = '';
        
        // Adiciona as novas opções de médico
        for (var i = 0; i < opcoesMedico.length; i++) {
            var option = document.createElement('option');
            option.value = opcoesMedico[i];
            option.textContent = opcoesMedico[i];
            medicoSelect.appendChild(option);
        }
    }
    
    // Quando o tratamento é alterado, atualize as opções de médico
    tratamentoSelect.addEventListener('change', function () {
        atualizarOpcoesMedico();
    });
    
    // Função para verificar se a data da consulta é válida
    function verificarDataConsulta() {
        var dataSelecionada = new Date(dataInput.value);
        var diaSemana = dataSelecionada.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        
        if (diaSemana === 0 || diaSemana === 6) {
            alert('A clínica está fechada aos domingos e sábados. Por favor, escolha um dia útil.');
            return false;
        }
        
        var horaSelecionada = parseInt(horarioInput.value);
        if (horaSelecionada < 9 || horaSelecionada >= 17) {
            alert('A clínica funciona das 9h às 17h. Por favor, escolha um horário dentro desse intervalo.');
            return false;
        }
        
        // Aqui você pode adicionar verificações de disponibilidade de data/horário
        // Se a data/horário não estiverem disponíveis, retorne false e mostre uma mensagem de erro.
        
        return true; // Data e horário válidos
    }
    
    // Quando o botão de agendamento é clicado, verifique a validade da data
    agendarButton.addEventListener('click', function (event) {
        if (!verificarDataConsulta()) {
            event.preventDefault(); // Impede o envio do formulário se a data não for válida
        }
    });
    
    // Inicialize as opções de médico com base no tratamento padrão
    atualizarOpcoesMedico();
});







