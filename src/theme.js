import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Rosa
    },
    secondary: {
      main: '#E8D81E', // Roxo 
    },
    yellow: {
      main: '#9c27b0', // Amarelo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1EBEE8', 
          color: 'white',
          fontWeight: 400,
          minHeight: '100vh', 
          margin: 0, 
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white', // Altera a cor padrão dos labels para branco
        },
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: 'white', // Ajusta a cor do outline do campo
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e91e63', // Define a borda branca no hover
          },
        },
        notchedOutline: {
          borderColor: 'white', // Define a borda inicial como branca
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'yellow', // Cor padrão dos links
          textDecoration: 'none', // Remove o sublinhado
          '&:hover': {
            color: '#93445E', // Cor ao passar o mouse por cima
            textDecoration: 'none', // Garante que não há sublinhado no hover
          },
        },
      },
    },
  },
});

export default theme;
