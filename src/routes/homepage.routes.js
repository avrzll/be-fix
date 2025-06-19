import express from "express";
import { homepageController } from "../controllers/index.js";

const homepage = express.Router();
homepage.get("/", homepageController);

export { homepage };
