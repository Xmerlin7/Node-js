import Teacher from "../models/teachers.js";

export const getAllTeachers = async () => {
  const teachers = await Teacher.find().lean();
  if (teachers.length === 0) {
    throw new Error("No teachers in the data set");
  } else {
    return teachers;
  }
};
export const getTeacherByID = async (id) => {
  const teacher = await Teacher.findById(Number(id)).lean();
  return teacher;
};
export const addTeacher = async ({
  _id,
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
    _id,
    name,
    email: normalizedEmail,
    subject,
    yearsOfExperience,
  });

  return createdTeacher.toObject();
};
export const deleteTeacher = async (id) => {
  const deletedTeacher = await Teacher.findByIdAndDelete(Number(id)).lean();
  if (!deletedTeacher) throw new Error("this teacher is not in out dataset");
  return deletedTeacher;
};
export const updateTeacher = async (
  id,
  { name, email, subject, yearsOfExperience },
) => {
  const update = {};
  if (name !== undefined) update.name = name;
  if (subject !== undefined) update.subject = subject;
  if (yearsOfExperience !== undefined)
    update.yearsOfExperience = yearsOfExperience;
  if (email !== undefined) update.email = email.trim().toLowerCase();

  const updatedTeacher = await Teacher.findByIdAndUpdate(Number(id), update, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updatedTeacher) throw new Error("this teacher is not in out dataset");
  return updatedTeacher;
};
