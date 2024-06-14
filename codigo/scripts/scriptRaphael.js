const URL_NOTAS = "http://localhost:3000/notas";
let colorIndex = 0;
const colors = ['note-red', 'note-blue', 'note-yellow'];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addNote);
    fetchNotes();
});

function addNote() {
    const date = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const note = {
        title: 'Título da Nota',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: date,
        colorClass: getNextColorClass()
    };

    fetch(URL_NOTAS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(newNote => {
        displayNote(newNote);
    })
    .catch(error => {
        console.error('Erro ao adicionar a nota:', error);
    });
}

function displayNote(note) {
    const notesContainer = document.getElementById('notesContainer');
    
    const noteDiv = document.createElement('div');
    noteDiv.className = `note ${note.colorClass}`; // Usa a cor armazenada
    noteDiv.dataset.id = note.id; // Adiciona o ID da nota como atributo de dados
    noteDiv.innerHTML = `
        <h2 class="tit" contenteditable="true">${note.title}</h2>
        <p class="subtit" contenteditable="true">${note.content}</p>
        <span class="date">${note.date}</span>
        <span class="edit">
            <svg width="50" height="50" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
                <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
            </svg>
        </span>
        <span class="delete">

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="56" height="26" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 8 90 c -2.047 0 -4.095 -0.781 -5.657 -2.343 c -3.125 -3.125 -3.125 -8.189 0 -11.314 l 74 -74 c 3.125 -3.124 8.189 -3.124 11.314 0 c 3.124 3.124 3.124 8.189 0 11.313 l -74 74 C 12.095 89.219 10.047 90 8 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 82 90 c -2.048 0 -4.095 -0.781 -5.657 -2.343 l -74 -74 c -3.125 -3.124 -3.125 -8.189 0 -11.313 c 3.124 -3.124 8.189 -3.124 11.313 0 l 74 74 c 3.124 3.125 3.124 8.189 0 11.314 C 86.095 89.219 84.048 90 82 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>


        </span>
    `;
    
    noteDiv.querySelector('.edit').addEventListener('click', () => {
        enableEdit(noteDiv);
    });
    
    noteDiv.querySelector('.delete').addEventListener('click', () => {
        deleteNote(note.id, noteDiv);
    });
    
    notesContainer.appendChild(noteDiv);
}

function updateNote(id, noteDiv) {
    const title = noteDiv.querySelector('h2').innerText;
    const content = noteDiv.querySelector('p').innerText;
    
    fetch(`${URL_NOTAS}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    })
    .then(response => {
        if (response.ok) {
            console.log('Nota atualizada com sucesso');
        } else {
            console.error('Erro ao atualizar a nota:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao atualizar a nota:', error);
    });
}

function deleteNote(id, noteDiv) {
    console.log(`Tentando deletar nota com id: ${id}`);
    fetch(`${URL_NOTAS}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            noteDiv.remove();
            console.log(`Nota com id ${id} excluída com sucesso.`);
        } else {
            console.error('Erro ao deletar a nota:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao deletar a nota:', error);
    });
}

function fetchNotes() {
    fetch(URL_NOTAS)
    .then(response => response.json())
    .then(notes => {
        notes.forEach(note => {
            displayNote(note);
        });
    });
}

function getNextColorClass() {
    const nextColorClass = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    return nextColorClass;
}
