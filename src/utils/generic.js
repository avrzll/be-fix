export const string = (obj) => {
  return JSON.stringify(obj, null, 4);
};

export const parse = (str) => {
  return JSON.parse(str, null, 4);
};

export const generateUniqueId = (length = 10) => {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * Math.pow(10, length));
  const randomStr = randomNum.toString().padStart(length, "0");

  let result = "";
  const maxLength = Math.max(timestamp.length, randomStr.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < timestamp.length) {
      result += timestamp[i];
    }
    if (i < randomStr.length) {
      result += randomStr[i];
    }
  }

  return result.slice(-length);
};
