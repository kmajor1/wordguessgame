// define the alphabet 
window.onload = function mycode(e) {

    // letters meeded 
    var alphabet = ["A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "!"];

    // define different words from the theme Jurassic Park
    var jurassicWords = ["Jurassic", "Velociraptor", "Dinosaur", "Spielberg", "Triceratops", "Amber"];
    var letterGuessedInit = ["0", "1"];

    var wins = 0;
    var losses = 0;


    var newGameBtnWin = document.createElement("button");
    newGameBtnWin.setAttribute("id", "newGameBtnWin");
    newGameBtnWin.classList.add("btn", "btn-success");
    newGameBtnWin.innerText = "You Won! Click Here for a New Game";

    var newGameBtnLoss = document.createElement("button");
    newGameBtnLoss.setAttribute("id", "newGameBtnLoss");
    newGameBtnLoss.classList.add("btn", "btn-danger");
    newGameBtnLoss.innerText = "You Lost :( Click Here for a New Game";

    // stand-alone function for letters guessed badges 
    var createLettersGuessedDivs = function (userLetter) {
        var ltrGuessedContainer = document.getElementById("lettersGuessed");
        ltrGuessedContainer.className = 'p-2 m-0 border';
        var newBtn = document.createElement("button");
        newBtn.className = "btn btn-warning m-1 clearfix";
        newBtn.textContent = userLetter;
        ltrGuessedContainer.append(newBtn);
        var guessRemBadge = document.getElementById("guessRem");
        Game.guessesRem--; 
        if (Game.guessesRem >=1) {
            
            guessRemBadge.textContent = Game.guessesRem;
        }
        else {
            guessRemBadge.textContent = Game.guessesRem;
            Game.LoseGame();
        }

    }

    var Game = new wordGame(jurassicWords, letterGuessedInit, 0, false);
    

    // define game object
    function wordGame(words, lettersGuessed, guessesRem, endState) {
        
        this.lettersGuessed = lettersGuessed;
        this.Guesses = function (string) {
            // get the string with only unique characters, then count 
            // assists in setting reasonable number of guesses  
            // THIS DID NOT WORK. 
            // var unique = '';
            // var count = 0;
            // for (var i = 0; i < string.length; i++) {
            //     for (var j = i + 1; j < string.length; j++) {
            //         if (string[i] == string[j]) {
            //             count++;
            //             unique += string[i];

            //         }
            //     }


            // }
            
            this.guessesRem = this.selectedWord.length + 5;
            console.log(this);
           
            
            var guessRemBadge = document.getElementById("guessRem");
            guessRemBadge.textContent = this.guessesRem;
        }


        this.words = words;
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
            this.Guesses(this.selectedWord);
            // determine the length of the word of this object, assign to global var wordLen 
        }
        // default value of gameStarted property of object is false 
        this.gameStarted = false;
        // method that can be invoked on object to start game 
        this.startGame = function () {
            this.gameStarted = true;
            var clearWordContainer = document.getElementById("wordContainer");
            clearWordContainer.textContent = '';

        }
        // method to create the neccessary containers for the letters in
        // chosen word 
        this.createLetterContainers = function () {
            // check if word selected is greater than 0 
            // create child containers in main container div   
            for (var i = 0; i < this.selectedWord.length; i++) {
                // select word holder 
                var wordContainer = document.getElementById("wordContainer");
                
                // create letter holder
                var ltrContainerBorder = document.createElement("div");
                // set the class of that holder to have a border 
                ltrContainerBorder.className = "col d-flex justify-content-center p-0 mx-2 ltrHolder";
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
            // loop through arrays and check each of their data-attribute for a match 
            for (var i = 0; i < ltrSpans.length; i++) {
                var chkLtr = ltrSpans[i].getAttribute("data-letter");
                
                if (chkLtr == userLetter) {
                    ltrSpans[i].classList.add("aLtrShow");
                    ltrSpans[i].classList.add("align-bottom");
                }
            }
            var newLtrSpans = document.getElementsByClassName("aLtrShow");
            for (var i = 0; i < newLtrSpans.length; i++) {
                newLtrSpans[i].classList.remove("aLtr");
            }
            // check if all letters are revealed
            // if they are, player has won 
            var aLtrShowSpans = document.getElementsByClassName("aLtrShow");
            if (aLtrShowSpans.length == this.selectedWord.length) {
                //call winGame
                this.WinGame();
            }
        }
        this.WinGame = function () {
            wins++;
           
            // clear divs from wordContainer, access word container
            var divWinSpace = document.getElementById("lettersGuessed");

            divWinSpace.innerHTML = '';
            divWinSpace.classList.add('justify-content-center', 'd-flex');
            divWinSpace.append(newGameBtnWin);
            var winBadge = document.getElementById("winBadge");
            winBadge.innerText = wins;
            this.endState = true; 
        }

        this.LoseGame = function () {
            losses++;
            // clear divs from wordContainer, access word container
            var divLossSpace = document.getElementById("lettersGuessed");
            this.endState = true; 
            divLossSpace.innerHTML = '';
            divLossSpace.classList.add('justify-content-center', 'd-flex');
            divLossSpace.append(newGameBtnLoss);
            var LossBadge = document.getElementById("lossBadge");
            LossBadge.innerText = losses;
            // reveal the letters of the word (this broke, couldn't get it to work)
            // var unguessedLetters = document.getElementsByClassName("aLtr");
            // console.log(unguessedLetters);
            // for (var i = 0; i<unguessedLetters.length; i++) {
               
            //     unguessedLetters[i].classList.add("aLtrShow");
            // }
            

            
            // when game is lost, the letter divs remaining empty, and other functions 
            // logic will allow user to keep entering letters 
            // learning moment: would have, on 2nd approach, done the checking
            // for whether the user has won differently - did it based on revealed 
            // letters versus storing or maintaing the unique letters in string and whether they'd
            // all been guessed 
        }
    


    }
    // defined on key up event 
    document.onkeyup = function (event) {
        if (Game.gameStarted == false) {
            Game.startGame();
            Game.selectWord();
            Game.createLetterContainers();
        }
        else if  (Game.endState == true) {
            // do nothing
        }
        else {
            // check that letter in alphabet, add to letters guessed 
            if (Game.lettersGuessed.includes(event.key.toUpperCase())) {
                // do nothing
            }
            else if (alphabet.includes(event.key.toUpperCase())) {
                createLettersGuessedDivs(event.key.toUpperCase());
                // call func to evaluate letter 
                Game.evalLetter(event.key.toUpperCase());
                // add to letters guessed 
                Game.lettersGuessed.push(event.key.toUpperCase());
                
            }
        }
    }
    // event listener for new game button 
    newGameBtnWin.onclick = function () {
        Game.selectWord();
        var wordContainerDiv = document.getElementById("wordContainer");
        wordContainerDiv.innerHTML = '';
        Game.createLetterContainers();
        var lettersGuessedDiv = document.getElementById("lettersGuessed");
        lettersGuessedDiv.innerHTML = '';
        Game.lettersGuessed = ["0", "1"];
        Game.endState = false; 
    }

    newGameBtnLoss.onclick = function () {
        Game.selectWord();
        var wordContainerDiv = document.getElementById("wordContainer");
        wordContainerDiv.innerHTML = '';
        Game.createLetterContainers();
        var lettersGuessedDiv = document.getElementById("lettersGuessed");
        lettersGuessedDiv.innerHTML = '';
        Game.lettersGuessed = ["0", "1"];
        Game.endState = false; 
    }
}

