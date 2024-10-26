let currentIndex = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.slider__image'); // Seleciona todas as imagens do carrossel
const totalSlides = slides.length; // Total de imagens

// Função para determinar o intervalo de tempo com base no tamanho da tela
function updateInterval() {
    return window.innerWidth <= 768 ? 500 : 800; // Intervalo menor para mobile
}

let intervalTime = updateInterval(); // Define o intervalo inicial

function updateCarousel() {
    const offset = -currentIndex * (80 + 20); // Ajusta o deslocamento considerando a largura da imagem e a margem
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`; // Aplica a transformação usando crase
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Muda para a próxima imagem
    updateCarousel(); // Atualiza a posição do carrossel
}

// Inicia o auto slide com um intervalo definido
let intervalId = setInterval(autoSlide, intervalTime);

// Adiciona um event listener para atualizar o intervalo quando a tela for redimensionada
window.addEventListener('resize', () => {
    clearInterval(intervalId); // Limpa o intervalo atual
    intervalTime = updateInterval(); // Atualiza o intervalo
    intervalId = setInterval(autoSlide, intervalTime); // Define um novo intervalo
});
