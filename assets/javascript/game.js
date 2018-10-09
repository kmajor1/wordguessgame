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
        wordLen = this.selectedWord.length; 
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

var Game = new wordGame(jurassicWords, lettersGuessed, 10);

document.onkeyup = function (event) {
    if (!Game.gameStarted) { 
        Game.startGame();
        console.log("Game Started")
    }
    else {
        if (event.key.toUpperCase =='A') {
            console.log("Key A Pressed");
        }
    }
    
    
}


//test createdwordfunction scope 
Game.selectWord(); 
console.log(wordLen);
console.log(Game.selectedWord)
Game.checkLetter(); 
 }

// instantiate the object 
 




// function definitions 

// function to select a random word from the wordsToGuess array 
 

// function to 

// function calls 

// call selectWord function to select a random word to play the game with 







// construct "game" object 
    // Properties: 
        // Number of Guesses 
        // Word being guessed 
        // LettersGuessed 
        // alphabet 
    // functions 
        // Determine number of guesses (pre-game initialize)
        // Select random word (pre-game initialize)
        // construct required DOM objects to display word, hidden () - give each an id associated with pos
        // check if letter being guessed is contained in word, and its position in that word 
        // where the letter exists, place that letter in the container, does not continue to listen.
// game started property (boolean)
// function initGame --> initializes game. Based on any key being pressed. 
    // function --> select random word 
    // measure the length of the word 
    // create necessary number of boxes, uses HTML elements to display the word, based on that word length
    // ensure the contents of the box are hidden (using CSS selector)
    // initalize the number of guesses the user gets, probably some function that relates to the length of the word


// guesses remaining property
// letters guessed property
// function guess letter
    // add letter guessed to the lettersGuessed array 
    // modify somehow the grid of 'guessed' letters in DOM to indicate that the letter has been used. 
    // Update guesses remaining 
    // Check if letter guessed is contained in the word (this should ptobably be its own function)
    // if true, find that letter in the containers and show 
    // if false, check number of guesses remaining, if >0, do nothing, if =0 end game somehow 



