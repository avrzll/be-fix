import db from "../database/connection.js";

import { Auth } from "./auth.models.js";
import { Kota } from "./kota.models.js";
import { Favorit } from "./favorit.models.js";
import { Wisata } from "./wisata.models.js";

export const auth = new Auth(db);
export const kota = new Kota(db);
export const favorit = new Favorit(db);
export const wisata = new Wisata(db);
