import { Request, Response } from "express"
import { LoginBody, RegisterBody, IUser } from "../types/auth.types"
import { AuthService } from "../services/auth.services"

// TODO: Refactorizar para usar inyección de dependencias


export class AuthController {

  constructor(private authService: AuthService){}

  register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    const { email, name, password } = req.body
    const user: IUser = {
      email,
      name, 
      password
    }
  
    const result = await this.authService.register(user)
  
    
  
    return res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: result
    })
  }
  
  login = (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { email, password } = req.body
    res.json({
      status: 'success',
      message: 'Login',
      email,
      password
    })
  }
  
  
  revalidateToken = (_req: Request, res: Response) => {
    res.json({
      status: 'success',
      message: 'revalidateToken'
    })
  }
}