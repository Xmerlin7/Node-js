import Teacher from "../models/teachers.js";

export const getAll = async () => {
  const teachers = await Teacher.getAll();
  if (!teachers) {
    throw new Error("No teachers in the data set");
  } else {
    return teachers;
  }
};
