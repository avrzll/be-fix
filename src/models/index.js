import db from "../database/connection.js";

import { Auth } from "./auth.models.js";
import { Kota } from "./kota.models.js";

export const auth = new Auth(db);
export const kota = new Kota(db);
