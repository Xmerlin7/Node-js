import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: String, enum: ["PreKG", "KG1", "KG2"], required: true },
    address: {
      city: String,
      street: String,
      building: String,
    },
  },
  { timestamps: true },
);

const ChildModel = mongoose.model("Child", childSchema);
export default ChildModel;
