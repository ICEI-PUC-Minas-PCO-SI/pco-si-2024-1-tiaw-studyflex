var proximoTipoRetangulo = 1;
var proximoIdRetangulo = 0;
var tipoUltimoRetanguloRemovido = null;
var notas = {};

// URL para onde os dados serão enviados
const URL_NOTAS = "http://localhost:3000/notas";

// Função para adicionar retângulos
function adicionarRetangulo() {
    var container = document.querySelector(".container2");
    var divClone;

    // Garantir que os elementos originais estão no DOM
    if (!document.querySelector(".retan1")) {
        var retan1 = document.createElement('div');
        retan1.className = 'retan1 retan';
        retan1.innerHTML = `
        <button>
            <?xml version="1.0" ?><svg width="31" height="31" class="delete" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>
        </button>
        <div class="h3">Título </div>
        <div class="p">Texto da Nota </div>
        <button>
            <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
                <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
            </svg>
        </button>
        `;
        container.appendChild(retan1);
    }

    if (!document.querySelector(".retan2")) {
        var retan2 = document.createElement('div');
        retan2.className = 'retan2 retan';
        retan2.innerHTML = `
        <button>
            <?xml version="1.0" ?><svg width="31" height="31" class="delete" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>
        </button>
        <div class="h3">Título</div>
        <div class="p">Texto da Nota </div>
        <button>
            <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
                <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
            </svg>
        </button>
        `;
        container.appendChild(retan2);
    }

    if (!document.querySelector(".retan3")) {
        var retan3 = document.createElement('div');
        retan3.className = 'retan3 retan';
        retan3.innerHTML = `
        <button>
            <?xml version="1.0" ?><svg width="31" height="31" class="delete" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>
        </button>
        <div class="h3">Título</div>
        <div class="p">Texto da Nota</div>
        <button>
            <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
                <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
            </svg>
        </button>
        `;
        container.appendChild(retan3);
    }

    if (tipoUltimoRetanguloRemovido !== null) {
        proximoTipoRetangulo = tipoUltimoRetanguloRemovido;
        tipoUltimoRetanguloRemovido = null;
    }

    if (proximoTipoRetangulo === 1) {
        divClone = document.querySelector(".retan1").cloneNode(true);
        proximoTipoRetangulo = 2;
    } else if (proximoTipoRetangulo === 2) {
        divClone = document.querySelector(".retan2").cloneNode(true);
        proximoTipoRetangulo = 3;
    } else if (proximoTipoRetangulo === 3) {
        divClone = document.querySelector(".retan3").cloneNode(true);
        proximoTipoRetangulo = 1;
    }

    var idRetangulo = 'retangulo-' + proximoIdRetangulo;
    divClone.setAttribute('id', idRetangulo);
    proximoIdRetangulo++;

    container.insertBefore(divClone, container.lastElementChild);

    var addButton = document.querySelector(".Btn");
    container.appendChild(addButton);

    // Adiciona eventos aos botões de editar e excluir do novo retângulo
    adicionarEventos(divClone);
}

// Função para adicionar eventos de clique aos botões de editar e excluir
function adicionarEventos(retangulo) {
    var botaoExcluir = retangulo.querySelector('.delete');
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this);
    });

    var botaoLapis = retangulo.querySelector('.lapis');
    botaoLapis.addEventListener('click', function() {
        liberarEdicao(this.closest('.retan'));
    });
}

// Função para excluir um retângulo
function excluirRetangulo(element) {
    var retangulo = element.closest('.retan');
    tipoUltimoRetanguloRemovido = proximoTipoRetangulo;
    retangulo.remove();

    var retangulosRestantes = document.querySelectorAll('.retan');
    if (retangulosRestantes.length === 0) {
        adicionarRetangulo();
    }
}

// Função para liberar os inputs para edição
function liberarEdicao(element) {
    var id = element.id;
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

// Função para salvar as edições e enviar para o servidor
async function salvarEdicao(element, novoTitulo, novoTextoNota) {
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

    var id = element.id;
    if (!notas[id]) {
        notas[id] = {
            id: proximoIdRetangulo,
            titulo: novoTitulo,
            Nota: novoTextoNota
        };
    } else {
        notas[id].titulo = novoTitulo;
        notas[id].Nota = novoTextoNota;
    }

    try {
        const response = await fetch(URL_NOTAS, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(notas[id]),
        });

        if (response.ok) {
            alert("Nota salva com sucesso");
        } else {
            console.log("Failed response:", response);
            alert("Erro ao salvar nota");
        }
    } catch (error) {
        console.log("Error:", error);
        alert("Erro ao salvar nota");
    }
}

// Adicionar evento de clique para o botão "+"
var btnAdicionar = document.querySelector(".add");
btnAdicionar.addEventListener("click", adicionarRetangulo);

// Adiciona eventos de clique aos botões de editar e excluir dos retângulos existentes
document.querySelectorAll('.retan').forEach(function(retangulo) {
    adicionarEventos(retangulo);
});
