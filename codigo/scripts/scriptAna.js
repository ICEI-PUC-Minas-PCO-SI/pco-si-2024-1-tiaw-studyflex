document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('id01');
    const taskName = document.getElementById('taskName');
    const taskNameInput = document.getElementById('taskNameInput');
    const taskNameForm = document.getElementById('taskNameForm');
    const startDateSpan = document.getElementById('startDate');
    const endDateSpan = document.getElementById('endDate');
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');

    let taskData = {
        name: "TAREFA 3",
        startDate: "Data de Início",
        endDate: "Data de Fim"
    };

    function loadTaskData() {
        if (localStorage.getItem('taskData')) {
            taskData = JSON.parse(localStorage.getItem('taskData'));
            updateTaskDetails();
        }
    }

    function updateTaskDetails() {
        taskName.textContent = taskData.name;
        startDateSpan.textContent = taskData.startDate;
        endDateSpan.textContent = taskData.endDate;
    }

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    startDateInput.addEventListener('input', function() {
        taskData.startDate = startDateInput.value;
        localStorage.setItem('taskData', JSON.stringify(taskData));
        updateTaskDetails();
    });

    endDateInput.addEventListener('input', function() {
        taskData.endDate = endDateInput.value;
        localStorage.setItem('taskData', JSON.stringify(taskData));
        updateTaskDetails();
    });

    taskNameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (taskNameInput.value.trim() !== "") {
            taskData.name = taskNameInput.value.trim();
            localStorage.setItem('taskData', JSON.stringify(taskData));
            updateTaskDetails();
            modal.style.display = 'none';
        }
    });

    loadTaskData();
    
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
