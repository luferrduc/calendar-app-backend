import { Users as UsersManager } from "../dao/user.manager";
import UsersDto from "../dtos/users.dto";
import { IUser } from "../types/auth.types";



export class UserRepository {

  constructor(private dao: UsersManager){}

  register = async (user: IUser) => {
    const newUser = await this.dao.create(user)
    return newUser
  }
  
  login = async (email: string) => {
    const user = await this.dao.getByEmail(email)
    return user
  }

  getByEmail = async (email: string) => {
    const user = await this.dao.getByEmail(email)
    return user
  }

  delete = async (email: string) => {
    const result = await this.dao.delete(email)
    return result
  }

  showPublicUser = async (user: IUser) => {
		const finalUser = new UsersDto(user).getPublicData()
		return finalUser
	}

}