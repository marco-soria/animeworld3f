import axios from 'axios';
import { API_URL } from './constants'; // Importa la URL base de la API desde constants.js

// Crea una instancia de Axios y almacénala en la variable 'apiInstance'.
// Esta instancia tendrá opciones de configuración específicas.
const apiInstance = axios.create({
    // Establece la URL base para esta instancia.
    // Todas las solicitudes realizadas con esta instancia tendrán esta URL como punto de partida.
    baseURL: API_URL,
    
    // Establece un tiempo de espera para las solicitudes realizadas con esta instancia.
    // Si una solicitud tarda más de 5 segundos en completarse, se cancelará.
    timeout: 5000, // Timeout después de 5 segundos
    
    // Define los encabezados que se incluirán en cada solicitud realizada con esta instancia.
    // Esto es común para especificar el tipo de contenido y el tipo de respuesta aceptado.
    headers: {
        'Content-Type': 'application/json', // La solicitud enviará datos en formato JSON.
        Accept: 'application/json', // La solicitud espera una respuesta en formato JSON.
    },
});

// Exporta la 'apiInstance' para que pueda ser utilizada en otras partes del código.
// Otros módulos pueden importar y usar esta instancia de Axios para realizar solicitudes a la API.
export default apiInstance;
