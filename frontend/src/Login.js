import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            console.log(response.data);
            if(response.data.success){
                alert("Login Successful");
            }else{
                //alert(response.data.message);
                alert("Login did'nt occur");
            }
            
        } catch (error) {
            alert('Login failed'+(error.response ? error.response.data.message : "Server error"));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select class="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
