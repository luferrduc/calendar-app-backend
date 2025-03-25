import mongoose from "mongoose"
import { IUser } from "../../types/auth.types";

const userCollection = 'users'

const usersSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true,
})



const usersModel = mongoose.model(userCollection, usersSchema);

export default usersModel