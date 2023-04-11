
import jwt from "jsonwebtoken";

export default function isValidToken(token) {
    try {
      const decoded = jwt.verify(token, `secret`);
      if ("name" in decoded) {
        console.log(`token is valid`);
  
        return { name: decoded.name, id: decoded.id, password: decoded.password };
      } else {
        console.log(`token is invalid`);
        return false;
      }
    } catch (err) {
      return false;
    }
  }