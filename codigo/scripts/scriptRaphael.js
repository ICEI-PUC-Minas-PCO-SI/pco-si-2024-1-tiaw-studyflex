
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

    // Exibir a nota na página
    displayNote(noteObject);
});

function addNoteToJSON(noteObject) {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteObject);
    localStorage.setItem('notes', JSON.stringify(notes));
}

