import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { loginValidator, registerValidator } from "../validators/auth.validator";
import { Users as UsersDao} from "../dao/user.manager"
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { validateJWT } from "../middlewares/validate-jwt";

// TODO: Refactorizar para usar inyección de dependencias

const usersDao = new UsersDao()
const usersRepository = new UserRepository(usersDao)
const userService = new UserService(usersRepository)

const authService = new AuthService(usersRepository)
const userController = new AuthController(authService, userService)

const router = Router()


router
  .post('/register', registerValidator, validateRequest, userController.register) 
  .post('/login', loginValidator, validateRequest, userController.login)
  .get('/renew', validateJWT, userController.revalidateToken) 


export default router