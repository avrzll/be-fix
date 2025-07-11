import express from "express";

import {
  createWisata,
  getWisataById,
  getAllWisata,
  updateWisata,
  deleteWisata,
  getWisataByKotaId,
} from "../controllers/index.js";

const wisata = express.Router();

wisata.post("/create", createWisata);
wisata.get("/:id", getWisataById);
wisata.get("/kota/:id", getWisataByKotaId);
wisata.get("/", getAllWisata);
wisata.put("/update/:id", updateWisata);
wisata.delete("/delete/:id", deleteWisata);

export { wisata };
