import { Users as UsersManager } from "../dao/user.manager";
import { IUser } from "../types/auth.types";



export class UserRepository {

  constructor(private dao: UsersManager){}

  register = async (user: IUser) => {
    const newUser = await this.dao.create(user)
    return newUser
  }
  
  login = async ({ password, email }: Omit<IUser, 'name'>) => {
    const user = await this.dao.getByEmail(email)
    

  }


}