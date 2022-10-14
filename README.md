# Memory Game

## Project Objectives
This game will have the user selected various cards that have unique information on them. The user must select cards that they haven't selected previously in order to continue the game. 

Current and High Scores will be tracked.

## Requirements
### Components
- Cards
    - image, label, color
- Game Board
    - Contains Cards, Scoreboard, 
- Scoreboard
    - High Score and Current Score
- Image

### Game Loop
- History of Selected Cards must be tracked
    - Card IDs are stored in an array
- Check to see if Cards have been selected before
    - Search array for a selected Card's ID.
- Cards must be rendered in random order
    - Cards will always have the same image, label and color


## Implementation
Created a data repository that contained all of the card image src and label information.
This array was then mapped over, creating a card for each object in the array.

### State
There were 4 objects set into the *Main.js* state.
- cards
    - Array of objects that contained img src and labels.
- history
    - Empty array that will be filled with previously selected cards
- score
- highscore

### Functions
The *Main.js* component consisted of 4 functions:
- shuffle
- handleClick
- resetGame
- checkHistory

#### Shuffle
I utilized the Fisher-Yates Shuffle Algorithm for shuffling the cards that were stored within the card state.

>The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. *https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle*

#### resetGame
The resetGame function sets the history array state in an empty array, reshuffles the cards and resets the score.

#### checkHistory
The checkHistory function returns true or false based on if the card passed through the parameter has an index within the history state array.

#### handleClick
The handleClick function identifies the card selected, adds the card to history, and increases the score. 

Before adding the card, checkHistory is called to determine if the round is over and the game needs to be reset.



