import Teacher from "../models/teachers.js";
import mongoose from "mongoose";

export const getAllTeachers = async () => {
  const teachers = await Teacher.find().lean();
  if (teachers.length === 0) {
    throw new Error("No teachers in the data set");
  } else {
    return teachers;
  }
};
export const getTeacherByID = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  const teacher = await Teacher.findById(id).lean();
  return teacher;
};
export const addTeacher = async ({
  name,
  email,
  subject,
  yearsOfExperience,
}) => {
  const normalizedEmail = email.trim().toLowerCase();

  const emailExists = await Teacher.exists({ email: normalizedEmail });
  if (emailExists) {
    throw new Error("Email already exists");
  }

  const createdTeacher = await Teacher.create({
    name,
    email: normalizedEmail,
    subject,
    yearsOfExperience,
  });

  return createdTeacher.toObject();
};
export const deleteTeacher = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid teacher id");
  }

  const deletedTeacher = await Teacher.findByIdAndDelete(id).lean();
  if (!deletedTeacher) throw new Error("this teacher is not in out dataset");
  return deletedTeacher;
};
export const updateTeacher = async (
  id,
  { name, email, subject, yearsOfExperience },
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid teacher id");
  }

  const update = {};
  if (name !== undefined) update.name = name;
  if (subject !== undefined) update.subject = subject;
  if (yearsOfExperience !== undefined)
    update.yearsOfExperience = yearsOfExperience;
  if (email !== undefined) update.email = email.trim().toLowerCase();

  const updatedTeacher = await Teacher.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updatedTeacher) throw new Error("this teacher is not in out dataset");
  return updatedTeacher;
};
