import { Request, Response } from "express"
import { EventService } from "../services/events.service";
import { EventBody, IEvent, UpdateEventBody } from "../types/events.types";



export class EventController {
  constructor(
    private eventService: EventService
  ){}


  getEvents = async (req: Request, res: Response) => {
    try {
      const events = await this.eventService.getEvents()
      return res.json({
        status: "success",
        message: "getEvents",
        data: {
          events
        }
      })
    } catch (error) {
      if(error instanceof Error){
        req.logger.error(error.message)
      }

      return res.json({
        status: 'error',
        error: 'Internal server error' 
      })
    }
  } 


  createEvent = async (req: Request<{}, {}, EventBody>, res: Response) => {
    const { title, notes, start, end, bgColor } = req.body
    const event = {
      title, 
      notes, 
      start: new Date(start), 
      end: new Date(end), 
      bgColor
    } 
    const result = await this.eventService.createEvent(event)
    return res.json({
      status: "success",
      data: {
        message: "createEvent"
      }
    })
  }

  
  updateEvent = async (req: Request<{ id: string }, {}, UpdateEventBody>, res: Response) => {
    const { id: _id } = req.params
    // const { title, notes, start, end, bgColor } = req.body
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