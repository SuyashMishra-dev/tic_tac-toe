import React from 'react';
import propTypes from 'prop-types';
import { CrossButton, H3, Image, ModalBackground, ModalContainer } from './Modal.style';

const WinnerModal = ({ winner, resetGame, isOver }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CrossButton  color={isOver ? '#fff' : '#333'} onClick={resetGame}>Try Again</CrossButton>
        {isOver ? (
          <Image alt="game_over" src="https://cdn.dribbble.com/users/369622/screenshots/12286711/media/c0cfa6b249a334ce4123398221008906.png?compress=1&resize=1200x900" />
        ) : (
          <>
            <Image alt="winner" src="https://cdn.dribbble.com/users/1068771/screenshots/14956203/media/d2d654af2e601cb2650a6a682f4d20bf.jpg?compress=1&resize=1200x900" />
            <H3>Winner is: {winner}</H3>
          </>
        )}
      </ModalContainer>
    </ModalBackground>
  );
};

WinnerModal.propTypes = {
  winner: propTypes.string,
  isOver: propTypes.bool,
  resetGame: propTypes.func,
};


export default WinnerModal;
