NumberMunchers
===

A twist of the classic NumberMunchers game, written in JavaScript/JSX using React and Redux


### Specifications
---

### Terms used
+ Hero: the movable main character, controlled by the Player
+ Player: you! But also a container called "Player" that handles input logic
+ GameBoard: where all UI exists in
+ Grid/GridCell: the cells (and groups of cells) that the hero can move on
+ Numbers: the "edible" numbers that possibly exist in each cell. Are central to the current rule
+ Rule: the current mathematical "rule" the player must abide to to win. Example: "Multiples of 4", "Prime numbers"

### Requirements

1. Grid
  1. Fixed size grid / rectangle (AxB cells)
  - Cells can have a value in them or be empty
  - Hero/monsters can walk on top of cells
+ Hero
  1. ~~Spawns ~centralized in level (close to center)~~ Hero will start at (0,0) for now
  - Can move only one horizontal or vertical cell at a time (no diagonals), only limited by walls/extremes
  <!---
    - Future Versions:
      - Starts game with X lives
      - Can eat numbers when prompted to
  -->
+ Player
  1. Selects moves for hero (move directions and "eat")
+ Numbers
  1. Used to fill up cells. Number generation follows a set of pre-defined rules (currently, just generating a random set of numbers to fill in cells)
  <!---
    - Number of correct options in range [X, Y]
  --->
+ Levels (in future version!)
  <!---
    1. Every level has a mathematical proposition (e.g. Multiples of 5) (in future version: equations  3 x 12 = ?)
      - Start with every grid cell populated by a generated number, possibly a correct answer
      - Level ends when hero eats all correct answers
  --->
+ Monsters (in future version!)
  <!--
  1. Monsters enter level at some moment
    - On touching hero, monster kills him
    - Only move one space at a time (periodic moves)
  -->


### Parameters

1. Grid
  1. Grid is composed on multiple individual cell components *GridCell*s. The cells are contained in a higher order component called *Grid*, placed inside *GameBoard*. Cells are shaped as squares
  2. Each cell component can hold a value, passed in as a parameter. If null, considered an empty cell (or can be emptied under conditions e.g. hero eating number)
  3. Cells are dumb components that can be "walked" upon. This is done transparently, without knowledge of the cell component (i.e. hero moves on top of cells and is not contained in them)
2. Hero
  1. Get grid cell at centralized position and place hero initially
  2. Update hero position with -1/+1 position index per move command, not allowing diagonal moves (and possibly delaying move inputs). Movements are made by the *Player* container
3. Player
  1. Players moves based on reading the keyboard inputs and passing the moves to the interessed components
4. Numbers
  1. Create a random number generator, generating the quantity of numbers requested, used to populate cells at the beginning of levels


### Roadmap
---

+ Monsters
+ Choosable rules (and thus number generation)
+ Hero life count
+ High score
