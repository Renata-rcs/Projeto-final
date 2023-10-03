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