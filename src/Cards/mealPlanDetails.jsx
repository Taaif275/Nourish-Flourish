import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./mealPlans.css";

function MealPlanDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { planName } = useParams();
  const plan = location.state?.plan;
  const [showPopup, setShowPopup] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const userEmail = localStorage.getItem("email"); // ✅ Ensure consistent email usage

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:3001/api/getSelectedPlan/${userEmail}`)
        .then((response) => {
          if (response.data.plan?.name === plan.name) {
            setIsSelected(true);
          }
        })
        .catch((err) => console.error("❌ Error checking selected plan:", err));
    }
  }, [userEmail, plan]);

  const handleSelectPlan = async () => {
    if (!userEmail) {
        setShowPopup(true); // Show popup if user is not logged in
        return;
    }

    try {
      await axios.post("http://localhost:3001/api/saveSelectedPlan", {
        email: userEmail,
        plan: { name: plan.name, image: plan.image },
      });

      localStorage.setItem("selectedMealPlan", JSON.stringify({ name: plan.name, image: plan.image }));
      setIsSelected(true);
      console.log(`✅ Meal plan saved for user: ${userEmail}`);
    } catch (error) {
      console.error("❌ Error saving meal plan:", error);
    }
  };

  if (!plan) {
    return <h1 className="error-message">No meal plan details found for {decodeURIComponent(planName)}</h1>;
  }

  return (
    <div className="meal-plan-container">
      <h1 className="meal-plan-title">{plan.name}</h1>
      <img src={plan.image} alt={plan.name} className="meal-plan-image" />

      <h2 className="section-title">Dishes Included:</h2>
      <ul className="dish-list">
        {plan.dishes.map((dish, index) => (
          <li key={index} className="dish-item">{dish}</li>
        ))}
      </ul>

      <h2 className="section-title">Nutrition Information:</h2>
      <div className="nutrition-info">
        <p><strong>Calories:</strong> {plan.calories} kcal</p>
        <p><strong>Protein:</strong> {plan.protein}g</p>
        <p><strong>Carbs:</strong> {plan.carbs}g</p>
        <p><strong>Micronutrients:</strong></p>
        <ul className="micronutrient-list">
          {plan.micronutrients &&
            Object.entries(plan.micronutrients).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
        </ul>
      </div>

      {plan.glycemicIndex && <p className="glycemic-index"><strong>Glycemic Index:</strong> {plan.glycemicIndex}</p>}
      {plan.alternativeMeals && (
        <>
          <h2 className="section-title">Alternative Meals:</h2>
          <ul className="alternative-meals">
            {plan.alternativeMeals.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </>
      )}

      {plan.preWorkoutMeal && <p className="pre-workout-meal"><strong>Pre-Workout Meal:</strong> {plan.preWorkoutMeal}</p>}
      {plan.postWorkoutMeal && <p className="post-workout-meal"><strong>Post-Workout Meal:</strong> {plan.postWorkoutMeal}</p>}
      {plan.allergens && (
        <>
          <h2 className="section-title">Allergen Information:</h2>
          <ul className="allergen-info">
            {plan.allergens.map((allergen, index) => (
              <li key={index}>{allergen}</li>
            ))}
          </ul>
        </>
      )}

      {plan.mealPrepTime && <p className="meal-prep-time"><strong>Meal Prep Time:</strong> {plan.mealPrepTime}</p>}

      <button className="back-button" onClick={() => navigate(-1)}>⬅ Go Back</button>

      <button 
    className={`select-plan-btn ${isSelected ? "selected" : ""}`}
    onClick={handleSelectPlan}
    disabled={isSelected}
>
    {isSelected ? "✅ Selected" : "Select Plan"}
</button>

{/* Popup (placed outside button) */}
{showPopup && (
  <div className="popup-overlay">
      <div className="popup-box">
          <p>Please log in to select a meal plan.</p>
          <button onClick={() => setShowPopup(false)}>OK</button>
      </div>
  </div>
)}

    </div>
  );
}

export default MealPlanDetails;

