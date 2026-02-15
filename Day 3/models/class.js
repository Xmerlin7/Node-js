import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    supervisor: { type: Number, required: true },
    children: [{ type: Number }],
  },
  { timestamps: true },
);

const ClassModel = mongoose.model("Class", classSchema);
export default ClassModel;
