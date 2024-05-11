function duplicarSessao() {
    // Seleciona a sessão original
    var sessaoOriginal = document.getElementById('sessaoOriginal');
    
    // Cria uma cópia da sessão original
    var novaSessao = sessaoOriginal.cloneNode(true);
    
    // Adiciona a nova sessão ao container
    var containerSessoes = document.getElementById('containerSessoes');
    containerSessoes.appendChild(novaSessao);
}
