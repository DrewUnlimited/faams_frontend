import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import image from '../images/doc.png';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';



function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(''); // State for displaying errors
    const [loading, setLoading] = useState(false); // State for showing loading status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Clear previous error
        setError('');

        // Prepare the data to send to the backend
        const userData = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            gender: formData.gender,
            phone: formData.phoneNumber,
            password: formData.password,
            password_confirmation: formData.confirmPassword
        };

        try {
            setLoading(true); 

            // Send POST request to backend for sign-up
            const response = await axios.post('http://localhost:8000/signup', userData);

            console.log('User signed up successfully:', response.data);
            navigate('/login'); 

        } catch (error) {
            setError(error.response ? error.response.data.detail : 'Sign-up failed');
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className="bg-image">
            <div className="signup-container">
                <div className="signup-img">
                    <img src={image} alt="signup-image" style={{ width: '75%', marginLeft: '20px' }} />
                </div>
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-row">
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-row">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-row">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>} 
                        
                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
