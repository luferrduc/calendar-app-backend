import { Event as EventManager } from "../dao/event.manager";
import { IEvent, UpdateEventBody } from "../types/events.types";



export class EventRepository {
  constructor(private dao: EventManager){}

  getEvents = async () => {
    const events = await this.dao.getEvents()
    return events
  }

  createEvent = async (event: Omit<IEvent, '_id'>) => {
    const result = await this.dao.createEvent(event)
    return result
  }

  updateEvent = async (id: string, event: UpdateEventBody) => {
    const updatedEvent = await this.dao.updateEvent(id, event)
    return updatedEvent
  }

  deleteEvent = async (id: string) => {
    const updatedEvent = await this.dao.deleteEvent(id)
    return updatedEvent
  }
}