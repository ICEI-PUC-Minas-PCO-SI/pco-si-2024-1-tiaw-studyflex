document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('id01');

    // Função para carregar dados do armazenamento local
    function loadTaskData() {
        // Verifica se há dados no armazenamento local
        if (localStorage.getItem('taskData')) {
            // Se houver, carrega os dados do armazenamento local
            taskData = JSON.parse(localStorage.getItem('taskData'));
            // Atualiza as datas no container da tarefa
            updateTaskDates();
        }
    }

    // Objeto JSON para armazenar informações da tarefa
    let taskData = {
        startDate: "Data de Início",
        endDate: "Data de Fim"
    };

    // Função para atualizar as datas no container da tarefa
    function updateTaskDates() {
        const startDateSpan = document.getElementById('startDate');
        const endDateSpan = document.getElementById('endDate');
        startDateSpan.textContent = taskData.startDate;
        endDateSpan.textContent = taskData.endDate;
    }

    // Abrir o modal
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Fechar o modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Event listeners para atualizar o objeto JSON e o armazenamento local quando as datas forem modificadas no modal
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    startDateInput.addEventListener('input', function() {
        taskData.startDate = startDateInput.value;
        // Salva os dados atualizados no armazenamento local
        localStorage.setItem('taskData', JSON.stringify(taskData));
        updateTaskDates();
    });

    endDateInput.addEventListener('input', function() {
        taskData.endDate = endDateInput.value;
        // Salva os dados atualizados no armazenamento local
        localStorage.setItem('taskData', JSON.stringify(taskData));
        updateTaskDates();
    });

    // Carrega os dados do armazenamento local ao carregar a página
    loadTaskData();
});



  