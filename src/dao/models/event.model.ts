import mongoose from "mongoose";


const eventCollection = 'event'

const eventSchema = new mongoose.Schema({

})


const eventModel = mongoose.model(eventCollection, eventSchema)



export default eventModel