import mongoose, { Schema } from "mongoose";


const eventCollection = 'event'

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  bgColor: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})


const eventModel = mongoose.model(eventCollection, eventSchema)



export default eventModel