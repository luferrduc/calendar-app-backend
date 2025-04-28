import { Request, Response } from "express"
import { EventService } from "../services/events.service";



export class EventController {
  constructor(
    private eventService: EventService
  ){}


  getEvents = async (_req: Request, res: Response) => {
    // const events = await this.eventService.getEvents()
    return res.json({
      status: "success",
      data: {
        message: "getEvents"
      }
    })
  } 


  createEvent = async (_req: Request, res: Response) => {
    // const result = await this.eventService.createEvent()
    return res.json({
      status: "success",
      data: {
        message: "createEvent"
      }
    })
  }

  
  updateEvent = async (req: Request, res: Response) => {
    const { id: _id } = req.params
    const { event } = req.body
    // const updatedEvent = await this.eventService.updateEvent(_id, event)
    return res.json({
      status: "success",
      data: {
        message: "updateEvent"
      }
    })
  }

  deleteEvent = async (req: Request, res: Response) => {
    const { id: _id } = req.params
    // const updatedEvent = await this.eventService.deleteEvent(_id)
    return res.json({
      status: "success",
      data: {
        message: "deleteEvent"
      }
    })
  }
}