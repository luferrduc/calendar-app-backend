import { IUser } from "../types/auth.types"
import { UserRepository } from "../repositories/user.repository"
import { createHash } from "../utils/authUtils"


export class AuthService {
  constructor(private usersRepository: UserRepository){}

  register = async (user: IUser) => {
    const hashedPassword = createHash(user.password)  
    const newUser = await this.usersRepository.register({ ...user, password: hashedPassword })
    return newUser
  
  }
  
  login = async ({ password, email }: Omit<IUser, 'name'>) => {
    const result = this.usersRepository.login({ password, email })
  }
  
  
}