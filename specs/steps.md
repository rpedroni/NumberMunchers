Development Steps - Scrum
===

<strike>### Sprint #1 [2015-10-26 10:02]</strike>
1. Create dumb components and logic-less containers
  + Player
  + GameBoard
    + Hero
    + RuleDisplay
    + Grid
      + GridCell

### Sprint #2 [2015-10-28 15:37]
1. ~~Build basic Redux structure - Player container will need it. The initial AppState will contain only the Hero's current position and the game board size~~
+ ~~Hero will start at index (0,0), independent of grid size~~
+ Make Player container receive keyboard commands and pass them around, using Redux
  - Make Player a redux container
  - Container will watch for 'keydown' event and signal Redux each time a move is done
+ AppState should hold the Hero's position index (useful to detect which cell in, collision with walls and monsters)
+ Based on move commands, make Hero move around inside the Grid
