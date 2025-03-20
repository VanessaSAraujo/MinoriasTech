import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const RegistrationForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto', 
      }}
    >
      <TextField
        label="Nome"
        variant="outlined"
        required
        sx={{ marginBottom: 2, width: '100%' }} 
      />
      <TextField
        label="CPF"
        variant="outlined"
        required
        sx={{ marginBottom: 2, width: '100%' }} 
      />
      <TextField
        label="E-mail"
        type="email"
        variant="outlined"
        required
        sx={{ marginBottom: 2, width: '100%' }} 
      />
      <TextField
        label="Telefone"
        variant="outlined"
        required
        sx={{ marginBottom: 2, width: '100%' }} 
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        required
        sx={{ marginBottom: 3, width: '100%' }} 
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: '100%',
          padding: '10px 0', 
          fontSize: '16px',
          marginBottom: 2,
        }}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default RegistrationForm;
