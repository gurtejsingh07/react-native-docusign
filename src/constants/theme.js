
// themes.js
import Colors from "./Colors";
export const LightTheme = {
    dark: false,
    colors: {
      primary: '#3498db',
      background: '#ecf0f1',
      card: '#ffffff',
      text: '#333333',
      border: '#cccccc',
      notification: '#e74c3c',
      ...Colors
    },
  };
  
  export const DarkTheme = {
    dark: true,
    colors: {
      primary: '#1abc9c',
      background: '#333333',
      card: '#2c3e50',
      text: '#ecf0f1',
      border: '#34495e',
      notification: '#e74c3c',
      ...Colors
    },
  };
  