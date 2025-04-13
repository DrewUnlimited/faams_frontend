import axios from 'axios';  

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';  


export async function signUp(userData) {
  try {
    // Send POST request to backend with user data
    const response = await axios.post(`${API_URL}/`, userData);
    return response.data; 
  } catch (error) {
    throw new Error(error.response ? error.response.data.detail : 'Sign-up failed');
  }
}


export async function login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
  
      return response.data;  
    } catch (error) {
      throw new Error(error.response ? error.response.data.detail : 'Login failed');
    }
  }
  