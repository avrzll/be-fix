import { kota } from "../models/index.js";
import { response, logger } from "../utils/index.js";

export const createKota = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { nama } = req.body;
  if (!nama) {
    return response(res, 400, false, "Nama kota is required!");
  }

  try {
    const result = await kota.createKota(nama);
    return response(res, 201, true, "Kota created successfully!", {
      kota_id: result.insertId,
    });
  } catch (e) {
    logger.error(`Error during kota creation: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const getKotaById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return response(res, 400, false, "Kota ID is required!");
  }

  try {
    const result = await kota.getKotaById(id);
    if (!result) {
      return response(res, 404, false, "Kota not found!");
    }

    return response(res, 200, true, "Kota fetched successfully!", result);
  } catch (e) {
    logger.error(`Error during kota fetching: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const getAllKota = async (req, res) => {
  try {
    const result = await kota.getAllKota();

    return response(res, 200, true, "Kota fetched successfully!", result);
  } catch (e) {
    logger.error(`Error during kota fetching: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const updateKota = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { id } = req.params;
  const { nama } = req.body;
  if (!nama) {
    return response(res, 400, false, "Nama kota is required!");
  }

  try {
    const result = await kota.updateKota(id, nama);
    if (result.affectedRows === 0) {
      return response(res, 404, false, "Kota not found!");
    }

    return response(res, 200, true, "Kota updated successfully!", {
      id,
      ...req.body,
    });
  } catch (e) {
    logger.error(`Error during kota updating: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const deleteKota = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return response(res, 400, false, "Kota ID is required!");
  }

  try {
    const result = await kota.deleteKota(id);
    if (result.affectedRows === 0) {
      return response(res, 404, false, "Kota not found!");
    }

    return response(res, 200, true, "Kota deleted successfully!", {
      id,
    });
  } catch (e) {
    logger.error(`Error during kota deletion: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};
