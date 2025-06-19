export class Wisata {
  constructor(db) {
    this.db = db;
  }

  async createWisata(nama, deskripsi, kota_id) {
    const query =
      "INSERT INTO wisata (nama, deskripsi, kota_id) VALUES (?, ?, ?)";
    let result = await this.db.query(query, [nama, deskripsi, kota_id]);
    return result;
  }

  async getWisata(id) {
    const query = "SELECT * FROM wisata WHERE id = ?";
    let result = await this.db.query(query, [id]);
    return result;
  }

  async updateWisata(id, nama, deskripsi, kota_id) {
    const query =
      "UPDATE wisata SET nama = ?, deskripsi = ?, kota_id = ? WHERE id = ?";
    let result = await this.db.query(query, [nama, deskripsi, kota_id, id]);
    return result;
  }

  async deleteWisata(id) {
    const query = "DELETE FROM wisata WHERE id = ?";
    let result = await this.db.query(query, [id]);
    return result;
  }
}
