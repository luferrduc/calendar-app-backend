import { IUser } from "../types/auth.types"
import usersModel from "./models/user.model"


//* Manager para user en MONGO DB
export class Users {
  constructor() {}
  
  // TODO: agregar todos los métodos para usuario conectados a DB
  getAll = async () => {
    const users = await usersModel.find().lean()
    return users
  }

  create = async (user: Omit<IUser, '_id'>) => {
    const newUser = await usersModel.create(user)
    return newUser
  }

  getById = async (id: string) => {
    const user = await usersModel.findById(id)
    return user
  }

  getByEmail = async (email: string) => {
    const user = await usersModel.findOne({ email })
    return user
  }

  delete = async (email: string) => {
    const result = await usersModel.findOneAndDelete({ email })
    return result
  }
}