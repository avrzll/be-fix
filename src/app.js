import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { config } from "./config/index.js";
import { auth, homepage, kota } from "./routes/index.js";
import { verifyToken } from "./middlewares/index.js";

const app = express();
const limiter = rateLimit(config.rate_limit);

app.use(cors());
app.use(limiter);
app.use(bodyParser.json({ limit: "30mb" }));

// routes
app.use("/", homepage);
app.use("/auth", auth);

app.use(verifyToken);

app.use("/kota", kota);

export default app;
