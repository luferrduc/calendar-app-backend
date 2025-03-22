import { Request, Response } from "express"
import { LoginBody, RegisterBody, User } from "../types/auth.types"
import { registerService } from "../services/auth.services"




export const register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
  const { email, name, password } = req.body
  const user: User = {
    email,
    name, 
    password
  }

  const result = await registerService(user)

  

  return res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: result
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