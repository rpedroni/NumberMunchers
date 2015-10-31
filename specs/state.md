App State
===

### board
- *size*
    - The board size (integer) in number of rows and columns (and NOT in pixels)

### hero
- *position*
  - Holds the hero's current position inside the grid/board. Useful to apply the constraints/rules that the game has, such as walls as collision with monsters, or to know in which cell the hero is in
- *lives*
  - The hero has a limited amount of lives. When 0, game over
