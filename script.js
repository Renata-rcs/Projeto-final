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
           alert('nome: '+ inome.value + '\nEmail: ' + iemail.value + '\nSenha: ' + isenha.value )
           alert('Cadastro realizado com sucesso ✅')

              // Limpar os campos após o cadastro bem-sucedido
            inome.value = '';
            iemail.value = '';
            isenha.value = '';
            iconfirmarSenha.value = '';

            // Remover a classe 'erro' dos campos
            inome.classList.remove('erro');
            iemail.classList.remove('erro');
            isenha.classList.remove('erro');
            iconfirmarSenha.classList.remove('erro');
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
$(document).ready(function () {
    $(".card").hover(function () {
        $(this).toggleClass("flipped");
    });
});


// Btn Saiba mais
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
   
// formulario de consulta

const tratamentoSelect = document.getElementById('tratamento');
const opcoesEsteticaFacial = document.getElementById('opcoesEsteticaFacial');
const opcoesEsteticaCorporal = document.getElementById('opcoesEsteticaCorporal');
const opcoesCentroCapilar = document.getElementById('opcoesCentroCapilar');
const opcoesPodologia = document.getElementById('opcoesPodologia');
const opcoesDepilacao = document.getElementById('opcoesDepilacao');
const opcoesSPA = document.getElementById('opcoesSPA');

tratamentoSelect.addEventListener('change', () => {
    const tratamentoSelecionado = tratamentoSelect.value;

    // Oculta todas as opções
    opcoesEsteticaFacial.style.display = 'none';
    opcoesEsteticaCorporal.style.display = 'none';
    opcoesCentroCapilar.style.display = 'none';
    opcoesPodologia.style.display = 'none';
    opcoesDepilacao.style.display = 'none';
    opcoesSPA.style.display = 'none';

    // Mostra a opção selecionada
    if (tratamentoSelecionado === 'esteticaFacial') {
        opcoesEsteticaFacial.style.display = 'block';
    } else if (tratamentoSelecionado === 'esteticaCorporal') {
        opcoesEsteticaCorporal.style.display = 'block';
    } else if (tratamentoSelecionado === 'centroCapilar') {
        opcoesCentroCapilar.style.display = 'block';
    } else if (tratamentoSelecionado === 'podologia') {
        opcoesPodologia.style.display = 'block';
    } else if (tratamentoSelecionado === 'depilacao') {
        opcoesDepilacao.style.display = 'block';
    } else if (tratamentoSelecionado === 'spa') {
        opcoesSPA.style.display = 'block';
    }
});





   document.addEventListener('DOMContentLoaded', function() {
    const botConsulta = document.getElementById('botConsulta');

    botConsulta.addEventListener('click', (event) => {
        event.preventDefault();

        const enome = document.getElementById('enome');
        const etelefone = document.getElementById('etelefone');
        const eemail = document.getElementById('eemail');
        const ecpf = document.getElementById('ecpf');
        const spa = document.getElementById('spa')
        const enascimento = document.getElementById('enascimento');
        const eend = document.getElementById('eend');
        const tratamento = document.getElementById('tratamento')
        const ehorario = document.getElementById('ehorario');
        ehorario.options[0].value = ''

    if (enome.value == '') {
        alert('Por favor, preencha o campo Nome.');
        enome.classList.add('erro');
    }
    if (etelefone.value == '') {
        alert('Por favor, preencha o campo Telefone.');
        etelefone.classList.add('erro');
    }
    
    if (eemail.value == '') {
        alert('Por favor, preencha o campo Email.');
        eemail.classList.add('erro');
    } else if (!isValidEmail(eemail.value)) {
        alert('Por favor, insira um endereço de email válido.');
        eemail.classList.add('erro');
    }
    if (ecpf.value == '') {
        alert('Por favor, preencha o campo CPF.');
        ecpf.classList.add('erro');
    }
    if (enascimento.value == '') {
        alert('Por favor, preencha o campo Nascimento.');
        enascimento.classList.add('erro');
    }
    if (eend.value == '') {
        alert('Por favor, preencha o campo Endereço.');
        eend.classList.add('erro');
    }
    if (tratamento.value == '') {
        alert('Por favor, preencha o campo Tratamento.')
        tratamento.classList.add('erro');
    }
    if (ehorario.value == '') {
        alert('Por favor, preencha o campo Horario.')
        ehorario.classList.add('erro');
    }

    else {

        alert(' Nome: ' + enome.value + '\n Telefone: ' + etelefone.value + '\n Email: ' + eemail.value + '\n CPF: ' + ecpf.value + '\n Nascimento: ' + enascimento.value + '\n Endereço: ' + eend.value + '\n Tratamento: ' + tratamento.value + '\n Horário: ' + ehorario.value);
        alert('Agendamento concluido com sucesso ✅')

        enome.value = '';
        etelefone.value = '';
        eemail.value = '';
        ecpf.value = '';
        enascimento.value = '';
        eend.value = '';
        tratamento.value = '';
        ehorario.value = '';
    }
});
});


function isValidEmail(eemail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(eemail);
}







