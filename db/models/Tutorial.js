import mongoose, { Schema } from "mongoose";

const tutorialSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Tutorial =
  mongoose.models.Tutorial || mongoose.model("Tutorial", tutorialSchema);

export default Tutorial;
