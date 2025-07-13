import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setMessage("All fields are required!");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:3001/signup", { name, email, password });
            console.log("✅ Signup Successful:", response.data);
    
            // ✅ Store credentials in localStorage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
    
            setMessage("Signup successful! Redirecting to login...");
    
            // ✅ Redirect to login page after 2 seconds
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            
        } catch (err) {
            console.error("❌ Signup Error:", err.response?.data?.message || err.message);
            setMessage(err.response?.data?.message || "Something went wrong!");
        }
    };
    
    return (
        <div className="auth-page">
            <div className="signup-container">
                <h2 className="signup-title">Start Your Nourishing Journey</h2>
                {message && <p className="message">{message}</p>}  
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={name}  
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button className="signb" type="submit">Signup</button>
                </form>
                <p className="login-link">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default Signup;
