import { createLogger, format, transports, Logger } from 'winston';
import configs from '../config';


const LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  verbose: 5
};

const COLORS = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'cyan',
  debug: 'blue',
  verbose: 'magenta'
};

export class AppLogger {
  private logger: Logger;

  constructor(private context?: string) {
    this.logger = createLogger({
      levels: LEVELS,
      format: format.combine(
        format.label({ label: `[${context || 'GLOBAL'}]` }),
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.printf((info) => {
          return `${info.label} [${info.timestamp}] - [${info.level.toUpperCase()}]: ${info.message}`;
        }),
        format.colorize({ all: true, colors: COLORS })
      ),
      transports: [
        new transports.Console({ level: configs.NODE_ENV === 'production' ? 'info' : 'debug' }),
        ...(configs.NODE_ENV === 'production'
          ? [
              new transports.File({
                filename: 'logs/errors.log',
                level: 'error',
                format: format.combine(
                  format.label({ label: `[${context || 'GLOBAL'}]` }),
                  format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
                  format.printf((info) => {
                    return `${info.label} [${info.timestamp}] - [${info.level.toUpperCase()}]: ${info.message}`;
                  })
                ),
              }),
            ]
          : []),
      ],
    });
  }

  log(message: string): void {
    this.logger.info(message);
  }

  error(message: string, trace?: unknown): void {
    this.logger.error(`${message} - Trace: ${trace || 'No trace provided'}`);
  }

  verbose(message: string): void {
    this.logger.verbose(message);
  }


  warn(message: string): void {
    this.logger.warn(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  http(message: string): void {
    this.logger.http(message);
  }
}