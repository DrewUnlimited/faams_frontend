import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/doc.png';
import './login.css';
import axios from 'axios'; 

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(''); // State for displaying errors
    const [loading, setLoading] = useState(false); // State for showing loading status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

   const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        const loginData = {
            email: formData.email,
            password: formData.password
        };

        try {
        // Send login request
            const response = await axios.post('http://localhost:8000/login', loginData);

        // Success
            console.log('Login successful:', response.data);
            alert('Login successful!');
        } catch (error) {
            setError(
                error.response?.data?.detail || 'Login failed. Please check your credentials.'
            );
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="bg-image">
        <div className = 'login-container'>
            <div className = 'signup-img'>
                <img src = {image} alt = 'signup-image' style={{width:'70%', marginLeft:'50px'}} />
            </div>
            <div className = 'login-box'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/">Sign Up</Link></p>
            </div>
        </div>
        </div>
    )
}

export default Login;