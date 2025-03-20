// // import React from 'react';
// // import { TextField, Button, Box } from '@mui/material';

// // const LoginForm = () => {
// //   return (
// //     <Box
// //       component="form"
// //       sx={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         '& .MuiTextField-root': { m: 1, width: '100%' },
// //       }}
// //     >
// //       <TextField
// //         label="Email ou telefone"
// //         variant="outlined"
// //         fullWidth
// //         required
        
// //       />
// //       <TextField
// //         label="Senha"
// //         type="password"
// //         variant="outlined"
// //         fullWidth
// //         required
// //       />
// //       <Button
// //         variant="contained"
// //         color="primary"
// //         sx={{ mt: 2, width: '100%' }}
// //       >
// //         Entrar
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default LoginForm;

// import React from 'react';
// import { TextField, Button, Box } from '@mui/material';

// const LoginForm = () => {
//   return (
//     <Box
//       component="form"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& .MuiTextField-root': { m: 1, width: '100%' },
//       }}
//     >
//       <TextField
//         label="Email ou telefone"
//         variant="outlined"
//         fullWidth
//         required
//         slotProps={{
//             inputLabel: {
//               style: { fontSize: '1rem' }, // Aumenta o tamanho do label
//         },
//         }}
//       />
//       <TextField
//         label="Senha"
//         type="password"
//         variant="outlined"
//         fullWidth
//         required
//         slotProps={{
//             inputLabel: {
//               style: { fontSize: '1rem' }, // Aumenta o tamanho do label
//         },
//         }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         sx={{ mt: 2, width: '100%' }}
//       >
//         Entrar
//       </Button>
//     </Box>
//   );
// };

// export default LoginForm;


import React from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', // Garante que o formulário se ajuste ao container pai
        maxWidth: '400px', // Define um limite de largura para os campos
        margin: '0 auto', // Centraliza o formulário
      }}
    >
      <TextField
        label="Email ou telefone"
        variant="outlined"
        required
        sx={{ marginBottom: 2, width: '100%' }} // Largura total e espaçamento inferior
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        required
        sx={{ marginBottom: 3, width: '100%' }} // Largura total e espaçamento inferior
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: '100%',
          padding: '10px 0', // Altura do botão
          fontSize: '16px', // Tamanho da fonte
          marginBottom: 2, // Espaçamento inferior
        }}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;
