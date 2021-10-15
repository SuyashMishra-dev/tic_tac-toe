import React from 'react';
import { act } from 'react-dom/test-utils';
import {shallow, configure } from 'enzyme'
import TestRenderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import * as themes from './theme/schema.json';
import { checkWinner } from './utils/checkResult';
import Board from './components/gameBoard/GameBoard';
import Game from './components/gameContainer/GameContainer';
import App from './App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const renderComponent = ({ theme }) => act(() => {
  render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
  );
});


describe('test for App screen', () => {
  it('renders correctly when there are no items', async () => {
    // when
    const tree = await TestRenderer.create(<App />).toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });

  it('test checkbox clicks', async () => {
    // when
    const { waitForNextUpdate } = renderHook(
      () => act(() => { renderComponent({ theme: themes.data.light }); }),
    );
    // then
    const checkbox = screen.getByTestId('change');
    waitForNextUpdate();
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    waitForNextUpdate();
    expect(checkbox.checked).toEqual(true)
  });

  it('check checkWinner function is working properly', () => {
    // when
    const originalArray = ['O', 'X', 'X', 'O', 'O', 'X', null, null, null];
    const expected = null;
    const sortResult = checkWinner(originalArray);
    // then
    expect(sortResult).toEqual(expected);
  });

  it('test', async () => {
    // when
    const { waitForNextUpdate } = renderHook(
      () => act(() => { renderComponent({ theme: themes.data.light }); }),
    );
    // then
    const Button = screen.queryByTestId('Undo');
    fireEvent.click(Button)
    waitForNextUpdate();
    expect(Button).toBeTruthy()
  });

  it('renders without crashing for squares', () => {
    let squares = Array(9).fill(null)
    shallow(<Board squares={squares}/>);
  });


  it('render without crashing for game board', () => {
    shallow(<Game />);
  });

});