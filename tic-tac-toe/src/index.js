import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var _ = require('lodash');

function Square(props) {
  let className = "square";
  if (props.isWinningMove) {
    className += " blue";
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
 
class Board extends React.Component {
  renderSquare(i, j) {
    const len = this.props.winningMoves.length;
    let isWinningMove = false;
    for (let k=0; k<len; k++) {

      if (_.isEqual(this.props.winningMoves[k], [i,j])) {
        isWinningMove = true
      }
    }
    return (
      <Square 
        value={this.props.squares[i][j]}
        isWinningMove={isWinningMove}
        onClick={() => this.props.onClick(i, j)}
      />
    );
  }

  render() {
    let board = [];
    for (let i=0; i<3; i++) {
      let rows = [];
      for (let j=0; j<3; j++) {
        // div 없이 그냥 내용만 넣고 싶은데 부모가 없어서 안되는듯?
        rows.push(<div key={[i, j]}> {this.renderSquare(i, j)} </div>)
      }
      board.push(<div key={i} className="board-row">{rows}</div>)
    }
    return (
      <div>
         {board}
      </div>
    );
  }
}

class Game extends React.Component {
  initialState = {
    history: [{
      squares: Array.from(Array(3), () => Array(3).fill(null)),
    }],
    marked: ['start'],
    stepNumber: 0,
    xIsNext: true,
    ascending: true,
  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  handleReset() {
    this.setState(this.initialState);
  }

  handleToggle() {
    this.setState({
      ascending: !this.state.ascending
    });
  }

  handleClick(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const marked = this.state.marked.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = _.cloneDeep(current.squares);
    if (calculateWinner(squares) || squares[i][j]) {
      return;
    }
    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      marked: marked.concat([[i, j]]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const marked = this.state.marked;
    let win = calculateWinner(current.squares);
    let winner, winningMoves;

    // get winner and winning moves
    if (win) {
      [winner, winningMoves] = win;
    } else {
      winner = win
      winningMoves = []
    }

    // moves 
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      const nextMove = move ?
        (move % 2) ?
          'Player X marked ' + marked[move]:
          'Player O marked ' + marked[move]:
        "Player X's turn";

      return (
        <li key={move}>
          <button 
            onClick={() => this.jumpTo(move)}
            className={this.state.stepNumber === move ? "blue" : "black"}
          >
            {desc}
          </button>
          <div>
            player {nextMove}
          </div>
        </li>
      );
    });
    if (!this.state.ascending) {
      moves.reverse();
    }

    // status
    let status;
    if (winner) {
      status = (
        <div>
          <div>
            Winner: {winner}
          </div>
          <button
            onClick={() => this.handleReset()}
          >
            Restart Game
          </button>
        </div>
      );
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    // when game over without winner
    if (this.state.stepNumber === 9) {
      status = (
        <div>
          <div>
            Draw
          </div>
          <button
            onClick={() => this.handleReset()}
          >
            Restart Game
          </button>
        </div>
      );
    }

    // Ascending, Descending toggle button
    console.log("ascending:", this.state.ascending);

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            winningMoves={winningMoves}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <button onClick={() => this.handleToggle()}>{this.state.ascending ? "Ascending" : "Descending"}</button>
          <div>{status}</div>
          <ol reversed={!this.state.ascending}>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a[0]][a[1]] && squares[a[0]][a[1]] === squares[b[0]][b[1]] && squares[a[0]][a[1]] === squares[c[0]][c[1]]) {
      return [squares[a[0]][a[1]], lines[i]];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
