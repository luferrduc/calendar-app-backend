import { NextFunction, Request, Response } from "express"
import winston, { Logger } from "winston"
import configs from "../config.js"
// Ejercicio multientorno
const ENVIRONMENT = configs.ENVIRONMENT

export let logger: Logger

const customLevelOptions = {
	levels: {
		fatal: 0,
		error: 1,
		warning: 2,
		info: 3,
		http: 4,
		debug: 5
	},
	colors: {
		fatal: "red",
		error: "magenta",
		warning: "yellow",
		info: "green",
		http: "cyan",
		debug: "blue"
	}
}

const loggerFormat = winston.format.combine(
	winston.format.label({
		label: "[LOGGER]"
	}),
	winston.format.timestamp({
		format: "DD-MM-YYYY HH:mm:ss"
	}),
	winston.format.printf((info) => {
		return `${info.label} [${
			info.timestamp
		}] - [${info.level.toUpperCase()}]: ${info.message}`;
	}),
	winston.format.colorize({
		all: true,
		colors: customLevelOptions.colors
	})
)

if (ENVIRONMENT == "PROD") {
	// prodLogger
	logger = winston.createLogger({
		levels: customLevelOptions.levels,
		transports: [
			new winston.transports.Console({
				level: "info",
				format: loggerFormat
			}),
			new winston.transports.File({
				filename: "logs/errors.log",
				level: "error",
				format: winston.format.combine(
					winston.format.label({
						label: "[LOGGER]"
					}),
					winston.format.timestamp({
						format: "DD-MM-YYYY HH:mm:ss"
					}),
					winston.format.printf((info) => {
						return `${info.label} [${
							info.timestamp
						}] - [${info.level.toUpperCase()}]: ${info.message}`;
					}))
			})
		]
	})
} else {
	// devLogger
	logger = winston.createLogger({
		levels: customLevelOptions.levels,
		transports: [new winston.transports.Console({ level: "debug", format: loggerFormat })]
	})
}

export const addLogger = (req: Request, _res: Response, next: NextFunction) => {
	req.logger = logger
	req.logger.http(`${req.method} en ${req.url}`)
	next()
};