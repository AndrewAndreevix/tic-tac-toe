import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cell1, setCell1] = useState('');
  const [cell2, setCell2] = useState('');
  const [cell3, setCell3] = useState('');
  const [cell4, setCell4] = useState('');
  const [cell5, setCell5] = useState('');
  const [cell6, setCell6] = useState('');
  const [cell7, setCell7] = useState('');
  const [cell8, setCell8] = useState('');
  const [cell9, setCell9] = useState('');

  const [player, setPlayer] = useState('O');
  const [counter, setCounter] = useState(0);

  // set player(X or O)
  useEffect(() => {
    if (!checker) {
      if (player === 'X') {
        return setPlayer('O');
      }
      return setPlayer('X');
    }
  }, [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]);

  // decide X or O in cell
  function changeCell(setVal, clicked) {
    if (!clicked) {
      setCounter((counter) => counter + 1);
      setVal(player);
    }
  }

  // CHECK WHO IS WINNER
  let checker = false;
  if (checker === false) {
    if (cell1 === cell2 && cell1 === cell3 && cell1 !== '') {
      checker = true;
      winnerMark(['cell1', 'cell2', 'cell3']);
    } else if (cell4 === cell5 && cell4 === cell6 && cell4 !== '') {
      checker = true;
      winnerMark(['cell4', 'cell5', 'cell6']);
    } else if (cell7 === cell8 && cell7 === cell9 && cell7 !== '') {
      checker = true;
      winnerMark(['cell7', 'cell8', 'cell9']);
    } else if (cell1 === cell4 && cell1 === cell7 && cell7 !== '') {
      checker = true;
      winnerMark(['cell1', 'cell4', 'cell7']);
    } else if (cell2 === cell5 && cell2 === cell8 && cell8 !== '') {
      checker = true;
      winnerMark(['cell2', 'cell5', 'cell8']);
    } else if (cell3 === cell6 && cell3 === cell9 && cell3 !== '') {
      checker = true;
      winnerMark(['cell3', 'cell6', 'cell9']);
    } else if (cell1 === cell5 && cell1 === cell9 && cell1 !== '') {
      checker = true;
      winnerMark(['cell1', 'cell5', 'cell9']);
    } else if (cell3 === cell5 && cell3 === cell7 && cell7 !== '') {
      checker = true;
      winnerMark(['cell3', 'cell5', 'cell7']);
    }
  }

  // CREATE white text(winner)
  function winnerMark(arr) {
    arr.map((el) => document.getElementById(el).classList.add('win'));
  }

  // RESTART GAME
  function restart() {
    setCell1('');
    setCell2('');
    setCell3('');
    setCell4('');
    setCell5('');
    setCell6('');
    setCell7('');
    setCell8('');
    setCell9('');
    setCounter(0);
    const arr = [
      'cell1',
      'cell2',
      'cell3',
      'cell4',
      'cell5',
      'cell6',
      'cell7',
      'cell8',
      'cell9',
    ];
    arr.map((el) => document.getElementById(el).classList.remove('win'));
  }

  // array of cells states
  const allCells = [
    [cell1, setCell1],
    [cell2, setCell2],
    [cell3, setCell3],
    [cell4, setCell4],
    [cell5, setCell5],
    [cell6, setCell6],
    [cell7, setCell7],
    [cell8, setCell8],
    [cell9, setCell9],
  ];

  return (
    <div className="App">
      <h1 className="player">Player {player}</h1>
      {checker || counter === 9 ? (
        <div className="end">
          <h1 className="winTxt">
            {checker ? `congratulations player ${player}!` : 'try again!'}{' '}
          </h1>
          <button className="btn" onClick={restart}>
            restart
          </button>
        </div>
      ) : null}
      <div className="area">
        {/* create a cells */}
        {allCells.map(([cell, setCell], index) => (
          <div
            key={index}
            className="cell"
            id={'cell' + Number(index + 1)}
            onClick={() => changeCell(setCell, cell)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
