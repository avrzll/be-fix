import { wisata } from "../models/index.js";
import { response, logger } from "../utils/index.js";

export const createWisata = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { nama, deskripsi, kota_id } = req.body;

  if (!nama || !deskripsi || !kota_id) {
    return response(
      res,
      400,
      false,
      "Nama, deskripsi, and kota_id are required!"
    );
  }

  try {
    const result = await wisata.createWisata(nama, deskripsi, kota_id);
    return response(res, 201, true, "Wisata created successfully!", {
      wisata_id: result.insertId,
    });
  } catch (e) {
    logger.error(`Error during wisata creation: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const getWisataById = async (req, res) => {
  const { id } = req.params;

  const result = await wisata.getWisataById(id);

  if (!result) {
    return response(res, 404, false, "Wisata not found!");
  }

  return response(res, 200, true, "Wisata fetched successfully!", result);
};

export const getAllWisata = async (req, res) => {
  const result = await wisata.getAllWisata();

  if (!result) {
    return response(res, 404, false, "Wisata not found!");
  }

  return response(res, 200, true, "Wisata fetched successfully!", result);
};

export const updateWisata = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { nama, deskripsi, kota_id } = req.body;

  if (!nama || !deskripsi || !kota_id) {
    return response(
      res,
      400,
      false,
      "Nama, deskripsi, and kota_id are required!"
    );
  }

  const result = await wisata.updateWisata(id, nama, deskripsi, kota_id);

  if (result.affectedRows === 0) {
    return response(res, 404, false, "Wisata not found!");
  }

  return response(res, 200, true, "Wisata updated successfully!", {
    id,
    ...req.body,
  });
};

export const deleteWisata = async (req, res) => {
  const { id } = req.params;

  const result = await wisata.deleteWisata(id);

  if (result.affectedRows === 0) {
    return response(res, 404, false, "Wisata not found!");
  }

  return response(res, 200, true, "Wisata deleted successfully!", {
    id,
  });
};
