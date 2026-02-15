import Child from "../models/child.js";

export const getAll = async (req, res, next) => {
  try {
    const children = await Child.find().lean();
    res.status(200).json(children);
  } catch (err) {
    next(err);
  }
};

export const getByID = async (req, res, next) => {
  try {
    const child = await Child.findById(Number(req.params.id)).lean();
    res.status(200).json(child);
  } catch (err) {
    next(err);
  }
};

export const addOne = async (req, res, next) => {
  try {
    const created = await Child.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

export const updateOne = async (req, res, next) => {
  try {
    const updated = await Child.findByIdAndUpdate(
      Number(req.params.id),
      req.body,
      {
        new: true,
        runValidators: true,
      },
    ).lean();
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    const deleted = await Child.findByIdAndDelete(Number(req.params.id)).lean();
    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
};
