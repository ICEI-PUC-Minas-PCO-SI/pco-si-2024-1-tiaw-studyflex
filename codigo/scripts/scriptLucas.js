function editarNomeDisciplina(element) {
    // Cria um campo de entrada de texto para editar o nome da disciplina
    var inputNome = document.createElement('input');
    inputNome.type = 'text'; // Tipo de entrada de texto
    inputNome.value = element.querySelector('.subject-name').textContent; // Define o valor inicial como o nome atual da disciplina
    
    // Substitui o nome da disciplina pelo campo de entrada de texto
    element.querySelector('.subject-name').replaceWith(inputNome);
    
    // Define o foco no campo de entrada de texto
    inputNome.focus();
    
    // Adiciona um evento para capturar a tecla "Enter" e salvar o novo nome da disciplina
    inputNome.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarNomeDisciplina(element, inputNome.value);
        }
    });

    // Adiciona um evento para capturar o evento de foco perdido e salvar o novo nome da disciplina
    inputNome.addEventListener('blur', function() {
        salvarNomeDisciplina(element, inputNome.value);
    });
}

function salvarNomeDisciplina(element, novoNome) {
    // Cria um novo elemento span para representar o nome atualizado da disciplina
    var spanNome = document.createElement('span');
    spanNome.className = 'subject-name';
    spanNome.textContent = novoNome; // Define o texto como o novo nome da disciplina
    
    // Substitui o campo de entrada de texto pelo novo nome da disciplina
    element.querySelector('input[type="text"]').replaceWith(spanNome);
}


function adicionarDisciplina() {
    // Cria um elemento div para representar uma nova disciplina
    var novaDisciplina = document.createElement('div');
    novaDisciplina.className = 'subject-box'; // Adiciona a classe 'subject-box'
    novaDisciplina.setAttribute('onclick', 'editarNomeDisciplina(this)'); // Adiciona o atributo de onclick para edição de nome

    // Cria um elemento span para representar o nome da disciplina
    var nomeDisciplina = document.createElement('span');
    nomeDisciplina.className = 'subject-name';
    nomeDisciplina.textContent = 'Nova Disciplina'; // Define um nome padrão para a nova disciplina

    // Cria um elemento div para representar a barra de progresso
    var barraProgresso = document.createElement('div');
    barraProgresso.className = 'progress';
    
    // Cria um elemento div para representar a barra de progresso real
    var progressoReal = document.createElement('div');
    progressoReal.className = 'progress-bar-disc';
    progressoReal.style.width = '0'; // Define a largura como 0 (barra de progresso zerada)

    // Adiciona a barra de progresso real como filho da barra de progresso
    barraProgresso.appendChild(progressoReal);

    // Cria um elemento span para representar o número de tarefas
    var numTarefas = document.createElement('span');
    numTarefas.className = 'tasks-disciplina';
    numTarefas.textContent = 'N° Tarefas: 0'; // Define o número de tarefas como 0

    // Adiciona os elementos à nova disciplina
    novaDisciplina.appendChild(nomeDisciplina);
    novaDisciplina.appendChild(barraProgresso);
    novaDisciplina.appendChild(numTarefas);

    // Adiciona a nova disciplina ao container de sessões
    var containerSessoes = document.getElementById('containerSessoes');
    containerSessoes.appendChild(novaDisciplina);
}

function editarNomeDisciplina(element) {
    // Obtém o nome atual da disciplina
    var nomeAtual = element.querySelector('.subject-name').textContent;

    // Cria um campo de entrada de texto para editar o nome da disciplina
    var inputNome = document.createElement('input');
    inputNome.type = 'text'; // Tipo de entrada de texto
    inputNome.value = nomeAtual; // Define o valor inicial como o nome atual da disciplina
    
    // Substitui o nome da disciplina pelo campo de entrada de texto
    element.querySelector('.subject-name').replaceWith(inputNome);
    
    // Define o foco no campo de entrada de texto
    inputNome.focus();
    
    // Adiciona um evento para capturar a tecla "Enter" e salvar o novo nome da disciplina
    inputNome.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            salvarNomeDisciplina(element, inputNome.value);
        }
    });

    // Adiciona um evento para capturar o evento de foco perdido e salvar o novo nome da disciplina
    inputNome.addEventListener('blur', function() {
        salvarNomeDisciplina(element, inputNome.value);
    });
}

function salvarNomeDisciplina(element, novoNome) {
    // Cria um novo elemento span para representar o nome atualizado da disciplina
    var spanNome = document.createElement('span');
    spanNome.className = 'subject-name';
    spanNome.textContent = novoNome; // Define o texto como o novo nome da disciplina
    
    // Substitui o campo de entrada de texto pelo novo nome da disciplina
    element.querySelector('input[type="text"]').replaceWith(spanNome);
}

