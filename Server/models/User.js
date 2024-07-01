import mongoose from 'mongoose';


const  userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email regex
    },
    password: {
      type: String,
      required: true,
      min: 5,
      // match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, // At least one letter and one number, minimum length 5
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
