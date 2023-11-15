import { useMemo } from "react";
import "./App.css";
import BoardRow from "./BoardRow";
import { useGetBoardPieces } from "./hooks/useGetBoardPieces";

const colorL = 'white'
const colorB = 'black'

function App() {
  const boardPieces = useGetBoardPieces();
  const boardCellSVGs = useMemo(() => {
    let board = [];
    for (let i = 0; i < 8; i++) {
      board.push(
        <BoardRow key={i} rowNumber={i} leftColor={i % 2 ? "white" : "black"} />
      );
    }
    return board;
  }, []);

  return (
    <>
      <div className="gameboard-container">
        <svg width="500" height="500" viewBox="0 0 8 8" className="gameboard">
          {boardCellSVGs}
          {boardPieces}
        </svg>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hi");
          }}
        >
          <input placeholder={"Input FEN position"}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
