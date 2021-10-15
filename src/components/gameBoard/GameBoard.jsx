import React from "react";
import { BoardBox } from "./GameBoard.style";
import SquareBox from "../squareBox/SquareBox";

const GameBoard = ({ squares, onClick }) => (
  <BoardBox width={500} height={400}>
    {squares.map((square, i) => (
      <SquareBox key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </BoardBox>
);

export default GameBoard;