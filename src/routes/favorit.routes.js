import express from "express";

import {
  addFavorite,
  removeFavorite,
  getFavorite,
} from "../controllers/index.js";

const favorit = express.Router();

favorit.post("/add", addFavorite);
favorit.delete("/remove/:id", removeFavorite);
favorit.get("/", getFavorite);

export { favorit };
