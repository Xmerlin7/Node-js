import ApiError from "../../utils/ApiError";
export default (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new ApiError("Forbidden, U can't do that");
    next();
  };
};
