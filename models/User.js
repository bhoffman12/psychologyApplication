const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, trim: true, unique: true },
        hash_password: { type: String, required: true },
        role: { default: 'patient', type: String },
        fname:{ type: String, required: false },
        lname:{ type: String, required: false },
        phone:{ type: String, required: false },
        email:{ type: String, required: false },
        birthdate:{ type: Date, required: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);