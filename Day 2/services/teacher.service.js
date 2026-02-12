import Teacher from "../models/teachers.js";

export const getAllTeachers = async () => {
  const teachers = await Teacher.getAll();
  if (teachers.length === 0) {
    throw new Error("No teachers in the data set");
  } else {
    return teachers;
  }
};
export const getTeacherByID = async (id) => {
  const teachers = await Teacher.getAll();
  let teacher = teachers.teachers.filter((i) => i.id == id);
  if (teacher.length != 1) return null;
  else return teacher;
};
export const addTeacher = async ({ name, email, subject, experience }) => {
  const data = await Teacher.getAll();
  const list = data.teachers;

  const normalizedEmail = email.trim().toLowerCase();

  const emailExists = list.some(
    (t) => t.email.trim().toLowerCase() === normalizedEmail,
  );

  if (emailExists) {
    throw new Error("Email already exists");
  }

  // generate id safely
  const newId = list.length === 0 ? 1 : list[list.length - 1].id + 1;

  const newTeacher = {
    id: newId,
    name,
    email,
    subject,
    experience,
  };

  list.push(newTeacher);

  await Teacher.saveAll(data);

  return newTeacher;
};
