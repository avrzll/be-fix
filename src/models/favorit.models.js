export class Favorit {
  constructor(db) {
    this.db = db;
  }

  async addFavorite(tempatWisataId, userId) {
    const query =
      "INSERT INTO favorit (tempat_wisata_id, user_id) VALUES (?, ?)";
    let result = await this.db.query(query, [tempatWisataId, userId]);
    return result;
  }

  async removeFavorite(tempatWisataId, userId) {
    const query =
      "DELETE FROM favorit WHERE tempat_wisata_id = ? AND user_id = ?";
    let result = await this.db.query(query, [tempatWisataId, userId]);
    return result;
  }

  async getFavorite(userId) {
    const query = "SELECT * FROM favorit WHERE user_id = ?";
    let result = await this.db.query(query, [userId]);
    return result;
  }
}
