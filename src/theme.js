// import { createTheme } from '@mui/material/styles';

// const baseTheme = createTheme({
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundImage: 'radial-gradient(circle,rgb(27, 45, 63) 0%, #0e1318 100%)',
//           color: 'white',
//           fontWeight: 600,
//           minHeight: '100vh',
//           margin: 0,
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           color: 'white',
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           '&:hover .MuiOutlinedInput-notchedOutline': {
//             borderColor: 'white',
//           },
//         },
//         notchedOutline: {
//           borderColor: 'white',
//         },
//         input: {
//           color: '#FFFFFF',
//         },
//       },
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           color: 'white',
//           textDecoration: 'none',
//           '&:hover': {
//             color: '#8445ff',
//           },
//         },
//       },
//     },
//     MuiFormHelperText: {
//       styleOverrides: {
//         root: {
//           color: '#C0392B',
//           fontWeight: '600',
//         },
//       },
//     },
//   },
// });


// const themeLogin = createTheme(baseTheme, {
//   palette: {
//     primary: {
//       main: '#eb17a4',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           color: '#ffcae5',
//           '&:hover': {
//             backgroundColor: '#d41675',
//           },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           '&:hover .MuiOutlinedInput-notchedOutline': {
//             borderColor: '#eb17a4',
//           },
//         },
//       },
//     },
//     MuiIconButton: {
//       styleOverrides: {
//         root: {
//           color: '#eb17a4',
//           '&:hover': {
//             color: '#d41675',
//           },
//         },
//       },
//     },
//   },
// });

// const themeRegistration = createTheme(baseTheme, {
//   palette: {
//     primary: {
//       main: '#17a4eb',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           color: '#486166',
//           fontWeight: '600',
//           '&:hover': {
//             backgroundColor: '#2AA5C6',
//           },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           '&:hover .MuiOutlinedInput-notchedOutline': {
//             borderColor: '#17a4eb',
//           },
//         },
//       },
//     },
//     MuiIconButton: {
//       styleOverrides: {
//         root: {
//           color: '#17a4eb',
//           '&:hover': {
//             color: '#3C8B9D',
//           },
//         },
//       },
//     },
//   },
// });

// export { themeLogin, themeRegistration };
// export default baseTheme; 

import { createTheme } from '@mui/material/styles';

const colors = {
  white: '#FFFFFF',
  primaryPink: '#eb17a4',
  hoverPink: '#d41675',
  primaryBlue: '#17a4eb',
  hoverBlue: '#1478a1',
  errorRed: '#C0392B',
  linkHover: '#8445ff',
};

const baseTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(circle, rgb(27, 45, 63) 0%, #0e1318 100%)',
          color: colors.white,
          fontWeight: 600,
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.white,
          },
        },
        notchedOutline: {
          borderColor: colors.white,
        },
        input: {
          color: colors.white,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.white,
          textDecoration: 'none',
          '&:hover': {
            color: colors.linkHover,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.errorRed,
          fontWeight: '600',
        },
      },
    },
  },
});

const themeLogin = createTheme(baseTheme, {
  palette: {
    primary: {
      main: colors.primaryPink,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.hoverPink,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primaryPink,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primaryPink,
          '&:hover': {
            color: colors.hoverPink,
          },
        },
      },
    },
  },
});

const themeRegistration = createTheme(baseTheme, {
  palette: {
    primary: {
      main: colors.primaryBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // color: '#486166',
          color: colors.white,
          fontWeight: '600',
          '&:hover': {
            backgroundColor: colors.hoverBlue,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primaryBlue,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primaryBlue,
          '&:hover': {
            color: '#3C8B9D',
          },
        },
      },
    },
  },
});

export { themeLogin, themeRegistration };
export default baseTheme;
