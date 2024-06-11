const createSubjectBtn = document.getElementById("createSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectBtn");
const createSubjectModal = document.getElementById("createSubjectModal");
const form = document.getElementById("newSubjectForm");
const subjectsList = document.getElementById("subjectsList");

// URL da API
const URL_MATERIAS = "http://localhost:3000/materias"; 

// Mostrar o modal quando o botão "+ Matéria" for clicado
createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
  console.log("Modal abriu");
});

// Fechar o modal quando clicar no "x"
closeSubjectBtn.addEventListener("click", () => {
  createSubjectModal.close();
  console.log("Modal fechou");
});

// Evento de enviar o formulário
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Formulário enviado");

  const formData = new FormData(form);

  // Converter os dados do formulário em um objeto JSON
  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });

  try {
    const response = await fetch(URL_MATERIAS, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonObject)
    });

    if (response.ok) {
      alert("Matéria criada com sucesso!");
      createSubjectModal.close();
      fetchSubjects();
    } else {
      const errorText = await response.text();
      alert("Não foi possível criar a matéria! Erro: " + errorText);
      console.error("Erro na resposta:", errorText);
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
    alert('Houve um problema ao enviar o formulário. Por favor, tente novamente.');
  }
});

async function fetchSubjects() {
  try {
    const response = await fetch(URL_MATERIAS, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error('Erro na resposta da rede: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Matérias:', data);
    // Limpar a lista de matérias
    subjectsList.innerHTML = '';

    // Exibir a lista de matérias
    data.forEach(subject => {
      const subjectItem = document.createElement('div');
      subjectItem.classList.add('materia-box'); // Adiciona a classe para estilização
      subjectItem.textContent = subject.nome;

      // Adicionar botão de deletar
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
      deleteBtn.addEventListener('click', () => deleteSubject(subject.id, subjectItem));
      
      subjectItem.appendChild(deleteBtn);
      subjectsList.appendChild(subjectItem);
    });
  } catch (error) {
    console.error('Erro ao buscar matérias:', error);
  }
}

async function deleteSubject(id, subjectItem) {
  const URL_DELETE = `${URL_MATERIAS}/${id}`;
  
  try {
    const response = await fetch(URL_DELETE, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Matéria deletada com sucesso!");
      subjectsList.removeChild(subjectItem); // Remove o item do DOM
    } else {
      const errorText = await response.text();
      alert("Não foi possível deletar a matéria! Erro: " + errorText);
      console.error("Erro na resposta:", errorText);
    }
  } catch (error) {
    console.error('Erro ao deletar a matéria:', error);
    alert('Houve um problema ao deletar a matéria. Por favor, tente novamente.');
  }
}

// Buscar e exibir a lista de matérias ao carregar a página
fetchSubjects();
