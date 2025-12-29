import React from 'react';
import { ThemeToggleButton } from './UI.styles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <ThemeToggleButton onClick={onToggle} aria-label="Cambiar tema">
      {isDarkMode ? '☀️' : '🌙'}
    </ThemeToggleButton>
  );
};
