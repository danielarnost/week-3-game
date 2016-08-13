		var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        var wins = 0,
            losses = 0,
            guessesLeft = 9,
            guessedSoFar = [] // list of letters guessed so far
            
			var computerGuess = options[Math.floor(Math.random() * options.length)];

            function reset(){
            	guessedSoFar = []
            	guessesLeft = 9 
            	computerGuess = options[Math.floor(Math.random() * options.length)];
            }



           document.onkeyup = function(event) {
           	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			//can we get it so that the user can't choose the same character twice?
			//alert: That lett ...
           	if (userGuess == computerGuess) {
              	var wins = document.getElementById("wins"); 
              	wins.innerHTML = 1 + parseInt(wins.innerHTML);
              	reset()
              } else if (guessedSoFar.includes(userGuess)) {
              alert ("You already guessed that lettter!, choose a different one!");
              s
            } else if (guessesLeft == 0) { var losses = document.getElementById("losses"); 
            	losses.innerHTML = 1 + parseInt(losses.innerHTML);
                reset()
            }
            	if (!guessedSoFar.includes(userGuess)) {
            	guessesLeft--; 
            	guessedSoFar.push(userGuess) }

            	
            	var guessed = document.getElementById("guessed");
            	guessed.innerHTML = guessedSoFar

            	var guesses = document.getElementById("guesses");
            	guesses.innerHTML = guessesLeft

}



                      

           


           //*** alert("Your choice is " + userGuess); HOW DO I GET THIS TO APPEAR ON SCREEN?!
            

              

           

            

