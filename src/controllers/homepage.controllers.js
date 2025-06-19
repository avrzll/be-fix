import { response } from "../utils/index.js";

export const homepageController = (req, res) => {
  response(res, 200, true, "Welcome", {
    version: "1.0.0",
    description:
      "This is a sample homepage controller for a express backend starter.",
  });
};
