import React, { useState } from "react";
import { checkWinner } from "../../utils/checkResult";
import GameBoard from "../gameBoard/GameBoard";
import { Button, Col, GridRow, Para } from "../styledComponents/GlobalComponents.style";
import WinnerModal from "../winnerModal/Modal";

const GameContainer = () => {
  const [history, setHistory] = useState([[null, null, null, null, null, null, null, null, null]]);
  const [disableUndo, setDisableUndo] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const winner = checkWinner(history[stepNumber]);

  const resetGame = () => {
    setHistory([[null, null, null, null, null, null, null, null, null]]);
    setDisableUndo(true);
    setStepNumber(0);
    setXisNext(true);
  }

  const handleClick = (ind) => {
    setDisableUndo(false);
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[ind]) return;
    squares[ind] = xO;
    setHistory([...historyPoint, squares]);
    setXisNext(!xIsNext);
    setStepNumber(historyPoint.length);
  };

  const unDoStep = (step) => {
    if(!step) setDisableUndo(true);
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    <>
      {winner && <WinnerModal winner={winner} resetGame={resetGame} />}
      {(!winner && stepNumber === 9) && <WinnerModal isOver resetGame={resetGame} />}
      <Para align="center" color="text" fontSize="heavy_font" weight="bold_font" pt={50} pb={10}>
        Welcome To Tic-Tac-Toe
      </Para>
      <GameBoard squares={history[stepNumber]} onClick={handleClick} />
      <GridRow justifyContent="space-between">
        <Col col={6}>
          <Button disabled={disableUndo} p="5px 10px" fontSize="small_font" color="text" background="body" borderColor="neutral_grey" backgroundOpacity={30} onClick={() => unDoStep(stepNumber - 1)}>
            UnDo <img  alt="undo" src='./undo.svg' height="10px" />
          </Button>
        </Col>
        <Col col={6}> 
        <Para align="right" color="text" fontSize="medium_font" weight="bold_font" pt={5} pb={5}>
          {"Next Player: " + xO}
        </Para>
        </Col>
      </GridRow>
    </>
  );
};

export default GameContainer;