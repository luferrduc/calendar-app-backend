

// Todas tiene que pasar por el JWT
// Obtener eventos

import { Router } from "express";
import { EventController } from "../controllers/events.controller";
import { Event } from "../dao/event.manager";
import { EventService } from "../services/events.service";
import { EventRepository } from "../repositories/events.repository";
import { validateJWT } from "../middlewares/validate-jwt";
import { createValidator } from "../validators/event.validator";
import { validateRequest } from "../middlewares/validateRequest";


const eventDao = new Event()
const eventRepository = new EventRepository(eventDao)
const eventService = new EventService(eventRepository)
const eventController = new EventController(eventService)


const router = Router()

router.use(validateJWT)

router
  .get("/", eventController.getEvents)
  .post("/", createValidator, validateRequest, eventController.createEvent)
  .put("/:id", eventController.updateEvent)
  .delete("/:id", eventController.deleteEvent)

export default router