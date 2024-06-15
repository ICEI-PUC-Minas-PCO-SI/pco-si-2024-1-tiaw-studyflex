//URL API DE DADOS
const URL_TAREFAS = "http://localhost:3000/tarefas";

//WHAT PAGE ARE WE IN?
let pageTitle = document.querySelector(".homescreen-title").textContent;

//TASK MODAL VARIABLES
const createTaskModal = document.getElementById("creteTaskModal");
const createTaskButton = document.getElementById("createTaskBtn");
const closeTaskButton = document.getElementById("closeTaskCreatorButton");

//TASK CONTAINER VARIABLES
const tasksContainer = document.getElementById("tasksContainer");
const tasksList = document.getElementById("taskList");

//PAGINATION
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
let page = 1;
let skip;
let keyFilter, valueFilter;
let SORT_URL;

//Fetching tasks
const taskPerPage = 3;
let URL_TAREFAS_PAGE;

async function fetchTasks() {
  try {
    const response = await fetch(URL_TAREFAS);
    if (response.ok) {
      const data = await response.json();

      if (data.length > taskPerPage) {
        prevButton.classList.remove("hide");
        nextButton.classList.remove("hide");
      }
    }
  } catch (error) {}
}

fetchTasks();

function returnURL(key, value, sorting) {
  let URL_DASHBOARD = `http://localhost:3000/tarefas?status=2&status=3&_page=${page}&_limit=${taskPerPage}`;
  let URL_TAREFAS = `http://localhost:3000/tarefas?_page=${page}&_limit=${taskPerPage}`;

  if (!key && !value && !sorting) {
    if (pageTitle === "Dashboard") {
      return URL_DASHBOARD;
    } else if (pageTitle === "Tarefas") {
      return URL_TAREFAS;
    }
  } else if (!key && !value && sorting) {
    if (pageTitle === "Dashboard") {
      return URL_DASHBOARD + sorting;
    } else if (pageTitle === "Tarefas") {
      return URL_TAREFAS + sorting;
    }
  }

  if (pageTitle === "Dashboard") {
    URL_DASHBOARD = `http://localhost:3000/tarefas?${key}=${value}&_page=${page}&_limit=${taskPerPage}`;
    if (sorting) {
      return URL_DASHBOARD + sorting;
    }
    return URL_DASHBOARD;
  } else if (pageTitle === "Tarefas") {
    URL_TAREFAS = `http://localhost:3000/tarefas?${key}=${value}&_page=${page}&_limit=${taskPerPage}`;
    if (sorting) {
      return URL_TAREFAS + sorting;
    }
    return URL_TAREFAS;
  }
}

async function fetchTasksPages(key, value, sorting) {
  try {
    skip = (page - 1) * taskPerPage;
    if (!key && !value) {
      if (sorting) {
        URL_TAREFAS_PAGE = returnURL(null, null, sorting);
      } else {
        URL_TAREFAS_PAGE = returnURL();
      }
    } else {
      if (sorting) {
        URL_TAREFAS_PAGE = returnURL(key, value, sorting);
      } else {
        URL_TAREFAS_PAGE = returnURL(key, value);
      }
    }

    const response = await fetch(URL_TAREFAS_PAGE);

    if (response.ok) {
      const taskData = await response.json();

      if (taskData.length === 0) {
        page--;

        return;
      }
      tasksList.innerHTML = "";
      let taskPreview, taskListContent;

      if (taskData.length == 0) {
      }
      for (let i = 0; i < taskData.length; i++) {
        let taskStatus;
        taskPreview = document.createElement("l1");
        taskPreview.innerHTML = "";

        taskPreview.classList.add("task-item");

        if (taskData[i].status == 3) {
          taskStatus = "Fazer";
        } else if (taskData[i].status == 2) {
          taskStatus = "Fazendo";
        } else {
          taskStatus = "Feito";
        }

        let taskPriority;
        if (taskData[i].prioridade == 3) {
          taskPriority = "Urgente";
        } else if (taskData[i].prioridade == 2) {
          taskPriority = "Alta";
        } else {
          taskPriority = "Normal";
        }

        let subjectContent;
        if (taskData[i].materia === undefined) {
          subjectContent = "<span class='no-subject'></span>";
        } else {
          subjectContent = `<span>${taskData[i].materia}</span>`;
        }

        let finalDate = new Date(taskData[i].dataFinal);
        finalDate.setDate(finalDate.getDate() + 1);
        taskListContent = `
        <article class="task-item-preview">
        <div class="task-item-header">
          <div class="task-preview-title">
            <h2>${taskData[i].nome}</h2>
            ${subjectContent}
          </div>

          <div class="task-preview-options">
            <div class="options-icon-container"><i data-lucide="pen"></i></div>
            <div class="options-icon-container"><i data-lucide="x"></i></div>
          </div>
        </div>
       
        <div class="task-preview-details">
          <div class="details-container status-preview">
          <img src="./assets/imgs/task-icons/status-icon.png" alt="status"> 
            <span> ${taskStatus}</span>
          </div>
          <div class="details-container proridade-preview">
          <img src="./assets/imgs/task-icons/flag-icon.png" alt="status"/>
            <span>${taskPriority}</span>
          </div>
          <div class="details-container dataFinal-preview">
          <img src="./assets/imgs/task-icons/calendar-icon.png" alt="status"/>
            <span>${finalDate.toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}</span>
          </div>
        </div>

        <div class="task-preview-description">
     
          <p>"
          ${taskData[i].descricao}
          "
          </p>
        </div>
      </article>
      `;
        taskPreview.innerHTML += taskListContent;
        tasksList.appendChild(taskPreview);
      }
      lucide.createIcons();
    } else {
    }
  } catch (error) {
    {
      alert(error);
    }
  }
}

