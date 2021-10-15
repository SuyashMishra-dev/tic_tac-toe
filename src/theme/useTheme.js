import { useEffect, useState } from 'react';
import * as themes from './schema.json';

export const useTheme = (themeValue) => {
  const [theme, setTheme] = useState(themes.data[themeValue]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setTheme(themes.data[mode]);
  };
  useEffect(() => {
    try {
      setThemeLoaded(true);
    } catch (error) {
      setThemeLoaded(false);
    }
  }, []);
  return { theme, themeLoaded, setMode };
};
