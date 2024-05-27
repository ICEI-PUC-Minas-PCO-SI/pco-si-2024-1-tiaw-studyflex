//CREATING A SUBJECT
const createSubjectBtn = document.getElementById("createSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectButton");
const createSubjectModal = document.getElementById("createSubjectModal");

createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
  console.log("abc");
});

closeSubjectBtn.addEventListener("click", () => {
  createSubjectModal.close();
  console.log("123");
});
