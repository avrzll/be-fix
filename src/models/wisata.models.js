export class Wisata {
  constructor(db) {
    this.db = db;
  }

  async createWisata(nama, deskripsi, kota_id) {
    const query =
      "INSERT INTO tempat_wisata (nama, deskripsi, kota_id) VALUES (?, ?, ?)";
    let result = await this.db.query(query, [nama, deskripsi, kota_id]);
    return result;
  }

  async getWisataById(id) {
    const query = "SELECT * FROM tempat_wisata WHERE id = ?";
    let result = await this.db.query(query, [id]);
    return result;
  }

  async getWisata() {
    const query = "SELECT * FROM tempat_wisata";
    let result = await this.db.query(query);
    return result;
  }

  async getWisataByKotaId(id) {
    const query = "SELECT * FROM tempat_wisata WHERE kota_id = ?";
    let result = await this.db.query(query, [id]);
    return result;
  }

  async updateWisata(id, nama, deskripsi, kota_id) {
    const query =
      "UPDATE tempat_wisata SET nama = ?, deskripsi = ?, kota_id = ? WHERE id = ?";
    let result = await this.db.query(query, [nama, deskripsi, kota_id, id]);
    return result;
  }

  async deleteWisata(id) {
    const query = "DELETE FROM tempat_wisata WHERE id = ?";
    let result = await this.db.query(query, [id]);
    return result;
  }
}
