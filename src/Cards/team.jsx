import React from "react";
import "./tr.css";

const teamMembers = [
  { name: "Eesaw Taaif" }
];

export default function TeamPage() {
  return (
    <>
     <div className="rec">
  <div className="details-card">
    <h2 className="recipe-titlee">Craft Your Perfect Meal</h2>
    <p className="recipe-description">
    Create your perfect dish with fresh ingredients and a touch of love! Customize flavors, ingredients, and style to match your unique taste—every bite, truly yours.
    </p>
    <button className="recipe-button"><a href="/recipes">Try Now</a></button>
  </div>
  <div className="image-card">
    <h2 className="h21">Check out our Recipies</h2>
  </div>
</div>


<div className="team-container">
  <h1 className="team-title">Meet Our Team</h1>
  <div className="team-row">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-card">
        <h2 className="team-name">{member.name}</h2>
      </div>
    ))}
  </div>
</div>

<div id="About" className="About">
<div className="about-us">
    <h2 className="about-title">About Us</h2>
    <p className="about-intro">
        Welcome to our platform, where health meets convenience! Our mission is to empower individuals to achieve their wellness goals 
        through personalized meal plans, AI-driven nutrition insights, and a supportive community. We understand that maintaining a balanced 
        diet can be challenging, which is why we've developed a smart, easy-to-use system that adapts to your dietary preferences, 
        lifestyle, and fitness objectives.
    </p>
    <p className="about-details">
        Our platform offers <strong>Nutritious Choices</strong> tailored to your dietary needs and fitness goals. Track your daily intake with  
        <strong> real-time macro & calorie tracking</strong> and plan your meals effortlessly with our <strong> personalized meal planner</strong>. Explore over 
        <strong> 40+ exclusive dietitian-approved recipes</strong> designed for a healthy lifestyle. Stay on top of your progress with 
        <strong> weekly health insights</strong> and connect with a vibrant, supportive community to keep yourself motivated.  
    </p>
    <p className="about-outro">
        Whether you're looking to lose weight, build muscle, manage a specific health condition, or simply eat healthier, our platform 
        provides all the tools and guidance you need. Take control of your health journey—one meal at a time!
    </p>
</div>
</div>



    </>

    
  );
}
