var proximoTipoRetangulo = 1;
var proximoIdRetangulo = 1; // Iniciar com 1 porque já existe o retângulo inicial com ID 0
var tipoUltimoRetanguloRemovido = null;
var notas = {};

const URL_NOTAS = "http://localhost:3000/notas";

function adicionarRetangulo() {
    var container = document.querySelector(".container2");
    var divClone;

    if (proximoTipoRetangulo === 1) {
        divClone = document.createElement('div');
        divClone.className = 'retan1 retan';
        proximoTipoRetangulo = 2;
    } else if (proximoTipoRetangulo === 2) {
        divClone = document.createElement('div');
        divClone.className = 'retan2 retan';
        proximoTipoRetangulo = 3;
    } else if (proximoTipoRetangulo === 3) {
        divClone = document.createElement('div');
        divClone.className = 'retan3 retan';
        proximoTipoRetangulo = 1;
    }

    var idRetangulo = proximoIdRetangulo;
    divClone.setAttribute('id', idRetangulo); // Atribui o ID único à nota
    proximoIdRetangulo++; // Incrementa o próximo ID disponível

    divClone.innerHTML = `
        <button>
            <svg width="31" height="31" class="delete" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>
        </button>
        <h3 class="h3">Título</h3>
        <p class="p">Texto da Nota</p>
        <button>
            <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
                <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
            </svg>
        </button>
    `;

    container.appendChild(divClone);

    var addButton = document.querySelector("#btn");
    container.appendChild(addButton);

    adicionarEventos(divClone);
}


function adicionarEventos(retangulo) {
    var botaoExcluir = retangulo.querySelector('.delete');
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this);
    });

    var botaoLapis = retangulo.querySelector('.lapis');
    botaoLapis.addEventListener('click', function() {
        liberarEdicao(retangulo);
    });
}

async function excluirRetangulo(element) {
    var retangulo = element.closest('.retan');
    var id = retangulo.id;

    try {
        const response = await fetch(URL_NOTAS + "/" + id, {
            method: "DELETE",
        });

        if (response.ok) {
            retangulo.remove();
            if (document.querySelectorAll('.retan').length === 0) {
                tipoUltimoRetanguloRemovido = null;
            }
            var container = document.querySelector(".container2");
            var addButton = document.querySelector(".add");
            container.appendChild(addButton);
            alert("Nota excluída com sucesso");
        } else {
            console.log("Failed response:", response);
            alert("Erro ao excluir nota");
        }
    } catch (error) {
        console.log("Error:", error);
        alert("Erro ao excluir nota");
    }
}

function liberarEdicao(element) {
    var tituloOriginal = element.querySelector('.h3').textContent;
    var textoOriginal = element.querySelector('.p').textContent;

    var lapis = element.querySelector('.lapis');

    if (!tituloOriginal || !textoOriginal || !lapis) {
        console.error("Elementos não encontrados dentro do retângulo para edição.");
        return;
    }

    lapis.style.display = 'none';

    var inputTitulo = document.createElement('input');
    inputTitulo.type = 'text';
    inputTitulo.value = tituloOriginal;
    var titulo = element.querySelector('.h3');
    titulo.replaceWith(inputTitulo);
    inputTitulo.focus();

    var inputTextoNota = document.createElement('textarea');
    inputTextoNota.value = textoOriginal;
    var textoNota = element.querySelector('.p');
    textoNota.replaceWith(inputTextoNota);

    inputTextoNota.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(element, inputTitulo.value, inputTextoNota.value);
        }
    });

    inputTitulo.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(element, inputTitulo.value, inputTextoNota.value);
        }
    });
}

async function salvarEdicao(element, novoTitulo, novoTextoNota) {
    var id = element.id;

    
    proximoIdRetangulo++;

    console.log("ID:", id);
    console.log("Notas:", notas);

    var titulo = document.createElement('h3');
    titulo.className = 'h3';
    titulo.textContent = novoTitulo;
    element.querySelector('input[type="text"]').replaceWith(titulo);

    var textoNota = document.createElement('p');
    textoNota.className = 'p';
    textoNota.textContent = novoTextoNota;
    element.querySelector('textarea').replaceWith(textoNota);

    var lapis = element.querySelector('.lapis');
    lapis.style.display = 'block';

    
    notas[id] = {
        id: id,
        titulo: novoTitulo,
        Nota: novoTextoNota
    };

    try {
        const response = await fetch(URL_NOTAS, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                titulo: novoTitulo,
                Nota: novoTextoNota
            })
        });

        if (!response.ok) {
            console.error("Failed response:", response);
            alert("Erro ao salvar alterações");
        } else {
            alert("Nota editada com sucesso");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Erro ao salvar alterações");
    }
}

function atribuirIdsNotas() {
    var notasExistentes = document.querySelectorAll('.retan');
    notasExistentes.forEach(function(nota) {
        if (!nota.id) {
            nota.setAttribute('id', proximoIdRetangulo);
            proximoIdRetangulo++;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    atribuirIdsNotas(); // Atribui IDs às notas existentes quando a página é carregada
    document.querySelectorAll('.retan').forEach(adicionarEventos);
});

document.getElementById("btn").addEventListener("click", adicionarRetangulo);


