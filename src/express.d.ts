// import { Logger } from 'winston';

import { AppLogger } from "./utils/app.logger";

declare global {
  namespace Express {
    interface Request {
      logger: AppLogger; // Añade la propiedad logger al objeto Request
    }
  }
}