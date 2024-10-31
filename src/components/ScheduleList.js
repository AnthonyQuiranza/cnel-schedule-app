
import React from 'react';
import { Grid, Typography } from '@mui/material';
import ScheduleItem from './ScheduleItem';

function ScheduleList({ schedules, direccion }) {
  return (
    <div>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Horarios de Cortes Programados
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
  <strong>Ubicación:</strong> {direccion || 'Dirección no disponible'}
</Typography>
      <Grid container spacing={2}>
        {schedules.map((schedule, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ScheduleItem schedule={schedule} direccion={direccion} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ScheduleList;