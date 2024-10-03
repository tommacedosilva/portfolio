let currentIndex = 0;

function showSection(index) {
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;

    // Garante que o índice fique dentro dos limites
    if (index >= totalSections) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSections - 1;
    } else {
        currentIndex = index;
    }

    // Atualiza a visibilidade das seções
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === currentIndex);
    });
}

function moveSection(direction) {
    showSection(currentIndex + direction);
}

// Exibe a primeira seção inicialmente
showSection(currentIndex);


let slideIndex = 0;
let isDragging = false;

const slides = document.querySelectorAll('.slide');
const filme = document.querySelector('.filme');

function mostrarSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    const offset = -slideIndex * 100; // Ajusta a posição dos slides
    filme.style.transform = `translateX(${offset}%)`;
}


