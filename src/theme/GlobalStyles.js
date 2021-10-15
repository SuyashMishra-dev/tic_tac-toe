/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}
body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    min-height: 100vh;
    padding: 2rem;
    overflow-x: hidden;
    a:link{
      text-decoration: none;
    }
  }
`;
