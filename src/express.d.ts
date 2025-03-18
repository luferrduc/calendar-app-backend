import { Logger } from 'winston';

declare global {
  namespace Express {
    interface Request {
      logger: Logger; // Añade la propiedad logger al objeto Request
    }
  }
}