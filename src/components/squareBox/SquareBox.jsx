import React from "react";
import propTypes from 'prop-types';
import { SquartButton } from "./SquareBox.style";

const SquareBox = ({ value, onClick }) => (
    <SquartButton className={`${value}`} onClick={onClick}>
      {value}
    </SquartButton>
);
SquareBox.propTypes = {
  value: propTypes.string,
  onClick: propTypes.func,
};

export default SquareBox;