'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  setIsDark: () => {},
});

const DEFAULT_DARK_MODE = true;

function applyTheme(dark: boolean) {
  const html = document.documentElement;
  if (dark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(DEFAULT_DARK_MODE);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const shouldBeDark = saved ? saved === 'dark' : DEFAULT_DARK_MODE;
    applyTheme(shouldBeDark);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate theme from localStorage on mount
    setIsDark(shouldBeDark);
  }, []);

  const handleSetIsDark = (value: boolean) => {
    setIsDark(value);
    applyTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: handleSetIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
