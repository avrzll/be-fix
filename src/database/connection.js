import mysql from "mysql2";
import { config } from "../config/config.js";
import { logger, string } from "../utils/index.js";

class Database {
  constructor() {
    this.pool = mysql.createPool({
      ...config.database,
    });

    this.pool.getConnection((err, connection) => {
      if (err) {
        logger.error(`Database connection failed: ${string(err.message)}`);
        throw err;
      }
      if (connection) connection.release();
      logger.info("Database connected successfully");
    });

    this.pool.on("error", (err) => {
      logger.error("Database error:", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        logger.warn("Reconnecting database...");
        this.reconnect();
      }
    });
  }

  reconnect() {
    this.pool = mysql.createPool({
      ...config.database,
      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 0,
    });
    logger.info("Database reconnected.");
  }

  query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          logger.error(`Error getting DB connection: ${string(err)}`);
          reject(err);
          return;
        }
        connection.query(sql, params, (queryErr, results) => {
          connection.release();
          if (queryErr) {
            logger.error(`Query Error: ${string(queryErr)}`);
            reject(queryErr);
          } else {
            resolve(results);
          }
        });
      });
    });
  }
}

const database = new Database();
export default database;
