import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // ✅ Ensure `message` is defined
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
        try {
            const { data } = await axios.post("http://localhost:3001/login", { email, password });
    
    
            if (data.message === "Login successful!") {
                // ✅ Store user data after successful login
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("name", data.user.name);
    
                setMessage("Login successful! Redirecting...");
                setTimeout(() => navigate("/"), 1500);
            } else {
                setMessage("Invalid credentials! Please try again.");
            }
        } catch (error) {
            console.error("❌ Login Error:", error.response?.data?.message || error.message);
            setMessage("Invalid credentials! Please try again.");
        }
    };
    

    return (
        <div className="auth-page">
        <div className="lc">
            <h2 className="login-title">Welcome Back!</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email"
                    autoCapitalize="off"  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    autoCapitalize="off"  
                    value={password}
                    onChange={(e) => {
                        console.log(e.target.value);  // ✅ Debugging input
                        setPassword(e.target.value);
                    }}  
                    required 
                />
                <button className="logb" type="submit">Login</button>
            </form>
            <p className="signup-link">New Here? <a className = "sl" href="/signup">Sign Up Now!</a></p>
        </div>
    </div>
    );
}

export default Login;
