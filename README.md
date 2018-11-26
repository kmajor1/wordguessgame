# Jurassic Park Hangman! 
## Problem/Issue 
I needed to learn how to manipulate the DOM via JavaScript, and how to use JS to validate user responses. 
## Solution Approach 
The app watches for user keyup events for a set of alphabetic keys. On this event, the key pressed is passed through a validation routine to check if there is 1 or more letters in the hidden word shown on screen. If there is a match, the relevant divs containing those letters is altered to show the hidden letter. 

Counters keep track of the score and remaining number of guesses. An array is used to store possible word guesses and is randomly selected with each new game. 

Words are related to the original (1993) Jurassic Park Film 

## Future updates 
1. When a user loses a game, the remaining missing letters are revealed. 
