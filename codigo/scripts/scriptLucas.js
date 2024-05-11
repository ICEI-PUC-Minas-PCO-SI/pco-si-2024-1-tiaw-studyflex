// Objeto para armazenar as informações das disciplinas
var disciplinasData = {
    disciplinas: []
};

// Função para salvar as informações das disciplinas em formato JSON
function salvarDadosDisciplinas() {
    var jsonDisciplinas = JSON.stringify(disciplinasData);
    // Aqui você pode armazenar o JSON onde for necessário, como localStorage ou enviá-lo para um servidor
    console.log(jsonDisciplinas); // Exemplo: exibindo no console
}

// Função para carregar os dados das disciplinas do armazenamento (se necessário)
function carregarDadosDisciplinas() {
    // Aqui você pode carregar o JSON armazenado, converter para objeto JavaScript e atribuir a disciplinasData
    // Exemplo: disciplinasData = JSON.parse(jsonArmazenado);
}

// Função para editar o nome da disciplina
function editarNomeDisciplina(element) {
    var nomeAtual = element.querySelector('.subject-name').textContent;
    var inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.value = nomeAtual;
    element.querySelector('.subject-name').replaceWith(inputNome);
    inputNome.focus();

    inputNome.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            var novoNome = inputNome.value;
            salvarNomeDisciplina(element, novoNome);
            salvarDadosDisciplinas(); // Salva os dados das disciplinas após a edição
        }
    });

    inputNome.addEventListener('blur', function() {
        var novoNome = inputNome.value;
        salvarNomeDisciplina(element, novoNome);
        salvarDadosDisciplinas(); // Salva os dados das disciplinas após a edição
    });
}

// Função para salvar o nome da disciplina
function salvarNomeDisciplina(element, novoNome) {
    var spanNome = document.createElement('span');
    spanNome.className = 'subject-name';
    spanNome.textContent = novoNome;
    element.querySelector('input[type="text"]').replaceWith(spanNome);

    // Atualiza as informações no objeto disciplinasData
    var index = Array.from(element.parentElement.children).indexOf(element);
    disciplinasData.disciplinas[index].nome = novoNome;
}

// Função para adicionar uma nova disciplina
function adicionarDisciplina() {
    var novaDisciplina = document.createElement('div');
    novaDisciplina.className = 'subject-box';
    novaDisciplina.setAttribute('onclick', 'editarNomeDisciplina(this)');

    var nomeDisciplina = document.createElement('span');
    nomeDisciplina.className = 'subject-name';
    nomeDisciplina.textContent = 'Nova Disciplina';

    var barraProgresso = document.createElement('div');
    barraProgresso.className = 'progress';
    
    var progressoReal = document.createElement('div');
    progressoReal.className = 'progress-bar-disc';
    progressoReal.style.width = '0';

    var numTarefas = document.createElement('span');
    numTarefas.className = 'tasks-disciplina';
    numTarefas.textContent = 'N° Tarefas: 0';

    novaDisciplina.appendChild(nomeDisciplina);
    novaDisciplina.appendChild(barraProgresso);
    novaDisciplina.appendChild(numTarefas);

    var containerSessoes = document.getElementById('containerSessoes');
    containerSessoes.appendChild(novaDisciplina);

    // Adiciona as informações da nova disciplina ao objeto disciplinasData
    disciplinasData.disciplinas.push({
        nome: nomeDisciplina.textContent,
        numTarefas: 0
    });

    salvarDadosDisciplinas(); // Salva os dados das disciplinas após adicionar uma nova disciplina
}

// Chamada para carregar os dados das disciplinas, se necessário
// carregarDadosDisciplinas();