fetchTasksPages();

prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  } else {
    page--;
    fetchTasksPages(keyFilter, valueFilter, SORT_URL);
  }
});

nextButton.addEventListener("click", () => {
  page++;
  fetchTasksPages(keyFilter, valueFilter, SORT_URL);
});

newTaskForm.addEventListener("submit", () => {
  createTaskModal.close();
});

closeTaskButton.addEventListener("click", () => {
  createTaskModal.close();
});

//STATUS SELECT
let selectStatus = document.querySelector(".select-status"),
  selectedValueStatus = document.getElementById("selected-value-status"),
  optionsViewButtonStatus = document.getElementById(
    "options-view-button-status"
  ),
  inputOptionsStatus = document.querySelectorAll(".option-status input"),
  statusOption = document.querySelectorAll(".option-status"),
  currentStatus = document.getElementById("currentStatus");

//STATUS VARIABLES
const defaultIcon = document.getElementById("defaultIcon");
const doIcon = document.getElementById("doIcon");
const doingIcon = document.getElementById("doingIcon");
const doneIcon = document.getElementById("doneIcon");

inputOptionsStatus.forEach((input) => {
  input.addEventListener("click", (event) => {
    let statusTitle = input.dataset.label;
    selectedValueStatus.textContent = statusTitle;
    let statusDataSet = `[data-icon]`;
    let statusIcon = document.querySelectorAll(statusDataSet);

    statusIcon.forEach((status) => {
      if (status.dataset.icon == statusTitle) {
        status.classList.add("active");
      } else {
        status.classList.remove("active");
      }
    });

    const isMouseOrTouch =
      event.pointerType == "mouse" || event.pointerType == "touch";
    isMouseOrTouch && optionsViewButtonStatus.click();
  });
});

window.addEventListener("keydown", (e) => {
  if (!selectStatus.classList.contains("open")) return;

  if (e.key == "Escape" || e.key == " ") {
    optionsViewButtonStatus.click();
  }
});

optionsViewButtonStatus.addEventListener("input", () => {
  selectStatus.classList.toggle("open");

  if (!selectStatus.classList.contains("open")) return;

  const input =
    document.querySelector(".option input:checked") ||
    document.querySelector(".option input");
  input.focus();
});

//FLAG SELECT
let select = document.querySelector(".select"),
  selectedValue = document.getElementById("selected-value"),
  optionsViewButton = document.getElementById("options-view-button"),
  inputOptions = document.querySelectorAll(".option input");

const defaultFlagIcon = document.getElementById("defaultFlagIcon");

