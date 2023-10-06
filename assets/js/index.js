const carousel = document.querySelector('.carousel-2');
const carouselItems = document.querySelectorAll('.carousel-item-2');

let currentIndex = 0;
const interval = 3000; // Intervalo em milissegundos (3 segundos)

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, interval);

const btnEuQuero = document.getElementById('cadastro-whatsapp');
const modal = document.querySelector('.whats');
const cancelar = document.getElementById('cancelar');
const botaoCadastrar = document.getElementById('cadastrar');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputWhatsapp = document.querySelector('#whatsapp');

btnEuQuero.addEventListener('click', () => {
  modal.style.display = 'block';
});

cancelar.addEventListener('click', () => {
  modal.style.display = 'none';
  limparCampos();
});

function realizarCadastro(event) {
  event.preventDefault(); // Impede o envio do formulário

  const email = inputEmail.value;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(email)) {
    alert('O campo email é inválido.');
    return;
  }
  
  const nome = inputNome.value;
  const whatsapp = inputWhatsapp.value;
  if (nome === '' || whatsapp === '') {
    alert('Preencha todos os campos.');
    return;
  }
  
  alert('Cadastro realizado com sucesso!');
  modal.style.display = 'none';
  limparCampos();
}

botaoCadastrar.addEventListener('click', realizarCadastro);

function limparCampos() {
  inputNome.value = '';
  inputEmail.value = '';
  inputWhatsapp.value = '';
}


let rating = 0;
const stars = document.querySelectorAll('.stars');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1;
        highlightStars(index);
    });
});

function highlightStars(index) {
    stars.forEach((star, i) => {
        if (i <= index) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'black';
        }
    });
}

function submitRating() {
    const comment = document.getElementById('comment').value;
    const lname = document.getElementById('lname').value;
    const lemail = document.getElementById('lemail').value;

    if (rating === 0 || comment === '' || lname === '' || lemail === '') {
        alert('Por favor, preencha todos os campos e avalie o site.');
        return;
    }

    const ratingDiv = document.getElementById('ratings');
    const newRating = document.createElement('div');
    newRating.innerHTML = `<p><strong>Avaliação:</strong> ${rating} estrelas</p>`;
    newRating.innerHTML += `<p><strong>Comentário:</strong> ${comment}</p>`;
    newRating.innerHTML += `<p><strong>Nome:</strong> ${lname}</p>`;
    newRating.innerHTML += `<p><strong>E-mail:</strong> ${lemail}</p>`;
    ratingDiv.appendChild(newRating);

    // Limpar os campos após a submissão
    document.getElementById('comment').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('lemail').value = '';

    // Reiniciar as estrelas
    stars.forEach((star) => {
        star.style.color = 'black';
    });

    // Aqui você pode enviar os dados para o servidor ou fazer o que for necessário com eles
    console.log('Avaliação: ' + rating);
    console.log('Comentário: ' + comment);
    console.log('Nome: ' + lname);
    console.log('E-mail: ' + lemail);
}


function toggleSections() {
  const entradaSection = document.querySelector('entrada');
  const caroucelSection = document.querySelector('caroucel-1');

  if (window.innerWidth < 750) {
      entradaSection.style.display = 'none';
      caroucelSection.style.display = 'block';
  } else {
      entradaSection.style.display = 'block';
      caroucelSection.style.display = 'none';
  }
}

// Execute a função quando a página carregar e quando a janela for redimensionada
window.addEventListener('load', toggleSections);
window.addEventListener('resize', toggleSections);


const feedback = document.querySelector("#feedback")

if(!localStorage.getItem("contaLogada")) {
  feedback.style.display = "none"
}