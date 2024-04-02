import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { useAuthStore } from '../../api/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { data } = await login(email, password);
            if (data && data.detail === 'Login successful') {
                navigate('/');
                resetForm();
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Something went wrong. Please try again later.');
        }

        setIsLoading(false);
    };

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
            <p>Do not have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;
