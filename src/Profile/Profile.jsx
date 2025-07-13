import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from "recharts";
import axios from "axios";
import "./Profile.css";
import BMITracker from "./prog";
import NutritionPlans from "./npc";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false); 
    const handleLogout = () => {
        localStorage.removeItem("email"); // Clear user email
        navigate("/"); // Redirect to login page
    };

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        height: "",
        weight: "",
        allergies: "",
    });

    const email = localStorage.getItem("email");

    useEffect(() => {
        if (!email) {
            setLoading(false);
            return;
        }

        axios.get(`http://localhost:3001/api/profile/${email}`)
            .then(response => {
                setUser(response.data);
                setFormData({
                    name: response.data.name || "",
                    age: response.data.age || "",
                    height: response.data.height || "",
                    weight: response.data.weight || "",
                    allergies: response.data.allergies ? response.data.allergies.join(", ") : "",
                });
            })
            .catch(err => console.error("❌ Error fetching profile:", err))
            .finally(() => setLoading(false));
    }, [email, refresh]);

    const calculateBMI = () => {
        if (formData.height && formData.weight) {
            const heightInMeters = formData.height / 100;
            return (formData.weight / (heightInMeters * heightInMeters)).toFixed(2);
        }
        return "--";
    };

    const bmiValue = calculateBMI();
    let bmiCategory = "Unknown";

    if (bmiValue !== "--") {
        const bmi = parseFloat(bmiValue);
        if (bmi < 18.5) bmiCategory = "Underweight";
        else if (bmi < 24.9) bmiCategory = "Normal";
        else if (bmi < 29.9) bmiCategory = "Overweight";
        else bmiCategory = "Obese";
    }

    const bmiData = [
        { name: "Underweight", value: 18.5, fill: "#FFD700" },
        { name: "Normal", value: 24.9, fill: "#6ABF69" },
        { name: "Overweight", value: 29.9, fill: "#FFA500" },
        { name: "Obese", value: 35, fill: "#FF4500" },
        { name: "You", value: parseFloat(bmiValue) || 0, fill: "#007BFF" },
    ];

    const handleBackToHome = () => navigate("/");

    const handleEditClick = () => setEditMode(true);
    const handleCancelEdit = () => setEditMode(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            console.error("❌ No user email found!");
            return;
        }

        const updatedData = {
            ...formData,
            allergies: formData.allergies ? formData.allergies.split(",").map(a => a.trim()) : [],
        };

        try {
            await axios.put(`http://localhost:3001/api/profile/${email}`, updatedData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("✅ Profile updated successfully:", updatedData);

            // ✅ Force UI update by triggering state change
            setRefresh(prev => !prev);
            setEditMode(false);
        } catch (err) {
            console.error("❌ Error updating profile:", err);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (

        <>
        <div className="profile-container">

    <button onClick={handleBackToHome} className="back-button">← Back</button>

    <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
            {editMode ? (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <h2>Edit Profile</h2>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />

                    <label>Height (cm):</label>
                    <input type="number" name="height" value={formData.height} onChange={handleChange} required />

                    <label>Weight (kg):</label>
                    <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />

                    <label>Allergies (Comma-Separated):</label>
                    <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} />

                    <div className="buttons">
                        <button type="submit">Save</button>
                        <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                    </div>
                </form>
            ) : (
                user ? (
                    <>
                        <h2>{user.name}</h2>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Height:</strong> {user.height} cm</p>
                        <p><strong>Weight:</strong> {user.weight} kg</p>
                        <p><strong>BMI:</strong> {bmiValue} ({bmiCategory})</p>
                        <p><strong>Allergies:</strong> {user.allergies.length > 0 ? user.allergies.join(", ") : "None"}</p>

                        <button onClick={handleEditClick}>Edit Profile</button>
                    </>
                ) : (
                    <p>No profile found.</p>
                )
            )}
        </div>
         
        
        {/* BMI Gauge Chart Card */}
        <div className="bmi-chart-container">
            <h3>BMI Chart</h3>
            <div className="bmi-chart">
            <ResponsiveContainer width="100%" height={250} key={bmiValue}>
            <RadialBarChart
    cx="50%"
    cy="50%"
    innerRadius="50%"  // Adjusted for better spacing
    outerRadius="90%"  // Reduced for better alignment
    startAngle={180}  // Starts from the top-middle
    endAngle={0}  // Ends at the bottom-middle
    data={bmiData}
>
    <PolarAngleAxis 
        type="number" 
        domain={[0, 40]} 
        angleAxisId={0} 
        tick={false} 
    />
    <RadialBar
        minAngle={15}
        background={{ fill: "#eee" }} // Proper background application
        clockWise={true} // Ensures clockwise rendering
        dataKey="value"
        fill="#FF5733" // Custom color for better visibility
        isAnimationActive={true} 
        animationBegin={0}
        animationDuration={1500} 
        animationEasing="ease-out"
    />

                        <Legend iconSize={12} layout="horizontal" verticalAlign="bottom" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
    <div className="profile-content2">
  <div className="progress-section">
    {/* ✅ Separate BMI Tracker Card */}
    <BMITracker bmiValue={bmiValue} bmiCategory={bmiCategory} />
  </div>

  <div className="nutrition-section">
    <NutritionPlans />
  </div>
  <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
</div>
</div>

</>
    );
};

export default Profile;







