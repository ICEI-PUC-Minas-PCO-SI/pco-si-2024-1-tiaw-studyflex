// Função para mostrar o progresso da tarefa da disciplina
//JSON Exemplo
const dadosTarefas = {
    "totalTarefas": 279,
    "tarefasFeitas": 14
};

// Função para calcular a porcentagem de tarefas concluídas e atualizar o progresso
function calcularPorcentagem(total, feitas) {

    //Calcular a porcentagem
    const porcentagem = (feitas / total) * 100;

    //Limite de 0 a 100
    const porcentagemLimite = Math.max(0, Math.min(100, porcentagem));

    const progresso = document.querySelector("#level-progress");
    const contador = document.querySelector("#nivelProgresso");
    
    //Verificador se o valor é inteiro
    let porcentagemContador;
    if (Number.isInteger(porcentagemLimite)){
        porcentagemContador = porcentagemLimite.toString();
    }
    else{
        porcentagemContador = porcentagemLimite.toFixed(1);
        
        //Verificador caso a casa decimal comece com 0 (Não mostrar caso ocorra)
        if (porcentagemContador.endsWith('.0')){
            porcentagemContador = porcentagemLimite.toFixed(0);
        }
    }

    progresso.style.width = porcentagemLimite + '%';
    contador.innerHTML = `${porcentagemContador}%`;
}

// Obter os valores do JSON e calcular a porcentagem de progresso
const totalTarefas = dadosTarefas.totalTarefas;
const tarefasFeitas = dadosTarefas.tarefasFeitas;
calcularPorcentagem(totalTarefas, tarefasFeitas);

//Função para criar tarefas
function criarTarefa() {
    var tarefaOriginal = document.getElementById('tasks-box');
    var novaTarefa = tarefaOriginal.cloneNode(true);
    var local = document.getElementById('divisao');

    local.appendChild(novaTarefa);
}



