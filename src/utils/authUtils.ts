import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { IUser } from "../types/auth.types";
import configs from "../config";
import { globalLogger } from "./global.logger";



// 1. Hashear password
export const createHash = (password: string) => {
	const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
	return hash
}

// 2. Validar password
export const isValidPassowrd = (plainPassword: string, hashedPassword: string) => {
	const result = bcrypt.compareSync(plainPassword, hashedPassword)
	return result
}


// Generate JWT
type JwtExpiresIn = Exclude<jwt.SignOptions["expiresIn"], undefined>

export const generateToken = (user: Omit<IUser, 'password' | 'email'>, expires: JwtExpiresIn = "24h") : Promise<string | undefined>  => {

	return new Promise ((resolve, reject) => {

		if (!configs.PRIVATE_KEY_JWT) {
			globalLogger.error("PRIVATE_KEY_JWT is not defined")
			// throw new Error("JWT Token is not defined")
			reject("JWT Token is not defined")
		}
		jwt.sign({ user }, configs.PRIVATE_KEY_JWT, {
			expiresIn: expires
		}, (err, token) => {
			if(err){
				globalLogger.error(err?.message || 'Error al generar el Token')
				reject('Error al generar el Token')
			}
			resolve(token)
		})
	})
}

export const verifyToken = (token: string) => {
	const payload = jwt.verify(token, configs.PRIVATE_KEY_JWT)
	return payload
}