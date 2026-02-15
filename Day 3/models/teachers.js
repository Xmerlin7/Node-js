import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true },
);

export const AdminModel = mongoose.model("Admin", adminSchema);

const teacherSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    subject: { type: String, required: true, trim: true },
    yearsOfExperience: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const TeacherModel = mongoose.model("Teacher", teacherSchema);

export default TeacherModel;
