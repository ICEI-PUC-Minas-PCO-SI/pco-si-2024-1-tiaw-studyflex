//Add subject dialog
const addSubjectModal = document.getElementById("addSubjectModal");
const openModal = document.getElementById("addSubjectButton");
const closeModal = document.getElementById("closeSubjectButton");

openModal.addEventListener("click", () => {
  addSubjectModal.showModal();
});

closeModal.addEventListener("click", () => {
  addSubjectModal.close();
});
