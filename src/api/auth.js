import { create } from 'zustand';
import axios from './axios';
import { jwtDecode } from 'jwt-decode';

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

    login: async (email, password) => {
        try {
            const { data, status } = await axios.post('login/', {
                email,
                password,
            });

            if (status === 200) {
                setAuthUser(data.access_token, data.refresh_token);
                // Aquí puedes agregar lógica adicional después de iniciar sesión, como redireccionar a una página diferente
            }

            return { data, error: null };
        } catch (error) {
            return {
                data: null,
                error: error.response.data?.detail || 'Something went wrong',
            };
        }
    },

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        get().setUser(null);
        // Aquí puedes agregar lógica adicional después de cerrar sesión, como redireccionar a una página diferente
    },

    setUserOnPageLoad: () => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            setAuthUser(accessToken);
        }
    }
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
