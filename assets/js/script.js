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
