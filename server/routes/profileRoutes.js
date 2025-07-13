const express = require("express");
const router = express.Router();
const User = require("../models/users");

// ✅ GET user profile by email
router.get("/:email", async (req, res) => {
    try {
        const email = req.params.email;
        if (!email) return res.status(400).json({ error: "Email is required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (err) {
        console.error("❌ Error fetching profile:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ PUT (Update) user profile by email
router.put("/:email", async (req, res) => {
    try {
        const email = req.params.email;
        if (!email) return res.status(400).json({ error: "Email is required" });

        const { name, age, height, weight, allergies } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                name,
                age: age ? Number(age) : undefined,
                height: height ? Number(height) : undefined,
                weight: weight ? Number(weight) : undefined,
                allergies: Array.isArray(allergies) ? allergies : allergies.split(",").map(a => a.trim())
            },
            { new: true, upsert: true } // ✅ Returns updated document, creates if not exists
        );

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json(updatedUser);
    } catch (err) {
        console.error("❌ Error updating profile:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/saveSelectedPlan", async (req, res) => {
    try {
        const { email, plan } = req.body;
        if (!email || !plan) return res.status(400).json({ error: "Email and plan are required" });

        // Update user document with the selected nutrition plan
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { nutritionPlan: { name: plan.name, image: plan.image } }, // Store name & image
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json({ message: "✅ Nutrition plan saved successfully", user: updatedUser });
    } catch (err) {
        console.error("❌ Error saving nutrition plan:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;


