import { randomUUID } from "crypto"
import { User } from "../types/auth.types"


export const registerService = async (user: User) => {
  console.log(user)
  const newUser = {
    id: randomUUID(),
    ...user
  }
  return newUser
}

export const login = async () => {

}

