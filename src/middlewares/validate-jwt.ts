import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/authUtils"
import { UserReq } from "../types/auth.types"

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  // x-token headers
  const token = req.header("x-token")

  if(!token){
    return res.status(401).json({ status: 'error', error: "There is no token in the request" })
  }

  try {
    const payload = verifyToken(token) as UserReq
    req.user = payload
  } catch (error) {
    return res.status(401).json({ status: 'error', error: "Invalid token" })
  }

  next()
}