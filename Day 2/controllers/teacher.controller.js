import Teacher from "../models/teachers.js";
const getAll = async (req, res, next) => {
  try {
    let teachers = await Teacher.getAll()
    res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};

const getByID = () => {};
const addOne = () => {};
const deleteOne = () => {};
const updateOne = () => {};

export { getAll, getByID, updateOne, addOne, deleteOne };
