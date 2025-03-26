import { UserRepository } from "../repositories/user.repository";




export class UserService {
  constructor(private userRepository: UserRepository){}


  getByEmail = async (email: string) => {
    const user = await this.userRepository.getByEmail(email)
    return user
  }


}