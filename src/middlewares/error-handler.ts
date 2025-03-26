import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions';
import { globalLogger } from '../utils/global.logger';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof HttpException) {
    const statusCode = err.statusCode;
    const message = err.message;

    // Registra el error usando el logger adjunto a la solicitud
    req.logger?.error(`Error ${statusCode}: ${message}`);

    // Responde al cliente con el código de estado y mensaje correspondiente
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
    });
  } else {
    // Maneja errores no controlados
    globalLogger.error(err as string); // O usa un logger global

    // Responde con un error genérico
    res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
};