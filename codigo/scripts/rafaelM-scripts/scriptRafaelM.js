document.addEventListener('DOMContentLoaded', carregarDados);

//Função para carregar o JSON
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

//Limitador de matérias
const itensPerPage = 4;
let currentPage = 1;

//Função para contar o total de tarefas em cada matéria
function TotalTarefasdasMaterias(tarefas) {
    const totalMaterias = {};
    tarefas.forEach(tarefa => {
        if (!totalMaterias[tarefa.materia]) {
            totalMaterias[tarefa.materia] = 0;
        }
        totalMaterias[tarefa.materia]++;
    });
    return totalMaterias;
}

//Função para contar o total de tarefas feitas em cada matéria
function TarefasFeitasdasMaterias(tarefas) {
    const feitasMaterias = {};
    tarefas.forEach(tarefa => {
        if (tarefa.status === "3") {
            if (!feitasMaterias[tarefa.materia]) {
                feitasMaterias[tarefa.materia] = 0;
            }
            feitasMaterias[tarefa.materia]++;
        }
    });
    return feitasMaterias;
}

//Função para mostrar o progresso das disciplinas
function atualizarProgresso(data) {
    const progressoBloco = document.getElementById('blocodeprogresso');  
    
    const totalTarefasPorMateria = TotalTarefasdasMaterias(data.tarefas);
    const tarefasFeitasPorMateria = TarefasFeitasdasMaterias(data.tarefas);
    
    const materias = Object.keys(totalTarefasPorMateria);
    const totalPages = Math.ceil(materias.length / itensPerPage);

    // Função para renderizar a página atual
    function renderPage(page) {
        progressoBloco.innerHTML = '<h3 class="tituloProgresso">Progresso das Disciplinas</h3>'; // Reset conteúdo
        const start = (page - 1) * itensPerPage;
        const end = Math.min(start + itensPerPage, materias.length);

        for (let i = start; i < end; i++) {
            const materia = materias[i];
            const totalTarefas = totalTarefasPorMateria[materia];
            const tarefasFeitas = tarefasFeitasPorMateria[materia] || 0;
            const porcentagem = (tarefasFeitas / totalTarefas) * 100;
            const porcentagemLimite = Math.max(0, Math.min(100, porcentagem));
            let porcentagemContador;

            // Limitar a porcentagem de 0 a 100
            if (Number.isInteger(porcentagemLimite)) {
                porcentagemContador = porcentagemLimite.toString();
            } else {
                porcentagemContador = porcentagemLimite.toFixed(1);

                // If que não permite que a casa decimal comece com 0
                if (porcentagemContador.endsWith('.0')) {
                    porcentagemContador = porcentagemLimite.toFixed(0);
                }
            }

            const flexContainer = document.createElement('div');
            flexContainer.className = 'flex-container';

            const nomeMateriaClone = document.createElement('h4');
            nomeMateriaClone.textContent = materia;

            const porcentagemClone = document.createElement('div');
            porcentagemClone.className = 'porcentagemClone';

            const nivelProgressoClone = document.createElement('h4');
            porcentagemClone.appendChild(nivelProgressoClone);

            flexContainer.appendChild(nomeMateriaClone);
            flexContainer.appendChild(porcentagemClone);

            const progressBarClone = document.createElement('div');
            progressBarClone.className = 'progress-barClone';

            const levelProgressClone = document.createElement('div');
            levelProgressClone.className = 'level-progressClone';

            progressBarClone.appendChild(levelProgressClone);

            progressoBloco.appendChild(flexContainer);
            progressoBloco.appendChild(progressBarClone);

            nivelProgressoClone.textContent = `${tarefasFeitas} / ${totalTarefas} (${porcentagemContador}%)`;
            levelProgressClone.style.width = porcentagemLimite + '%';
        }

        //Botões de navegação
        const navigation = document.createElement('div');
        navigation.className = 'navigation';
        
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '←';
        prevButton.disabled = page === 1;
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderPage(currentPage);
        });

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '→';
        nextButton.disabled = page === totalPages;
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderPage(currentPage);
        });

        navigation.appendChild(prevButton);
        navigation.appendChild(nextButton);
        progressoBloco.appendChild(navigation);
    }

    //Renderizar a primeira página
    renderPage(currentPage);
}



