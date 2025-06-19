export const response = (res, code, status, message, data) => {
  return res.status(code).json({
    status,
    message,
    data,
  });
};
