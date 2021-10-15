import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.text}50;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 30%;
  background: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
  height: 60vh;
  position: relative;
  @media (max-width: 1024px) {
    width: 66%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CrossButton = styled.button`
  position: absolute;
  left: 42%; 
  color: ${(props) => props.color};
  bottom: 14%;
  border: 1px solid ${(props) => props.color};
  background: transparent;
  padding: 3px 5px;
  border-radius: 12px;
  &:hover {
    box-shadow: 0 0px 50px 30px #c5d6d6;
    background: #333;
    color: #fff;
    border: 1px solid #fff;
    transition: .2s ease-in-out;
  }
`;

export const H3 = styled.h3`
  position: absolute;
  bottom: 9%;
  left: 39%;
  background: transparent;
  color: #333;
`;