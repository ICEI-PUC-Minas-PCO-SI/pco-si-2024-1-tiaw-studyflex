  // JSON Exemplo
  const dbjson = {
    "nomeMateria": "Javagdfs",
    "totalTarefas": 4,
    "tarefasFeitas": 3
};

// Obter os valores do JSON e atualizar a página
const nomeMateria = dbjson.nomeMateria;
const totalTarefas = dbjson.totalTarefas;
const tarefasFeitas = dbjson.tarefasFeitas;

// Mostrar o nome da matéria
mostrarNomeMateria(nomeMateria);

// Calcular a porcentagem de progresso
calcularPorcentagem(totalTarefas, tarefasFeitas);

// Função para mostrar o nome da matéria
function mostrarNomeMateria(nome) {
    var nomeTarefa = document.querySelector("#nomeTarefa");
    nomeTarefa.innerHTML = nome;
}

// Função para calcular a porcentagem de tarefas concluídas e atualizar o progresso
function calcularPorcentagem(total, feitas) {
   
    // Calcular a porcentagem
    const porcentagem = (feitas / total) * 100;

    // Limitar a porcentagem entre 0 e 100
    const porcentagemLimite = Math.max(0, Math.min(100, porcentagem));

    const progresso = document.querySelector("#level-progress");
    const contador = document.querySelector("#nivelProgresso");

    // Verificador de valor (Se é inteiro ou não)
    let porcentagemContador;
    if (Number.isInteger(porcentagemLimite)) {
        porcentagemContador = porcentagemLimite.toString();
    } 
    else {
        porcentagemContador = porcentagemLimite.toFixed(1);

        // Verificador caso a casa decimal comece com 0 (Não mostrar caso ocorra)
        if (porcentagemContador.endsWith('.0')) {
            porcentagemContador = porcentagemLimite.toFixed(0);
        }
    }

    progresso.style.width = porcentagemLimite + '%';
    contador.innerHTML = `${porcentagemContador}%`;
}

//Função para criar tarefas
function criarTarefa() {
    var tarefaOriginal = document.getElementById('tasks-box');
    var novaTarefa = tarefaOriginal.cloneNode(true);
    var local = document.getElementById('divisao');

    local.appendChild(novaTarefa);
}



