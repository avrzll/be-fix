export class Auth {
  constructor(db) {
    this.db = db;
  }

  async register(username, password) {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    let result = await this.db.query(query, [username, password]);
    return result;
  }

  async login(username, password) {
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    let result = await this.db.query(query, [username, password]);
    return result;
  }

  async findUserByUsername(username) {
    const query = "SELECT * FROM users WHERE username = ?";
    let [result] = await this.db.query(query, [username]);
    return result;
  }
}
