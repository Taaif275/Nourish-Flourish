import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Card.css";
import { mealPlanCategories } from "./mealPlans";
import { useNavigate } from "react-router-dom";

export default function Card1() {
  const [centerCard, setCenterCard] = useState(0);
  const navigate = useNavigate();
  const sliderRef = React.useRef(null); // Ref for slider navigation

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    beforeChange: (oldIndex, newIndex) => setCenterCard(newIndex),
    appendDots: dots => (
      <div style={{ marginTop: "20px" }}>
        <ul style={{ marginBottom: "0px" }}> {dots} </ul>
      </div>
    )
  };

  const goNext = () => sliderRef.current.slickPrev(); // Move to next card
  const goPrevious = () => sliderRef.current.slickNext(); // Move to previous card

  return (
    <>
      <div className="meal-plans-wrapper">
        <button className="nav-btn prev-btn" onClick={goPrevious}>↶</button>
        <Slider ref={sliderRef} {...settings}>
          {mealPlanCategories.flatMap((category, index) => 
            category.plans.map((plan, idx) => (
              <MealPlanCard key={`${index}-${idx}`} plan={plan} isCenter={centerCard === (index * category.plans.length + idx)} />
            ))
          )}
        </Slider>
        <button className="nav-btn next-btn" onClick={goNext}>↷</button>
      </div>
    </>
  );
}

function MealPlanCard({ plan, isCenter }) {
  const navigate = useNavigate();

  return ( 
   <div id="contain" className="contain">
      <div className={`meal-plan-card ${isCenter ? "active" : ""}`}>
        <img src={plan.image} alt={plan.name} className="meal-plan-image" />
        <h3 className="meal-plan-title">{plan.name}</h3>
        {isCenter && (
          <>
            <div className="meal-plan-details">
              <h4 className="details-title">Dishes:</h4>
              <ul className="dishes-list">
                {plan.dishes.map((dish, i) => (
                  <li key={i} className="dish-item">{dish}</li>
                ))}
              </ul>
              <hr className="separator" />
              <div className="nutrition-info">
                <p><strong>Calories:</strong> <span className="calories-text">{plan.calories} kcal</span></p>
                <p><strong>Protein:</strong> <span className="protein-text">{plan.protein}g</span></p>
                <p><strong>Carbs:</strong> <span className="carbs-text">{plan.carbs}g</span></p>
              </div>
              <hr className="separator" />
            </div>
            <button 
              className="view-details" 
              style={{ marginBottom: "20px" }}
              onClick={() => navigate(`/mealplandetails/${encodeURIComponent(plan.name)}`, { state: { plan } })}
            >
              View Details
            </button>
          </>
        )}
      </div>
    </div>
  );
}










