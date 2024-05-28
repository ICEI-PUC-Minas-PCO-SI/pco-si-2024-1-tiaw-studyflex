//CREATING A SUBJECT
const createSubjectBtn = document.getElementById("createSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectButton");
const createSubjectModal = document.getElementById("createSubjectModal");

createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
});

closeSubjectBtn.addEventListener("click", () => {
  createSubjectModal.close();
});

function saveSubjects(subjects) {
  localStorage.setItem('subjects', JSON.stringify(subjects));
}

function loadSubjects() {
  const subjects = localStorage.getItem('subjects');
  return subjects ? JSON.parse(subjects) : [];
}

// Exemplo de adicionar uma nova matéria
createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
  // Adicione o código para criar uma nova matéria aqui
  // Após criar a matéria, chame saveSubjects para salvar as matérias atualizadas
  const subjects = loadSubjects();
  // Adicione a nova matéria à lista de matérias
  saveSubjects(subjects);
});
