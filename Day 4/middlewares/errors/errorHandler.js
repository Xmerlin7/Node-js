export default (error, req, res, next) => {
  let status = error.status || 500;
  let mess = error.message || "Internal Server Error!";
  return res.status(status).json(mess);
};
