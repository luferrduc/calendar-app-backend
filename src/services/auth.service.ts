import { IUser } from "../types/auth.types"
import { UserRepository } from "../repositories/user.repository"
import { createHash } from "../utils/authUtils"


export class AuthService {
  constructor(private usersRepository: UserRepository){}

  register = async (user: Omit<IUser, '_id'>) => {
    const hashedPassword = createHash(user.password)  
    const newUser = await this.usersRepository.register({ ...user, password: hashedPassword })
    return newUser
  
  }
  
  login = async (email: string) => {
    const result = await this.usersRepository.login(email)
    return result
  }
  
  showPublicUser = async (user: IUser) => {
    const publicUser = await this.usersRepository.showPublicUser(user)
    return publicUser
  }
  
}