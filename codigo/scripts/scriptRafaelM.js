//Exemplo JSON
const dbjson = [
    {
        "nomeMateria": "ATP",
        "totalTarefas": 20,
        "tarefasFeitas": 20
    },
    {
        "nomeMateria": "Tiaw",
        "totalTarefas": 9,
        "tarefasFeitas": 4
    },
    {
        "nomeMateria": "Introdução à Computação",
        "totalTarefas": 12,
        "tarefasFeitas": 10
    },
    {
        "nomeMateria": "DIW",
        "totalTarefas": 8,
        "tarefasFeitas": 5
    },
    {
        "nomeMateria": "Java",
        "totalTarefas": 15,
        "tarefasFeitas": 0
    }
];


function atualizarProgresso(data) {
    const progressoBloco = document.getElementById('blocodeprogresso');
    data.forEach(item => {

        const flexContainer = document.createElement('div');
        flexContainer.className = 'flex-container';

        const nomeTarefaClone = document.createElement('h4');
        nomeTarefaClone.textContent = item.nomeMateria;

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

        //Calcular a porcentagem
        const porcentagem = (item.tarefasFeitas / item.totalTarefas) * 100;
        const porcentagemLimite = Math.max(0, Math.min(100, porcentagem));
        let porcentagemContador;

        //IF para limitar a porcentagem de 0 a 100 
        if (Number.isInteger(porcentagemLimite)) {
            porcentagemContador = porcentagemLimite.toString();
        }
        else {
            porcentagemContador = porcentagemLimite.toFixed(1);

            //IF para verificar se a primeira casa decimal é 0 (Não mostrar caso ocorra)
            if (porcentagemContador.endsWith('.0')) {
                porcentagemContador = porcentagemLimite.toFixed(0);
            }
        }

        levelProgressClone.style.width = porcentagemLimite + '%';
        nivelProgressoClone.textContent = `${item.tarefasFeitas} / ${item.totalTarefas} (${porcentagemContador}%)`;
    });
}


atualizarProgresso(dbjson);

//Função para criar tarefas
function criarTarefa() {
    var tarefaOriginal = document.getElementById('tasks-box');
    var novaTarefa = tarefaOriginal.cloneNode(true);
    var local = document.getElementById('divisao');

    local.appendChild(novaTarefa);
}



