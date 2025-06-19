import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { logger } from "./src/utils/index.js";

const PORT = config.server.port;

app.listen(PORT, () => {
  logger.info(`Server running at: http://localhost:${PORT}`);
});
