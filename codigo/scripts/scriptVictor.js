const addSubjectModal = document.getElementById("addSubjectModal");
const openModal = document.getElementById("addSubjectButton");
const closeModal = document.getElementById("closeSubjectButton");
const navBar = document.getElementById("viewTab");
const windowNav = document.getElementById("windowNav");

const anotacoesBar = document.getElementById("anotacoesTab");
const mainContainer = document.getElementById("mainContainer");

const anotacoes = "";

//Add subject dialog
openModal.addEventListener("click", () => {
  addSubjectModal.showModal();
});

closeModal.addEventListener("click", () => {
  addSubjectModal.close();
});

openModal.addEventListener("click", () => {
  var divClone = navBar.cloneNode(true);
  windowNav.appendChild(divClone);
  console.log(divClone.innerHTML);
});

anotacoesBar.addEventListener("click", () => {
  mainContainer.innerHTML = ``;
});
