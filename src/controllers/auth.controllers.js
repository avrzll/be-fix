import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { auth } from "../models/index.js";
import { response, logger } from "../utils/index.js";

const SECRET_KEY = process.env.JWT_SECRET;

export const register = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return response(res, 400, false, "Username and password are required!");
  }

  if (!/^[a-z]+$/.test(username)) {
    return response(
      res,
      400,
      false,
      "Username must contain only lowercase letters (a-z)!"
    );
  }

  try {
    const existing = await auth.findUserByUsername(username);
    if (existing) {
      return response(res, 409, false, "Username is already taken!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await auth.register(username, hashedPassword);
    return response(res, 201, true, "Registration successful!", {
      user_id: result.insertId,
    });
  } catch (e) {
    logger.error(`Error during registration: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const login = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return response(res, 400, false, "Username and password are required!");
  }

  try {
    const user = await auth.findUserByUsername(username);
    if (!user) {
      return response(res, 404, false, "User not found!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response(res, 401, false, "Invalid password!");
    }

    const token = jwt.sign(
      { user_id: user.id, username: user.username, role: user.role },
      SECRET_KEY,
      { expiresIn: "1d" }
    );

    return response(res, 200, true, "Login successful!", { token });
  } catch (e) {
    logger.error(`Error during login: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};
