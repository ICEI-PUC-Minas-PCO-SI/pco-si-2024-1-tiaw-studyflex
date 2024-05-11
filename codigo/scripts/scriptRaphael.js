var retan1 = document.getElementById("retan");
var add1 = document.getElementById("add90");
var main = document.getElementById("ok");

add1.addEventListener("click", () => {
  var divClone = retan1.cloneNode(true);
  main.appendChild(divClone);
});
