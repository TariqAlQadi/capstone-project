import mongoose, { Schema } from "mongoose";

const tutorialSchema = new Schema({
  snippet: {
    description: String,
    title: String,
    position: Number,
  },
  difficulty: String,
  isLiked: [String],
  isLearning: [String],
  mastered: [String],
  notes: String,
});

const Tutorial =
  mongoose.models.Tutorial || mongoose.model("Tutorial", tutorialSchema);

export default Tutorial;
