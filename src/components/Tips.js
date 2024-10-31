import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const tips = [
  'Mantén tus dispositivos electrónicos desconectados durante el corte para evitar daños por fluctuaciones de voltaje.',
  'Asegúrate de tener linternas y baterías cargadas para iluminación de emergencia.',
  'Planea tus actividades considerando los horarios de corte para minimizar inconvenientes.',
  'Guarda agua en recipientes por si el suministro se ve afectado.',
  'Mantén refrigerados los alimentos y evita abrir la nevera durante el corte.',
];

function Tips() {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        <TipsAndUpdatesIcon sx={{ mr: 1 }} color="primary" />
        Consejos Útiles
      </Typography>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <TipsAndUpdatesIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Tips;