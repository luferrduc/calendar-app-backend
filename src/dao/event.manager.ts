import { IEvent, UpdateEventBody } from "../types/events.types"
import eventsModel from "./models/event.model"


export class Event {
  constructor(){}

  getEvents = async () => {
    const events = await eventsModel.find()
    return events
  }

  createEvent = async (event: Omit<IEvent, '_id'>) => {
    const result = await eventsModel.create(event)
    return result
  }

  updateEvent = async (id: string, event: UpdateEventBody) => {
    const updatedEvent = await eventsModel.findOneAndUpdate({ _id: id, event })
    return updatedEvent
  }

  deleteEvent = async (id: string) => {
    const updatedEvent = await eventsModel.findOneAndDelete({ _id: id })
    return updatedEvent
  }
}