//URL API DE DADOS
const URL_MATERIAS = "http://localhost:3000/materias";

//CREATING A SUBJECT
const createSubjectBtn = document.getElementById("createSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectBtn");
const createSubjectModal = document.getElementById("createSubjectModal");

//GETTING THE SUBJECTS
async function fetchSubjects() {
  try {
    const response = await fetch(URL_MATERIAS);
    if (response.ok) {
      const subjectData = await response.json();
      for (let i = 0; i < subjectData.lenght; i++) {
        console.log(subjectData[i]);
      }
      console.log("Es");
    }
  } catch (error) {}
}

fetchSubjects();

//Getting knowladge about the form to create a suject
const createSubjectForm = document.getElementById("newSubjectForm");
createSubjectForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target);
  const formData = new FormData(e.target);
  const jsonObject = {};

  //Passing data to the json object
  formData.forEach((value, key) => {
    console.log(value, key);
    jsonObject[key] = value;
  });

  try {
    const reponse = await fetch(URL_MATERIAS, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(jsonObject),
    });

    if (reponse.ok) {
    } else {
    }
  } catch (error) {
    alert("Erro ao criar matéria");
  }
});

closeSubjectBtn.addEventListener("click", () => {
  createSubjectModal.close();
});

//SENDING THE NEW SUBJECT TO RHE DB.JSON - POST METHOD
createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
});
