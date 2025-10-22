'use client';

import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <div>
      {/* Theme provider placeholder - will be expanded with context providers */}
      {children}
    </div>
  );
}

// Theme context for wedding app
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ProvidersProps) {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
