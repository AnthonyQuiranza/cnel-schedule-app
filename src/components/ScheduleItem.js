
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ScheduleItem({ schedule, direccion }) {
  const handleShare = () => {
    const shareText = `Horario de Corte de Luz:\nFecha: ${schedule.fechaCorte}\nDesde: ${schedule.horaDesde}\nHasta: ${schedule.horaHasta}\nUbicación: ${direccion}\nComentario: ${schedule.comentario}`;
    if (navigator.share) {
      navigator
        .share({
          title: 'Horario de Corte de Luz',
          text: shareText,
        })
        .catch((error) => console.error('Error al compartir:', error));
    } else {
      // Copiar al portapapeles como alternativa
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Horario copiado al portapapeles.');
      });
    }
  };

  return (
    <Card sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <EventIcon sx={{ mr: 1 }} color="primary" />
          {schedule.fechaCorte}
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <AccessTimeIcon sx={{ mr: 1 }} color="secondary" />
          <strong>Desde:</strong> {schedule.horaDesde}
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <AccessTimeIcon sx={{ mr: 1 }} color="secondary" />
          <strong>Hasta:</strong> {schedule.horaHasta}
        </Typography>
        <Typography
  variant="body2"
  sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
>
  <LocationOnIcon sx={{ mr: 1 }} color="action" />
  <strong>Ubicación:</strong>{' '}
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      direccion
    )}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {direccion}
  </a>
</Typography>
        <Typography variant="body2" color="textSecondary">
          {schedule.comentario}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button
          size="small"
          startIcon={<ShareIcon />}
          onClick={handleShare}
          variant="outlined"
          fullWidth
        >
          Compartir
        </Button>
      </CardActions>
    </Card>
  );
}

export default ScheduleItem;