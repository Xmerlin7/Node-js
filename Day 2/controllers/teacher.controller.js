import * as teacherService from "../services/teacher.service.js";
const getAll = async (req, res, next) => {
  try {
    let teachers = await teacherService.getAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};

const getByID = async (req, res, next) => {
  try {
    let teacher = await teacherService.getTeacherByID(req.params.id);
    return res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};
const addOne = async (req, res, next) => {
  try {
    const createdTeacher = await teacherService.addTeacher(req.body);
    return res.status(201).json(createdTeacher);
  } catch (error) {
    next(error);
  }
};
const deleteOne = async (req, res, next) => {
  try {
    const deletedTeacher = await teacherService.deleteTeacher(req.params.id);
    res.status(200).json(deletedTeacher);
  } catch (error) {
    next(error);
  }
};
const updateOne = async (req, res, next) => {
  try {
    const updateTeacher = await teacherService.updateTeacher(
      req.params.id,
      req.body,
    );
    return res.status(200).json({ updateTeacher });
  } catch (error) {
    next(error);
  }
};

export { getAll, getByID, updateOne, addOne, deleteOne };
