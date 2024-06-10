// Função para contar o total de tarefas
function TotalTarefas(tarefas) {
    return tarefas.length;
}

// Função para adquirir apenas as tarefas já feitas
function contarTarefasFeitas(tarefas) {
    return tarefas.filter(tarefa => tarefa.status === "3").length;
}

function atualizarProgresso(data) {
    const progressoBloco = document.getElementById('blocodeprogresso');
   

    data.tarefas.forEach(item => {
        const flexContainer = document.createElement('div');
        flexContainer.className = 'flex-container';

        const nomeTarefaClone = document.createElement('h4');
        nomeTarefaClone.textContent = item.nome;

        const porcentagemClone = document.createElement('div');
        porcentagemClone.className = 'porcentagemClone';

        const nivelProgressoClone = document.createElement('h4');
        porcentagemClone.appendChild(nivelProgressoClone);

        flexContainer.appendChild(nomeTarefaClone);
        flexContainer.appendChild(porcentagemClone);

        const progressBarClone = document.createElement('div');
        progressBarClone.className = 'progress-barClone';

        const levelProgressClone = document.createElement('div');
        levelProgressClone.className = 'level-progressClone';

        progressBarClone.appendChild(levelProgressClone);

        progressoBloco.appendChild(flexContainer);
        progressoBloco.appendChild(progressBarClone);

        const totalTarefas = TotalTarefas(data.tarefas);
        const tarefasFeitas = contarTarefasFeitas(data.tarefas);
        const porcentagem = (tarefasFeitas / totalTarefas) * 100;
        const porcentagemLimite = Math.max(0, Math.min(100, porcentagem));
        let porcentagemContador;

        // Limitar a porcentagem de 0 a 100
        if (Number.isInteger(porcentagemLimite)) {
            porcentagemContador = porcentagemLimite.toString();
        } else {
            porcentagemContador = porcentagemLimite.toFixed(1);
            if (porcentagemContador.endsWith('.0')) {
                porcentagemContador = porcentagemLimite.toFixed(0);
            }
        }

        levelProgressClone.style.width = porcentagemLimite + '%';
        nivelProgressoClone.textContent = `${tarefasFeitas} / ${totalTarefas} (${porcentagemContador}%)`;
    });
}

//Função para carregar o JSON e atualizar o progresso
function carregarDados() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            atualizarProgresso(data);
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}
document.addEventListener('DOMContentLoaded', carregarDados);

//Função para criar tarefas
function criarTarefa() {
    var tarefaOriginal = document.getElementById('tasks-box');
    var novaTarefa = tarefaOriginal.cloneNode(true);
    var local = document.getElementById('divisao');

    local.appendChild(novaTarefa);
}



