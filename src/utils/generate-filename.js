import path from "path";

export const generateUniqueFileName = (originalname) => {
  const now = new Date();
  const datetime = `${String(now.getDate()).padStart(2, "0")}${String(
    now.getMonth() + 1
  ).padStart(2, "0")}${now.getFullYear()}${String(now.getHours()).padStart(
    2,
    "0"
  )}${String(now.getMinutes()).padStart(2, "0")}${String(
    now.getSeconds()
  ).padStart(2, "0")}`;

  const rawName = path.parse(originalname).name;
  const cleanName = rawName.trim().split(" ")[0];
  const ext = path.extname(originalname);

  return `${cleanName}-${datetime}${ext}`;
};
