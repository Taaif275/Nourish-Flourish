import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import './comp.css'

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionChart = () => {
  const data = {
    labels: ["Proteins", "Fats", "Fiber", "Vitamins", "Carbs"],
    datasets: [
      {
        data: [75, 70, 30, 15, 275], // Nutrition values
        backgroundColor: ["#04585D", "#006C72", "#008C91", "#00B2B7", "#00343A"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { font: { size: 14 } } },
    },
  };

  return (
    <div className="avg"
      style={{
        width: "100%",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      {/* Left: Text Content */}
      <div style={{width: "40%", textAlign: "left", paddingRight: "20px" ,paddingLeft:"90px", paddingTop:'70px', paddingBottom:'50px' }}>
      <h1 style={{ 
  fontSize: "32px", 
  marginBottom: "10px", 
  color: "#2b2b2b", 
  fontWeight: "900", 
  textAlign: "center", 
  width: "100%",
  paddingLeft:"120px" 
}}>
 Average Daily Nutrition Intake
</h1>
        <p style={{ fontSize: "16px", color: "#555", textAlign: "center", maxWidth: "900px",paddingLeft:"120px",fontWeight:"600" }}>
  A balanced diet includes proteins for muscle repair, healthy fats for brain function, fiber for digestion, 
  vitamins for immunity, and carbohydrates for energy. Eating a variety of whole foods ensures optimal health and well-being.
</p>


      </div>

      {/* Right: Pie Chart */}
      <div style={{ width: "50%", height: "100%",paddingTop:"40px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default NutritionChart;





