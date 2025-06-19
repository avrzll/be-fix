import { favorit } from "../models/index.js";
import { response, logger } from "../utils/index.js";

export const addFavorite = async (req, res) => {
  if (!req.body) {
    return response(res, 400, false, "Request body cannot be empty!");
  }

  const { tempatWisataId } = req.body;
  const { user_id } = req.user;

  if (!tempatWisataId) {
    return response(res, 400, false, "Tempat wisata ID is required!");
  }

  try {
    const result = await favorit.addFavorite(tempatWisataId, user_id);
    return response(res, 201, true, "Favorite added successfully!", {
      favorite_id: result.insertId,
    });
  } catch (e) {
    logger.error(`Error during favorite addition: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const removeFavorite = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;

  try {
    const result = await favorit.removeFavorite(id, user_id);
    return response(res, 200, true, "Favorite removed successfully!", {
      wisata_id: id,
    });
  } catch (e) {
    logger.error(`Error during favorite removal: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};

export const getFavorite = async (req, res) => {
  const { user_id } = req.user;

  try {
    const result = await favorit.getFavorite(user_id);
    return response(res, 200, true, "Favorite fetched successfully!", result);
  } catch (e) {
    logger.error(`Error during favorite fetching: ${e.message}`);
    return response(res, 500, false, "Internal Server Error");
  }
};
