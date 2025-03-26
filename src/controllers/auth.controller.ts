import { Request, Response } from "express"
import { LoginBody, RegisterBody, IUser } from "../types/auth.types"
import { AuthService } from "../services/auth.service"
import { UserService } from "../services/user.service"
import { generateToken, isValidPassowrd } from "../utils/authUtils"
// import { HttpException } from "../exceptions"

// TODO: Refactorizar para usar inyección de dependencias


export class AuthController {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ){}

  register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {

    const { email, name, password } = req.body
  
    try {

      let userExists = await this.userService.getByEmail(email)

      if(userExists){
        req.logger.warn(`user with email '${email}' already exists`)

        return res.status(400).json({
          status: 'error',
          error: 'User already exists with this email'
        })
      }

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
    } catch (error) {
      // if(error instanceof HttpException){
      //   throw error
      // }
      // throw new HttpException('Internal server error', 500)

      if(error instanceof Error){
        req.logger.error(error.message)
      }

      return res.json({
        status: 'error',
        error: 'Internal server error' 
      })

    }
  
    
  
 
  }
  
  login = async (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { email, password } = req.body

    try {
      const user = await this.authService.login(email)
      if(!user){
        return res.status(401).json({
          status: 'error',
          error: 'Invalid cretendials'
        })
      }

      const comparedPassword = isValidPassowrd(password, user.password)
      if(!comparedPassword){
        return res.status(401).json({
          status: 'error',
          error: 'Invalid cretendials'
        }) 
      }

      const publicUser = await this.authService.showPublicUser(user)
      // TODO: generate JWT
      const token = generateToken(publicUser)

      return res.json({
        status: 'success',
        message: 'Login has been made successfully',
        data: {
          user: user._id,
          token
        }
      })

    } catch (error) {
      if(error instanceof Error){
        req.logger.error(error.message)
      }

      return res.json({
        status: 'error',
        error: 'Internal server error' 
      })
    }
  }
  
  
  revalidateToken = (_req: Request, res: Response) => {
    res.json({
      status: 'success',
      message: 'revalidateToken'
    })
  }
}