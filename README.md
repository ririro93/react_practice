# Practicing React
> will make different toy projects to try react

## 1. tic-tac-toe
> the official react page tutorial

- [x] 0. finish building the game, no extras
- [x] 1. Display the location for each move in the format (col, row) in the move history list.
    - each square is now recognized by [i, j] not a single number from 0-8
    - to deep copy square values for rendering,  tried using **lodash** library's `_.cloneMethod(<original arr>)` method
- [ ] 2. Bold the currently selected item in the move list.
- [ ] 3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
- [ ] 4. Add a toggle button that lets you sort the moves in either ascending or descending order.
- [ ] 5. When someone wins, highlight the three squares that caused the win.
- [ ] 6. When no one wins, display a message about the result being a draw.