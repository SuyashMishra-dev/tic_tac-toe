import styled from 'styled-components';

export const SquartButton = styled.button`
  background: ${(props) => props.theme.colors[props.backBroungColor] || '#000000'}${(props) => props.backBroungColorOpacity || ''};
  border: none;
  font-size: 5rem;
  cursor: pointer;
  outline: none;
  &.X {
    color: ${(props) => props.theme.colors.my_red};
  }
  &.O {
    color: ${(props) => props.theme.colors.dark_green};
  }
`;