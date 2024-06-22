const createSubjectBtn = document.getElementById("createSubjectBtn");
const closeSubjectBtn = document.getElementById("closeSubjectBtn");
const createSubjectModal = document.getElementById("createSubjectModal");
const form = document.getElementById("newSubjectForm");
const subjectsList = document.getElementById("subjectsList");
const searchInput = document.getElementById('searchInput');

// URL da API
const URL_MATERIAS = "http://localhost:3000/materias"; 

// Evento para mostrar o Modal
createSubjectBtn.addEventListener("click", () => {
  createSubjectModal.showModal();
  console.log("Modal abriu");
});

// Certificar que o modal fechou
closeSubjectBtn.addEventListener("click", () => {
  createSubjectModal.close();
  console.log("Modal fechou");
});

// Evento de enviar o formulário
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Formulário enviado");

  const formData = new FormData(form);

  // Convertendo dados em um obj
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

// Função para buscar e exibir a lista de matérias, com suporte para filtragem
async function fetchSubjects(filter = "") {
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

    const filteredData = data.filter(subject => 
      subject.nome.toLowerCase().includes(filter.toLowerCase())
    );

    filteredData.forEach(subject => {
      const subjectItem = document.createElement('div');
      subjectItem.classList.add('materia-box'); // Adiciona a classe para estilização
      subjectItem.textContent = subject.nome;

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
      subjectsList.removeChild(subjectItem); 
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

// Evento de input no campo de busca para filtrar matérias
searchInput.addEventListener('input', (event) => {
  const filterText = event.target.value;
  fetchSubjects(filterText);
});

// Buscar e exibir a lista de matérias ao carregar a página
fetchSubjects();
