# Practicing React
> will make different toy projects to try react

## 1. tic-tac-toe
> the official react page tutorial

- [x] 0. finish building the game following the tutorial
- [x] 1. Display the location for each move in the format (col, row) in the move history list.
    - each square is now recognized by [i, j] not a single number from 0-8
    - to deep copy square 2d arrays' values for rendering,  tried using **lodash** library's `_.cloneMethod(<original arr>)` method
- [x] 2. Bold the currently selected item in the move list.
    - added className using ternary statement
- [x] 3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
    - used 2 loops to first fill rows with 3 squares then a board with 3 rows
    - -> code is hard to understand, there is probably an easier way
- [x] 4. Add a toggle button that lets you sort the moves in either ascending or descending order.
    -  added a boolean to Game state that can be clicked to be toggled
    - -> if this state `ascending = false` => the array moves is reversed
    - -> the ol tag containing the moves list is added the attribute reversed
- [x] 5. When someone wins, highlight the three squares that caused the win.
    - gave winning moves to Board as props
    - -> if a squares coords was included in winning moves added className blue to highlight
    - -> used lodash isEqual method to compare square coords and winning moves
- [x] 6. When no one wins, display a message about the result being a draw.
    - checked if stepNumber == 9 and changed to status to display Draw
- [x] extra. add a reset game button that shows when there is a winner or the game is a draw
    - set all the states to the initial values

<br>

## 2. Traversy Media (task tracker)
> [youtube tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

- before: function components -> `states`(X)  but now they can use states using **hooks**
    - useState: returns a stateful value and a function to update it 
    - useEffect: perform side effects in function components

- jsx can only have one parent element
    - <></> empty brackets can be used to have no parents
- `ES7 React/Redux/GraphQL/React-Native snippets` extension
    - **rafce** to create boilderplate arrow function and export
- `<component>.defaultProps`
- `<component>.propTypes` **lowercase!**
    - `impt`: import propTypes
    - .isRequired can be used -> without this only a warning is given
- inline styling: make a dictionary below and add to component with brackets
- &&: ternary without an else
- `npm run build`: create production build in dir called build
    - everything else other than build dir is dev stuff
- to serve build dir: `serve -s build -p 4000`
- Mock backend: [JSON Server](https://www.npmjs.com/package/json-server)
- react-router-dom
    - <Router path="/" exact/>: without exact path="/about" is also routed here
    - use Link instead of a tags to prevent page reload
    - useLocation: can get my current path and use that info

<br>

## 3. TMDB Movie Review
> try making a simple movie review website using the TMDB API

### Goals
- making CRUD for review posts
- get data from TMDB API
- save data to django REST framework

### extra features
- add movie ratings with stars

### Learned
[backend]
- how to set min, max to models.IntegerField
    ```python
    from django.core.validators import MinValueValidator, MaxValueValidator
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    ```

