import { IUser } from "../types/auth.types"

export default class UsersDto  {
  constructor(private user: IUser){
    // this.first_name = user.first_name
    // this.last_name = user.last_name
    // this.email = user.email
    // this.role = user.role
    // this.age = user.age
    // this.cart = user.cart
    // this.last_connection = user.last_connection
    this.user = user
  }
  getPublicData(){
    const publicUser = {
      _id: this.user._id,
      name : this.user.name,
      email : this.user.email
    }
    return publicUser
  }
  getPrivateData(){
    const privateUser = {
      name : this.user.name,
      email : this.user.email,
      password: this.user.password

    }
    return privateUser
  }

}