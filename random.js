(() => {

    let randomButton = document.getElementById("randomButton");
    let list = document.getElementById("list");
    
    let items = [];
    let team1 = []; //set up empty arrays for both teams
    let teamB = [];
    
    let teamone = document.getElementById("teamone");
    let teamtwo = document.getElementById("teamtwo");

    //let teamSize = list.length / 2;
    

    randomButton.addEventListener("click", () => {
        let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
        'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

        let show = list[Math.floor(Math.random() * list.length)];

      

});

})();  
    