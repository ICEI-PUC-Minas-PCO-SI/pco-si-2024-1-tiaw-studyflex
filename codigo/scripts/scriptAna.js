document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('id01');

    
    function loadTaskData() {
       
        if (localStorage.getItem('taskData')) {
            
            taskData = JSON.parse(localStorage.getItem('taskData'));
         
            updateTaskDates();
        }
    }

    // JSON para armazenar informações da tarefa
    let taskData = {
        startDate: "Data de Início",
        endDate: "Data de Fim"
    };

   
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


    loadTaskData();
    
});
document.addEventListener('DOMContentLoaded', () => {
    
    const storedPreferences = JSON.parse(localStorage.getItem('preferences')) || {};

   
    Object.keys(storedPreferences).forEach(preferenceId => {
        const checkbox = document.getElementById(preferenceId);
        const icon = document.getElementById(`icon${preferenceId.charAt(0).toUpperCase() + preferenceId.slice(1)}`);
        const taskIcon = document.getElementById(`taskIcon${preferenceId.charAt(0).toUpperCase() + preferenceId.slice(1)}`);

        if (storedPreferences[preferenceId]) {
            checkbox.checked = true;
            icon.style.display = 'inline';
            taskIcon.style.display = 'inline';
        }
    });
});

function updateIcon(preferenceId) {
    const checkbox = document.getElementById(preferenceId);
    const icon = document.getElementById(`icon${preferenceId.charAt(0).toUpperCase() + preferenceId.slice(1)}`);
    const taskIcon = document.getElementById(`taskIcon${preferenceId.charAt(0).toUpperCase() + preferenceId.slice(1)}`);

    if (checkbox.checked) {
        
        hideAllIconsAndCheckboxes();

        
        icon.style.display = 'inline';
        taskIcon.style.display = 'inline';
        checkbox.checked = true;

       
        savePreferences(preferenceId, true);
    } else {
      
        icon.style.display = 'none';
        taskIcon.style.display = 'none';
        checkbox.checked = false;

        
        savePreferences(preferenceId, false);
    }
}

function hideAllIconsAndCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const icons = document.querySelectorAll('.priority-icon');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    icons.forEach((icon) => {
        icon.style.display = 'none';
    });
}

function savePreferences(preferenceId, isChecked) {
    
    const storedPreferences = JSON.parse(localStorage.getItem('preferences')) || {};

    
    storedPreferences[preferenceId] = isChecked;

    
    localStorage.setItem('preferences', JSON.stringify(storedPreferences));
}




  