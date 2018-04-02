(() => {

	let list = document.getElementById("list");
	let input = document.getElementById("intext");
	let items = [];
	let history = [];
	
	let button = document.getElementById("button");
	let body = document.getElementById("body");
	let randomButton = document.getElementById("randomButton");
	let teamone = document.getElementById("teamone");
	let teamtwo = document.getElementById("teamtwo");
	

	///////////// creating array of list of names ///////////////////////////

	button.addEventListener("click", () => {
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
	});

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

		
		teamone.textContent = teamA;
		teamtwo.textContent = teamB;
	});

})();