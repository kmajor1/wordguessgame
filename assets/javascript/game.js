// define the alphabet 
var alphabet = ["A", "B", "C", "D", "E", "F",
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z", "-", " ", "!"];

var lettersGuessed = [];

// define different words from the theme Jurassic Park
var jurassicWords = ["Chromosones", "Velociraptor", "Unix", "Shoot Her!", 
"Isla Nubla", "InGen", "Animatronics", "Hammond"];

var jurassicWords2 = ["testing", "a theory"];

// game object
function wordGame(words, lettersGuessed, GuessesRemaining) {
   
    this.lettersGuessed = lettersGuessed;
    this.GuessesRemaining = GuessesRemaining; 
    this.words = words; 
    this.selectWord = function (test) {
        var arrayLength = this.words.length;
       // after getting length of array, selected a random number within that length 
       // comment out line 19 once done debugging. 
       console.log(Math.floor(Math.random() * (arrayLength  + 1)));
       this.selectedWord = this.words[Math.floor(Math.random() * (arrayLength  + 1))]; 
    }
}

// instantiate the object 
var game1 = new wordGame(jurassicWords2);
var game2 = new wordGame(jurassicWords); 
game1.selectWord(); 
game2.selectWord(); 




console.log(game1.selectedWord);
console.log(game2.selectedWord);
game2.selectWord()



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



