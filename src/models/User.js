import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email!"],
        unique: [true, "This email is already registered!"],
        minLength: [10, "Email must be at least 10 characters long!"]
    },
    password: {
        type: String,
        required: true,
        minLength: [7, "Password must be at least 7 characters long!"],
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model("User", userSchema);


export default User;