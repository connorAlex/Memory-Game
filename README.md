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

