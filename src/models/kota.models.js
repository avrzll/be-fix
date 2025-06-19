export class Kota {
  constructor(db) {
    this.db = db;
  }

  async createKota(name) {
    const query = "INSERT INTO kota (nama) VALUES (?)";
    const params = [name];
    let result = await this.db.query(query, params);
    return result;
  }

  async getKotaById(id) {
    const query = "SELECT * FROM kota WHERE id = ?";
    const params = [id];
    let [result] = await this.db.query(query, params);
    return result;
  }

  async getAllKota() {
    const query = "SELECT * FROM kota";
    let results = await this.db.query(query);
    return results;
  }

  async updateKota(id, name) {
    const query = "UPDATE kota SET nama = ? WHERE id = ?";
    const params = [name, id];
    let result = await this.db.query(query, params);
    return result;
  }

  async deleteKota(id) {
    const query = "DELETE FROM kota WHERE id = ?";
    const params = [id];
    let result = await this.db.query(query, params);
    return result;
  }
}
