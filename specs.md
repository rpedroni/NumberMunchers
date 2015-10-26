# NumberMunchers Specifications

### Functional Requirements
---

1. Grid
  1. Fixed size grid / rectangle (AxB cells)
  - Cells can have a value in them or be empty
  - Hero/monsters can walk on top of cells
+ Hero
  1. Spawns ~centralized in level (close to center)
  - Can move only one horizontal or vertical cell at a time (no diagonals), only limited by walls/extremes
  <!-- - Future Versions:
    - Starts game with X lives
    - Can eat numbers when prompted to -->
+ Numbers
  1. Used to fill up cells. For now, just randomly generated with no purpose besides filling up cells
  <!-- - Number of correct options in range [X, Y] -->
+ Levels (in future version!)
  <!-- 1. Every level has a mathematical proposition (e.g. Multiples of 5) (in future version: equations  3 x 12 = ?)
  - Start with every grid cell populated by a generated number, possibly a correct answer
  - Level ends when hero eats all correct answers -->
+ Monsters (in future version!)
  <!-- 1. Monsters enter level at some moment
  - On touching hero, monster kills him
  - Only move one space at a time (periodic moves) -->


### Design Parameters
---
1. Grid
  1. Grid is composed on multiple individual cell components "GridCell"s. The cells are contained in a higher order component called "Grid", placed inside "GameBoard". Cells are shaped as squares
  - Each cell component can hold a value, passed in as a parameter. If null, considered an empty cell (or can be emptied under conditions e.g. hero eating number)
  - Cells are dumb components that can be "walked" upon. This is done transparently, without knowledge of the cell component (i.e. hero moves on top of cells and is not contained in them)
2. Hero
  1. Get grid cell at centralized position and place hero initially
  - Update hero position with -1/+1 position index per move command, not allowing diagonal moves (and possibly delaying move inputs). Move commands are issued using the arrow keys and "GameBoard" container enforces hero's position and movement constraints. Movements are made by the "Player" container
3. Numbers
  1. Create a random number generator, generating the quantity of numbers requested
