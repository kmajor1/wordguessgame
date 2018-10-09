// define the alphabet 
 window.onload = function mycode (e) {


var alphabet = ["A", "B", "C", "D", "E", "F",
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z", "-", " ", "!"];

var lettersGuessed = [];

// define different words from the theme Jurassic Park
var jurassicWords = ["Chromosones", "Velociraptor", "Unix", "Shoot Her!", 
"Isla Nubla", "InGen", "Animatronics", "Hammond"];

var jurassicWords2 = ["testing", "a theory"];
var wordLen = 0;



// game object
function wordGame(words, lettersGuessed, GuessesRemaining, gameStarted) {
    this.lettersGuessed = lettersGuessed;
    this.GuessesRemaining = GuessesRemaining; 
    this.words = words; 
    /* 
    The function selectWord accesses the words passed to the object when instantiated
    It determines length of the array, and selects a random index. 
    */
    this.selectWord = function () {
        // check array length
        var arrayLength = this.words.length; 
        // select random index from words array, assign to selectedWord property of the object 
        this.selectedWord = this.words[Math.floor(Math.random() * (arrayLength  + 1))]; 
        // determine the length of the word of this object, assign to global var wordLen 
         
    }
    // default value of gameStarted property of object is false 
    this.gameStarted = false; 
    // method that can be invoked on object to start game 
    this.startGame = function () {
        this.gameStarted = true; 
    }
    this.createLetterContainers = function () { 
        // check if word selected is greater than 0 
        // create child containers in main container div   
        for (var i = 0; i<this.selectedWord.length; i++) {
            // select word holder 
            var wordContainer = document.getElementById("wordContainer");
            console.log(wordContainer);
            // create letter holder
            var ltrContainerBorder = document.createElement("div");
            
            // set the class of that holder to have a border 
            ltrContainerBorder.className = "col p-4 mx-2 border-bottom border-primary";
            console.log(ltrContainerBorder);
            // place the the letter holder into the word container 
            wordContainer.append(ltrContainerBorder);
            // create the content holder (the actual letter)
            var ltrDiv = document.createElement("span"); 
             // set which letter is contained by the span element
             ltrDiv.setAttribute("data-letter", this.selectedWord[i]);
            // put those content holders into the letter border holders
            ltrContainerBorder.append(ltrDiv);
           
            // set the content of the ltr holder 
            
            
                 
              
            
            
            
            
        }
        // create child divs in the proper container 
        // assign a data-* attribute to each letter container, indicating what letter it is
        // technically, user could view source to 'cheat'. But this is unlikely and easier 
        // than the alternative code required. 
    }
    this.revealLetter = function (userLetter) {
        // read the input of the user, check if there are matches within the word 
        // read the content of each data-* attribute and stick in array 
        // cycle through each data-* attribute. 
        for (var i = 0; i<this.selectedWord.length; i++) {
            var letterCheck = this.selectedWord[i];
            if (letterCheck == userLetter) {
                // find the divs with the matching data attribute, reveal them.  
            }
        }
        console.log(this.selectedWord); 
    }
}


// events? 



document.onkeyup = function (event) {
    var Game = new wordGame(jurassicWords, lettersGuessed, 10);
    console.log(Game.gameStarted);
    if (Game.gameStarted == false) { 
        Game.startGame();
        console.log(Game.gameStarted);
        Game.selectWord(); 
        console.log(Game.selectedWord);
        Game.createLetterContainers(); 
    }
    else {
        if (event.key.toUpperCase == 'A') {
            console.log("Key A Pressed");
        }
    }
    
    
}


//test createdwordfunction scope 

}

// function definitions 
// call selectWord function to select a random word to play the game with 
// guesses remaining property
// letters guessed property
// function guess letter
    // add letter guessed to the lettersGuessed array 
    // modify somehow the grid of 'guessed' letters in DOM to indicate that the letter has been used. 
    // Update guesses remaining 
    // Check if letter guessed is contained in the word (this should ptobably be its own function)
    // if true, find that letter in the containers and show 
    // if false, check number of guesses remaining, if >0, do nothing, if =0 end game somehow 



