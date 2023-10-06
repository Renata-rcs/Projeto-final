//cep
const logradouro = document.getElementById('logradouro')
const complemento = document.getElementById('complemento')
const bairro = document.getElementById('bairro')
const localidade = document.getElementById('cidade')
const uf = document.getElementById('uf')
const cep = document.getElementById('input-cep')


cep.addEventListener('blur' , (evento)=>{//disfoque
    evento.preventDefault();

    let cep = document.getElementById('input-cep').value

    cep = cep.replace("-", "") //replace é uma substituição primeiro parametro o que quero subistituir e depois pelo o que substituir

    if(cep.length != 8){
         alert('CEP invalido!')
    }
    else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)//interpolação ${}
        .then(response => response.json())
        .then(date => {
            console.log(date)
            logradouro.value = date.logradouro
            bairro.value = date.bairro
            complemento.value = date.complemento
            localidade.value = date.localidade
            uf.value = date.uf
        }) 
        .catch(err =>{ //tratamento de erro .catch 
            alert(err + "CEP não encontardo")
    })
    }
})

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
        const spa = document.getElementById('spa');
        const enascimento = document.getElementById('enascimento');
        const cep = document.getElementById('input-cep');
        const logradouro = document.getElementById('logradouro');
        const complemento = document.getElementById('complemento');
        const bairro = document.getElementById('bairro');
        const numero = document.getElementById('numero');
        const uf = document.getElementById('uf');
        const cidade = document.getElementById('cidade');
        const tratamento = document.getElementById('tratamento');
        tratamento.options[0].value = '';
        const ehorario = document.getElementById('ehorario');
        ehorario.options[0].value = '';

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
   
    if (cep.value == '') {
        alert('Por favor, preencha o campo CEP.');
        cep.classList.add('erro');
    }
    
    if (logradouro.value == '') {
        alert('Por favor, preencha o campo Logradouro.');
        logradouro.classList.add('erro');
    }
    
    if (complemento.value == '') {
        alert('Por favor, preencha o campo Complemento.');
        complemento.classList.add('erro');
    }
    
    if (bairro.value == '') {
        alert('Por favor, preencha o campo Bairro.');
        bairro.classList.add('erro');
    }
    
    if (numero.value == '') {
        alert('Por favor, preencha o campo Número.');
        numero.classList.add('erro');
    }
    
    if (uf.value == '') {
        alert('Por favor, preencha o campo UF.');
        uf.classList.add('erro');
    }
    
    if (cidade.value == '') {
        alert('Por favor, preencha o campo Cidade.');
        cidade.classList.add('erro');
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

        alert(' Nome: ' + enome.value + '\n Telefone: ' + etelefone.value + '\n Email: ' + eemail.value + '\n CPF: ' + ecpf.value + '\n Nascimento: ' + enascimento.value + '\n Cep: ' + cep.value + '\n Logradouro: ' + logradouro + '\n Bairro: ' + bairro + '\n Complemento: ' + complemento + '\n Número: ' + numero + '\n Cidade: ' + cidade + '\n UF: ' + uf + '\n Tratamento: ' + tratamento.value + '\n Horário: ' + ehorario.value);
        alert('Agendamento concluido com sucesso ✅')


        enome.value = '';
        etelefone.value = '';
        eemail.value = '';
        ecpf.value = '';
        enascimento.value = '';
        cep.value = '';
        logradouro.value = '',
        complemento.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value = '';
        tratamento.value = [0];
        ehorario.value = '';


        opcoesEsteticaFacial.style.display = 'none';
        opcoesEsteticaCorporal.style.display = 'none';
        opcoesCentroCapilar.style.display = 'none';
        opcoesPodologia.style.display = 'none';
        opcoesDepilacao.style.display = 'none';
        opcoesSPA.style.display = 'none';
    }
});
});


function isValidEmail(eemail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(eemail);
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


const formulario = document.getElementById('agend2')
if (!localStorage.getItem("contaLogada")) {
    formulario.style.display = "none"
}
const escondeForm = document.querySelector("#esconde-form")

if (localStorage.getItem("contaLogada")) {
    escondeForm.style.display = "none"
}