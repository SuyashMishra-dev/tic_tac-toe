import React from "react";
import { SquartButton } from "./SquareBox.style";

const SquareBox = ({ value, onClick }) => (
    <SquartButton className={`${value}`} onClick={onClick}>
      {value}
    </SquartButton>
);

export default SquareBox;