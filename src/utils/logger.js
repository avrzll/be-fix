import pino from "pino";
import { config } from "../config/index.js";
/**
 * Logger utility using pino for structured logging.
 * It formats the log messages with a timestamp and colors them for better readability.
 * The logger can be customized with additional options.
 */

export function getTime() {
  const now = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return now.toLocaleTimeString("id-ID", options);
}

export const createLogger = (options = {}) => {
  return pino({
    level: config.logger.level,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        timestamp: `,"time":"${getTime()}"`,
        ignore: "pid,hostname",
        ...options,
      },
    },
  });
};

export const logger = createLogger();
