import { Router } from "express";
import { login, register, revalidateToken } from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { loginValidator, registerValidator } from "../validators/auth.validator";

const router = Router()


router
  .post('/register', registerValidator, validateRequest, register) 
  .post('/', loginValidator, validateRequest, login)
  .get('/renew', validateRequest, revalidateToken) 


export default router