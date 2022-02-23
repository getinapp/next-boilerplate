import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from 'styles/themes/dark';
import { lightTheme } from 'styles/themes/light';
import type { Theme } from 'styles/themes/types';

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = () =>
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useThemeContext must be used within a ThemeProvider');

  return context;
}
