import styled from 'styled-components';

export const BoardBox = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  background: ${(props) => props.theme.colors.border_color};
  box-shadow: 0 0px 5px 0px #c5d6d6;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-top: 2rem;
  @media (max-width: 600px) {
    width: 95vw;
    height: 50vh;
  }
`;