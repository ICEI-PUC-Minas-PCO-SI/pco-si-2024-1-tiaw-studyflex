//URL API DE DADOS
URL_TAREFAS = "http://localhost:3000/tarefas";
URL_MATERIAS = "http://localhost:3000/materias";

//ADD NAV ELEMENT
const addSubjectModal = document.getElementById("addSubjectModal");
const openModal = document.getElementById("addSubjectButton");
const closeModal = document.getElementById("closeSubjectButton");
const navBar = document.getElementById("viewTab");
const windowNav = document.getElementById("windowNav");

//MAIN CONTAINER
const mainContainer = document.getElementById("mainContainer");

//ASIDE VARIABLES
const asideOptions = document.getElementsByClassName("aside-option");
const dashboard = document.getElementById("dashboardTab");
const anotacoes = document.getElementById("anotacoesTab");
const materias = document.getElementById("materiasTab");
const config = document.getElementById("configTab");

//TASK MODAL VARIABLES
const createTaskModal = document.getElementById("creteTaskModal");
const createTaskButton = document.getElementById("createTaskButton");
const closeTaskButton = document.getElementById("closeTaskCreatorButton");

//TASK CONTAINER
const taskContainer = document.getElementById("taskContainer");

//FUNCTIONS --------------

//See if there is tasks to show

const taskName = document.getElementById("newTaskName");
const taskStatus = document.getElementById("statusOption");
const taskDate = document.getElementById("TaskEndDate");
const taskSubject = document.getElementById("subjectOption");
const taskPriority = document.getElementById("priorityOption");
const newTaskForm = document.getElementById("newTaskForm");

// Make a GET request to the JSON server
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
  });

//Create task from homescreen
createTaskButton.addEventListener("click", () => {
  createTaskModal.showModal();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var data = {
    id: 1,
    nome: taskName.value,
    status: taskStatus.value,
    data: taskDate.value,
    materia: taskSubject.value,
    prioridade: taskPriority.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(URL_TAREFAS, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao realizar a requisição");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response from server:", responseData);
    })
    .catch((error) => {
      console.error("Erro ao realizar a requisição", error);
    });
  createTaskModal.close();
});

closeTaskButton.addEventListener("click", () => {
  createTaskModal.close();
});

//Add subject dialog
openModal.addEventListener("click", () => {
  addSubjectModal.showModal();
});

closeModal.addEventListener("click", () => {
  addSubjectModal.close();
});

//Toggling active style in the aside options
for (let asideOption of asideOptions) {
  //function to toggle style
  asideOption.addEventListener("click", () => {
    let toAddStyle = document.getElementById(asideOption.id);

    //checking the active option
    for (let option of asideOptions) {
      if (option.classList.contains("active")) {
        option.classList.remove("active");
      }
    }
    toAddStyle.classList.add("active");
  });
}

fetch(URL_TAREFAS)
  .then((response) => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error("Erro ao realizar a requisição");
    }
    return response.json();
  })
  .then((data) => {
    // Use the JSON data
    for (let i = 0; i < data.length; i++) {
      var taskHtmlElement = `
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
    `;
      taskContainer.innerHTML += taskHtmlElement;
    }
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Erro ao realizar a requisição", error);
  });
