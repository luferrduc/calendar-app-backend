import { Event as EventManager } from "../dao/event.manager";
import { UpdateEvent } from "../types/events.types";



export class EventRepository {
  constructor(private dao: EventManager){}

  getEvents = async () => {
    const events = await this.dao.getEvents()
    return events
  }

  createEvent = async () => {
    const result = await this.dao.createEvent()
    return result
  }

  updateEvent = async (id: string, event: UpdateEvent) => {
    const updatedEvent = await this.dao.updateEvent(id, event)
    return updatedEvent
  }

  deleteEvent = async (id: string) => {
    const updatedEvent = await this.dao.deleteEvent(id)
    return updatedEvent
  }
}