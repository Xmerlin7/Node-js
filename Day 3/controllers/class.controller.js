import ClassModel from "../models/class.js";
import Child from "../models/child.js";
import Teacher from "../models/teachers.js";

export const getAll = async (req, res, next) => {
  try {
    const classes = await ClassModel.find().lean();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
};

export const getByID = async (req, res, next) => {
  try {
    const oneClass = await ClassModel.findById(Number(req.params.id)).lean();
    res.status(200).json(oneClass);
  } catch (err) {
    next(err);
  }
};

export const addOne = async (req, res, next) => {
  try {
    const created = await ClassModel.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

export const updateOne = async (req, res, next) => {
  try {
    const updated = await ClassModel.findByIdAndUpdate(
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
    const deleted = await ClassModel.findByIdAndDelete(
      Number(req.params.id),
    ).lean();
    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
};

// GET /classchildern/:id
export const getClassChildren = async (req, res, next) => {
  try {
    const oneClass = await ClassModel.findById(Number(req.params.id)).lean();
    if (!oneClass) return res.status(200).json([]);

    const children = await Child.find({
      _id: { $in: oneClass.children || [] },
    }).lean();
    res.status(200).json(children);
  } catch (err) {
    next(err);
  }
};

// GET /classTeacher/:id
export const getClassTeacher = async (req, res, next) => {
  try {
    const oneClass = await ClassModel.findById(Number(req.params.id)).lean();
    if (!oneClass) return res.status(200).json(null);

    const teacher = await Teacher.findById(oneClass.supervisor).lean();
    res.status(200).json(teacher);
  } catch (err) {
    next(err);
  }
};
