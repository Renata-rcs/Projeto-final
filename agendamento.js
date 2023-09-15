//Menu
const hamburguer = document.querySelector('#hamburguer');
const dpMenu = document.querySelector('.dp-menu');


hamburguer.addEventListener('click', () => {
    dpMenu.classList.toggle('menu-ativo');
    console.log('Classe menu-ativo adicionada:', dpMenu.classList.contains('menu-ativo'));
});

  function mostrarOpcoes() {
        const tratamentoSelect = document.getElementById('ietratamento');
        const opcoesEsteticaFacial = document.getElementById('opcoesEsteticaFacial');
        const opcoesEsteticaCorporal = document.getElementById('opcoesEsteticaCorporal');
        const opcoesCentroCapilar = document.getElementById('opcoesCentroCapilar');
        const opcoesPodologia = document.getElementById('opcoesPodologia');
        const opcoesDepilacao = document.getElementById('opcoesDepilacao');
        const tratamentoSelecionado = tratamento.value;

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
            }
   }
   mostrarOpcoes();


   document.addEventListener('DOMContentLoaded', function() {
    const botConsulta = document.getElementById('botConsulta');

    botConsulta.addEventListener('click', (event) => {
        event.preventDefault();

        const enome = document.getElementById('enome');
        const etelefone = document.getElementById('etelefone');
        const eemail = document.getElementById('eemail');
        const ecpf = document.getElementById('ecpf');
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

        alert('Mensagem enviada com sucesso!');
        
            // Exibe os valores capturados no alert
            alert(' Nome: ' + enome.value + '\n Telefone: ' + etelefone.value + '\n Email: ' + eemail.value + '\n CPF: ' + ecpf.value + '\n Nascimento: ' + enascimento.value + '\n Endereço: ' + eend.value + '\n Tratamento: ' + tratamento.value + '\n Horário: ' + ehorario.value);
    }
});
});


function isValidEmail(eemail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(eemail);
}



