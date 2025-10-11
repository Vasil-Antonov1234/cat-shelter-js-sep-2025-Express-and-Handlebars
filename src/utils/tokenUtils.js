import jwt from "jsonwebtoken";
import { JWT_SECTER } from "../config/constants.js";

export function generateAuthToken(user) {
    
    const payload = {
        id: user.is,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_SECTER, {expiresIn: "2h"});


    


    return token;
}