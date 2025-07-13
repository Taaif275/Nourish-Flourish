import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Profile.css";

const BMITracker = ({ bmiValue, bmiCategory }) => {
  const getProgress = (bmi) => (bmi ? Math.min((bmi / 40) * 100, 100) : 0);

  const getColor = (category) => {
    switch (category) {
      case "Underweight": return "#FFD700"; // Yellow
      case "Normal": return "#4CAF50"; // Green
      case "Overweight": return "#FFA500"; // Orange
      case "Obese": return "#FF4500"; // Red
      default: return "#007BFF"; // Blue
    }
  };

  return (
    <div className="bmi-tracker-card">
      <h2>BMI Progress</h2>
      <div className="circular-progress">
        <CircularProgressbar
          value={getProgress(bmiValue)}
          text={bmiValue ? `${bmiValue}` : "--"}
          styles={buildStyles({
            textColor: "#333",
            pathColor: getColor(bmiCategory),
            trailColor: "#ddd",
            textSize: "16px"
          })}
        />
      </div>
      <p className="bmi-message">
        {bmiCategory === "Underweight" && "You should gain weight! Try a high-calorie diet."}
        {bmiCategory === "Normal" && "You're at a healthy weight! Maintain your balance."}
        {bmiCategory === "Overweight" && "Consider losing some weight through diet and exercise."}
        {bmiCategory === "Obese" && "Weight loss is recommended. Consult a nutritionist."}
      </p>

      <h3 className="h37">Recommended Meal Plans</h3>
      <ul className="recommended-plans-list">
        {bmiCategory === "Underweight" && (
          <>
            <li>Muscle Gain Plan</li>
            <li>High-Protein Plan</li>
          </>
        )}
        {bmiCategory === "Normal" && (
          <>
            <li>Balanced Diet Plan</li>
          </>
        )}
        {bmiCategory === "Overweight" && (
          <>
            <li>Weight Loss Plan</li>
            <li>Low-Carb Diet</li>
          </>
        )}
        {bmiCategory === "Obese" && (
          <>
            <li>Weight Loss Plan</li>
            <li>Diabetes-Friendly Plan</li>
            <li>Heart-Healthy Plan</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default BMITracker;








