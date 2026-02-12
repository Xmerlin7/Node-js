import * as teacherService from "../services/teacher.service.js"
const getAll = async (req, res, next) => {
  try {
    let teachers = await teacherService.getAll();
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
