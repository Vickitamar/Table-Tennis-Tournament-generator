(() => {

	let list = document.getElementById("list");
	let input = document.getElementById("intext");
	let items = [];
	let history = [];
	
	let button = document.getElementById("button");
	let body = document.getElementById("body");
	let randomButton = document.getElementById("randomButton");
	let teamoneA = document.getElementById("teamoneA");
	let teamoneB = document.getElementById("teamoneB");
	let teamtwoA = document.getElementById("teamtwoA");
	let teamtwoB = document.getElementById("teamtwoB");
	let diagram = document.getElementById("diagram");


	diagram.style.visibility = "hidden";
	teamoneA.style.visibility = "hidden";
	teamoneB.style.visibility = "hidden";
	teamtwoA.style.visibility = "hidden";
	teamtwoB.style.visibility = "hidden";
	

	///////////// creating array of list of names ///////////////////////////

	button.addEventListener("click", () => {
		randomButton.disabled = true;
		if(input.value) {
			items.push(input.value)
			history.push(input.value)
			input.value = null;
		}
	
		let itemsFragment = document.createDocumentFragment();
		items.forEach(el => {
		let li = document.createElement("li");
		li.textContent = el;
		itemsFragment.appendChild(li);
		
	});
		
		list.appendChild(itemsFragment);

		items = [];

		if (history.length === 4) {
			button.disabled = true;
			randomButton.disabled = false;
		}
		
	});

	

	///////////////////// random teams ////////////////////////////////


	randomButton.addEventListener("click", () => {
		let teamSize = history.length / 2;
		let teamA = [];
		let teamB = [];

		diagram.style.visibility = "visible";
		teamoneA.style.visibility = "visible";
		teamoneB.style.visibility = "visible";
		teamtwoA.style.visibility = "visible";
		teamtwoB.style.visibility = "visible";

		for (let i = history.length - 1; i > 0; i -= 1) {
		    let j = Math.floor(Math.random() * (i + 1));
		    let temp = history[i];
		    history[i] = history[j];
		    history[j] = temp;
		}

		teamA = history.slice(0, teamSize);
		teamB = history.slice(teamSize, history.length);
		

		
		teamoneA.textContent = teamA[0];
		teamoneB.textContent = teamA[1];
		teamtwoA.textContent = teamB[0];
		teamtwoB.textContent = teamB[1];

		history = [];
		randomButton.disabled = true;
	});

	///////////////// reset button ////////////////////////////////////////

	resetButton.addEventListener("click", () => {
		list.innerHTML = "";
		teamoneA.innerHTML = "";
		teamoneB.innerHTML = "";
		teamtwoA.innerHTML = "";
		teamtwoB.innerHTML = "";
		button.disabled = false;
		randomButton.disabled = true;
		diagram.style.visibility = "hidden";
		teamoneA.style.visibility = "hidden";
		teamoneB.style.visibility = "hidden";
		teamtwoA.style.visibility = "hidden";
		teamtwoB.style.visibility = "hidden";
		history = [];
	});	

	/////////////// show hide diagram ///////////////////////////////////////







})();