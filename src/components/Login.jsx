import React from 'react'
import API from '../API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
    const navigate = useNavigate();
    const [token,setToken] = useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const HandleSubmit = async (e)=>{
        e.preventDefault();
          
        const response = await  axios.post('http://localhost:8000/api/login',{
                email:email,
                password:password
            
            
        })

        console.log (response.data.message)
        setToken(response.data.token)
        // ✅ THIS IS THE MISSING LINE
            localStorage.setItem('token', response.data.token);
        alert(response.data.message)
        navigate('/product-list')
        
     
    }
  return (
    <div>
      <h1>Login</h1>
     <form onSubmit={HandleSubmit}>
            <input type = 'text' placeholder='Email' autoComplete='' onChange={e=>setEmail(e.target.value)}/>
            <input type = 'password' placeholder='Password' autoComplete='' onChange={e=>setPassword(e.target.value)}/>
            <button type = 'submit'>Login</button>
        </form>
    </div>
  )
}

export default Login