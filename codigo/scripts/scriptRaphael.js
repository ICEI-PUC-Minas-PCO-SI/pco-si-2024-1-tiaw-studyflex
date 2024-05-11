var btn = document.querySelector(".add");
var container = document.querySelector(".container");
var lastCloned = null;

btn.addEventListener("click", () => {
    var divClone;
    if (lastCloned === null || lastCloned.classList.contains("retan3")) {
        divClone = document.querySelector(".retan1").cloneNode(true);
    } else if (lastCloned.classList.contains("retan1")) {
        divClone = document.querySelector(".retan2").cloneNode(true);
    } else if (lastCloned.classList.contains("retan2")) {
        divClone = document.querySelector(".retan3").cloneNode(true);
    }
    
    
    

    container.appendChild(divClone);
    lastCloned = divClone;
});

document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pegar os valores dos campos
    var title = document.getElementById('title').value;
    var noteText = document.getElementById('note').value;
    var date = document.getElementById('date').value;

    // Criar um objeto com os valores
    var noteObject = {
        title: title,
        note: noteText,
        date: date
    };

    // Adicionar a nota ao JSON
    addNoteToJSON(noteObject);

    // Exibir o JSON no console
    displayJSON();

    // Limpar os campos do formulário
    document.getElementById('title').value = '';
    document.getElementById('note').value = '';
    document.getElementById('date').value = '';

    
});

function addNoteToJSON(noteObject) {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteObject);
    localStorage.setItem('notes', JSON.stringify(notes));
}



function displayJSON() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    console.log(JSON.stringify(notes, null, 2));
}



document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Pegar os valores dos campos
    var title = document.getElementById('title').value;
    var noteText = document.getElementById('note').value;
    var date = document.getElementById('date').value;
  
    // Obter o ID do retângulo selecionado
    var selectedRetanguloId = document.getElementsByClassName('retan1') // (obter o ID do retângulo aqui)
  
    // Criar um objeto com os valores
    var noteObject = {
      title: title,
      note: noteText,
      date: date
    };
  
    // Atualizar o conteúdo do retângulo selecionado
    var selectedRetangulo = document.getElementsByClassName(selectedRetanguloId);
    selectedRetangulo.querySelector('h3').textContent = noteObject.title;
    selectedRetangulo.querySelector('p').textContent = noteObject.note;
});