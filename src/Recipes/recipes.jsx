import React, { useState } from "react";
import "./recipes.css";
import categories from "./categories";
import { Link } from "react-router-dom";


const RecipesPage = () => {
  const [selectedDishes, setSelectedDishes] = useState({});

  const handleButtonClick = (index, dishes) => {
    setSelectedDishes((prev) => ({ ...prev, [index]: dishes }));
  };

  return (
<div className="rbg">  
    <div className="recipes-container">
      <h2 className="recipes-title">Explore Our Recipes</h2>
      <div className="recipes-grid">
        {categories.map((category, index) => (
          <div className="recipe-box" key={index}>
             <h2 className="box-title">{category.title}</h2> 
            <div className="recipe-card expand-right">
              <div
                className="image"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="continent-buttons">
                {category.continents.map((continent, i) => (
                  <button key={i} onClick={() => handleButtonClick(index, continent.dishes)}>
                    {continent.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Information Card (Dishes will appear only in the clicked box) */}
            <div className="extra-card">
              {selectedDishes[index] ? (    
                <ul>
                  {selectedDishes[index].map((dish, i) => (
                    <li key={i}>
                      <Link to={`/recipe/${dish}`} style={{ textDecoration: "none", color: "black" }}>
                        {dish}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Click a category to see dishes</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecipesPage;




