document.getElementById("expand-bio").addEventListener("click", function() {
    document.getElementById("bio-expanded").classList.toggle("hidden");
})

function openProject(element) {
    document.getElementById('project-modal').style.display = 'flex';
    document.getElementById('project-title').innerText = 'Título do Projeto';
    document.getElementById('project-modal').innerText = 'Descrição e detalhes do projeto aqui';
}

function closeProject() {
    document.getElementById('project-modal').style.display = 'none';
}


