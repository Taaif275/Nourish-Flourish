import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "./recipesData"; // Import the recipes data
import "./recipes.css"; 

const RecipeDetail = () => {
  const { dishName } = useParams(); // Get the dish name from the URL
  const navigate = useNavigate();
  const recipe = recipes[dishName]; // Fetch the details

  if (!recipe) {
    return (
      <div className="not-found-container">
        <h2 className="not-found">Oops! Recipe not found.</h2>
        <button className="back-btn" onClick={() => navigate("/")}>Go to Home</button>
      </div>
    );
  }

  return (
    <div className="recipe-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="recipe-title">{dishName}</h1>
      <img 
        src={recipe.image} 
        alt={`Delicious ${dishName}`} 
        className="recipe-image" 
      />
      <h2 className="section-title">Ingredients:</h2>
      <ul className="ingredients-list">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="section-title">Steps:</h2>
      <ol className="steps-list">
        {recipe.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;



