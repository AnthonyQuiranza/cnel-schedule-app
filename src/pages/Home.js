
import React, { useState } from 'react';
import { Container, CircularProgress, Alert } from '@mui/material';
import SearchForm from '../components/SearchForm';
import ScheduleList from '../components/ScheduleList';
import Tips from '../components/Tips';
import { getNotificaciones } from '../services/cnelApi';

function Home() {
  const [schedules, setSchedules] = useState([]);
  const [direccion, setDireccion] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (idValue, idType) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getNotificaciones(idValue, idType);
      const notificaciones = data.notificaciones;
      if (notificaciones && notificaciones.length > 0) {
        setSchedules(notificaciones[0].detallePlanificacion || []);
        const direccion = notificaciones[0].direccion || 'Dirección no disponible';
        setDireccion(direccion);
      } else {
        setSchedules([]);
        setDireccion('');
      }
    } catch (err) {
      setError('Error al obtener los horarios. Por favor, verifica tus datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Container>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      )}
      {!loading && !error && schedules.length > 0 && (
        <ScheduleList schedules={schedules} direccion={direccion} />
      )}
      {!loading && !error && schedules.length === 0 && (
        <Alert severity="info" sx={{ mt: 4 }}>
          No hay horarios disponibles para los datos ingresados.
        </Alert>
      )}
      <Tips />
    </Container>
  );
}

export default Home;