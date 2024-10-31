import axios from 'axios';

const API_BASE_URL = 'https://api.cnelep.gob.ec/servicios-linea/v1';

export const getNotificaciones = async (idValue, idType) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/notificaciones/consultar/${idValue}/${idType}`
    );
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API de CNEL:', error);
    throw error;
  }
};