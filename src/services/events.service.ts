import { EventRepository } from "../repositories/events.repository";
import { UpdateEvent } from "../types/events.types";



export class EventService {
  constructor(private eventRepository: EventRepository){}


  getEvents = async () => {
    const events = await this.eventRepository.getEvents()
    return events  
  } 

  createEvent = async () => {
    const result = await this.eventRepository.createEvent()
    return result
  }

  updateEvent = async (id: string, event: UpdateEvent) => {
    const updatedEvent = await this.eventRepository.updateEvent(id, event)
    return updatedEvent
  }

  deleteEvent = async (id: string) => {
    const updatedEvent = await this.eventRepository.deleteEvent(id)
    return updatedEvent
  }
}