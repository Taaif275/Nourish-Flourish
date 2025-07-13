const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersModel = require("./models/users");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/pnp_db", {
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use("/api/profile", profileRoutes);

// 🔹 Signup Route (Now Returns User Email)
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const existingUser = await usersModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }
        const newUser = await usersModel.create({ name, email, password });
        console.log("✅ New user registered:", newUser);

        res.status(201).json({ 
            message: "User registered successfully!", 
            user: { email: newUser.email, name: newUser.name } 
        });
    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// 🔹 Login Route (Now Returns User Email)
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
    }

    try {
        const user = await usersModel.findOne({ email });

        console.log("🔍 User Found:", user); // ✅ Check if user exists

        if (!user) {
            return res.status(404).json({ message: "No record found" });
        }


        // ✅ Compare plain text passwords directly
        if (password !== user.password) {
            return res.status(401).json({ message: "Incorrect Password" });
        }

        res.status(200).json({ 
            message: "Login successful!", 
            user: { email: user.email, name: user.name } 
        });
    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post("/api/saveSelectedPlan", async (req, res) => {
  const { email, plan } = req.body;

  if (!email || !plan) {
    return res.status(400).json({ message: "Email and meal plan are required!" });
  }

  try {
    const updatedUser = await usersModel.findOneAndUpdate(
      { email }, // Find by email (Ensures correct user)
      { $set: { nutritionPlan: plan } }, // Set new meal plan
      { new: true, upsert: true } // Create if not found// 🔹 Creates user if not found
    );

    res.json({ message: "Meal plan saved successfully!", user: updatedUser });
  } catch (error) {
    console.error("❌ Error saving meal plan:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Retrieve Selected Meal Plan for User
app.get("/api/getSelectedPlan/:email", async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }

  try {
    const user = await usersModel.findOne({ email }, "nutritionPlan");
    if (!user || !user.nutritionPlan) {
      return res.json({ message: "No meal plan selected.", plan: null });
    }

    res.json({ plan: user.nutritionPlan });
  } catch (error) {
    console.error("❌ Error fetching meal plan:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

  

// Start Server
app.listen(3001, () => {
    console.log("🚀 Server running on port 3001");
});
