var btn = document.querySelector(".add");
var container = document.querySelector(".container2");

btn.addEventListener("click", () => {
    var divClone;
    if (container.children.length === 0) {
        divClone = document.querySelector(".retan1").cloneNode(true);
    } else {
        var lastRetan = container.lastElementChild;
        var rect = lastRetan.getBoundingClientRect();
        var top = rect.top + window.scrollY + rect.height + 20; // 20 pixels de espaçamento entre retângulos
        var left = rect.left + window.scrollX;

        if (lastRetan.classList.contains("retan1")) {
            divClone = document.querySelector(".retan2").cloneNode(true);
        } else if (lastRetan.classList.contains("retan2")) {
            divClone = document.querySelector(".retan3").cloneNode(true);
        }

        divClone.style.position = "absolute";
        divClone.style.top = top + "px";
        divClone.style.left = left + "px";
    }

    container.appendChild(divClone);
});

// Objeto para armazenar as notas
var notas = [];

// Função para liberar os inputs para edição
function liberarEdicao(element) {
    var id = element.dataset.id; // Obter o ID da nota
    var titulo = element.querySelector('.h3');
    var textoNota = element.querySelector('.p');
    
    // Criar inputs para edição
    var inputTitulo = document.createElement('input');
    inputTitulo.type = 'text';
    inputTitulo.value = titulo.textContent;
    titulo.replaceWith(inputTitulo);
    inputTitulo.focus();

    var inputTextoNota = document.createElement('textarea');
    inputTextoNota.value = textoNota.textContent;
    textoNota.replaceWith(inputTextoNota);

    // Adicionar evento para salvar ao pressionar Enter
    inputTextoNota.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(element, id, inputTitulo.value, inputTextoNota.value);
            exibirJSON();
        }
    });
}

// Função para salvar as edições
function salvarEdicao(element, id, novoTitulo, novoTextoNota) {
    var titulo = document.createElement('h3');
    titulo.className = 'h3';
    titulo.textContent = novoTitulo;
    element.querySelector('input[type="text"]').replaceWith(titulo);

    var textoNota = document.createElement('p');
    textoNota.className = 'p';
    textoNota.textContent = novoTextoNota;
    element.querySelector('textarea').replaceWith(textoNota);

    // Atualizar o objeto de notas
    notas[id] = {
        titulo: novoTitulo,
        textoNota: novoTextoNota
    };
}

// Função para exibir o JSON no console
function exibirJSON() {
    console.log(JSON.stringify(notas, null, 2));
}


    