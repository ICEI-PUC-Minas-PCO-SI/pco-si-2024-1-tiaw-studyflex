//URL API DE DADOS
const URL_TAREFAS = "http://localhost:3000/tarefas";

//TASK MODAL VARIABLES
const createTaskModal = document.getElementById("creteTaskModal");
const createTaskButton = document.getElementById("createTaskBtn");
const closeTaskButton = document.getElementById("closeTaskCreatorButton");

//FUNCTIONS --------------

//See if there is tasks to show

// Make a GET request to the JSON server
/*
fetch(URL_MATERIAS)
  .then((response) => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error("Erro ao realizar a requisição");
    }
    // Parse the JSON response
    return response.json();
  })
  .then((data) => {
    // Use the JSON data
    for (let i = 0; i < data.length; i++) {
      var childElement = document.createElement("option");
      childElement.textContent = data[i].nome;
      childElement.childElement = taskSubject.appendChild(childElement);
    }
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Erro ao realizar a requisição", error);
  });*/

newTaskForm.addEventListener("submit", () => {
  createTaskModal.close();
});

closeTaskButton.addEventListener("click", () => {
  createTaskModal.close();
});

/*
    // Use the JSON data
    for (let i = 0; i < data.length; i++) {
      /*var taskHtmlElement = `
          <article class="task-preview note">
              <a href="#"><h3 class="task-title">${data[i].nome}</h3></a>
              <a href="#" class="task-subject">${data[i].materia}</a>
              <p class="task-description">
              ${data[i].descricao}
              </p>
              <button  class="task-details">
                <img
                  src="./assets/imgs/details_icon.png"
                  alt="Detalhes icone"
                  class="icon task-icon"
                />
              </button>
            </article>
    `;*/

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
    console.log(e.target);

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

      if (reponse.ok) {
        alert("Tarefa criada com sucesso");
      } else {
        alert("Erro ao criar tarefa");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Erro ao criar tarefa");
    }
  });
});
