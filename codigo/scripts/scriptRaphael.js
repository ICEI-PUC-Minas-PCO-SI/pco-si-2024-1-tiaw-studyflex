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

    // Exibir a nota na página
    displayNote(noteObject);
});

function addNoteToJSON(noteObject) {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteObject);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNote(noteObject) {
    var notesContainer = document.getElementById('notes-container');
    var noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <h3>${noteObject.title}</h3>
        <p>${noteObject.note}</p>
        <p>Data: ${noteObject.date}</p>
    `;
    notesContainer.appendChild(noteElement);
}

function displayJSON() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    console.log(JSON.stringify(notes, null, 2));
}

// Exibir notas já salvas ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    var savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(function(note) {
        displayNote(note);
    });
});

    
