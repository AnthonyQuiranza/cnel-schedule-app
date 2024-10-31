
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <BoltIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CNEL Cortes de Luz
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;