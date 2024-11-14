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

    // Reseta a opacidade de todas as seções para 0
    sections.forEach((section) => {
        section.style.opacity = '0';
    })

    // Exibe a seção ativa e adiciona transição
    setTimeout(() => {
        sections[currentIndex].style.opacity = '1';
    }, 100)

    // Atualiza a visibilidade das seções
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === currentIndex);
    });
}

function moveSection(direction) {
    currentIndex += direction
    showSection(currentIndex);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
    filme.style.transition = 'transform 0.5s ease';
    filme.style.transform = `translateX(${offset}%)`;
}


function showMoreBio() {
    const bioMoreSection = document.getElementById('bio-more')
    bioMoreSection.classList.toggle('show');

    const button = document.querySelector('.bio button')
    if (bioMoreSection.classList.contains('show')) {
        button.textContent = "Apenas sinopse";
    } else {
        button.textContent = "Continua...";
    }
}