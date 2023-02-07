import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  bio: String,
  image: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
