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
export const addTeacher = async ({
  name,
  email,
  subject,
  yearsOfExperience,
}) => {
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
    yearsOfExperience,
  };

  list.push(newTeacher);

  await Teacher.saveAll(data);

  return newTeacher;
};
export const deleteTeacher = async (id) => {
  const data = await Teacher.getAll();
  let teachers = data.teachers;
  let teacher = teachers.find((t) => t.id == id);
  if (!teacher) throw new Error("this teacher is not in out dataset");
  let newTeachers = teachers.filter((t) => t.id !== id);
  await Teacher.saveAll({ teachers: newTeachers });
  return teacher;
};
export const updateTeacher = async (
  id,
  { name, email, subject, yearsOfExperience },
) => {
  const data = await Teacher.getAll();
  let teachers = data.teachers;
  let teacher = teachers.find((t) => t.id == id);
  if (!teacher) throw new Error("this teacher is not in out dataset");
  let newTData = {
    id,
    name,
    email,
    subject,
    yearsOfExperience,
  };
  for (let i = 0; i < teachers.length; i++) {
    if (teacher.id == teachers[i].id) {
      teachers[i] = newTData;
    }
  }
  await Teacher.saveAll({ teachers });
  return newTData;
};
