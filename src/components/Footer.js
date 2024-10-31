
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" color="textSecondary" align="center">
          © {new Date().getFullYear()} CNEL Cortes de Luz. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Desarrollado por{' '}
          <Link
            href="https://github.com/AnthonyQuiranza"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthony Quiranza
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;