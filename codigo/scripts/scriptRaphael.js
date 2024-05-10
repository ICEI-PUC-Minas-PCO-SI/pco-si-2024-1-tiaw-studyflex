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
    
    
    var h1 = divClone.querySelector(".retan-tit");
    h1.textContent = "Insira o titulo aqui:";
    var p = divClone.querySelector(".retan-subtit");
    p.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia accusamus alias tempore?";

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

    // Exibir a nota na página
    displayNote(noteObject);
});

    
