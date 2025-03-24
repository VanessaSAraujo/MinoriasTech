import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import { themeLogin } from '../theme';
import useValidation from './useValidation';
import usePasswordToggle from './usePasswordToggle';

const LoginForm = () => {

  const {
    email,
    emailError,
    emailEmpty,
    handleEmailChange,
    password,
    passwordError,
    passwordEmpty,
    handlePasswordChange,
    handleBlur,
  } = useValidation();

  const { showPassword, handleClickShowPassword } = usePasswordToggle();

  const [showFeedback, setShowFeedback] = useState(false);

  const handleFormSubmit = () => {
    handleBlur('email');
    handleBlur('password');

    if (!emailError && !emailEmpty && !passwordError && !passwordEmpty) {
      setShowFeedback(true);
    }
  };

  return (
    <ThemeProvider theme={themeLogin}>
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
          // color="primary"
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
          Entrar
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
            Login feito com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
