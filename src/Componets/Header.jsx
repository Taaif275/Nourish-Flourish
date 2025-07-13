import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NutritionChart from "./nc";
import "./comp.css";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const email = localStorage.getItem("email");
      setIsLoggedIn(!!email);
  }, []);

  const handleClick = () => {
    if (isLoggedIn) {
        navigate("/profile"); // ✅ Navigate to Profile if logged in
    } else {
        navigate("/login"); // ✅ Navigate to Login if NOT logged in
    }
};



  return (
    <>
<header className="header">

  <div className="logo">Nourish & Flourish</div>
  <nav>
    <ul className="nav-links">
      <li><a href="#wh">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><a href="#Plans">Plans</a></li>
    </ul>
  </nav>

  <div className="auth-buttons">
  {isLoggedIn ? (
    <button className="profile-btn" onClick={() => navigate("/profile")}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917546.png"
        alt="Profile"
        className="profile-icon"
      />
    </button>
  ) : (
    <button className="login" onClick={() => navigate("/login")}>Login</button>
  )}
</div>
</header>


      <div>
        <div className="text-container">
          <h1 className="ti">Welcome To Your Personalized Nutrition Planner</h1>
          <p className="description">
            Track your meals, discover tailored nutrition plans, and reach your health goals effortlessly. 
            Get personalized recommendations based on your preferences and progress.
          </p>
          <div className="get-started">
  {isLoggedIn ? (
    <button 
      className="browse-btn" 
      onClick={() => document.getElementById("browse-section").scrollIntoView({ behavior: "smooth" })}
    >
      Browse
    </button>
  ) : (
    <button className="get-started-btn" onClick={() => navigate("/signup")}>
      Get Started
    </button>
  )}
</div>
        </div>

        <div className="cards-container">
          <div className="card card1">
          </div>
          <div className="card card2">
            <h1 className="ti2">12+ Plans</h1>
            <p className="def">
              Get access to expertly crafted meal plans, fully customizable to fit your health goals and dietary preferences.
            </p>
          </div>
          <div className="card card3">
            <div className="card-inner">
              <div className="card1-front">
                <h2>Our Goal</h2>
              </div>
              <div className="card1-back">
                <p>We aim to provide personalized nutrition plans to help you achieve your health and wellness goals.</p>
              </div>
            </div>
          </div>
          <div className="card card4">
            <h2 className="title4">40+ Recipes</h2>
            <p className="desc4">
              Discover a variety of delicious, healthy, and easy-to-make recipes tailored to your nutrition needs.
            </p>
          </div>
          <div className="card card5">
            <h2 className="title5">Track Your Progress</h2>
            <p className="desc5">
              Monitor your health improvements with personalized reports and analytics.
            </p>
            <button className="arrow-btn" onClick={handleClick} >➜</button>
          </div>
        </div>
      </div>

      <div id="wh" className="wh">
      <div className="square-card">
  <img src="https://cdn-icons-png.flaticon.com/128/16768/16768959.png" alt="Food Icon" className="card-icon" />
  <h2 className="card-title">Nutritious Choices</h2>
  <p className="card-description">
    We recommend plans that suit your health. Our smart AI analyzes your dietary preferences, allergies, and fitness goals to suggest the best meal options for you.
  </p>
</div>


        <div className="square-card">
          <img src="https://cdn-icons-png.flaticon.com/128/3916/3916984.png" alt="Chart Icon" className="card-icon" />
          <h2 className="card-title">Track Your Macros & Calories</h2>
          <p className="card-description">
            Log your meals effortlessly and monitor your daily intake of proteins, carbs, fats, and calories.
            Get detailed breakdowns and insights to stay on track!
          </p>
        </div>

        <div className="square-card">
          <img src="https://cdn-icons-png.flaticon.com/128/14227/14227532.png" alt="Health Insights Icon" className="card-icon" />
          <h2 className="card-title">Weekly Health Insights</h2>
          <p className="card-description">
            Receive weekly reports on your nutrition, weight progress, and overall wellness.
            Get AI-driven recommendations to improve your diet and lifestyle!
          </p>
        </div>

        <div className="square-card">
          <img src="https://cdn-icons-png.flaticon.com/128/14899/14899824.png" alt="Recipe Icon" className="card-icon" />
          <h2 className="card-title">40+ Exclusive Recipes</h2>
          <p className="card-description">
            Access a collection of easy-to-follow, nutritious recipes curated by dietitians.
            Learn to cook delicious and healthy meals at home!
          </p>
        </div>

        <div className="square-card">
          <img src="https://cdn-icons-png.flaticon.com/128/13085/13085486.png" alt="Calendar Icon" className="card-icon" />
          <h2 className="card-title">Personalized Meal Planner</h2>
          <p className="card-description">
            Plan your meals for the week based on your goals and preferences.
            Never run out of ideas or worry about what to eat next!
          </p>
        </div>

        <div className="square-card">
          <img src="https://cdn-icons-png.flaticon.com/128/17484/17484647.png" alt="Community Icon" className="card-icon" />
          <h2 className="card-title">Join the Nutrition Community!</h2>
          <p className="card-description">
            Connect with a vibrant community of health enthusiasts.
            Share your journey, participate in challenges, and stay motivated!
          </p>
        </div>
      </div>
      <div>
      <NutritionChart />
    </div>
    <div class="pn-container">
  <div id="Plans" class="pn">Meal Plans</div>
</div>


    </>
  );
}

export default Header;


