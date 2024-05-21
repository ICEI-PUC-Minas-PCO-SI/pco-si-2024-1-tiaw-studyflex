var disciplinasData = {
    disciplinas: []
};

function salvarDadosDisciplinas() {
    var jsonDisciplinas = JSON.stringify(disciplinasData);
    console.log(jsonDisciplinas); 
}

function carregarDadosDisciplinas() {
}

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
            salvarDadosDisciplinas(); 
        }
    });

    inputNome.addEventListener('blur', function() {
        var novoNome = inputNome.value;
        salvarNomeDisciplina(element, novoNome);
        salvarDadosDisciplinas(); 
    });
}

function salvarNomeDisciplina(element, novoNome) {
    var spanNome = document.createElement('span');
    spanNome.className = 'subject-name';
    spanNome.textContent = novoNome;
    element.querySelector('input[type="text"]').replaceWith(spanNome);

    var index = Array.from(element.parentElement.children).indexOf(element);
    disciplinasData.disciplinas[index].nome = novoNome;
}

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

    disciplinasData.disciplinas.push({
        nome: nomeDisciplina.textContent,
        numTarefas: 0
    });

}
