// define the alphabet 
window.onload = function mycode(e) {

    // letters meeded 
    var alphabet = ["A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "!"];

    var wins = 0; 
    var losses = 0; 

    // dashboard update functions 
    var updateWin = function () {
        var winBadge = document.getElementById("winBadge"); 
        winBadge.innerText = wins; 
    }
    
    
    // stand-alone function for letters guessed 
    var createLettersGuessedDivs = function () {
        for (var i = 0; i < alphabet.length; i++) {
            varLtrGuessedContainer = document.getElementById("lettersGuessed");
            var newDiv = document.createElement("button");
            newDiv.className = "btn btn-warning m-1 clearfix";
            newDiv.textContent = alphabet[i];
            varLtrGuessedContainer.append(newDiv);
        }
    }
    createLettersGuessedDivs(); 

    // define different words from the theme Jurassic Park
    var jurassicWords = ["Yass", "Miss", "InGen", "Velociraptor", "Chromosones", "Gate", "Jurassic", "Dinosaur", "Hammond", "Jeep"];
    var letterGuessedInit = ["0", "1"];

    var Game = new wordGame(jurassicWords, letterGuessedInit, 10, false);
    console.log(Game);

    // define game object
    function wordGame(words, lettersGuessed, GuessesRemaining, gameStarted) {
        this.lettersGuessed = lettersGuessed;
        this.GuessesRemaining = GuessesRemaining;
        this.words = words;
        this.guessLtrIncorrect = guessLtrIncorrect; 
        this.guessLtrCorrect = guessLtrCorrect; 
        /* 
        The function selectWord accesses the words passed to the object when instantiated
        It determines length of the array, and selects a random index. 
        */
        this.selectWord = function () {
            // check array length
            var arrayLength = this.words.length;
            // select random index from words array, assign to selectedWord property of the object
            var random1 = Math.floor(Math.random() * (arrayLength));
            this.selectedWord = this.words[random1];
            this.selectedWord = this.selectedWord.toUpperCase();
            // determine the length of the word of this object, assign to global var wordLen 
        }
        // default value of gameStarted property of object is false 
        this.gameStarted = false;
        // method that can be invoked on object to start game 
        this.startGame = function () {
            this.gameStarted = true;
            var clearWordContainer = document.getElementById("wordContainer"); 
            clearWordContainer.textContent = ''; 
            this.guessLtrCorrect = 0; 
            this.guessLtrIncorrect = 0; 
        }
        // method to create the neccessary containers for the letters in
        // chosen word 
        this.createLetterContainers = function () {
            // check if word selected is greater than 0 
            // create child containers in main container div   
            for (var i = 0; i < this.selectedWord.length; i++) {
                // select word holder 
                var wordContainer = document.getElementById("wordContainer");
                console.log(wordContainer);
                // create letter holder
                var ltrContainerBorder = document.createElement("div");
                // set the class of that holder to have a border 
                ltrContainerBorder.className = "col d-flex justify-content-center p-0 mx-2 ltrHolder";
                console.log(ltrContainerBorder);
                // place the the letter holder into the word container 
                wordContainer.append(ltrContainerBorder);
                // create the content holder (the actual letter)
                var ltrSpan = document.createElement("span");
                // set class of ltr to the span 
                ltrSpan.className = "aLtr align-bottom";
                // set which letter is contained by the span element
                ltrSpan.setAttribute("data-letter", this.selectedWord[i]);
                ltrSpan.textContent = this.selectedWord[i];
                // put those content holders into the letter border holders
                ltrContainerBorder.append(ltrSpan);
                // set the content of the ltr holder 
            }
            // create child divs in the proper container 
            // assign a data-* attribute to each letter container, indicating what letter it is
            // technically, user could view source to 'cheat'. But this is unlikely and easier 
            // than the alternative code required. 
        }
        this.evalLetter = function (userLetter) {
            // select array of ltr holder spans
            var ltrSpans = document.getElementsByClassName("aLtr");
            console.log(ltrSpans);
            // loop through arrays and check each of their data-attribute for a match 
            for (var i = 0; i < ltrSpans.length; i++) {
                var chkLtr = ltrSpans[i].getAttribute("data-letter");
                console.log(ltrSpans[i]);
                if (chkLtr == userLetter) {
                    console.log("match");
                    this.guessLtrCorrect++;
                    ltrSpans[i].classList.add("aLtrShow");
                    ltrSpans[i].classList.add("align-bottom");
                }
                else {
                    guessLtrIncorrect++; 
                }
            }
            var newLtrSpans = document.getElementsByClassName("aLtrShow");
            for (var i = 0; i < newLtrSpans.length; i++) {
                newLtrSpans[i].classList.remove("aLtr");
            }
            // get number of unique letters in selected word 
            var aLtrSpans = document.getElementsByClassName("aLtr");
            console.log(aLtrSpans.length);
            if (aLtrSpans.length == 0) {
                //call winGame
                this.WinGame(); 
            }
        }
        this.WinGame = function () {
            wins++; 
            console.log("wins:" + wins);
            // clear divs from wordContainer, access word container
            var divWinSpace = document.getElementById("lettersGuessed"); 
            var newGameBtn = document.createElement("button"); 
            newGameBtn.classList.add('btn', 'btn-success');
            newGameBtn.innerText = "You Won! Click here to Play Again!";
            var buttonBreak = document.createElement("br"); 
            divWinSpace.innerHTML = ''; 
            divWinSpace.classList.add('justify-content-center', 'd-flex'); 
            divWinSpace.append(buttonBreak);
            divWinSpace.append(newGameBtn); 
            updateWin();
            
            // divsToRemove.innerHTML = '' 
            // divsToRemove.innerHTML = '<div>  <h1 id="wordWon"></h1><br> <p>Way to Go, you won!</p> <br><button id="newGameBtn" class="btn btn-success"><h1>New Game</h1></button></div>'
            // var wordWon = document.getElementById("wordWon"); 
            // wordWon.textContent = this.selectedWord; 
            // divsToRemove.classList.add("justify-content-center");
            // divsToRemove.classList.add("p-2"); 

            // create big div with the word that they guessed and a button too 

        }

    }
    // defined on key up event 
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
            // check that letter in alphabet, add to letters guessed 
            if (Game.lettersGuessed.includes(event.key.toUpperCase())) {
                alert("already guessed that letter!");
            }
            else if (alphabet.includes(event.key.toUpperCase())) {
                // call func to evaluate letter 
                Game.evalLetter(event.key.toUpperCase());
                // add to letters guessed 
                Game.lettersGuessed.push(event.key.toUpperCase());
                console.log(lettersGuessed);
            }
        }
    }
}

