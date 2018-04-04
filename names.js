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
	let paragraph = document.getElementById("paragraph");
	let b1 = document.getElementById("b1");
	let b2 = document.getElementById("b2");


	diagram.style.visibility = "hidden";
	teamoneA.style.visibility = "hidden";
	teamoneB.style.visibility = "hidden";
	teamtwoA.style.visibility = "hidden";
	teamtwoB.style.visibility = "hidden";

	///////////// make sure only characters are entered//////////////////////

	// button.addEventListener("click", () => {
	// 	console.log("working");
	// 	let re = 5;
		
		
	// 	if (input.value === re) {
	// 		paragraph.textContent = "Please only use letters";
	// 		console.log(re);
	// 	}

	// })
	

	///////////// creating array of list of names ///////////////////////////

	button.addEventListener("click", () => {

		randomButton.disabled = true;
		randomButton.style.backgroundColor = "#a6c4f4";

		


		if (input.value) {
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
			randomButton.style.backgroundColor = "#4074ce";
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

		teamoneA.addEventListener("click", () => {
			teamoneA.style.border = "3px solid red";
			teamoneB.style.border = "1px solid black";
			b1.textContent = teamA[0];
		})

		teamoneB.addEventListener("click", () => {
			teamoneB.style.border = "3px solid red";
			teamoneA.style.border = "1px solid black";
			b1.textContent = teamA[1];
		})

		teamtwoA.addEventListener("click", () => {
			teamtwoA.style.border = "3px solid red";
			teamtwoB.style.border = "1px solid black";
			b2.textContent = teamB[0];
		})

		teamtwoB.addEventListener("click", () => {
			teamtwoB.style.border = "3px solid red";
			teamtwoA.style.border = "1px solid black";
			b2.textContent = teamB[1];
		})
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

	/////////////// selecting winners ///////////////////////////////////////

	//if teamoneA clicked change its border and name placed in next box.

	// teamoneA.addEventListener("click", () => {
	// 	teamoneA.style.border = "3px solid red";
	// 	teamoneB.style.border = "1px solid black";
	// 	b1.textContent = teamA[0];
	// })

	// teamoneB.addEventListener("click", () => {
	// 	teamoneB.style.border = "3px solid red";
	// 	teamoneA.style.border = "1px solid black";
	// })







})();