import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const JWT_SECTER = "asdsdfgfdw456578usedawrfg6578oiu";

export default {
    register(userData) {
        return User.create(userData);
    },

    async login(userData) {
        const email = userData.email;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid user or password!");
        };

        const isValid = await bcrypt.compare(userData.password, user.password);

        if (!isValid) {
            throw new Error("Invalid user or password!");
        };

        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECTER, { expiresIn: "2h"});

        return token;
    }
};