import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './theme/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import GameContainer from './components/gameContainer/GameContainer';
import ChangeTheme from './components/changeTheme/ChangeTheme';

const App = () => {
  const [themeValue, setThemeValue] = useState(false);
  const { theme, themeLoaded, setMode } = useTheme('light');
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);
  useEffect(() => {
    setMode(themeValue ? 'dark' : 'light');
  }, [themeValue, setMode]);
  const changeTheme = (event) => {
    setThemeValue(!themeValue);
  }
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <ChangeTheme changeTheme={changeTheme} />
          <GameContainer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
