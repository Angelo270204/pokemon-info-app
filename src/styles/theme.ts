// Definición de temas para la aplicación

export const lightTheme = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  containerBg: 'rgba(255, 255, 255, 0.95)',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  text: '#1a1a2e',
  textSecondary: '#4a4a6a',
  primary: '#667eea',
  primaryHover: '#5a67d8',
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  shadow: 'rgba(102, 126, 234, 0.25)',
  toggleBg: '#e2e8f0',
  suggestionHover: '#f0f4ff',
};

export const darkTheme = {
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  containerBg: 'rgba(30, 30, 50, 0.95)',
  cardBg: 'rgba(40, 40, 70, 0.9)',
  text: '#e2e8f0',
  textSecondary: '#a0aec0',
  primary: '#9f7aea',
  primaryHover: '#805ad5',
  inputBg: '#2d3748',
  inputBorder: '#4a5568',
  shadow: 'rgba(159, 122, 234, 0.25)',
  toggleBg: '#4a5568',
  suggestionHover: '#3d3d5c',
};

export type Theme = typeof lightTheme;
