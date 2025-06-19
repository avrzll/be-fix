import express from "express";

import {
  createKota,
  getKotaById,
  getAllKota,
  updateKota,
  deleteKota,
} from "../controllers/index.js";

const kota = express.Router();

kota.post("/create", createKota);
kota.get("/:id", getKotaById);
kota.get("/", getAllKota);
kota.put("/update/:id", updateKota);
kota.delete("/delete/:id", deleteKota);

export { kota };
