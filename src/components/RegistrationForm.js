import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import { themeRegistration } from '../theme';
import { colors } from '../theme';
import useRegistrationValidation from './useRegistrationValidation';

const RegistrationForm = ({ handleToggleForm }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const { fields, errors, onSubmit } = useRegistrationValidation();

  const handleFormSubmit = (data) => {
    setShowFeedback(true);
    setTimeout(() => {
      handleToggleForm();
    }, 2000);
  };

  return (
    <ThemeProvider theme={themeRegistration}>
      <Box
        component="form"
        onSubmit={onSubmit(handleFormSubmit)}
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
          {...fields.name}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{ marginBottom: 2, width: '100%' }}
        />

        <TextField
          label="CPF"
          variant="outlined"
          inputProps={{ maxLength: 14 }}
          {...fields.cpf}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
          sx={{ marginBottom: 2, width: '100%' }}
        />

        <TextField
          label="Telefone"
          variant="outlined"
          inputProps={{ maxLength: 15 }}
          {...fields.phone}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          sx={{ marginBottom: 2, width: '100%' }}
        />

        <TextField
          label="E-mail"
          variant="outlined"
          {...fields.email}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: 2, width: '100%' }}
        />

        <TextField
          label="Senha"
          type={fields.password.showPassword ? 'text' : 'password'}
          variant="outlined"
          inputProps={{ maxLength: 15 }}
          {...fields.password}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: 3, width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={fields.password.showPassword ? 'Esconder senha' : 'Mostrar senha'}
                  onClick={fields.password.toggleShowPassword}
                  edge="end"
                  sx={{
                    color: errors.password ? colors.errorRed : colors.primaryBlue, 
                    '&:hover': {
                      color: errors.password ? colors.errorRed : colors.hoverBlue, 
                    },
                  }}
                >
                  {fields.password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '100%',
            padding: '10px 0',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: 2,
          }}
        >
          Cadastrar
        </Button>

        <Snackbar
          open={showFeedback}
          autoHideDuration={3000}
          onClose={() => setShowFeedback(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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

