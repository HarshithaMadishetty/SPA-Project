import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', { username, password });
            
            if(response.data.success){
                alert("Registeration Successful");
            }else{
                alert(response.data.message || "Registeration failed");
            }
            
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