inputOptions.forEach((input) => {
  input.addEventListener("click", (event) => {
    let statusTitle = input.dataset.label;
    selectedValue.textContent = statusTitle;

    if (statusTitle == "Normal") {
      defaultFlagIcon.classList.remove("Alta");
      defaultFlagIcon.classList.remove("Urgente");
      defaultFlagIcon.classList.add("Normal");
    } else if (statusTitle == "Alta") {
      defaultFlagIcon.classList.remove("Normal");
      defaultFlagIcon.classList.remove("Urgente");
      defaultFlagIcon.classList.add("Alta");
    } else {
      defaultFlagIcon.classList.remove("Alta");
      defaultFlagIcon.classList.remove("Normal");
      defaultFlagIcon.classList.add("Urgente");
    }

    const isMouseOrTouch =
      event.pointerType == "mouse" || event.pointerType == "touch";
    isMouseOrTouch && optionsViewButton.click();
  });
});

window.addEventListener("keydown", (e) => {
  if (!select.classList.contains("open")) return;

  if (e.key == "Escape" || e.key == " ") {
    optionsViewButton.click();
  }
});

optionsViewButton.addEventListener("input", () => {
  select.classList.toggle("open");

  if (!select.classList.contains("open")) return;

  const input =
    document.querySelector(".option input:checked") ||
    document.querySelector(".option input");
  input.focus();
});

//ADD TASK FORM
const taskTitle = document.getElementById("taskTitle");
const taskStatus = document.getElementById("selected-value-status");
const taskSubject = document.getElementById("taskSubject");
const taskFinalDate = document.getElementById("TaskEndDate");
const taskPriority = document.getElementById("selected-value");
const taskDescription = document.getElementById("taskDescription");

//Create task from homescreen - POST METHOD
createTaskButton.addEventListener("click", () => {
  createTaskModal.showModal();

  //Getting knowladge about the form to create a task
  const newTaskForm = document.getElementById("newTaskForm");
  newTaskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    //Create a formData to get key/values
    const formData = new FormData(e.target);
    const jsonObject = {};
    console.log(formData);

    //Passing data to the json object
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    try {
      const reponse = await fetch(URL_TAREFAS, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(jsonObject),
      });
    } catch (error) {
      console.log("Error:", error);
      alert("Erro ao criar tarefa");
    }
  });
});

//FILTERING TASKS

const filterButton = document.getElementById("filterTask");
const sortButton = document.getElementById("sortTask");
const filterModal = document.getElementById("filterTaskModal");
const sortModal = document.getElementById("sortTaskModal");
const statusFilter = document.getElementById("statusGroup");
const priorityFilter = document.getElementById("priorityGroup");
const statusOptions = document.getElementById("statusOptions");
const priorityOptions = document.getElementById("priorityOptions");

function getOption(option) {
  switch (option) {
    case "Fazer":
      return ["3", "status"];
    case "Fazendo":
      return ["2", "status"];
    case "Feito":
      return ["1", "status"];
    case "Urgente":
      return ["3", "prioridade"];
    case "Alta":
      return ["2", "prioridade"];
    case "Normal":
      return ["1", "prioridade"];
    default:
      return "";
  }
}

filterButton.addEventListener("click", () => {
  filterModal.classList.toggle("active");

  const filterOption = document.querySelectorAll(".filter-option");
  filterOption.forEach((option) => {
    option.addEventListener("click", () => {
      let optionChosen = option.textContent;
      let value = getOption(optionChosen)[0];
      let key = getOption(optionChosen)[1];
      keyFilter = key;
      valueFilter = value;
      page = 1;
      fetchTasksPages(key, value);
    });
  });

  statusFilter.addEventListener("click", () => {
    priorityOptions.classList.remove("active");
    statusOptions.classList.toggle("active");
  });

  priorityFilter.addEventListener("click", () => {
    statusOptions.classList.remove("active");
    priorityOptions.classList.toggle("active");
  });
});

//SORT TASKS

sortButton.addEventListener("click", () => {
  sortModal.classList.toggle("active");

  const sortOption = document.querySelectorAll(".sort-option");
  sortOption.forEach((option) => {
    option.addEventListener("click", () => {
      let sortOrder;
      let sortInfo = option.textContent.trim().split(" ").at(-1);
      let sortObject = option.classList[1];
      if (sortInfo === "crescente") {
        sortOrder = "asc";
      } else {
        sortOrder = "desc";
      }
      //SORT URL
      SORT_URL = `&_sort=${sortObject}&_order=${sortOrder}`;
      fetchTasksPages(keyFilter, valueFilter, SORT_URL);
    });
  });
});
