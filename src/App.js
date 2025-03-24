import React, { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>

      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' }, // Mostra apenas em telas médias ou maiores
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <img
          src="/minoria.png" // Caminho da imagem
          alt="Minoria"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Cadastro'}
        </Typography>
        {isLogin ? (
          <LoginForm />
        ) : (
          <RegistrationForm />
        )}
        <Box mt={2} textAlign="center">
          {isLogin ? (
            <Link component="button" variant="body2" onClick={handleToggleForm}>
              Não tem conta? Cadastre-se
            </Link>
          ) : (
            <Link component="button" variant="body2" onClick={handleToggleForm}>
              Já possui conta? Entrar
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
