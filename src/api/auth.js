import { create } from 'zustand';
import axios from './axios';
import { jwtDecode } from 'jwt-decode';
import { API_URL } from './constants'; // Importa la URL base de la API desde constants.js
import Swal from 'sweetalert2';

// Configuring global toast notifications using Swal.mixin
const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});

// Function to handle user login
export const login = async (email, password) => {
    try {
        // Making a POST request to obtain user tokens
        const { data, status } = await axios.post('user/token/', {
            email,
            password,
        });

        console.log(data)
        console.log(status)

        // If the request is successful (status code 200), set authentication user and display success toast
        if (status === 200) {
            setAuthUser(data.access, data.refresh);

            // Displaying a success toast notification
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            });
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error.response.data?.detail || 'Something went wrong',
        };
    }
};



const useAuthStore = create((set, get) => ({
    allUserData: null,
    loading: false,

    user: () => ({
        email: get().allUserData?.email || null,
        first_name: get().allUserData?.first_name || null,
        last_name: get().allUserData?.last_name || null,
        is_active: get().allUserData?.is_active || null,
        is_staff: get().allUserData?.is_staff || null,
        is_subscribed: get().allUserData?.is_subscribed || null,
        // Agrega aquí otras propiedades del usuario si es necesario
    }),

    setUser: (user) => set({ allUserData: user }),
    setLoading: (loading) => set({ loading }),

    isLoggedIn: () => get().allUserData !== null,

    
}));

const setAuthUser = (access_token, refresh_token = null) => {
    localStorage.setItem('access_token', access_token);

    if (refresh_token) {
        localStorage.setItem('refresh_token', refresh_token);
    }

    const user = jwtDecode(access_token) ?? null;

    if (user) {
        useAuthStore.getState().setUser(user);
    }
    useAuthStore.getState().setLoading(false);
};

export { useAuthStore };

