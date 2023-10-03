
 // Inicia o carrossel
 // Configura um intervalo para avançar automaticamente
 var carouselInterval = 3000; // Tempo em milissegundos (3 segundos)

 function startCarouselInterval() {
   setInterval(function() {
     $('#carouselExample').carousel('next');
   }, carouselInterval);
 }

 startCarouselInterval();


// document.addEventListener('DOMContentLoaded', function() {
//     // Recupere os dados do usuário do localStorage
//     const userDataJSON = localStorage.getItem('userData');

//     if (userDataJSON) {
//         const userData = JSON.parse(userDataJSON);

//         // Atualize o botão de login com o nome do usuário
//         const botaoLogin = document.getElementById('submit');
//         botaoLogin.textContent = 'Bem-vindo, ' + userData.nome;
//     }
//});











