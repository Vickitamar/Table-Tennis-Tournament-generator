(() => {

	let list = document.getElementById("list");
	let input = document.getElementById("intext");
	let items = [];
	let history = [];
	
	let button = document.getElementById("button");
	let body = document.getElementById("body");
	let randomButton = document.getElementById("randomButton");
	let teamoneA = document.getElementById("teamoneA");
	let teamoneB = document.getElementById("teamoneB")
	let teamtwoA = document.getElementById("teamtwoA");
	let teamtwoB = document.getElementById("teamtwoB")
	

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
		console.log(history);
	});

	////////////////////// disable/enable buttons /////////////////////
	//if there are four people in the item array then disable the submit button
	//if there are less than four people in the list(or history array) then disable the random button
	
	

	///////////////////// random teams ////////////////////////////////


	randomButton.addEventListener("click", () => {
		let teamSize = history.length / 2;
		let teamA = [];
		let teamB = [];

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
		history = [];
	});	







})();