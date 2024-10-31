
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Azul oscuro
    },
    secondary: {
      main: '#ff6f00', // Naranja
    },
    background: {
      default: '#f5f5f5', // Gris claro
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;