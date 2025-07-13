const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    age: { type: Number },
    height: { type: Number },
    weight: { type: Number },
    allergies: { type: [String], default: [] },
    nutritionPlan: {
        name: { type: String },  // Store selected plan name
        image: { type: String }, // Store selected plan image URL
      },
    }, { versionKey: false });

const User = mongoose.model("users", userSchema);
module.exports = User;
