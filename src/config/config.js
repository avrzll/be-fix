import "dotenv/config";

export const config = {
  server: {
    port: 2020,
  },
  logger: {
    level: "debug",
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    timezone: "Z",
  },
  rate_limit: {
    windowMs: 60 * 1000,
    max: 30,
    message: "Too Many Requests! :(",
    standardHeaders: true,
    legacyHeaders: false,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: "1d",
  },
};
