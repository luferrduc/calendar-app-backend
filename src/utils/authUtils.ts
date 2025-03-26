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

export const generateToken = (user: unknown, expires: JwtExpiresIn = "24h") => {
	if (!configs.PRIVATE_KEY_JWT) {
		globalLogger.error("PRIVATE_KEY_JWT is not defined")
    throw new Error("JWT Token is not defined");
  }
	const token = jwt.sign({ user }, configs.PRIVATE_KEY_JWT, {
		expiresIn: expires
	})
	return token
}