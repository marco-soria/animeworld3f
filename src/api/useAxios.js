import axios from 'axios';
import { getRefreshToken, isAccessTokenExpired, setAuthUser } from './auth'; // Importa funciones relacionadas con la autenticación
import { API_BASE_URL } from './constants'; // Importa la URL base de la API

// Define una función creadora de instancia de Axios personalizada
const useAxios = () => {
    // Recupera el token de acceso y de actualización de localStorage
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    // Crea una instancia de Axios con la URL base y el token de acceso en los encabezados
    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    // Agrega un interceptor a la instancia de Axios
    axiosInstance.interceptors.request.use(async (req) => {
        // Verifica si el token de acceso ha expirado
        if (!isAccessTokenExpired(accessToken)) {
            return req; // Si no ha expirado, devuelve la solicitud original
        }

        // Si el token de acceso ha expirado, actualízalo
        const response = await getRefreshToken(refreshToken);

        // Actualiza la aplicación con los nuevos tokens de acceso y de actualización
        setAuthUser(response.access, response.refresh);

        // Actualiza el encabezado 'Authorization' de la solicitud con el nuevo token de acceso
        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req; // Devuelve la solicitud actualizada
    });

    return axiosInstance; // Devuelve la instancia de Axios personalizada
};

export default useAxios;
