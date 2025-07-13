import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const NutritionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const userEmail = localStorage.getItem("email"); // ✅ Use correct key

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:3001/api/getSelectedPlan/${userEmail}`)
        .then((response) => {
          console.log("📨 Fetching meal plan for:", userEmail);
          if (response.data && response.data.plan) {
            setSelectedPlan(response.data.plan);
          }
        })
        .catch((err) => console.error("❌ Error fetching plan:", err));
    }
  }, [userEmail]);

  return (
    <div className="nutrition-plans-container">
      <h2 className="nutrition-title">Selected Nutrition Plan</h2>

      {selectedPlan && Object.keys(selectedPlan).length > 0 ? (
  <div className="selected-plan-card">
    <h3 className="plan-name">{selectedPlan.name}</h3>
    <img src={selectedPlan.image} alt={selectedPlan.name} className="plan-image" />
  </div>
) : (
  <p className="no-plan-selected">❌ No Plan Selected</p>
)}


      <button className="select-plan-btn" onClick={() => (window.location.href = "/#Plans")}>
        Select Plan
      </button>
    </div>
  );
};

export default NutritionPlans;
















