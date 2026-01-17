import React from 'react'
import API from '../API'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
    
    const navigate = useNavigate();
    const [token,setToken] = useState('');
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const HandleSubmit = async (e)=>{
        e.preventDefault();
          
        const response = await  axios.post('http://localhost:8000/api/register',{
                name:name,
                email:email,
                password:password
            
        })
        console.log (response.data.message)
        setToken(response.data.token)
        alert(response.data.message)
        navigate('/')
     
    }
    
  return (
    <div>
      <h1>Register</h1>
        <form onSubmit={HandleSubmit}>
            <input type = 'text' placeholder='Name' autoComplete='' onChange={e=>setName(e.target.value)}/>
            <input type = 'text' placeholder='Email' autoComplete='' onChange={e=>setEmail(e.target.value)}/>
            <input type = 'password' placeholder='Password' autoComplete='' onChange={e=>setPassword(e.target.value)}/>
            <button type = 'submit'>Register</button>
        </form>
        <Link to='/login'>Already Registered?</Link>
    </div>
  )
}

export default Register