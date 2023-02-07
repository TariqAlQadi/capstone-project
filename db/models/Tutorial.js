import mongoose from "mongoose";

const { Schema } = mongoose;

const tutorialSchema = new Schema({
  image: { type: String },
  description: { type: String },
  categories: [String],
  difficulty: [String],
  isLiked: [String],
  isLearning: [String],
  mastered: [String],
});

const Tutorial = mongoose.models.Tutorial || mongoose.model("Post", postSchema);

export default Post;
