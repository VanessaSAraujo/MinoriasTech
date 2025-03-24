import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import { themeRegistration } from '../theme';
import useValidation from './useValidation';
import usePasswordToggle from './usePasswordToggle';

const RegistrationForm = () => {
  // 
  const {
    name,
    nameEmpty,
    handleNameChange,
    cpf,
    cpfError,
    cpfEmpty,
    handleCpfChange,
    email,
    emailError,
    emailEmpty,
    handleEmailChange,
    phone,
    phoneError,
    phoneEmpty,
    handlePhoneChange,
    password,
    passwordError,
    passwordEmpty,
    handlePasswordChange,
    handleBlur,
  } = useValidation();
  // 

  const { showPassword, handleClickShowPassword } = usePasswordToggle();

  const [showFeedback, setShowFeedback] = useState(false);

  const handleFormSubmit = () => {
    handleBlur('name');
    handleBlur('cpf');
    handleBlur('email');
    handleBlur('phone');
    handleBlur('password');

    if (
      !nameEmpty &&
      !cpfError &&
      !cpfEmpty &&
      !emailError &&
      !emailEmpty &&
      !phoneError &&
      !phoneEmpty &&
      !passwordError &&
      !passwordEmpty) {
      setShowFeedback(true);
    }
  };

  return (
    <ThemeProvider theme={themeRegistration}>
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
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur('name')}
          error={nameEmpty}
          helperText={nameEmpty ? 'O campo de nome não pode ficar em branco' : ''}
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <TextField
          label="CPF"
          variant="outlined"
          required
          value={cpf}
          onChange={handleCpfChange}
          onBlur={() => handleBlur('cpf')}
          error={cpfError || cpfEmpty}
          helperText={
            cpfEmpty
              ? 'O campo de CPF não pode ficar em branco'
              : cpfError
                ? 'Informe um CPF válido no formato 000.000.000-00'
                : ''
          }
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          required
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur('email')}
          error={emailError || emailEmpty}
          helperText={
            emailEmpty
              ? 'O campo de e-mail não pode ficar em branco'
              : emailError
                ? 'Digite um e-mail correto'
                : ''
          }
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          required
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => handleBlur('phone')}
          error={phoneError || phoneEmpty}
          helperText={
            phoneEmpty
              ? 'O campo de telefone não pode ficar em branco'
              : phoneError
                ? 'Informe um telefone válido no formato (00) 0 0000-0000'
                : ''
          }
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <TextField
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          required
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => handleBlur('password')}
          error={passwordError || passwordEmpty}
          helperText={
            passwordEmpty
              ? 'O campo de senha não pode ficar em branco'
              : passwordError
                ? 'A senha deve ter entre 8 e 15 caracteres'
                : ''
          }
          sx={{ marginBottom: 3, width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          type="button"
          sx={{
            width: '100%',
            padding: '10px 0',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: 2,
          }}
          onClick={handleFormSubmit}
        >
          Cadastrar
        </Button>
        <Snackbar
          open={showFeedback}
          autoHideDuration={3000}
          onClose={() => setShowFeedback(false)}
        >
          <Alert
            onClose={() => setShowFeedback(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Cadastro realizado com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default RegistrationForm;
