var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        var winsCount = 0,
            lossesCount = 0,
            guessesLeftCount = 10,
            guessesSoFar = ['0' '1' '2' '3' '4' '5' '6' '7' '8' '9' '10']; // array []

            document.onkeyup = function(event) {

            // Determines which exact key was selected. Make it lowercase
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            

            
