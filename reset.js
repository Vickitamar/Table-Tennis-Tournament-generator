(() => {


let resetButton = document.getElementById("resetButton");
let button = document.getElementById("button");
let randomButton = document.getElementById("randomButton");
let list = document.getElementById("list");
let teamoneA = document.getElementById("teamoneA");
let teamoneB = document.getElementById("teamoneB");
let teamtwoA = document.getElementById("teamtwoA");
let teamtwoB = document.getElementById("teamtwoB");


resetButton.addEventListener("click", () => {
list.innerHTML = "";
teamoneA.innerHTML = "";
teamoneB.innerHTML = "";
teamtwoA.innerHTML = "";
teamtwoB.innerHTML = "";
button.disabled = false;
randomButton.disabled = true;

});





})();
