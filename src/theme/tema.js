import { MD3DarkTheme } from 'react-native-paper';

// Palco à noite: fundo índigo escuro com rosa-choque e lilás, como luz de lightstick
export const temaKpop = {
  ...MD3DarkTheme,
  roundness: 6,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FF4D9D',
    onPrimary: '#2B0016',
    primaryContainer: '#6B1B45',
    onPrimaryContainer: '#FFD9E8',
    secondary: '#B9A2FF',
    secondaryContainer: '#3B2A6B',
    onSecondaryContainer: '#E9DDFF',
    background: '#120B24',
    onBackground: '#F4EEFF',
    surface: '#1B1233',
    onSurface: '#F4EEFF',
    surfaceVariant: '#2A1E4A',
    onSurfaceVariant: '#CBBFE6',
    outline: '#6F5F9A',
    elevation: {
      level0: 'transparent',
      level1: '#1F1539',
      level2: '#241A41',
      level3: '#291E49',
      level4: '#2B204C',
      level5: '#2E2350',
    },
  },
};
