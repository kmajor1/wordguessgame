// define the alphabet 
window.onload = function mycode (e) {


var alphabet = ["A", "B", "C", "D", "E", "F",
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z", "-", " ", "!"];

var lettersGuessed = [];

// define different words from the theme Jurassic Park
var jurassicWords = ["Jurassic", "Park"];

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
        this.selectedWord = this.selectedWord.toUpperCase(); 
        console.log(this.selectedWord);
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
            ltrContainerBorder.className = "col p-0 mx-2 border-bottom border-primary ltrHolder";
            console.log(ltrContainerBorder);
            // place the the letter holder into the word container 
            wordContainer.append(ltrContainerBorder);
            // create the content holder (the actual letter)
            var ltrSpan = document.createElement("span"); 
            // set class of ltr to the span 
            ltrSpan.className = "aLtr";
            // set which letter is contained by the span element
            
            
            ltrSpan.setAttribute("data-letter", this.selectedWord[i]);
            // put those content holders into the letter border holders
            ltrContainerBorder.append(ltrSpan);
            // set the content of the ltr holder 
        }
        // create child divs in the proper container 
        // assign a data-* attribute to each letter container, indicating what letter it is
        // technically, user could view source to 'cheat'. But this is unlikely and easier 
        // than the alternative code required. 
    }
    this.revealLetter = function (userLetter) {
        // select array of ltr holder spans
        var ltrSpans = document.getElementsByClassName("aLtr");
        console.log(ltrSpans);
        // loop through arrays and check each of their data-attribute for a match 
        for (var i=0; i<ltrSpans.length; i++) {
            var chkLtr = ltrSpans[i].getAttribute("data-letter"); 
            if (chkLtr == userLetter) {
                console.log("match");
                ltrSpans[i].textContent = chkLtr;
            }
        }

        }
        
    }
// load a game object 
var Game = new wordGame(jurassicWords, lettersGuessed, 10);
document.onkeyup = function (event) {
    
    console.log(Game.gameStarted);
    if (Game.gameStarted == false) { 
        Game.startGame();
        console.log(Game.gameStarted);
        Game.selectWord(); 
        console.log(Game.selectedWord);
        Game.createLetterContainers(); 
    }
    else {
        Game.revealLetter(event.key.toUpperCase());
        }
    }
}
