import { Request, Response, NextFunction } from 'express';
import { AppLogger } from '../utils/app.logger';

export const addLogger = (req: Request, _res: Response, next: NextFunction): void => {
  req.logger = new AppLogger('HTTP'); // Contexto "HTTP" para solicitudes entrantes
  req.logger.http(`${req.method} en ${req.url}`); // Registra la solicitud HTTP
  next();
};