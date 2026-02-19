import * as categoryServices from "../services/category.service.js";

export const createCategory = async (req, res, next) => {
  try {
    await categoryServices.create(req.body);
    res.status(200).json({ message: "Category Created Successfully!" });
  } catch (err) {
    next(err);
  }
};
