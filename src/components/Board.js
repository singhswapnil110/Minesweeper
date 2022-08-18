import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { generateBoard } from "../gameLogic";
import { Tile } from "./Tile";
export const Board = () => {
  const [board, setBoard] = useState(generateBoard(9, 9, 10));

  function setFlag(x, y) {
    //console.log(x, y);
    board[x][y].isFlagged = !board[x][y].isFlagged;
    console.log(board[x][y].isFlagged);
    setBoard(board);
  }
  return (
    <>
      <div className="Header"></div>
      <div className="Board">
        {board.map((tileRow) =>
          tileRow.map((tile) => (
            <Tile {...tile} setFlag={setFlag} key={uuidv4()} />
          ))
        )}
      </div>
    </>
  );
};
