// Função para mostrar o progresso da tarefa da disciplina
var nomeTarefa = document.querySelector("#nomeTarefa");
nomeTarefa.innerHTML = 'Tarefa';

const progresso = document.querySelector("#level-progress");
const contador = document.querySelector("#nivelProgresso");

progresso.style.width = ('79') + '%';
contador.innerHTML = (progresso.style.width);

//Função para criar tarefas
function criarTarefa() {
    var tarefaOriginal = document.getElementById('tasks-box');
    var novaTarefa = tarefaOriginal.cloneNode(true);
    var local= document.getElementById('divisao');
    
    local.appendChild(novaTarefa);
}


  

