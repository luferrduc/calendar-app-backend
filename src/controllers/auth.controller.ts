import { Request, Response } from "express"
import { LoginBody, RegisterBody } from "../types/auth.types"




export const register = (req: Request<{}, {}, RegisterBody>, res: Response) => {
  const { email, name, password } = req.body


  return res.status(201).json({
    status: 'success',
    message: 'Register',
    name,
    email, 
    password
  })
}

export const login = (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email, password } = req.body
  res.json({
    status: 'success',
    message: 'Login',
    email,
    password
  })
}


export const revalidateToken = (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'revalidateToken'
  })
}