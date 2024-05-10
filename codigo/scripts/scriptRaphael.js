
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
