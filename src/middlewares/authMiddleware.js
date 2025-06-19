import jwt from "jsonwebtoken";
import { response } from "../utils/response.js";

const SECRET_KEY = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return response(res, 401, false, "Token not found!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return response(res, 403, false, "Invalid token!");
  }
};

export const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return response(res, 403, false, "Access denied. Required role: " + role);
    }

    next();
  };
};
