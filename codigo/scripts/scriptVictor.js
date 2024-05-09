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

/* 
openModal.addEventListener("click", () => {
  var divClone = navBar.cloneNode(true);
  windowNav.appendChild(divClone);
});
*/

anotacoesBar.addEventListener("click", () => {
  mainContainer.innerHTML = `<section class="homescreen">
  <h1 class="homescreen-title">Minhas Anotações</h1>
  <p class="homescreen-sub">Quarta-feira, 24 de Janeiro</p>

<div class="retan1" id="retan">
    <h3 class="Anotitle1">TITULO DA NOTA</h3>
    <p class="Anosubtitle1">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups...
    </p>
    <button>
      <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis1">
          <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
          <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
          </svg>
    </button>
        
</div>
<div class="retan2">
    <h3 class="Anotitle2">TITULO DA NOTA</h3>
    <p class="Anosubtitle2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups...
    </p>
    <button>
      <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis2">
          <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
          <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
          </svg>
    </button>
</div>
<div class="retan3">
    <h3 class="Anotitle3">TITULO DA NOTA</h3>
    <p class="Anosubtitle3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups...
    </p>
    <button>
      <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="lapis3">
          <circle cx="20.5" cy="20.5" r="20.5" fill="#8AA17B"/>
          <path d="M9 27.9993V33H14.0007L28.7561 18.2446L23.7554 13.2439L9 27.9993ZM32.6099 14.3907C33.13 13.8707 33.13 13.0239 32.6099 12.5038L29.4962 9.39005C28.9761 8.86998 28.1293 8.86998 27.6093 9.39005L25.1689 11.8304L30.1696 16.8311L32.6099 14.3907Z" fill="white"/>
          </svg>
    </button>
        <button id="btn"><img src="img/4d23be4d-0e7b-4c01-b806-fc3cbd4b98ab.jpg" id="add90" class="add1"></button>
        <script>

           var retan1 = document.getElementById('retan')
           var add1 = document.getElementById('add90')
           var main = document.getElementById('ok');
           
           add1.addEventListener("click", () => {

            var divClone = retan1.cloneNode(true);
            main.appendChild(divClone);

          })
        </script>
            
</div>`;
});
