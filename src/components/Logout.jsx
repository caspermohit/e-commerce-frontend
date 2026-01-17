import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

        console.log('TOKEN BEING SENT:', token);

      
    const HandleSubmit = async (e) => {
        
        e.preventDefault();
        console.log('TOKEN BEING SENT:', token);    
              if (!token) {
            alert('No token found');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:8000/api/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                }
            );

            alert(response.data.message);
            localStorage.removeItem('token');
            navigate('/');
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert('Logout failed');
        }
    };

    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={HandleSubmit}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}

export default Logout;