import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Logsign/Login.jsx";
import Signup from "./Logsign/Signup.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile/Profile.jsx";
import MealPlanDetails from "./Cards/mealPlanDetails.jsx";
import Carousel from "./Recipes/recipes.jsx";
import RecipeDetail from "./Recipes/RecipeDetail";

function Layout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return <div className={isAuthPage ? "auth-page" : ""}>{children}</div>;
}


function App() {

  const userId = "65e000123abc456";

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} ></Route>
        <Route path = '/signup' element = {<Signup />} ></Route>
        <Route path = '/login' element = {<Login />} ></Route>
        <Route path = '/recipes' element = {<Carousel />} ></Route>
        <Route path="/recipe/:dishName" element={<RecipeDetail />} />
        <Route path="/mealplandetails/:planName" element={<MealPlanDetails />} />
        <Route path = '/profile' element = {<Profile userId={userId} />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
