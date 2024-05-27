// Variável para controlar o tipo de retângulo a ser adicionado
var proximoTipoRetangulo = 1;

// Variável para controlar o ID do próximo retângulo a ser adicionado
var proximoIdRetangulo = 0;

// Função para adicionar retângulos
function adicionarRetangulo() {
    var container = document.querySelector(".container2");
    var divClone;

    // Determinar o tipo de retângulo a ser adicionado
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
    
    // Atribuir um ID único para o retângulo clonado
    var idRetangulo = 'retangulo-' + proximoIdRetangulo;
    divClone.setAttribute('id', idRetangulo);
    proximoIdRetangulo++;
    
    container.insertBefore(divClone, container.lastElementChild);

    var addButton = document.querySelector(".Btn");
    container.appendChild(addButton);
    
    // Adicionar evento de clique para o botão de exclusão do retângulo recém-adicionado
    var botaoExcluir = divClone.querySelector('.delete');
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this); // Chamar a função excluirRetangulo quando o botão "x" for clicado
    });

    // Adicionar evento de clique para o botão do lápis do retângulo recém-adicionado
    var botaoLapis = divClone.querySelector('.lapis');
    botaoLapis.addEventListener('click', function() {
        liberarEdicao(this.closest('.retan')); // Chamar a função liberarEdicao quando o botão do lápis for clicado
    });
}

// Função para excluir um retângulo
function excluirRetangulo(element) {
    var retangulo = element.closest('.retan'); // Encontrar o retângulo pai do botão "x"
    retangulo.remove(); // Remover o retângulo do DOM
    
    // Verificar se há retângulos restantes
    var retangulosRestantes = document.querySelectorAll('.retan');
    if (retangulosRestantes.length === 0) {
        // Se não houver retângulos restantes, adicionar um novo
        adicionarRetangulo();
    }
}

// Função para liberar os inputs para edição
function liberarEdicao(element) {
    var id = element.dataset.id; // Obter o ID da nota
    var titulo = element.querySelector('.h3');
    var textoNota = element.querySelector('.p');
    var lapis = element.querySelector('.lapis'); // Selecionar o botão do lápis
    
    // Ocultar o botão do lápis
    lapis.style.display = 'none';

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
            
            // Restaurar o botão do lápis
            inputTitulo.replaceWith(titulo);
            inputTextoNota.replaceWith(textoNota);
            lapis.style.display = 'block'; // Mostrar o botão do lápis novamente
        }
    });

    inputTitulo.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(element, id, inputTitulo.value, inputTextoNota.value);
            exibirJSON();
            
            // Restaurar o botão do lápis
            inputTitulo.replaceWith(titulo);
            inputTextoNota.replaceWith(textoNota);
            lapis.style.display = 'block'; // Mostrar o botão do lápis novamente
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

    // Restaurar o botão do lápis
    var lapis = element.querySelector('.lapis');
    lapis.style.display = 'block';

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

// Adicionar evento de clique para o botão "+"
var btnAdicionar = document.querySelector(".add");
btnAdicionar.addEventListener("click", adicionarRetangulo);

// Adicionar eventos de clique para os botões de exclusão dos retângulos iniciais
document.querySelectorAll('.delete').forEach(function(botaoExcluir) {
    botaoExcluir.addEventListener('click', function() {
        excluirRetangulo(this);
    });
});

// Adicionar eventos de clique para os botões do lápis dos retângulos iniciais
document.querySelectorAll('.lapis').forEach(function(botaoLapis) {
    botaoLapis.addEventListener('click', function() {
        liberarEdicao(this.closest('.retan'));
    });
});
