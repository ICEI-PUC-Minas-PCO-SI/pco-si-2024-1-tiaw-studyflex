
        var btn = document.querySelector(".add");
        var retan1 = document.querySelector(".retan1");
        var container = document.querySelector(".container");

        btn.addEventListener("click", () => {
            var divClone = retan1.cloneNode(true);
            container.appendChild(divClone);
        });
