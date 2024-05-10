
        var btn = document.querySelector(".add");
        var retan1 = document.querySelector(".retan1");
        var container = document.querySelector(".container");
        var lastCloned = null;




        btn.addEventListener("click", () => {
            var divClone;
    if (lastCloned === null || lastCloned.classList.contains("retan3")) {
        divClone = document.querySelector(".retan1").cloneNode(true);
    } else if (lastCloned.classList.contains("retan1")) {
        divClone = document.querySelector(".retan2").cloneNode(true);
    } else if (lastCloned.classList.contains("retan2")) {
        divClone = document.querySelector(".retan3").cloneNode(true);
    }
    container.appendChild(divClone);
    lastCloned = divClone;

    
        });

        

        var retangulos = [
            { "titulo": "Título 1", "conteudo": "Conteúdo 1" },
            { "titulo": "Título 2", "conteudo": "Conteúdo 2" },
            { "titulo": "Título 3", "conteudo": "Conteúdo 3" }
        ];

        var botoesLapis = document.querySelectorAll(".lapis");
botoesLapis.forEach(function(botao, index) {
    botao.addEventListener("click", function() {
        // Esconder botão de lápis e exibir botão de salvar
        botao.style.display = "none";
        var salvarBtn = botao.nextElementSibling;
        salvarBtn.style.display = "inline-block";

        // Tornar o título e o conteúdo editáveis
        var retangulo = botao.parentNode;
        var titulo = retangulo.querySelector(".retan-tit");
        var conteudo = retangulo.querySelector(".retan-subtit");
        titulo.contentEditable = true;
        conteudo.contentEditable = true;
    });
});

// Adicionar evento de clique aos botões de salvar de cada retângulo
var botoesSalvar = document.querySelectorAll(".salvar");
botoesSalvar.forEach(function(botao, index) {
    botao.addEventListener("click", function() {
        // Esconder botão de salvar e exibir botão de lápis
        botao.style.display = "none";
        var lapisBtn = botao.previousElementSibling;
        lapisBtn.style.display = "inline-block";

        // Tornar o título e o conteúdo não editáveis
        var retangulo = botao.parentNode;
        var titulo = retangulo.querySelector(".retan-tit");
        var conteudo = retangulo.querySelector(".retan-subtit");
        titulo.contentEditable = false;
        conteudo.contentEditable = false;

        // Atualizar os dados do retângulo
        retangulos[index].titulo = titulo.textContent;
        retangulos[index].conteudo = conteudo.textContent;
    });
});

    
