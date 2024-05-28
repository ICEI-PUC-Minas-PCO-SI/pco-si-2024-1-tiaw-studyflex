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

    var botaoExcluir = divClone.querySelector('.delete');
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this);
    });

    var botaoLapis = divClone.querySelector('.lapis');
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
            salvarEdicao(element, id, inputTitulo.value, inputTextoNota.value);
        }
    });

    inputTitulo.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(element, id, inputTitulo.value, inputTextoNota.value);
        }
    });
}

// Função para salvar as edições e enviar para o servidor
async function salvarEdicao(element, id, novoTitulo, novoTextoNota) {
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
        titulo: novoTitulo,
        Nota: novoTextoNota
    };

    try {
        const response = await fetch(URL_NOTAS, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(notas[id]),
        });

        if (response.ok) {
            alert("Nota editada com sucesso");
        } else {
            console.log("Failed response:", response);
            alert("Erro ao editar nota");
        }
    } catch (error) {
        console.log("Error:", error);
        alert("Erro ao editar nota");
    }
}

// Adicionar evento de clique para o botão "+"
var btnAdicionar = document.querySelector(".add");
btnAdicionar.addEventListener("click", adicionarRetangulo);

document.querySelectorAll('.delete').forEach(function(botaoExcluir) {
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this);
    });
});

document.querySelectorAll('.lapis').forEach(function(botaoLapis) {
    botaoLapis.addEventListener('click', function() {
        liberarEdicao(this.closest('.retan'));
    });
});
